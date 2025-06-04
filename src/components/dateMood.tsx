// src/components/DateMood.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😌", label: "Chill" },
  { emoji: "🤪", label: "Playful" },
  { emoji: "🥰", label: "Romantic" },
  { emoji: "🥹", label: "Emotional" },
];

const cravings = [
  { emoji: "🍣", label: "Sushi" },
  { emoji: "🥡", label: "Chinese" },
  { emoji: "🍜", label: "Pho" },
  { emoji: "🥟", label: "Dim Sum" },
  { emoji: "🍲", label: "Hotpot" },
  { emoji: "🥩", label: "Korean BBQ" },
  { emoji: "🍝", label: "Italian" },
  { emoji: "🙃", label: "Not hungry!!"}
];

const DateMood = () => {

  const navigate = useNavigate();

  const handleCravingClick = (type: string) => {
    // Skip directly to the food list page for the selected food type
    type = type.toLowerCase()
    setCraving(type);             // store for later
    navigate(`/food/${type}`);    // still navigate away
  };

  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number>(3);
  const [craving, setCraving] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">How are you feeling today?</h1>

      {/* Mood Selection */}
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className={clsx(
              "text-3xl p-2 rounded-full transition hover:scale-110",
              selectedMood === mood.label ? "bg-pink-200" : "bg-gray-100"
            )}
          >
            {mood.emoji}
            <div className="text-xs mt-1">{mood.label}</div>
          </button>
        ))}
      </div>

      {/* Energy Level */}
      <h2 className="text-lg font-medium mb-2">How much energy do you have?</h2>
      <div className="flex justify-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setEnergyLevel(level)}
            className={clsx(
              "text-yellow-500 text-2xl",
              energyLevel >= level ? "" : "opacity-30"
            )}
          >
            ⚡
          </button>
        ))}
      </div>

      {/* Food Craving */}
      <h2 className="text-lg font-medium mb-2">Are you craving something?</h2>
      <div className="flex justify-center gap-3 flex-wrap">
        {cravings.map((item) => (
          <button
            key={item.label}
            onClick={() => handleCravingClick(item.label)}
            className={clsx(
              "text-2xl p-2 rounded-full transition hover:scale-110",
              craving === item.label ? "bg-green-200" : "bg-gray-100"
            )}
          >
            {item.emoji}
            <div className="text-xs mt-1">{item.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateMood;
