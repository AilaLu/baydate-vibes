// src/components/DatePlanner.tsx
import { useState } from "react";
import DateMood from "./dateMood";
import DateTimeVibe from "./dateTimeVibe";

const DatePlanner = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="p-6">
      {/* Step Progress */}
      <div className="mb-4 text-center">
        Step {step} of 5
      </div>

      {step === 1 && <DateMood />}
      {step === 2 && <DateTimeVibe />}

      <div className="mt-6 flex justify-between">
        <button onClick={back} disabled={step === 1}>
          ◀️ Back
        </button>
        <button onClick={next}>
          Next ▶️
        </button>
      </div>
    </div>
  );
};

export default DatePlanner;
