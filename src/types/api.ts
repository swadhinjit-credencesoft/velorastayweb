export interface ApiImage {
  id: number | null;
  name: string;
  description: string;
  mainImage: boolean;
  url: string;
}

export interface ApiRoomFacility {
  id: number;
  organisationId: number;
  name: string;
  description: string;
  imageUrl: string;
  logoUrl: string;
}

export interface ApiRateAvailability {
  id: number;
  price: number;
  totalNoRooms: number;
  noOfBooked: number;
  noOfAvailable: number;
  noOfOnHold: number;
  date: string;
  roomId: number;
  roomName: string;
  propertyId: number;
  propertyName: string;
  status: string;
  restriction: string;
  channelManagerUpdateType: string;
  updateType: string;
  updateCount: number;
  ratePlanCode: string | null;
  ratePlanName: string | null;
  description: string | null;
  fromDate: string | null;
  toDate: string | null;
  imageList: unknown;
  roomDetails: unknown;
  otaAvailabilityList: unknown[];
  stopSellOBE: unknown;
  stopSellOTA: unknown;
}

export interface ApiRoom {
  id: number;
  name: string;
  description: string;
  imageList: ApiImage[];
  maximumOccupancy: number;
  minimumOccupancy: number;
  noOfRooms: number;
  noOfChild: number;
  roomOnlyPrice: number;
  pricePerNight: number | null;
  pricePerWeek: number | null;
  priceFortNight: number | null;
  priceMonthly: number | null;
  extraChargePerPerson: number | null;
  propertyId: number;
  ranking: number;
  ratesAndAvailabilityDtos: ApiRateAvailability[];
  roomFacilities: ApiRoomFacility[];
  roomDetails: unknown;
  shared: boolean;
  size: number | null;
  smoking: number | null;
  dayTrip: boolean;
  businessProductName: unknown;
  hsnCode: string | null;
  minimumLengthOfStay: number;
  maximumLengthOfStay: number;
  totalPriceAmenities: unknown;
  totalPriceRoom: unknown;
  totalPriceServices: unknown;
  sacCode: string;
}

export interface ApiPropertyResponse {
  id: number;
  name: string;
  shortName: string;
  seoFriendlyName: string;
  mobile: string;
  email: string;
  whatsApp: string;
  managerContactNo: string;
  managerEmailAddress: string;
  latitude: string;
  longitude: string;
  localCurrency: string;
  plan: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  businessDescription: string;
  minimumRoooPrice: number;
  propertyStatus: string;
  verified: boolean;
  maximumOccupancy: number;
  minimumOccupancy: number;
  gstNumber: string;
  address: {
    streetName: string;
    streetNumber: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
    locality: string;
    suburb: string;
  };
  roomList: ApiRoom[];
  imageList: ApiImage[];
  propertyServicesList: ApiRoomFacility[];
  taxDetails: Array<{
    name: string;
    percentage: number;
    country: string;
    state: string;
    taxableAmount: number;
  }>;
}

export interface ApiCheckAvailabilityParams {
  fromDate: string;
  toDate: string;
  noOfRooms: number;
  noOfPersons: number;
}
