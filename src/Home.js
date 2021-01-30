import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem ipsum..", author: "mario", id: 1 },
    { title: "welcome party", body: "lorem ipsum..", author: "yoshi", id: 2 },
    { title: "web dev top tips", body: "lorem ipsum..", author: "mario", id: 3 }
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = id => {
    // id does not match the one we clicked --> keep it/them!
    // filters out the where delete btn is clicked
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("use effect ran");
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  )
}

export default Home
