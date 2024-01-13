import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = (props) => {
  console.log(props);
  const [blogArray, setBlogArray] = useState(props.allBlogs);
//   setBlogArray(props);

  //   const getBlogs = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/blogs");
  //       const parsedData = await response.json();

  //       setBlogArray(parsedData);
  //     } catch (error) {
  //       console.log("Error while fetching: " + error);
  //     }

  //     // console.log("Blog Array: ", parsedData);
  //   };
  //   useEffect(() => {
  //     getBlogs();
  //   }, []);

  return (
    <>
      <div className={styles.blogContainer}>
        <main className={styles.main}>
          <h2 className={styles.subHeading}>Popular Blogs</h2>
          <div className={styles.blogs}>
            {blogArray.map((item) => {
              return (
                <div className="blogItem" key={item.title}>
                  <Link href={`/blogpost/${item.slug}`}>
                    <h4 className={styles.blogTitle}>
                      {item.title ? item.title : "Oops, Title not available!"}
                    </h4>
                  </Link>

                  <h6>
                    {item.author ? item.author : "Oops, Author not available!"}
                  </h6>

                  <p>
                    {item.content
                      ? item.content
                      : "Oops, Content not available!"}
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

//server side rendering masala magic!
export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/blogs");
  const allBlogs = await response.json();

  return {
    props: {allBlogs},
  };
}

export default blog;
