import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Prerit')
    const [isPending,setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title,body,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            console.log('New blog added')
            navigate("/")
        })
    }

    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input 
                    id="title" 
                    type="text" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <label htmlFor="body">Blog body:</label>
                <textarea 
                    id="body"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    required
                >
                </textarea>
                <label htmlFor="author">Blog author:</label>
                <select id="author" value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Prerit">Prerit</option>
                    <option value="Kumar">Kumar</option>
                    <option value="Jain">Jain</option>
                </select>
                {!isPending && <button>Add</button>}
                {isPending && <button>Adding...</button>}
            </form>
        </div>
    )
}