import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon";
import RoomBookingWidget from "@/components/rooms/RoomBookingWidget";
import RoomGallery from "@/components/rooms/RoomGallery";
import { ROOM_AMENITIES } from "@/data/rooms";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema, generateRoomSchema } from "@/utils/schema";
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

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} | Hotel Yogiraj, Shirdi`,
    description: `${room.name} at Hotel Yogiraj, Shirdi starting from ₹${room.price.toLocaleString("en-IN")}/night. ${room.description.slice(0, 140)}. Only 300 meters from Sai Baba Temple.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | Hotel Yogiraj`,
      description: room.description.slice(0, 200),
      url: generateCanonicalUrl(`/rooms/${room.slug}`),
      images: room.images.map((img) => ({
        url: img.src,
        width: 800,
        height: 600,
        alt: img.alt,
      })),
    },
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const apiFacilities = room.facilitiesList ?? [];
  const apiFacilityNames = new Set(
    apiFacilities.map((f) => f.name.toLowerCase().trim())
  );

  const complementaryAmenities = room.amenities
    .map((slug) => {
      const match = ROOM_AMENITIES.find(
        (a) => a.id.toLowerCase() === slug.toLowerCase()
      );
      if (match && !apiFacilityNames.has(match.label.toLowerCase().trim())) {
        return match;
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
      <JsonLd schema={generateRoomSchema(room)} />

      <div className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.container}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Rooms & Rates", href: "/rooms" },
                { label: room.name, href: `/rooms/${room.slug}` },
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
                  images={room.images}
                  roomName={room.name}
                  tag={room.tag}
                />

                <div className={styles.header}>
                  <h1 className={styles.roomTitle}>{room.name}</h1>
                  <p className={styles.roomTagline}>{room.tagline}</p>
                </div>

                {/* Quick Room Stats derived from API */}
                <div className={styles.keyFeatures}>
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:bed" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Bed Setup</span>
                      <strong className={styles.featureValue}>{room.bedConfig}</strong>
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:users" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Max Occupancy</span>
                      <strong className={styles.featureValue}>{room.maxOccupancy} Guests</strong>
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <Icon icon="lucide:maximize-2" width={22} height={22} />
                    <div>
                      <span className={styles.featureLabel}>Room Size</span>
                      <strong className={styles.featureValue}>
                        {room.size} {room.sizeUnit}
                      </strong>
                    </div>
                  </div>
                  {room.noOfRooms !== undefined && (
                    <div className={styles.featureItem}>
                      <Icon icon="lucide:layout-grid" width={22} height={22} />
                      <div>
                        <span className={styles.featureLabel}>Total Rooms</span>
                        <strong className={styles.featureValue}>{room.noOfRooms} Units</strong>
                      </div>
                    </div>
                  )}
                </div>

                {/* Room Description */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>About This Room</h2>
                  <p className={styles.descriptionText}>{room.description}</p>
                </div>

                {/* Official API Facilities & Amenities */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Room Facilities & Amenities</h2>
                  <div className={styles.amenitiesGrid}>
                    {apiFacilities.map((fac, idx) => (
                      <div key={fac.id ?? idx} className={styles.amenityCard}>
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
                    {complementaryAmenities.map((amenity) => (
                      amenity && (
                        <div key={amenity.id} className={styles.amenityCard}>
                          <Icon
                            icon={amenity.icon || "lucide:check-circle"}
                            width={18}
                            height={18}
                            className={styles.amenityIcon}
                          />
                          <span className={styles.amenityName}>{amenity.label}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Property Policies */}
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Stay & Hotel Information</h2>
                  <div className={styles.policiesGrid}>
                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Location & Temple Proximity</h4>
                      <p className={styles.policyText}>
                        Situated on Pimpalwadi Road, only 300 meters from Shri Sai Baba Samadhi Mandir Gate 2, Hotel Yogiraj offers utmost convenience for morning Kakad Aarti and evening darshan.
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

                    <div className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>Pure Vegetarian Dining</h4>
                      <p className={styles.policyText}>
                        Freshly prepared pure vegetarian breakfast, lunch, and dinner available with round-the-clock room service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Live Booking Sidebar */}
              <aside className={styles.sidebarCol}>
                <div className={styles.stickyWidget}>
                  <RoomBookingWidget room={room} />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
