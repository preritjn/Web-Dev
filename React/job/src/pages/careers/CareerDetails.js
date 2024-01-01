import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {

    const career = useLoaderData()

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary : {career.salary}</p>
            <p>Location : {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam itaque natus nihil ipsam dignissimos eveniet voluptatem facilis recusandae autem, sit iusto quae nemo doloribus numquam minus ipsa odit laudantium.</p>
            </div>
        </div>
    )
}

export const careerDetailsLoader = async ({params}) => {
    const {id} = params
    const response = await fetch('http://localhost:8000/careers/'+id)
    if(!response.ok)
        throw Error('Unable to fetch career details')
    return response.json()
}