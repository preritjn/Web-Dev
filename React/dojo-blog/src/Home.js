import BlogList from "./BlogList"
import useFetch from "./useFetch"

function Home() {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')   

    return (  
        <div className="home">
            {isPending && <div className='loading'>Data Loading</div>}
            {error && <div className='error'>error</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
    )
}
 
export default Home