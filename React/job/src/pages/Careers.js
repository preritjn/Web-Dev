import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career=>(
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>{career.location}</p>
                </Link>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    const response = await fetch('http://localhost:8000/careers')
    // console.log(response.json())
    return response.json()
}