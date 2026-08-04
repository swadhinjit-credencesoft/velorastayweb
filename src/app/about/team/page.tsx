import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon/Icon";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { TEAM_MEMBERS, AWARDS } from "@/data/team";
import styles from "./TeamPage.module.scss";

export const metadata: Metadata = {
  title: "Our Team | Velora Stays",
  description:
    "Meet the dedicated team behind Velora Stays — passionate hospitality professionals committed to your comfort.",
  alternates: { canonical: "/about/team" },
  openGraph: {
    title: "Our Team | Velora Stays",
    description:
      "Meet the dedicated team behind Velora Stays — passionate hospitality professionals committed to your comfort.",
  },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://velorastays.in" },
          { name: "About", url: "https://velorastays.in/about" },
          { name: "Team", url: "https://velorastays.in/about/team" },
        ])}
      />
      <PageHero
        eyebrow="Our Team"
        heading="Meet Our Team"
        description="The people who make your stay special."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Team", href: "/about/team" },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Dedicated Hospitality</span>
            <h2 className={styles.heading}>The Faces Behind Velora Stays</h2>
            <p className={styles.description}>
              From first enquiry to farewell, our team works around the clock to
              craft a stay worth remembering.
            </p>
          </div>

          <div className={styles.grid}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className={styles.card}>
                <div className={styles.cardBody}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                  {member.social && member.social.length > 0 && (
                    <div className={styles.socials}>
                      {member.social.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${social.platform}`}
                          className={styles.socialLink}
                        >
                          <Icon
                            icon={`lucide:${social.platform}`}
                            width={16}
                            height={16}
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Recognition</span>
            <h2 className={styles.heading}>Awards &amp; Recognition</h2>
            <p className={styles.description}>
              We are honoured by the trust and appreciation of our guests and
              partners.
            </p>
          </div>

          <div className={styles.awardsGrid}>
            {AWARDS.map((award) => (
              <div key={award.id} className={styles.awardCard}>
                <span className={styles.awardYear}>{award.year}</span>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardOrg}>{award.organization}</p>
                <p className={styles.awardDesc}>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
