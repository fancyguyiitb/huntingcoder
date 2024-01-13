import * as fs from "fs";

export default async function handler(req, res) {
  // fs.promises.readdir("blogdata", (err, data) => {
  //   if (err) {
  //     res
  //       .status(500)
  //       .json({ error: "Something went wrong while fetching all blogs" });
  //   }
  //   // console.log(data);
  //   let allBlogs = [];
  //   data.forEach((item) => {
  //     fs.readFile("blogdata/" + item, (d) => {
  //       allBlogs.push(d);
  //     });
  //   });
  //   res.status(200).json(allBlogs);
  // });

  let data = await fs.promises.readdir("blogdata");
  let blogFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    blogFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(blogFile);
    const jsonBlogFile = JSON.parse(blogFile);
    allBlogs.push(jsonBlogFile);
  }

  res.status(200).json(allBlogs);
}
