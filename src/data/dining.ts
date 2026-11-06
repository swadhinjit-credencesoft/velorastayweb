import { STOCK_IMAGES } from "@/data/images";

export const DINING_CONTENT = {
  title: "A better stay starts at the table",
  description: "Explore the meal-plan options listed for Y Hotels Signature. Call the hotel for today’s menu, service hours and prices.",
  image: STOCK_IMAGES.restaurant,
};

export const MEAL_PLAN_GUIDE = [
  { code: "EP", name: "European Plan", detail: "Usually room only. Confirm the exact inclusions with the hotel." },
  { code: "CP", name: "Continental Plan", detail: "Usually room with breakfast. Confirm the exact inclusions with the hotel." },
  { code: "MAP", name: "Modified American Plan", detail: "Usually room with breakfast and one other meal. Confirm which meals are included." },
  { code: "AP", name: "American Plan", detail: "Usually room with meals. Confirm which meals and service times are included." },
];

export const DINING_NOTICE = "The hotel has listed EP, CP, MAP and AP meal plans, but has not supplied property-specific meal inclusions, meal service hours or meal-plan prices. Confirm these details for your dates before booking.";

export const RESTAURANT_CONTENT = {
  title: "Restaurant and food menu",
  description: "Find dining information for your stay. Contact our team to confirm current food service and request today’s menu.",
  image: STOCK_IMAGES.restaurant,
};

export const RESTAURANT_NOTICE = "An itemized restaurant menu, dish prices, restaurant opening hours and service details have not been supplied. This page does not list unverified dishes as hotel offerings.";
