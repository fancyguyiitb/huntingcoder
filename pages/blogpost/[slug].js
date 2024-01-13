import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (myBlog) => {
    //destructuring the requested blog 
  const [blog, setBlog] = useState(myBlog.myBlog);
  console.log(blog);
  //   const router = useRouter();

  //   useEffect(() => {
  //     if(!router.isReady) return;
  //     const { slug } = router.query;
  //     const getBlogs = async () => {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:3000/api/getblog?slug=${slug}`
  //         );
  //         const parsedData = await response.json();

  //         await setBlog(parsedData);
  //       } catch (error) {
  //         console.log("Error while fetching: " + error);
  //       }

  //       console.log("Blog: ", blog);
  //     };
  //     //we use router.isReady to solve the problem of nesting of hooks
  //   }, [router.isReady]);

  return (
    <>
      <main className={styles.main}>
        <h1>Title: {blog.title}</h1>
        <p>{blog.content}</p>
      </main>
    </>
  );
};


// fetching the blog on server itself, and doing server side rendering
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const response = await fetch(
    `http://localhost:3000/api/getblog?slug=${slug}`
  );

  const myBlog = await response.json();

  return {
    props: { myBlog },
  };
}

// export async function getStaticPaths() {
//     return {
//       paths: [
//         {params: {...}}
//       ],
//       fallback: true
//     };
//   }

// export async function getStaticProps(context) {
//     const { slug } = context.query;
//     const response = await fetch(
//       `http://localhost:3000/api/getblog?slug=${slug}`
//     );
  
//     const myBlog = await response.json();
  
//     return {
//       props: { myBlog },
//     };
//   }

export default slug;
