import React, { useState } from "react"
import { Collapsible, CollapsibleContent } from "#/components/ui/Collapsible/Collapsible.tsx"
import { Cta } from "#/components/ui/Cta/Cta.tsx"
import { Separator } from "#/components/ui/Separator/Separator.tsx"

export default () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const goToNextStep = () => currentStep < totalSteps && setCurrentStep(currentStep + 1);
  const goToPrevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  const steps = [
    {
      title: "Step One",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
    },
    {
      title: "Step Two",
      content: "Discover the features of our platform in step two. This step guides you through the core functionalities and how to leverage them for your needs. Take your time to understand each feature."
    },
    {
      title: "Step Three",
      content: "Complete your journey with the final step. Here we provide advanced tips and strategies to maximize your experience. By now, you should be ready to take full advantage of the system."
    }
  ];
  return (
    <div className="tw:flex tw:flex-col tw:gap-6 tw:max-w-[600px]">
      {/* Step indicators */}
      <div className="tw:flex tw:items-center tw:justify-between">
        {[1, 2, 3].map((step) => (
          <div key={step} className="tw:flex tw:items-center">
            <div
              className={`tw:flex tw:items-center tw:justify-center tw:w-10 tw:h-10 tw:rounded-full tw:text-background
                ${currentStep === step ? 'tw:bg-primary' : 'tw:bg-muted'}`}
            >
              {step}
            </div>
            <div className="tw:text-lg tw:ml-3 tw:font-medium tw:text-nowrap">Step {step}</div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Step content with Collapsibles */}
      <div className="tw:relative">
        {steps.map((step, index) => (
          <Collapsible key={index} open={currentStep === index + 1} className="tw:w-full">
            <CollapsibleContent className="tw:p-2">
              <h2 className="tw:text-2xl tw:font-bold tw:mb-4">{step.title}</h2>
              <p className="tw:text-muted-foreground tw:mb-8">{step.content}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="tw:flex tw:justify-between tw:mt-4">
        <Cta
          variant="outline"
          onClick={goToPrevStep}
          disabled={currentStep === 1}
          className="tw:uppercase"
        >
          Previous
        </Cta>
        <Cta
          variant="primary"
          onClick={goToNextStep}
          disabled={currentStep === totalSteps}
          className="tw:uppercase"
        >
          Next
        </Cta>
      </div>
    </div>
  );
}