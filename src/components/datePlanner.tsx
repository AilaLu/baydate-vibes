// src/components/DatePlanner.tsx
import { useState } from "react";
import DateMood from "./dateMood";
import DateTimeVibe from "./dateTimeVibe";
import BayDateResults from "./bayDateResults";

const DatePlanner = () => {
  const [step, setStep] = useState(1);

  // Collect data from both steps
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number>(3);
  const [craving, setCraving] = useState<string | null>(null);

  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [duration, setDuration] = useState<"short" | "medium" | "long">("medium");
  const [wantsToMove, setWantsToMove] = useState<boolean | null>(null);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="p-6">
      <div className="mb-4 text-center">
        {step < 3 ? `Step ${step} of 2` : "Your Perfect BayDate Vibes 💖"}
      </div>

      {step === 1 && (
        <DateMood
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          energyLevel={energyLevel}
          setEnergyLevel={setEnergyLevel}
          craving={craving}
          setCraving={setCraving}
        />
      )}

      {step === 2 && (
        <DateTimeVibe
          selectedVibe={selectedVibe}
          setSelectedVibe={setSelectedVibe}
          duration={duration}
          setDuration={setDuration}
          wantsToMove={wantsToMove}
          setWantsToMove={setWantsToMove}
        />
      )}

      {step === 3 && (
        <BayDateResults
          mood={selectedMood}
          energy={energyLevel}
          craving={craving}
          vibe={selectedVibe}
          duration={duration}
          physical={wantsToMove ?? false}
        />
      )}

      <div className="mt-6 flex justify-between">
        <button onClick={back} disabled={step === 1}>
          ◀️ Back
        </button>
        {step < 3 && (
          <button onClick={next}>
            Next ▶️
          </button>
        )}
      </div>
    </div>
  );
};

export default DatePlanner;
