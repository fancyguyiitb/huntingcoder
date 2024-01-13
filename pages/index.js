import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
//a much optimized version of the img tag; alloows us to lazy load images, image aobly rendered when it enters the viewport, page loading speed is not penalized
import Image from "next/image";
import Link from "next/link";
//this is NOT allowed; this avoids conflicts
// import style from "../styles/style.css";

import homeImg from "../public/homeImg.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <style jsx>
        {`
        .titleSpan {
          color: aqua;
        }
        `}
      </style> */}
      <Head>
        <title>Hunting Coder</title>
        <link rel="icon" href="/favicon.ico" />
        {/* we can use script tag to add js in nextjs */}
        {/* <script src="/sc.js"></script> */}
      </Head>
      {/* but sometimes JS can taek too long to load, thus we sueScript element to lazy load it */}
      {/* <Script src="./sc.js" strategy="lazyOnload"></Script> */}

      <main>
        <h1 className={styles.title}>
          <span className="titleSpan">Welcome to Hunting Coder!</span>
        </h1>

        <div className={styles.homeImgDiv}>
          <Image src={homeImg} height={200} width={200}></Image>
        </div>

        <p className={styles.description}>
          Coding blogs <code>by a coder</code>
        </p>
        {/* <Image src="https://img.freepik.com/free-vector/gradient-purple-color-background-modern-wave-abstract-design_343694-2344.jpg" width={100} height={100}></Image> */}

        <h2 className={styles.subHeading}>Popular Blogs</h2>
        <div className="blogs">
          <div className="blogItem">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptatum!
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              provident quae repellendus ducimus ut minus, perferendis aperiam,
              autem eos ad distinctio! Voluptatum reprehenderit minima suscipit
              eaque delectus adipisci aspernatur nisi.
            </p>
          </div>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      <style jsx>{`
        main {
          padding: 5rem 4rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          justify-content: flex-start;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
