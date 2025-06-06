// src/components/BayDateResults.tsx
import type { DateActivity } from "../types/dateActivity";

type Props = {
  mood: string | null;
  energy: number;
  craving: string | null;
  vibe: string | null;
  duration: "short" | "medium" | "long";
  physical: boolean;
};

const sampleActivities: DateActivity[] = [
  {
    id: "1",
    title: "Golden Gate Park Picnic",
    emoji: "🧺",
    tags: ["chill", "sunny", "outdoors"],
    energy: 2,
    duration: "medium",
    type: "outdoors",
    physical: false,
    weather: "sunny",
  },
  {
    id: "2",
    title: "Dance at Daybreaker SF",
    emoji: "💃",
    tags: ["playful", "movement"],
    energy: 5,
    duration: "short",
    type: "play",
    physical: true,
    weather: "any",
  },
  {
    id: "3",
    title: "Pho & Walk by Lake Merritt",
    emoji: "🍜🚶‍♂️",
    tags: ["pho", "romantic", "chill"],
    energy: 3,
    duration: "short",
    type: "food",
    physical: true,
    weather: "cloudy",
  },
];

const BayDateResults = ({
  mood,
  energy,
  craving,
  vibe,
  duration,
  physical,
}: Props) => {
  const filtered = sampleActivities.filter((a) => {
    const matchesCraving = craving ? a.tags.includes(craving) : true;
    const matchesMood = mood ? a.tags.includes(mood.toLowerCase()) : true;
    const matchesVibe = vibe ? !a.weather || a.weather === vibe.toLowerCase() : true;
    const matchesDuration = a.duration === duration;
    const matchesEnergy = a.energy <= energy + 1;
    const matchesPhysical = a.physical === physical || a.physical === undefined;
    return matchesCraving && matchesMood && matchesVibe && matchesDuration && matchesEnergy && matchesPhysical;
  });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">✨ Your Perfect BayDate ✨</h2>
      {filtered.length > 0 ? (
        <ul className="space-y-4">
          {filtered.map((a) => (
            <li
              key={a.id}
              className="bg-white rounded-xl p-4 shadow flex items-center gap-4"
            >
              <span className="text-3xl">{a.emoji}</span>
              <div>
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="text-sm text-gray-500">
                  Tags: {a.tags.join(", ")} | Duration: {a.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No perfect matches, but love is in the air 💘</p>
      )}
    </div>
  );
};

export default BayDateResults;
