import { useState } from "react";

function Home() {
    const [blogs, setBlogs] = useState([
        {
            title: 'My new website',
            body: 'lorem ipsum...',
            author: 'Prerit',
            id: 1
        },
        {
            title: 'Welcome Party!',
            body: 'lorem ipsum...',
            author: 'Kumar',
            id: 2
        },
        {
            title: 'Ole Ole',
            body: 'lorem ipsum...',
            author: 'Jain',
            id: 3
        },
    ]);
    return (  
        <div className="home">
            {blogs.map((blog)=> {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                );
            })}
        </div>
    );
}
 
export default Home;