// src/components/DateTimeVibe.tsx
import { useState } from "react";
import clsx from "clsx";

const vibes = [
  { emoji: "🌞", label: "Sunny" },
  { emoji: "☁️", label: "Cloudy" },
  { emoji: "🌧️", label: "Rainy" },
  { emoji: "🌆", label: "Evening" },
];

const DateTimeVibe = () => {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [duration, setDuration] = useState<"short" | "medium" | "long">("medium");
  const [wantsToMove, setWantsToMove] = useState<boolean | null>(null);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {/* Vibe outside */}
      <h1 className="text-2xl font-bold mb-4">What's the vibe outside?</h1>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {vibes.map((vibe) => (
          <button
            key={vibe.label}
            onClick={() => setSelectedVibe(vibe.label)}
            className={clsx(
              "text-3xl p-2 rounded-full transition hover:scale-110",
              selectedVibe === vibe.label ? "bg-blue-200" : "bg-gray-100"
            )}
          >
            {vibe.emoji}
            <div className="text-xs mt-1">{vibe.label}</div>
          </button>
        ))}
      </div>

      {/* Time selection */}
      <h2 className="text-lg font-medium mb-2">How much time do you have?</h2>
      <div className="flex justify-center gap-3 mb-6">
        {["short", "medium", "long"].map((length) => (
          <button
            key={length}
            onClick={() => setDuration(length as "short" | "medium" | "long")}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition",
              duration === length ? "bg-indigo-300 text-white" : "bg-gray-200"
            )}
          >
            {length === "short" ? "⏱️ Short (1 hr)" : length === "medium" ? "🕒 Medium (2–5 hr)" : "📅 Long (5+ hr)"}
          </button>
        ))}
      </div>

      {/* Movement toggle */}
      <h2 className="text-lg font-medium mb-2">Do you want to move your body?</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setWantsToMove(true)}
          className={clsx(
            "px-6 py-2 rounded-full font-medium",
            wantsToMove === true ? "bg-green-300" : "bg-gray-200"
          )}
        >
          Yes 🕺
        </button>
        <button
          onClick={() => setWantsToMove(false)}
          className={clsx(
            "px-6 py-2 rounded-full font-medium",
            wantsToMove === false ? "bg-red-300" : "bg-gray-200"
          )}
        >
          No 🛋️
        </button>
      </div>
    </div>
  );
};

export default DateTimeVibe;
