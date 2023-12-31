import { useState,useEffect } from "react"

function useFetch(url) {
    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url,{signal:abortController.signal})
            .then(res => {
                if(!res.ok)
                    throw Error("This resource can't be fetched")
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                if(error.name === 'AbortError')
                    console.log(error.message)
                else {
                    console.log(error.message)
                    setError(error.message)
                    setIsPending(false)
                }
            })
        return () => abortController.abort()
    },[url])

    return {data, isPending, error}
}

export default useFetch;