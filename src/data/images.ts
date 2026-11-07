/** Representative Unsplash stock photos; these are not photographs of Y Hotels Signature. */
export const STOCK_IMAGES = {
  heroRoom: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=85",
  heroLobby: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=85",
  deluxe: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
  superDeluxe: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
  executive: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
  lobby: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=85",
  meal: "/images/dining-meal.jpg",
  restaurant: "/images/restaurant-interior.jpg",
  diningTable: "/images/restaurant-table.jpg",
  indianFood: "/images/indian-food.jpg",
  freshFood: "/images/fresh-food.jpg",
  landscape: "/images/western-odisha-landscape.jpg",
};

export const STOCK_GALLERY = [
  { id: "deluxe-room", src: STOCK_IMAGES.deluxe, alt: "Representative hotel bedroom with a neatly made bed", category: "Rooms", caption: "Representative room inspiration - Deluxe" },
  { id: "super-deluxe-room", src: STOCK_IMAGES.superDeluxe, alt: "Representative hotel room with a bed and seating area", category: "Rooms", caption: "Representative room inspiration - Super Deluxe" },
  { id: "executive-room", src: STOCK_IMAGES.executive, alt: "Representative contemporary hotel bedroom", category: "Rooms", caption: "Representative room inspiration - Executive" },
  { id: "hotel-lobby", src: STOCK_IMAGES.lobby, alt: "Representative hotel reception and lobby seating", category: "Property", caption: "Representative hotel interior inspiration" },
];
