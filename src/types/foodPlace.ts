export interface FoodPlace {
 name: string;
 address: string;
 rating: number; // from 1 to 5
 hours: object; // opening hours, can refine later
 outdoor_seating: boolean;
}
