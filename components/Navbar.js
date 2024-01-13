import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <Link href="/">
          <li>
            {/* <a href="">Home</a> */}
            Home
          </li>
        </Link>
        <Link href="/blog">
          <li>
            {/* <a href="">Home</a> */}
            Blogs
          </li>
        </Link>
        <Link href="/about">
          <li>About</li>
          {/* <a href="">About</a> */}
        </Link>
        <Link href="/contact">
          {/* <a href="">Contact</a> */}
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
