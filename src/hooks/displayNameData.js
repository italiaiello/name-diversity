import {useState, useEffect} from 'react'


export const useDataFetch = (url, dependencies) => {

    const [nameResult, setNameResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (dependencies === '') return
        setIsLoading(true)
        console.log('Fetching data...')
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setNameResult(data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setNameResult("Couldn't find anything :(")
            setIsLoading(false)
        })
    }, [url])

    return [nameResult, isLoading];
}