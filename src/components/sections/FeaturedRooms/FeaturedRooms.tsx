import Button from "@/components/ui/Button/Button";
import RoomCard from "@/components/ui/Card/Card";
import PriceDisplay from "@/components/ui/PriceDisplay/PriceDisplay";
import Icon from "@/components/Icon";
import { ROOMS_CONTENT } from "@/data/rooms";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "./FeaturedRooms.module.scss";

interface FeaturedRoomsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  roomsHref?: string;
  roomBaseHref?: string;
  roomImagesMap?: Record<string, string>;
}

export default async function FeaturedRooms({
  eyebrow = ROOMS_CONTENT.eyebrow,
  heading = ROOMS_CONTENT.heading,
  description = ROOMS_CONTENT.description,
  roomsHref = "/rooms",
  roomBaseHref = "/rooms",
  roomImagesMap,
}: FeaturedRoomsProps = {}) {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);
  const popularRooms = rooms.filter((room) => room.popular);
  const displayRooms = popularRooms.length > 0 ? popularRooms : rooms.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.grid}>
          {displayRooms.map((room) => {
            const displayImage =
              (roomImagesMap && roomImagesMap[room.slug]) ||
              room.images[0]?.src ||
              "/yogirajhero2.jpeg";

            return (
              <div key={room.id} className={styles.cardItem}>
                <RoomCard image={displayImage} badge={room.tag}>
                  <div className={styles.roomInfo}>
                    <h3 className={styles.roomName}>{room.name}</h3>
                    <p className={styles.roomTagline}>{room.tagline}</p>
                    <div className={styles.roomMeta}>
                      {room.size && room.sizeUnit && (
                        <span className={styles.metaItem}>
                          <Icon icon="lucide:maximize-2" width={14} height={14} />
                          {room.size} {room.sizeUnit}
                        </span>
                      )}
                      <span className={styles.metaItem}>
                        <Icon icon="lucide:users" width={14} height={14} />
                        Up to {room.maxOccupancy}
                      </span>
                      <span className={styles.metaItem}>
                        <Icon icon="lucide:bed" width={14} height={14} />
                        {room.bedConfig}
                      </span>
                    </div>
                    <div className={styles.roomFooter}>
                      <PriceDisplay
                        price={room.price}
                        currency={room.currency}
                        unit={`/ ${room.priceUnit}`}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        href={`${roomBaseHref}/${room.slug}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </RoomCard>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <Button
            variant="secondary"
            size="lg"
            href={roomsHref}
            icon="lucide:arrow-right"
            iconPosition="right"
          >
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
