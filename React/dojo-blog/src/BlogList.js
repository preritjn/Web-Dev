import { Link } from "react-router-dom";

export default function BlogList({blogs,title}) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
        {blogs.map((blog)=> {
          return (
            <div className="blog-preview" key={blog.id}>
              <div className="blog">
                <Link to={`/blogs/${blog.id}`} >
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  )
}