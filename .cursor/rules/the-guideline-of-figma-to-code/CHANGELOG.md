# @rule/the-guideline-of-figma-to-code

The current version is still not able to make Cursor AI reliably to implement Figma layer.
Below are the possible issues of the implementation by AI:

- [CLOSED] #2504071 No any `tw:` is used on the class
- [OPEN] #2504072 Component's prop didn't get apply or wrongly apply
  > eg.,
  > In the Figma component <Heading>, it uses h3 sizing,
  > but AI may implement it with or without the corresonding prop
- [OPEN] #2504073 Lots of portions don't get implemented
  > Not sure whether this relate to the current selecting layer in Figma or not,
  > (ie., in Figma, I can select part of portion of the implementation target)
- [OPEN] #2504074 No Icon is implemented
  > Even attaching the image showing what the resulting visual should look like,
  > this problem can still appear sometimes.
- [OPEN] #2504075 Use svg instead Icon to implement the icon
  > Even clearly saying the rule like "Any icon can only be built via app/components/ui/Icon", it can still sometimes not follow throguh.
  > This may be from several reasons:
  >
  > - It doesn't know how to interpret the Figma Icon layer, so even it finds out the corresponding Icon component in code, it just gives up
  > - There're many text in the Figma Icon layer having the word "svg", which might affect AI's decision
  >   Either we should 100% conform that rule has been consumed by AI,
  >   or we need some other solutions
- [OPEN] #2504076 Use lucide-react to implement the icon
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
- [OPEN] #2504078 use <Alert>
  > This seems all because we didn't restrict how AI can perform the steps,
  > so it sometimes use codebase semantic search, or list out all the code components under certain folder, and just found there's a component <Alert>, and it just uses it despite our
  > rule clearly showing that kind of move is incorrect.
  > The problem seems gone after restrict more steps AI can perform.
- [OPEN] #2504079 Doesn't use <Heading> at all

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
