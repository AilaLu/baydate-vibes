import type { FoodPlace } from "../types/foodPlace";

export const foodPlaces: Record<string, FoodPlace[]> = {
  sushi: [
    {
   "name": "Rantei Japanese Cuisine",
   "address": "1271 Franklin Mall, Santa Clara, CA 95050",
   "rating": 4.6,
   "hours": {
     "Monday": "4:30 PM – 8:45 PM",
     "Tuesday": "4:30 PM – 8:45 PM",
     "Wednesday": "4:30 PM – 8:45 PM",
     "Thursday": "4:30 PM – 8:45 PM",
     "Friday": "4:30 PM – 9:15 PM",
     "Saturday": "4:30 PM – 9:15 PM",
     "Sunday": "4:30 PM – 8:45 PM"
   },
   "outdoor_seating": false
 },
 {
   "name": "Yuki Sushi",
   "address": "1827 Pruneridge Ave, Santa Clara, CA 95050",
   "rating": 4.2,
   "hours": {
     "Monday": "Closed",
     "Tuesday": "11:30 AM – 2:00 PM, 4:30 PM – 8:00 PM",
     "Wednesday": "11:30 AM – 2:00 PM, 4:30 PM – 8:00 PM",
     "Thursday": "11:30 AM – 2:00 PM, 4:30 PM – 8:00 PM",
     "Friday": "11:30 AM – 2:00 PM, 4:30 PM – 8:30 PM",
     "Saturday": "4:30 PM – 8:00 PM",
     "Sunday": "4:30 PM – 7:30 PM"
   },
   "outdoor_seating": false
 },
 {
   "name": "Omee.J Fusion Sushi Bar & Grill",
   "address": "2375 El Camino Real, Santa Clara, CA 95050",
   "rating": 4.0,
   "hours": {
     "Monday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Tuesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Wednesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Thursday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Friday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Saturday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Sunday": "11:30 AM – 2:30 PM, 5:00 PM – 9:00 PM"
   },
   "outdoor_seating": true
 },
 {
   "name": "Sushi O Sushi Japanese Cuisine",
   "address": "2789 El Camino Real, Santa Clara, CA 95051",
   "rating": 4.2,
   "hours": {
     "Monday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Tuesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Wednesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Thursday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Friday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Saturday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Sunday": "11:30 AM – 2:30 PM, 5:00 PM – 9:00 PM"
   },
   "outdoor_seating": false
 },
 {
   "name": "Kakuna Sushi",
   "address": "3550 Homestead Rd, Santa Clara, CA 95051",
   "rating": 4.3,
   "hours": {
     "Monday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Tuesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Wednesday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Thursday": "11:30 AM – 2:30 PM, 5:00 PM – 9:30 PM",
     "Friday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Saturday": "11:30 AM – 2:30 PM, 5:00 PM – 10:00 PM",
     "Sunday": "11:30 AM – 2:30 PM, 5:00 PM – 9:00 PM"
   },
   "outdoor_seating": false
 }
], 
italian: [
  {
    "name": "Terra Ristorante",
    "address": "3255 Monroe St, Santa Clara, CA 95051",
    "rating": 4.5,
    "hours": {
      "Monday": "11:30 AM - 9:00 PM",
      "Tuesday": "11:30 AM - 9:00 PM",
      "Wednesday": "11:30 AM - 9:00 PM",
      "Thursday": "11:30 AM - 9:00 PM",
      "Friday": "11:30 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "Mio Vicino",
    "address": "2245 Park Ave, Santa Clara, CA 95050",
    "rating": 4.3,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 8:00 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Il Fornaio",
    "address": "2805 El Camino Real, Santa Clara, CA 95051",
    "rating": 4.2,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "A Bellagio Ristorante",
    "address": "1640 The Alameda, Santa Clara, CA 95050",
    "rating": 4.1,
    "hours": {
      "Monday": "11:00 AM - 8:30 PM",
      "Tuesday": "11:00 AM - 8:30 PM",
      "Wednesday": "11:00 AM - 8:30 PM",
      "Thursday": "11:00 AM - 8:30 PM",
      "Friday": "11:00 AM - 9:30 PM",
      "Saturday": "12:00 PM - 9:30 PM",
      "Sunday": "12:00 PM - 8:30 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Osteria Toscana",
    "address": "2391 Walsh Ave, Santa Clara, CA 95051",
    "rating": 4.0,
    "hours": {
      "Monday": "11:30 AM - 9:00 PM",
      "Tuesday": "11:30 AM - 9:00 PM",
      "Wednesday": "11:30 AM - 9:00 PM",
      "Thursday": "11:30 AM - 9:00 PM",
      "Friday": "11:30 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "Closed"
    },
    "outdoor_seating": true
  }
],
chinese: [
  {
    "name": "Beijing Restaurant",
    "address": "2390 Walsh Ave, Santa Clara, CA 95051",
    "rating": 4.2,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Dragon Court",
    "address": "2500 Mission College Blvd, Santa Clara, CA 95054",
    "rating": 4.1,
    "hours": {
      "Monday": "11:00 AM - 9:30 PM",
      "Tuesday": "11:00 AM - 9:30 PM",
      "Wednesday": "11:00 AM - 9:30 PM",
      "Thursday": "11:00 AM - 9:30 PM",
      "Friday": "11:00 AM - 10:30 PM",
      "Saturday": "12:00 PM - 10:30 PM",
      "Sunday": "12:00 PM - 9:30 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "Golden Garden",
    "address": "1321 El Camino Real, Santa Clara, CA 95050",
    "rating": 4.0,
    "hours": {
      "Monday": "11:00 AM - 8:00 PM",
      "Tuesday": "11:00 AM - 8:00 PM",
      "Wednesday": "11:00 AM - 8:00 PM",
      "Thursday": "11:00 AM - 8:00 PM",
      "Friday": "11:00 AM - 9:00 PM",
      "Saturday": "12:00 PM - 9:00 PM",
      "Sunday": "12:00 PM - 8:00 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Mandarin Delight",
    "address": "456 El Camino Real, Santa Clara, CA 95050",
    "rating": 4.3,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "Lotus Garden",
    "address": "890 Lawrence Expressway, Santa Clara, CA 95051",
    "rating": 4.1,
    "hours": {
      "Monday": "11:30 AM - 9:00 PM",
      "Tuesday": "11:30 AM - 9:00 PM",
      "Wednesday": "11:30 AM - 9:00 PM",
      "Thursday": "11:30 AM - 9:00 PM",
      "Friday": "11:30 AM - 10:00 PM",
      "Saturday": "12:00 PM - 10:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    "outdoor_seating": false
  }
],
"dim sum": [
  {
    "name": "China Stix",
    "address": "2295 El Camino Real, Santa Clara, CA 95050",
    "rating": 4.3,
    "hours": {
      "Monday": "10:30 AM - 9:30 PM",
      "Tuesday": "10:30 AM - 9:30 PM",
      "Wednesday": "10:30 AM - 9:30 PM",
      "Thursday": "10:30 AM - 9:30 PM",
      "Friday": "10:30 AM - 10:00 PM",
      "Saturday": "10:30 AM - 10:00 PM",
      "Sunday": "10:30 AM - 9:30 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Dragon Beaux",
    "address": "525 S Winchester Blvd, San Jose, CA 95128",
    "rating": 4.1,
    "hours": {
      "Monday": "Closed",
      "Tuesday": "10:00 AM - 2:30 PM",
      "Wednesday": "10:00 AM - 2:30 PM",
      "Thursday": "10:00 AM - 2:30 PM",
      "Friday": "10:00 AM - 2:30 PM",
      "Saturday": "10:00 AM - 3:00 PM",
      "Sunday": "10:00 AM - 3:00 PM"
    },
    "outdoor_seating": false
  },
  {
    "name": "Dim Sum House",
    "address": "1158 Story Rd, San Jose, CA 95122",
    "rating": 4.2,
    "hours": {
      "Monday": "10:30 AM - 9:00 PM",
      "Tuesday": "10:30 AM - 9:00 PM",
      "Wednesday": "10:30 AM - 9:00 PM",
      "Thursday": "10:30 AM - 9:00 PM",
      "Friday": "10:30 AM - 10:00 PM",
      "Saturday": "10:30 AM - 10:00 PM",
      "Sunday": "10:30 AM - 9:00 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "Pearl Chinese Cuisine",
    "address": "2508 W San Carlos St, San Jose, CA 95128",
    "rating": 4.0,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM",
      "Sunday": "11:00 AM - 9:00 PM"
    },
    "outdoor_seating": true
  },
  {
    "name": "Joy Luck Palace",
    "address": "675 Saratoga Ave, San Jose, CA 95129",
    "rating": 4.1,
    "hours": {
      "Monday": "11:00 AM - 9:00 PM",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 9:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "11:00 AM - 10:00 PM",
      "Sunday": "11:00 AM - 9:00 PM"
    },
    "outdoor_seating": false
  }
],

hotpot: [
    {
      "name": "Taichi Hot Pot",
      "address": "2539 El Camino Real, Santa Clara, CA 95051",
      "rating": 4.4,
      "hours": {
        "Monday": "11:00 AM - 10:00 PM",
        "Tuesday": "11:00 AM - 10:00 PM",
        "Wednesday": "11:00 AM - 10:00 PM",
        "Thursday": "11:00 AM - 10:00 PM",
        "Friday": "11:00 AM - 11:00 PM",
        "Saturday": "11:00 AM - 11:00 PM",
        "Sunday": "11:00 AM - 10:00 PM"
      },
      "outdoor_seating": false
    },
    {
      "name": "Happy Lamb Hot Pot",
      "address": "2885 S Bascom Ave #190, Campbell, CA 95008",
      "rating": 4.1,
      "hours": {
        "Monday": "11:00 AM - 10:00 PM",
        "Tuesday": "11:00 AM - 10:00 PM",
        "Wednesday": "11:00 AM - 10:00 PM",
        "Thursday": "11:00 AM - 10:00 PM",
        "Friday": "11:00 AM - 11:00 PM",
        "Saturday": "11:00 AM - 11:00 PM",
        "Sunday": "11:00 AM - 10:00 PM"
      },
      "outdoor_seating": false
    },
    {
      "name": "Boiling Point",
      "address": "1830 El Camino Real, Santa Clara, CA 95050",
      "rating": 4.0,
      "hours": {
        "Monday": "10:30 AM - 9:30 PM",
        "Tuesday": "10:30 AM - 9:30 PM",
        "Wednesday": "10:30 AM - 9:30 PM",
        "Thursday": "10:30 AM - 9:30 PM",
        "Friday": "10:30 AM - 10:00 PM",
        "Saturday": "10:30 AM - 10:00 PM",
        "Sunday": "10:30 AM - 9:30 PM"
      },
      "outdoor_seating": false
    },
    {
      "name": "Little Fat Sheep Hot Pot",
      "address": "3901 Rivermark Plaza, Santa Clara, CA 95054",
      "rating": 4.3,
      "hours": {
        "Monday": "11:00 AM - 9:30 PM",
        "Tuesday": "11:00 AM - 9:30 PM",
        "Wednesday": "11:00 AM - 9:30 PM",
        "Thursday": "11:00 AM - 9:30 PM",
        "Friday": "11:00 AM - 10:30 PM",
        "Saturday": "11:00 AM - 10:30 PM",
        "Sunday": "11:00 AM - 9:30 PM"
      },
      "outdoor_seating": false
    },
    {
      "name": "Shabu Shabu House",
      "address": "4805 Almaden Expy #14, San Jose, CA 95118",
      "rating": 4.1,
      "hours": {
        "Monday": "11:30 AM - 9:30 PM",
        "Tuesday": "11:30 AM - 9:30 PM",
        "Wednesday": "11:30 AM - 9:30 PM",
        "Thursday": "11:30 AM - 9:30 PM",
        "Friday": "11:30 AM - 10:00 PM",
        "Saturday": "11:30 AM - 10:00 PM",
        "Sunday": "11:30 AM - 9:30 PM"
      },
      "outdoor_seating": false
    }
  ],
  "korean bbq": [
      {
        "name": "10 Butchers",
        "address": "100 E Hamilton Ave, Campbell, CA 95008",
        "rating": 4.1,
        "hours": {
          "Monday": "11:00 AM - 10:00 PM",
          "Tuesday": "11:00 AM - 10:00 PM",
          "Wednesday": "11:00 AM - 10:00 PM",
          "Thursday": "11:00 AM - 10:00 PM",
          "Friday": "11:00 AM - 11:00 PM",
          "Saturday": "11:00 AM - 11:00 PM",
          "Sunday": "11:00 AM - 9:00 PM"
        },
        "outdoor_seating": false
      },
      {
        "name": "Jang Su Jang",
        "address": "2008 S Bascom Ave, Campbell, CA 95008",
        "rating": 4.3,
        "hours": {
          "Monday": "11:00 AM - 10:00 PM",
          "Tuesday": "11:00 AM - 10:00 PM",
          "Wednesday": "11:00 AM - 10:00 PM",
          "Thursday": "11:00 AM - 10:00 PM",
          "Friday": "11:00 AM - 11:00 PM",
          "Saturday": "11:00 AM - 11:00 PM",
          "Sunday": "11:00 AM - 9:00 PM"
        },
        "outdoor_seating": false
      },
      {
        "name": "Hanjip Korean BBQ",
        "address": "426 N San Pedro St, San Jose, CA 95110",
        "rating": 4.5,
        "hours": {
          "Monday": "11:30 AM - 9:30 PM",
          "Tuesday": "11:30 AM - 9:30 PM",
          "Wednesday": "11:30 AM - 9:30 PM",
          "Thursday": "11:30 AM - 9:30 PM",
          "Friday": "11:30 AM - 10:00 PM",
          "Saturday": "11:30 AM - 10:00 PM",
          "Sunday": "Closed"
        },
        "outdoor_seating": false
      },
      {
        "name": "Sura Korean BBQ & Tofu House",
        "address": "1549 Meridian Ave, San Jose, CA 95125",
        "rating": 4.2,
        "hours": {
          "Monday": "11:00 AM - 10:00 PM",
          "Tuesday": "11:00 AM - 10:00 PM",
          "Wednesday": "11:00 AM - 10:00 PM",
          "Thursday": "11:00 AM - 10:00 PM",
          "Friday": "11:00 AM - 11:00 PM",
          "Saturday": "11:00 AM - 11:00 PM",
          "Sunday": "11:00 AM - 9:00 PM"
        },
        "outdoor_seating": false
      },
      {
        "name": "Cham Sut Gol Korean BBQ",
        "address": "1000 Old San Francisco Rd, Sunnyvale, CA 94086",
        "rating": 4.0,
        "hours": {
          "Monday": "11:00 AM - 10:00 PM",
          "Tuesday": "11:00 AM - 10:00 PM",
          "Wednesday": "11:00 AM - 10:00 PM",
          "Thursday": "11:00 AM - 10:00 PM",
          "Friday": "11:00 AM - 11:00 PM",
          "Saturday": "11:00 AM - 11:00 PM",
          "Sunday": "11:00 AM - 9:00 PM"
        },
        "outdoor_seating": false
      }
    ],
    pho:  [
      {
        name: "Pho Hoa Noodle Soup",
        address: "2127 El Camino Real, Santa Clara, CA 95050",
        rating: 4.1,
        hours: {
          mon: "10:00-21:00",
          tue: "10:00-21:00",
          wed: "10:00-21:00",
          thu: "10:00-21:00",
          fri: "10:00-21:30",
          sat: "10:00-21:30",
          sun: "10:00-21:00"
        },
        outdoor_seating: false
      },
      {
        name: "Pho Mai #1",
        address: "3475 El Camino Real, Santa Clara, CA 95051",
        rating: 4.2,
        hours: {
          mon: "09:30-20:30",
          tue: "09:30-20:30",
          wed: "09:30-20:30",
          thu: "09:30-20:30",
          fri: "09:30-21:00",
          sat: "09:30-21:00",
          sun: "09:30-20:30"
        },
        outdoor_seating: true
      },
      {
        name: "Pho Hoa Binh",
        address: "2955 El Camino Real, Santa Clara, CA 95051",
        rating: 4.3,
        hours: {
          mon: "10:00-21:00",
          tue: "10:00-21:00",
          wed: "10:00-21:00",
          thu: "10:00-21:00",
          fri: "10:00-21:30",
          sat: "10:00-21:30",
          sun: "10:00-21:00"
        },
        outdoor_seating: false
      },
      {
        name: "Pho Nam Restaurant",
        address: "844 W El Camino Real, Sunnyvale, CA 94087",
        rating: 4.4,
        hours: {
          mon: "10:00-20:30",
          tue: "10:00-20:30",
          wed: "10:00-20:30",
          thu: "10:00-20:30",
          fri: "10:00-21:00",
          sat: "10:00-21:00",
          sun: "10:00-20:30"
        },
        outdoor_seating: true
      }
    ]
}