export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  veg?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  icon: string;
  note?: string;
  select?: string;
  items: MenuItem[];
}

export interface MealPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  popular?: boolean;
  premium?: boolean;
}

export interface AlaCartePrice {
  meal: string;
  adult: string;
  child: string;
  kids: string;
}

export const DINING_CONTENT = {
  eyebrow: "Velora Stays",
  tagline: "Greener · Healthier · Natural",
  heading: "Food Menu & Packages",
  description:
    "Relish home-style vegetarian and non-vegetarian meals prepared fresh by our in-house chef, served with the essence of nature.",
  referenceNote: "Please note: the menu is for reference only and is subject to availability.",
  feedback:
    "Food filled with the essence of Nature. Let us know how your overall experience was — your feedback helps us enhance!",
};

export const MEAL_PACKAGES: MealPackage[] = [
  {
    id: "pkg-full-meal",
    name: "Full Meal Package",
    price: "Rs. 1,400/- per adult",
    description: "Includes lunch, hi tea, dinner & breakfast.",
    includes: [
      "Rs. 1,400/- per adult (above 12 years)",
      "Rs. 700/- per child (above 6 years)",
      "No charge for kids below 6 years",
    ],
    premium: true,
  },
  {
    id: "pkg-half-meal",
    name: "Half Package",
    price: "Rs. 1,000/- per adult",
    description: "Includes hi tea, dinner & breakfast.",
    includes: [
      "Rs. 1,000/- per adult (above 12 years)",
      "Rs. 500/- per child (above 6 years)",
      "No charge for kids below 6 years",
    ],
    premium: true,
  },
  // À La Carte — Individual Meals hidden on request — kept commented for future use
  // {
  //   id: "pkg-a-la-carte",
  //   name: "À La Carte — Individual Meals",
  //   price: "As per meal",
  //   description: "Opt for individual meals instead of the full meal package.",
  //   includes: [
  //     "Breakfast — Rs. 250/- per person",
  //     "Lunch — Rs. 500/- per person",
  //     "Hi Tea — Rs. 200/- per person",
  //     "Dinner — Rs. 500/- per person",
  //   ],
  // },
];

export const ALA_CARTE_PRICES: AlaCartePrice[] = [
  { meal: "Breakfast", adult: "Rs. 250/-", child: "No charge", kids: "Rs. 125/-" },
  { meal: "Lunch", adult: "Rs. 500/-", child: "No charge", kids: "Rs. 250/-" },
  { meal: "Hi Tea", adult: "Rs. 200/-", child: "No charge", kids: "Rs. 100/-" },
  { meal: "Dinner", adult: "Rs. 500/-", child: "No charge", kids: "Rs. 250/-" },
];

export const ALA_CARTE_BBQ = "BBQ Veg / Non-Veg — Rs. 1,300/- per kg";

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "menu-breakfast",
    title: "Breakfast",
    icon: "lucide:coffee",
    note: "Breakfast 08:30am – 10:00am · Start your day with tea / coffee (complimentary)",
    select: "Any 2 items",
    items: [
      { name: "Poha" },
      { name: "Upma" },
      { name: "Aloo / Methi Paratha" },
      { name: "Idli Sambar" },
      { name: "Medu Vada Sambar" },
      { name: "Puri Bhaji" },
      { name: "Misal Pav" },
    ],
  },
  {
    id: "menu-english-breakfast",
    title: "English Breakfast",
    icon: "lucide:mug",
    note: "or English Breakfast — tea / coffee (complimentary). Extra charges apply for extra tea / coffee opted apart from breakfast.",
    select: "Any 2 items",
    items: [
      { name: "Bread Butter" },
      { name: "Plain / Veg Maggi" },
      { name: "Corn Flakes with Milk" },
      { name: "Boiled Eggs" },
      { name: "Masala Omelette" },
      { name: "Cheese Omelette" },
    ],
  },
  {
    id: "menu-evening-tea",
    title: "Evening Tea",
    icon: "lucide:utensils",
    note: "5:00pm – 6:00pm",
    select: "Any 1 item",
    items: [
      { name: "Tea / Coffee", description: "Complimentary" },
      { name: "Onion Bhajiya" },
      { name: "Aloo Pakoda" },
      { name: "Plain / Veg Maggi" },
      { name: "Veg Sandwich" },
    ],
  },
  {
    id: "menu-lunch-dinner",
    title: "Lunch & Dinner",
    icon: "lucide:chef-hat",
    note: "Lunch 12:30pm – 03:00pm · Dinner 08:30pm – 10:30pm",
    items: [
      {
        name: "Veg Meal",
        description: "1 veg dry + 1 veg gravy + 1 Indian bread + 1 rice + 1 dal + 1 dessert",
      },
      {
        name: "Non-Veg Meal",
        description: "1 veg dry + 1 non-veg gravy + 1 Indian bread + 1 rice + 1 dal + 1 dessert",
      },
      { name: "Compliments", description: "Salad, pickle, papad" },
    ],
  },
  {
    id: "menu-veg-sabzi",
    title: "Veg Sabzi",
    icon: "lucide:leaf",
    note: "Above curries are served with Indian bread, rice, dal, papad & salad.",
    items: [
      { name: "Aloo Mutter Sabji" },
      { name: "Paneer Green Peas Masala" },
      { name: "Cauliflower Sabji" },
      { name: "Chole Bhature" },
      { name: "Aloo Gobi Sabji" },
      { name: "Aloo Palak Sabji" },
      { name: "Mix Veg Sabji" },
      { name: "Paneer Bhurji" },
      { name: "Palak Paneer" },
      { name: "Paneer Tikka Masala" },
      { name: "Paneer Makhni" },
      { name: "Baingan Bharta" },
      { name: "Zunka Bhakri" },
      { name: "Bhindi Masala" },
    ],
  },
  {
    id: "menu-nonveg-sabzi",
    title: "Non-Veg Sabzi",
    icon: "lucide:drumstick",
    note: "Above curries are served with Indian bread, rice, dal, papad & salad.",
    items: [
      { name: "Chicken Curry" },
      { name: "Chicken Masala Dry" },
      { name: "Butter Chicken" },
      { name: "Chicken Banjara" },
      { name: "Chicken Pasta" },
      { name: "Chicken Chilly" },
      { name: "Egg Curry" },
      { name: "Kheema Pav" },
      { name: "Fish Curry", description: "As per special request" },
    ],
  },
  {
    id: "menu-breads",
    title: "Indian Bread",
    icon: "lucide:wheat",
    select: "Any 1 item",
    items: [{ name: "Chapati" }, { name: "Bhakri" }, { name: "Paratha" }],
  },
  {
    id: "menu-desserts",
    title: "Desserts",
    icon: "lucide:cake",
    select: "Any 1 item",
    items: [
      { name: "Gulab Jamun" },
      { name: "Rasgulla" },
      { name: "Fruit Custard" },
      { name: "Vermicelli Kheer" },
      { name: "Basundi" },
    ],
  },
  {
    id: "menu-soups",
    title: "Soups",
    icon: "lucide:utensils",
    note: "Extra · per cup",
    items: [{ name: "Manchow Soup" }, { name: "Tomato Soup" }, { name: "Sweetcorn Soup" }],
  },
  {
    id: "menu-bbq",
    title: "Barbeque",
    icon: "lucide:flame",
    note: "Extra · ₹1,300 per kg",
    items: [
      { name: "Veg", description: "Paneer, capsicum, onion, tomato, aloo" },
      { name: "Non-Veg", description: "Chicken" },
    ],
  },
  {
    id: "menu-appetizers",
    title: "Appetizers",
    icon: "lucide:sparkles",
    note: "Extra · per plate",
    items: [
      { name: "Paneer Chilly" },
      { name: "Paneer Tikka" },
      { name: "Aloo Chat" },
      { name: "Veg Manchurian", description: "Dry / gravy" },
      { name: "Chicken Lollypop" },
      { name: "Chicken Chilly" },
      { name: "Chicken Manchurian", description: "Dry / gravy" },
      { name: "Chicken 65" },
      { name: "Surmai Tava Fry" },
      { name: "Pomfret Tava Fry" },
      { name: "Prawns Tava Fry" },
    ],
  },
];
