# @rule/the-guideline-of-figma-to-code

The current version is still not able to make Cursor AI reliably to implement Figma layer.
Below are the possible issues of the implementation by AI:

- [TRACKING] #2504071 No any `tw:` is used on the class
- [CLOSED] #2504072 Component's prop didn't get apply or wrongly apply
  > eg.,
  > In the Figma component <Heading>, it uses h3 sizing,
  > but AI may implement it with or without the corresonding prop
- [CLOSED] #2504073 Lots of portions don't get implemented
  > Not sure whether this relate to the current selecting layer in Figma or not,
  > (ie., in Figma, I can select part of portion of the implementation target)
- [CLOSED] #2504074 No Icon is implemented
  > Even attaching the image showing what the resulting visual should look like,
  > this problem can still appear sometimes.
- [CLOSED] #2504075 Use svg instead Icon to implement the icon
  > Even clearly saying the rule like "Any icon can only be built via app/components/ui/Icon", it can still sometimes not follow throguh.
  > This may be from several reasons:
  >
  > - It doesn't know how to interpret the Figma Icon layer, so even it finds out the corresponding Icon component in code, it just gives up
  > - There're many text in the Figma Icon layer having the word "svg", which might affect AI's decision
  >   Either we should 100% conform that rule has been consumed by AI,
  >   or we need some other solutions
- [CLOSED] #2504076 Use lucide-react to implement the icon
  > Originally, this might be coming from many reasons,
  > such as we don't restrict enough what files that AI should read,
  > and it may just get too many files, and some those files might use lucide-react, which affect AI's decision.
  > Or, the data from the Figma Icon layer can also effect AI, such as
  > there's a child layer of Icon layer that has the name "lucide:circle-alert"
  > After we restrict more on the steps that AI should go through, also with the rule such as "Any icon can only be built via app/components/ui/Icon ", this problem seems not happen anymore
- [CLOSED] #2504077 It even just didn't follow the guideline I told it to follow

  > I used to have the prompt like:
  >
  > ```
  >  Implement <Figma URL link> in @Heading.stories.tsx.
  >  Your final implementation result should be very close to the image I showed you.
  >  Strictly follow @the-guideline-of-figma-to-code/index.mdc
  > ```
  >
  > It seems this never happen anymore after I formated the prompt into:
  >
  > ```
  >   Follow the steps below (you DO NOT ALLOW to move to next step if you haven't finished the previous step):
  > ```

  1. Fetch the data from <Figma URL link>
  2. Read the guideline @the-guideline-of-figma-to-code/index.mdc
  3. Implement the UI in @Heading.stories.tsx by extreme following the guideline until your implementation result 100% match as my image
     > ```
     >
     > ```

- [TRACKING] #2504078 use <Alert>
  > This seems all because we didn't restrict how AI can perform the steps,
  > so it sometimes use codebase semantic search, or list out all the code components under certain folder, and just found there's a component <Alert>, and it just uses it despite our
  > rule clearly showing that kind of move is incorrect.
  > The problem seems gone after restrict more steps AI can perform.
- [CLOSED] #2504079 Doesn't use <Heading> at all

## 1.2.3

### Patch Changes: Modify the entry prompt
AI is too slow to even just build a pure Heading component (it needs at least 2:30m), so now remove the following part from the entry prompt as shown below to see whether it can speed up while having no mistakes to make:
```
  - You don't need to be efficient, provide quick solutions, and make assumptions about importance (or whatever), instead, you should slow down to make sure follow all the details in @the-guideline-of-figma-to-code/index.mdc
```
This version also improve the the first note in the entry prompt, since somtimes the MCP plugin can be unstable (eg., it's in red-light for some reasons), and AI may do other things to waste time:

```
   1. Call the MCP tool "Framelink Figma MCP" from your toolkit to fetch the data from <FIGMA_LINK> (if the MCP tool doesn't work, stop your process NOW)
```


## 1.2.2

### Patch Changes

It seems like we left a space for AI to allow itself to be able to do "inferential leap":
it can first decide that the layer falls into CASE-A, but since we didn't retrict it to NOT look at CASE-B (or we didn't say that you can't change your mind after made the first decision), it's possible it might look up the description in CASE-B, and the acknowledgment from that description can possible affect its first decision.

At this version, we try to apply "Guardrails" technique, and hopefully #2504078 can never appear anymore (I did run one test, and it didn't have the issue)


## 1.2.1

### Patch Changes

Since in v1.2.0, #2504071 came out again, and after the inspection, AI mentioned:
```
I read the content of @the-guideline-of-figma-to-code/index.mdc (the main Figma guideline provided in the context) exactly once, right after receiving your initial request.

During this single read-through, I identified its main sections: Data Structure, Terminology, Implementation Cases (CASE-A, CASE-B with sub-cases), and the Implementation Steps (numbered 0 through 3).

I understood the core logic described in Steps 1, 2, and 3 (Get Layer Info -> Check Implementation Case -> Recurse). This understanding allowed me to process the Figma data node-by-node as I did.

I made the incorrect decision to postpone or overlook the explicit instruction in Step 0 to review the linked rules first. There was no external prompt causing this; it was my own flawed interpretation of the sequence and importance of the steps listed within @the-guideline-of-figma-to-code/index.mdc.

I treated Step 0 as a preamble or general context rather than a mandatory blocking step that needed full completion before Step 1. I prioritized the actionable steps directly related to translating the Figma structure (analyzing nodes, choosing implementation cases) over the preparatory step of reading the linked, broader project guidelines.
```

So, it seems like this maybe our fault on the prompt, but this seems revealing several facts on prompt engineering:
- Using the words like "Make sure", "STRICTLY follow", ... may not work if those words are in the context that can affect AI's prioritization (or something like that)
- It seems the "recursive prompting" technique works very well in prompt engineering: we provide where are the steps to follow, the steps in order, and how to form a closed loop － AI will just follow through as expected

Now, this version literally just change the re-start step index from 1 to 0, to see that whether AI will work as expected or not (it doesn't happen after I gave a one shot)


But now, #2504078 appears again.

## 1.2.0

### Minor Changes

Quick fix the MCP figma-developer-mcp by NOT filtering out the Figma property "componentProperties". But the real world example value of "componentProperties" can be like:
```
{
  Size: {
    boundVariables: {},
    type: "VARIANT",
    value: "h4"
  },
  Variant: {
    boundVariables: {},
    type: "VARIANT",
    value: "Single line subtitle"
  },
  Subtitle#15622:0: {
    type: "TEXT",
    value: "The application has been updated from v1.2 to v1.3."
  },
  Title#15622:1: {
    type: "TEXT",
    value: "Updated"
  },
}
```
So preparing a mapper file for each component (ie., *.mapper.md) should be the must to futher clarify the mapping relationship between code component & Figma componnet.

Two solutions above should solve #2504072.

---

But just found out that #2504071 appear again in one of the tests.

## 1.1.0

### Minor Changes

This version with certain prompt (#1) literally just huge enchances the reliability,
such that in 5 times of testing, no any issue is showing up.

The reason of choosing 5 is just because in the past, 1 out of 5 testing must have some issue(s).

Attachment:

- #1 the prompt:

```
  Follow the steps below (you DO NOT ALLOW to move to next step if you haven't finished the previous step):

  1. Fetch the data from <FIGMA_LAYER_URL>
  2. Read the guideline @the-guideline-of-figma-to-code/index.mdc
  3. Implement the UI in @Heading.stories.tsx  by extreme following the guideline until your implementation result 100% match as my image

  Note that,
  - In every step of your thinking process, show what were you thinking in our chat, before you show it up, no any further move you should perform.
  - You don't need to be efficient, provide quick solutions, and make assumptions about importance (or whatever), instead, you should slow down to make sure follow all the details in @the-guideline-of-figma-to-code/index.mdc
  - Before you present your solution, you need to double check whether each of your decison stricly follows all the instruction details from all above, including all the content in @the-guideline-of-figma-to-code/index.mdc , and if it does follow, show me how in words; if any of your decision violate any instruction from my side, you need to respect it and reimplement until all your decisons respect all my instructions
```

Below are the reasons of prompt modification this time:

- the 1st note: in all the testing history, there's one time that Cursor shows its "thinking process" in a toggle-like UI in its words (https://bitl.to/4KQo), and I can see that it involves huge amount of its real thought under the hood, but since then, such UI doesn't show anymore, and it seems like there's no way to force Cursor to show it up. So although here we tell it to reveal the thinking process, but the result is still very different comparing to its native toggle-like thought-process UI (eg., now what it'd show is not that many)
- the 2nd note: one time it made a mistake, and it told me that that mistake is because he is trying to be rush and also made some assumption, and he claimed that it might because his system prompt direct him to be "efficient" and be able to provide quick solutions, ..., but that seems will affect our prompt effectivity.
- the 3rd note: this prompt is added all because from the past experiments; Basically, in many times it will just not strictly follow any of our prompt, even we use the word "STRICTLY" on our sentence (and even it is the first sentence in a Cursor rule). Since we cannot access its full thought process, but what we can do is that we can literally just tell it to list out all its decisions and how it is decision match our instruction, and the last trick we can do is, we kind of "instruct its thinking process in a loop"

Futher notes:

- The reason that we use three steps in the main prompt instead of just a simple sentence is because he used to not even follow the guideline I showed in the main prompt, even though the main problem was quite short.

## 1.0.0

### Major Changes

This version should make things more clear, but despite all the efforts,
the issues still happen:

- #2504073: this should be expected before the solution of "Visual feedback" is developed

Re-opend: #2504076, #2504078
And new issue comes out #2504079

## 0.0.1

Note

- All the issues came from the past experiements on implementing a Alert layer in Figma
- Without further solutions, even some issues above are showing CLOSED, they may still come out sometimes (although currently, I haven't seen that from happening).

Potential solutions

- A 1-to-1 component mapping intruction
  This may solve #2504072, #2504075.
  May also solve #2504074, but maybe unrelible.

- MCP: Visual feedback
  This is the ultimate protection and must be implemented.
  Without this, AI can still make the wrong visual implementation,
  even thought he already has the Fimga data and the image showing what the visual result should look like.

  This should solve #2504073, #2504074

All above solutions come from the fact that, we need a better Figma layer interpreter.
