import React, { useState, useEffect } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "./cards.css"
function Card() {
    const [user, setUser] = useState([]);

    // const fetchData = () => {
    //     fetch("https://randomuser.me/api/?nat=us&results=18&page=1")
    //         .then((response) => {
    //             return response.json();
    //         }).then((data) => {
    //             let data1 = data.results
    //             console.log(data1);
    //             setUser(data1)
    //         })
    // }

    const fetchData = async () => {
        await fetch("https://randomuser.me/api/?nat=us&results=18&page=1")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let data1 = data.results
                console.log(data1);
                setUser(data1)
            })
    }




    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>

                        <th scope='col'> Name</th>
                        <th scope='col '> City</th>
                        <th scope='col'>Number</th>
                    </tr>

                </thead>
                <tbody>

                    {user.map(data => (

                        <tr>
                            {/* key={data.id.value}  */}



                            <td scope='row'>
                                {data.name.first +
                                    " " +
                                    data.name.last}
                            </td>
                            <td scope='row'>
                                {data.location.city +
                                    ", " +
                                    data.location.state}
                            </td>
                            <td scope='row'>{data.phone}</td>

                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Card