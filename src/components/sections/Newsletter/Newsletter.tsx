"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/Icon/Icon";
import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Icon icon="lucide:mail" width={32} height={32} className={styles.icon} />
          <h2 className={`${styles.heading} font-oswald`}>Stay in the Loop</h2>
          <p className={styles.description}>
            Subscribe to our newsletter for exclusive offers, travel tips, and the latest updates from Vellora Stays.
          </p>

          {submitted ? (
            <div className={styles.success}>
              <Icon icon="lucide:check-circle" width={20} height={20} />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.input}
                required
              />
              <Button variant="accent" size="md" type="submit">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
