import Button from "@/components/ui/Button/Button";
import RoomCard from "@/components/ui/Card/Card";
import PriceDisplay from "@/components/ui/PriceDisplay/PriceDisplay";
import Icon from "@/components/Icon";
import { ROOMS_CONTENT } from "@/data/rooms";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "./FeaturedRooms.module.scss";

export default async function FeaturedRooms() {
  const property = await checkAvailability();
  const popularRooms = (property?.roomList ?? [])
    .map(apiRoomToRoomType)
    .filter((room) => room.popular);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{ROOMS_CONTENT.eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{ROOMS_CONTENT.heading}</h2>
          <p className={styles.description}>{ROOMS_CONTENT.description}</p>
        </div>

        <div className={styles.grid}>
          {popularRooms.map((room) => (
            <div key={room.id} className={styles.cardItem}>
              <RoomCard image={room.images[0]?.src} badge={room.tag}>
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
                    <Button variant="outline" size="sm" href={`/rooms/${room.slug}`}>
                      View Details
                    </Button>
                  </div>
                </div>
              </RoomCard>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button variant="secondary" size="lg" href="/rooms" icon="lucide:arrow-right" iconPosition="right">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
