import { useState } from "react";
import { dateIdeas } from "../data/dateIdeas";
import type { DateActivity } from "../types/dateActivity";

const DateFilter = () => {
  const [energyLevel, setEnergyLevel] = useState<number>(3);

  const filtered = dateIdeas.filter((idea) => idea.energy <= energyLevel);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Choose Energy Level</h1>
      <input
        type="range"
        min={1}
        max={5}
        value={energyLevel}
        onChange={(e) => setEnergyLevel(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-gray-600 mt-1">Level: {energyLevel}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filtered.map((idea: DateActivity) => (
          <div key={idea.id} className="border rounded-xl p-4 shadow-sm">
            <div className="text-2xl">{idea.emoji}</div>
            <h2 className="font-medium">{idea.title}</h2>
            <p className="text-sm text-gray-500">{idea.duration} · {idea.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateFilter;
