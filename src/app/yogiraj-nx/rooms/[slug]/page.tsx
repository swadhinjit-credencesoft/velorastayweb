import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon";
import RoomBookingWidget from "@/components/rooms/RoomBookingWidget";
import RoomGallery from "@/components/rooms/RoomGallery";
import { NX_BOOKING_ENGINE_URL, NX_PROPERTY_ID } from "@/config";
import { ROOM_AMENITIES } from "@/data/nx/rooms";
import { SITE_INFO as NX_SITE } from "@/data/nx/site";
import { generateBreadcrumbSchema, generateRoomSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import { checkNxAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "@/app/rooms/[slug]/room-detail.module.scss";

interface RoomPageProps {
  params: { slug: string };
}

const NX_ROOM_FALLBACK_IMAGES: Record<string, string[]> = {
  "double-bed-ac": [
    "/yogirajimg/AKS08605.avif",
    "/yogirajimg/AKS08604.avif",
    "/yogirajimg/AKS08635.avif",
  ],
  "triple-bed-ac": [
    "/yogirajimg/AKS08614.avif",
    "/yogirajimg/AKS08605.avif",
    "/yogirajimg/AKS08635.avif",
  ],
  "suite-room-with-bathtub": [
    "/yogirajimg/AKS08582.avif",
    "/yogirajimg/AKS08584.avif",
    "/yogirajimg/01.avif",
  ],
  "six-bedroom-with-2-washrooms": [
    "/yogirajimg/4.avif",
    "/yogirajimg/3.avif",
    "/yogirajimg/AKS08625.avif",
  ],
};

export async function generateStaticParams() {
  const property = await checkNxAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const property = await checkNxAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  const roomImages = (room.images || []).map((img) => img.src).filter(Boolean);
  const primaryImg = roomImages[0] || NX_ROOM_FALLBACK_IMAGES[room.slug]?.[0] || "/yogirajimg/AKS08605.avif";

  return {
    title: `${room.name} | Hotel Yogiraj NX, Shirdi`,
    description: `${room.name} at Hotel Yogiraj NX, Shirdi starting from ₹${room.price.toLocaleString("en-IN")}/night. ${room.description.slice(0, 140)}. Only 300 meters from Sai Baba Temple.`,
    alternates: { canonical: `/yogiraj-nx/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | Hotel Yogiraj NX`,
      description: room.description.slice(0, 200),
      url: generateCanonicalUrl(`/yogiraj-nx/rooms/${room.slug}`),
      images: [
        {
          url: primaryImg,
          width: 800,
          height: 600,
          alt: room.name,
        },
      ],
    },
  };
}

export default async function NxRoomDetailPage({ params }: RoomPageProps) {
  const property = await checkNxAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  // Dynamic API room facilities
  const apiFacilities = room.facilitiesList ?? [];
  const apiFacilityNames = new Set(apiFacilities.map((f) => f.name.toLowerCase().trim()));

  const fallbackAmenities = ROOM_AMENITIES.filter((a) =>
    room.amenities.includes(a.id) && !apiFacilityNames.has(a.label.toLowerCase().trim())
  );

  // Dynamic API images with fallback support
  const apiImages = (room.images || []).filter(
    (img) => img && typeof img.src === "string" && img.src.trim().length > 0
  );

  const fallbackList = (NX_ROOM_FALLBACK_IMAGES[room.slug] || ["/yogirajimg/AKS08605.avif"]).map(
    (src, idx) => ({
      src,
      alt: `${room.name} - View ${idx + 1}`,
      caption: `View ${idx + 1}`,
    })
  );

  const galleryImages = apiImages.length > 0 ? apiImages : fallbackList;

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://yogirajhotel.com/yogiraj-nx" },
          { name: "Rooms & Rates", url: "https://yogirajhotel.com/yogiraj-nx/rooms" },
          { name: room.name, url: `https://yogirajhotel.com/yogiraj-nx/rooms/${room.slug}` },
        ])}
      />
      <JsonLd schema={generateRoomSchema(room, true)} />

      <div className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.container}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/yogiraj-nx" },
                { label: "Rooms & Rates", href: "/yogiraj-nx/rooms" },
                { label: room.name, href: `/yogiraj-nx/rooms/${room.slug}` },
              ]}
            />
          </div>
        </div>

        <section className={styles.mainSection}>
          <div className={styles.container}>
            <div className={styles.layout}>
              <div className={styles.contentCol}>
                {/* Interactive Dynamic Room Photo Gallery */}
                <RoomGallery
                  images={galleryImages}
                  roomName={room.name}
                  tag={room.tag}
                />

                <div className={styles.header}>
                  <h1 className={styles.roomTitle}>{room.name}</h1>
                  <p className={styles.roomTagline}>{room.tagline}</p>
                </div>

                {/* Key Room Features Grid */}
                <div className={styles.keyFeatures}>
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:users" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Occupancy</span>
                      <strong className={styles.featureValue}>Up to {room.maxOccupancy} Guests</strong>
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:bed" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Bed Setup</span>
                      <strong className={styles.featureValue}>{room.bedConfig}</strong>
                    </div>
                  </div>
                  {room.size && (
                    <div className={styles.featureItem}>
                      <Icon icon="lucide:maximize-2" width={22} height={22} />
                      <div>
                        <span className={styles.featureLabel}>Room Size</span>
                        <strong className={styles.featureValue}>
                          {room.size} {room.sizeUnit}
                        </strong>
                      </div>
                    </div>
                  )}
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:chevrons-up" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Access</span>
                      <strong className={styles.featureValue}>Full Elevator / Lift</strong>
                    </div>
                  </div>
                </div>

                {/* Room Description */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Room Description</h2>
                  <p className={styles.descriptionText}>{room.description}</p>
                </div>

                {/* Amenities & Facilities */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Amenities & Features</h2>
                  <div className={styles.amenitiesGrid}>
                    {apiFacilities.map((fac) => (
                      <div key={fac.id} className={styles.amenityCard}>
                        {fac.logoUrl ? (
                          <div className={styles.amenityImgWrap}>
                            <Image
                              src={fac.logoUrl}
                              alt={fac.name}
                              width={22}
                              height={22}
                              className={styles.amenityImg}
                            />
                          </div>
                        ) : (
                          <Icon
                            icon="lucide:check-circle"
                            width={18}
                            height={18}
                            className={styles.amenityIcon}
                          />
                        )}
                        <span className={styles.amenityName}>{fac.name}</span>
                      </div>
                    ))}
                    {fallbackAmenities.map((amenity) => (
                      <div key={amenity.id} className={styles.amenityCard}>
                        <Icon
                          icon={amenity.icon}
                          width={18}
                          height={18}
                          className={styles.amenityIcon}
                        />
                        <span className={styles.amenityName}>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stay Policies & Temple Guidance */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Stay Policies & Temple Proximity</h2>
                  <div className={styles.policiesGrid}>
                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Check-in & Check-out</h4>
                      <p className={styles.policyText}>
                        Check-in: <strong>{NX_SITE.checkIn}</strong> | Check-out: <strong>{NX_SITE.checkOut}</strong>. Early check-in or late check-out is subject to room availability upon request.
                      </p>
                    </div>
                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Location & Temple Distance</h4>
                      <p className={styles.policyText}>
                        Situated on Pimpalwadi Road, only 300 meters from Shri Sai Baba Samadhi Mandir Gate 2, Hotel Yogiraj NX offers an effortless 2-minute flat walk for morning Kakad Aarti and evening darshan.
                      </p>
                    </div>
                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Cancellation Policy</h4>
                      <p className={styles.policyText}>
                        Free cancellation up to 24 hours prior to scheduled check-in time. Non-refundable within 24 hours of arrival.
                      </p>
                    </div>
                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Pure Vegetarian Dining & Room Service</h4>
                      <p className={styles.policyText}>
                        Our in-house vegetarian kitchen serves fresh pure-veg Maharashtrian, North Indian, and South Indian meals with 24-hour room service for all hotel guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Real-Time Booking Sidebar */}
              <aside className={styles.sidebarCol}>
                <div className={styles.stickyWidget}>
                  <RoomBookingWidget
                    room={room}
                    propertyId={NX_PROPERTY_ID}
                    bookingEngineBaseUrl={NX_BOOKING_ENGINE_URL}
                    hotelName="Hotel Yogiraj NX"
                    whatsappPhone="919903033535"
                    deskPhone="+91 99030 33535"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
