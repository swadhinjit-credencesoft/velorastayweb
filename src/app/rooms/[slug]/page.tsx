import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon";
import RoomBookingWidget from "@/components/rooms/RoomBookingWidget";
import { ROOM_AMENITIES } from "@/data/rooms";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "./room-detail.module.scss";

interface RoomPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} | ${SITE_INFO.name}, Shirdi`,
    description: `${room.name} at ${SITE_INFO.name}, Shirdi starting from ₹${room.price.toLocaleString("en-IN")}/night. ${room.description.slice(0, 140)}. Minutes from Sai Baba Temple.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${SITE_INFO.name}`,
      description: room.description.slice(0, 200),
      url: generateCanonicalUrl(`/rooms/${room.slug}`),
      images: [
        {
          url: room.images[0]?.src || "/yogirajhero2.jpeg",
          width: 800,
          height: 600,
          alt: room.name,
        },
      ],
    },
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  // Combine live API facilities with fallback amenities
  const apiFacilities = room.facilitiesList ?? [];
  const apiFacilityNames = new Set(apiFacilities.map((f) => f.name.toLowerCase().trim()));

  const complementaryAmenities = room.amenities
    .map((id) => {
      const found = ROOM_AMENITIES.find((a) => a.id === id);
      if (found && !apiFacilityNames.has(found.label.toLowerCase())) {
        return found;
      }
      return null;
    })
    .filter(Boolean);

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms & Rates", url: `${SITE_INFO.url}/rooms` },
          { name: room.name, url: `${SITE_INFO.url}/rooms/${room.slug}` },
        ])}
      />
      <Breadcrumb
        items={[
          { label: "Rooms & Rates", href: "/rooms" },
          { label: room.name, href: `/rooms/${room.slug}` },
        ]}
      />

      <section className={styles.page}>
        <div>
          {room.images.length > 0 && (
            <div className={styles.gallery}>
              <Image
                src={room.images[0].src}
                alt={room.images[0].alt}
                width={1200}
                height={600}
                className={styles.galleryMain}
                priority
              />
              {room.images.length > 1 && (
                <div className={styles.galleryGrid}>
                  {room.images.slice(1).map((img, idx) => (
                    <Image
                      key={`${img.id}-${idx}`}
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className={styles.galleryGridImg}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={styles.contentGrid}>
            <div className={styles.main}>
              {room.tag && <span className={styles.tag}>{room.tag}</span>}
              <h1 className={styles.title}>{room.name}</h1>
              <p className={styles.tagline}>{room.tagline}</p>

              {/* Quick Room Stats derived from API */}
              <div className={styles.quickStats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Bed Setup</span>
                  <strong>{room.bedConfig}</strong>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Max Occupancy</span>
                  <strong>{room.maxOccupancy} Guests</strong>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Room Size</span>
                  <strong>{room.size} {room.sizeUnit}</strong>
                </div>
                {room.noOfRooms !== undefined && (
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Total Rooms</span>
                    <strong>{room.noOfRooms} Units</strong>
                  </div>
                )}
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Min Stay</span>
                  <strong>{room.minStay} Night</strong>
                </div>
              </div>

              {/* Room Description */}
              <h2 className={styles.sectionTitle}>About This Room</h2>
              <p className={styles.bodyText}>{room.description}</p>

              {/* Official API Facilities & Amenities */}
              <h2 className={styles.sectionTitle}>Room Facilities & Amenities</h2>
              <div className={styles.amenitiesGrid}>
                {apiFacilities.map((fac, idx) => (
                  <div key={fac.id ?? idx} className={styles.amenityItem}>
                    {fac.logoUrl ? (
                      <Image
                        src={fac.logoUrl}
                        alt={fac.name}
                        width={22}
                        height={22}
                        className={styles.facilityIcon}
                      />
                    ) : (
                      <Icon
                        icon="lucide:check-circle"
                        width={18}
                        height={18}
                        className={styles.facilityIconCheck}
                      />
                    )}
                    <span>{fac.name}</span>
                  </div>
                ))}
                {complementaryAmenities.map((amenity) => (
                  amenity && (
                    <div key={amenity.id} className={styles.amenityItem}>
                      <Icon
                        icon={amenity.icon || "lucide:check-circle"}
                        width={18}
                        height={18}
                        className={styles.facilityIconCheck}
                      />
                      <span>{amenity.label}</span>
                    </div>
                  )
                ))}
              </div>

              {/* Property Policies */}
              <h2 className={styles.sectionTitle}>Stay & Hotel Information</h2>
              <div className={styles.policyItem}>
                <h4 className={styles.policyTitle}>Location & Temple Proximity</h4>
                <p className={styles.policyText}>
                  Situated on Pimpalwadi Road, just a 2-minute walk from the sacred Sai Baba Temple, Hotel Yogiraj offers utmost convenience for morning Kakad Aarti and darshan.
                </p>
              </div>

              <div className={styles.policyItem}>
                <h4 className={styles.policyTitle}>Check-in & Check-out</h4>
                <p className={styles.policyText}>
                  Standard check-in is from {SITE_INFO.checkIn} and check-out is by {SITE_INFO.checkOut}. 24-hour front desk assistance is available for early arrivals and luggage storage.
                </p>
              </div>

              <div className={styles.policyItem}>
                <h4 className={styles.policyTitle}>Pricing & Meal Plan</h4>
                <p className={styles.policyText}>
                  Rates shown are for European Plan (Room Only). Taxes are calculated as per applicable GST slabs at booking.
                </p>
              </div>
            </div>

            {/* Sticky Live Booking Sidebar */}
            <div className={styles.sidebar}>
              <RoomBookingWidget room={room} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
