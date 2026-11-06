/** Representative Unsplash stock photos; these are not photographs of Y Hotels Signature. */
export const STOCK_IMAGES = {
  deluxe: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85",
  superDeluxe: "https://images.unsplash.com/photo-1713762523087-41019a875741?auto=format&fit=crop&w=1600&q=85",
  executive: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85",
  lobby: "https://images.unsplash.com/photo-1759038086832-795644825e3a?auto=format&fit=crop&w=1600&q=85",
  meal: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85",
  landscape: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
};

export const STOCK_GALLERY = [
  { id: "deluxe-room", src: STOCK_IMAGES.deluxe, alt: "Representative hotel bedroom with a neatly made bed", category: "Rooms", caption: "Representative room inspiration - Deluxe" },
  { id: "super-deluxe-room", src: STOCK_IMAGES.superDeluxe, alt: "Representative hotel room with a bed and seating area", category: "Rooms", caption: "Representative room inspiration - Super Deluxe" },
  { id: "executive-room", src: STOCK_IMAGES.executive, alt: "Representative contemporary hotel bedroom", category: "Rooms", caption: "Representative room inspiration - Executive" },
  { id: "hotel-lobby", src: STOCK_IMAGES.lobby, alt: "Representative hotel reception and lobby seating", category: "Property", caption: "Representative hotel interior inspiration" },
];
