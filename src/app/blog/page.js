"use client";
import { useEffect, useState } from "react";

async function getPost() {
  let res = await fetch("http://localhost:7000/posts");
  return res.json();
}

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const articlePerPage = 2;
  const startIndex = (page - 1) * articlePerPage;
  const endIndex = startIndex + articlePerPage;

  useEffect(() => {
    getPost().then((data) => setPosts(data));
  }, []);
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (endIndex < posts.length) {
      setPage(page + 1);
    }
  };
  // console.log(posts);
  const articles = posts.slice(startIndex, endIndex);
  return (
    <main>
      <h1>Individual blog posts</h1>
      {/* display some data from the api */}
      <ul className="grid grid-cols-2 gap-4">
        {articles.map((post) => (
          <li key={post.id}>
            <a href="/">
              <div>
                <img src={post.image} className="" width={500}  alt="" />
              </div>
              <div>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {/*  */}
      <div className="flex justify-between items-center w-[80%] m-auto pt-8 border-t border-black mt-4 mb-6">
        <div>
          <button
            onClick={handlePrevPage}
            className="flex gap-2"
            disabled={page === 1}
          >
            <span>&#x2B05;</span>
            <p>Prev</p>
          </button>
        </div>
        <div>
          <button
            onClick={handleNextPage}
            className="flex gap-2"
            disabled={endIndex >= posts.length}
          >
            <span> &#x27A1;</span>
            <p>Next</p>
          </button>
        </div>
      </div>
    </main>
  );
}
