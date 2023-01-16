import { useState } from "react";
import Head from "next/head";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Button from "@components/Button";

import people from "@data/people";
import animals from "@data/animals";
import space from "@data/space";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [gravity, setGravity] = useState("center");

  return (
    <Layout>
      <Head>
        <title>Image Gallery</title>
        <meta name="description" content="My favorite pictures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1 className="sr-only">Image Gallery</h1> */}

      <Section>
        <Container>
          <h2 className={styles.heading}>People</h2>

          <ul className={styles.imageGrid}>
            {people.map((image) => {
              return (
                <li key={image.link}>
                  <CldImage
                    deliveryType="fetch"
                    width={2000}
                    height={2000}
                    src={image.image}
                    alt={image.alt}
                    loading="lazy"
                    crop="thumb"
                    gravity={gravity}
                    // zoom="0.05"
                    sizes="(min-width: 480px) 50vw,
                          (max-width: 768px) 33vw,
                    (max-width: 976px) 25vw,
                       90vw"
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Animals</h2>

          <ul className={styles.imageGrid}>
            {animals.map((image) => {
              return (
                <li key={image.link}>
                  <CldImage
                    deliveryType="fetch"
                    width={2000}
                    height={2000}
                    src={image.image}
                    alt={image.alt}
                    loading="lazy"
                    crop="thumb"
                    gravity={gravity}
                    // zoom="0.05"
                    sizes="(min-width: 480px) 50vw,
                          (max-width: 768px) 33vw,
                    (max-width: 976px) 25vw,
                       90vw"
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Space</h2>

          <ul className={styles.imageGrid}>
            {space.map((image) => {
              return (
                <li key={image.link}>
                  <CldImage
                    deliveryType="fetch"
                    width={2000}
                    height={2000}
                    src={image.image}
                    alt={image.alt}
                    loading="lazy"
                    crop="thumb"
                    gravity={gravity}
                    zoom="0.5"
                    sizes="(min-width: 480px) 50vw,
                          (max-width: 768px) 33.2vw,
                    (max-width: 976px) 25vw,
                       92vw"
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}
