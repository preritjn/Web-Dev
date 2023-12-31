function BlogList({blogs,title,handleDelete}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <div className="blog">
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </div>
                        <button className="btn" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;