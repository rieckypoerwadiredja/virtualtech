import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
     fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson)
            setLoading(false)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
   }, [url])
   return {data, error, loading}
}

export default useFetch