export interface DateActivity {
 id: string;
 title: string;
 emoji: string;
 tags: string[];
 energy: number; // 1–5
 duration: "short" | "medium" | "long";
 type: "food" | "outdoors" | "chill" | "play";
 physical?: boolean;
 weather?: "sunny" | "cloudy" | "rainy" | "evening" | "any";
 // lgbtqFriendly?: boolean;
 // petFriendly?: boolean;
 // seasonal?: "summer" | "winter" | "indoor" | "any";
}
