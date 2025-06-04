// src/components/DateMood.tsx
import { useState } from "react";
import clsx from "clsx";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😌", label: "Chill" },
  { emoji: "🥹", label: "Emotional" },
  { emoji: "🤪", label: "Playful" },
  { emoji: "🥰", label: "Romantic" },
];

const TOTAL_STEPS = 5;
const CURRENT_STEP = 1;

const DateMood = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number>(3);

  return (
    <div className="p-6 max-w-xl mx-auto text-center space-y-6">
      {/* Step Progress Bar */}
   {/* Step Progress Bar */}
<div className="flex justify-center gap-2 mb-4">
  {[...Array(TOTAL_STEPS)].map((_, index) => (
    <div
      key={index}
      className={clsx(
        "h-2 rounded-full transition-all duration-300",
        CURRENT_STEP > index
          ? "bg-pink-500 w-8"
          : "bg-gray-300 w-6"
      )}
    />
  ))}
</div>


      {/* Heading */}
      <h1 className="text-2xl font-bold">How are you feeling today?</h1>

      {/* Mood Selection */}
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className={clsx(
              "flex flex-col items-center text-3xl p-2 rounded-full transition hover:scale-110",
              selectedMood === mood.label ? "bg-pink-200" : "bg-gray-100"
            )}
          >
            {mood.emoji}
            <span className="text-xs mt-1">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Energy Level */}
      <div>
        <h2 className="text-lg font-medium mb-2 mt-4">How much energy do you have?</h2>
        <div className="flex justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => setEnergyLevel(level)}
              className={clsx(
                "text-yellow-400 text-2xl transition",
                energyLevel >= level ? "opacity-100" : "opacity-30"
              )}
            >
              ⚡
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500">Energy: {energyLevel}/5</p>
      </div>
    </div>
  );
};

export default DateMood;
