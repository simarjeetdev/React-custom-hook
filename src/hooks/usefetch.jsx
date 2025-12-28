import React from 'react'
import { useEffect, useState } from 'react'

function usefetch(url) {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [err, seterr] = useState(null)

    useEffect(() => {
        setloading(true)
        async function apidata() {
           try {
                let api = await fetch(url)
                let info = await api.json()
                Object.entries(info)
                setdata(info)

           } catch (error) {
             seterr(error)
           }
           setloading(false)
        }
        apidata()
    }, [url])

    return { data, err, loading }
}

export default usefetch
