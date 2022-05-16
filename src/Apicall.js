import React, { useEffect, useState } from 'react'

export default function Apicall() {
    const [data, setData] = useState([])

    useEffect(() => {
        loadData();
    }, [])
    //For Understanding
    const loadData = async () => {
        await fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))

    }
    console.log(data)
    return (
        <>
            {
                data.map(user => (
                    <div key={user.id}>{user.name},{user.username}</div>
                ))
            }

            <p>teth</p>
        </>
    )
}
