"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PressRelease.module.scss";

export default function PressRelease(
  {
    title,
    subtitle,
    author,
    date,
    heroImage,
    sections = [],
  } : {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  heroImage?: string;
  sections: {
    heading?: string;
    content?: string;
    image?: string;
    quote?: string;
  }[];
}) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <h1 className={styles.title}>{title}</h1>

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <div className={styles.meta}>
          {author && <span>By {author}</span>}
          {date && <span>• {date}</span>}
        </div>
      </motion.div>

      {/* Hero Image */}
      {heroImage && (
        <div className={styles.heroWrapper}>
          <Image
            src={heroImage}
            alt={title}
            width={1200}
            height={700}
            className={styles.heroImage}
          />
        </div>
      )}

      {/* Content Sections */}
      <div className={styles.sections}>
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={styles.section}
          >
            {section.heading && (
              <h2 className={styles.sectionHeading}>
                {section.heading}
              </h2>
            )}

            {section.content && (
              <p className={styles.sectionContent}>
                {section.content}
              </p>
            )}

            {section.image && (
              <div className={styles.sectionImageWrapper}>
                <Image
                  src={section.image}
                  alt={section.heading || "section image"}
                  width={1000}
                  height={600}
                  className={styles.sectionImage}
                />
              </div>
            )}

            {section.quote && (
              <blockquote className={styles.quote}>
                “{section.quote}”
              </blockquote>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className={styles.footer}>
        <p>
          For media inquiries, please contact
          <span className={styles.email}> press@yourcompany.com</span>
        </p>
      </div>
    </div>
  );
}