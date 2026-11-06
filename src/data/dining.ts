import { STOCK_IMAGES } from "@/data/images";

export const DINING_CONTENT = {
  title: "Dining and local food guide",
  description: "Meal-plan choices and a short guide to Western Odisha cuisine. The dishes below are regional food examples, not a confirmed Y Hotels Signature restaurant menu.",
  image: STOCK_IMAGES.meal,
};

export const MEAL_PLAN_GUIDE = [
  { code: "EP", name: "European Plan", detail: "Typically room-only." },
  { code: "CP", name: "Continental Plan", detail: "Typically room with breakfast." },
  { code: "MAP", name: "Modified American Plan", detail: "Typically room with breakfast and one other meal." },
  { code: "AP", name: "American Plan", detail: "Typically room with breakfast, lunch and dinner." },
];

export const WESTERN_ODISHA_FOOD_GUIDE = [
  { name: "Pakhala, Dalma and Mandia", category: "Regional staples", description: "A regional combination of fermented rice, lentil and vegetable dalma, and ragi-based foods." },
  { name: "Mudi Mansa and country chicken", category: "Regional dishes", description: "Puffed rice paired with mutton, and country-chicken preparations are noted among western Odisha food traditions." },
  { name: "Santula and seasonal vegetables", category: "Regional dishes", description: "Santula is a lightly seasoned mixed-vegetable dish; local preparations can use seasonal produce." },
  { name: "Dahi Jalebi and traditional sweets", category: "Sweets", description: "Regional sweet options include dahi jalebi, chhena poda, arisa pitha, kakara pitha and manda pitha." },
];

export const DINING_NOTICE = "This is a regional cuisine guide, not the hotel's confirmed menu. Restaurant service, dish availability, ingredients, dietary options and prices have not been supplied. Call the hotel to confirm before ordering.";
