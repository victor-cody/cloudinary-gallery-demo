import Link from "next/link";

import Container from "@components/Container";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">My Optimized Image Gallery With Cloudinary</Link>
        </p>
      </Container>
    </header>
  );
};

export default Header;
