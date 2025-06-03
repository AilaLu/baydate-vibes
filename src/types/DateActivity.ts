export interface DateActivity {
 id: string;
 title: string;
 emoji: string;
 tags: string[];
 energy: number; // 1–5
 duration: 'short' | 'medium' | 'long';
 type: 'food' | 'outdoors' | 'chill' | 'social' | 'play';
 cost?: '$' | '$$' | '$$$';
 lgbtqFriendly?: boolean;
 petFriendly?: boolean;
 seasonal?: 'summer' | 'winter' | 'indoor' | 'any';
 locationRequired?: boolean; // if it depends on local geography
 weatherSensitive?: boolean; // should check weather before suggesting
 idealWeather?: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'any';
}
