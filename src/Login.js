import React, { useEffect, useState } from 'react'

export default function Login() {
  const [user, setUser] = useState([]);
  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      return response.json();
    }).then((data) => {
      // console.log(data)
      let data1 = data.results
      setUser(data1)
    })
  }

  useEffect(() => {
    fetchdata();

  }, []);

  return (
    <>
      <p>You clickedtimes</p>


    </>
  )
}




