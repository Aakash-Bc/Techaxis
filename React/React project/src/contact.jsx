import { useState } from "react"

export function Contact(){

    const [detail, setDetail]=useState([
    {
        id:1,
        username:"Aakash",
        contact:9864148519,
        address:"kathmandu",
        img :"https://tse3.mm.bing.net/th/id/OIP.YFmJZ1hmnsbXTGc7zCaiPgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id:2,
        username:"Prakash",
        contact:9865148519,
        address:"Lalitpur",
        img :"https://tse3.mm.bing.net/th/id/OIP.YFmJZ1hmnsbXTGc7zCaiPgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id:3,
        username:"Anu",
        contact:9864148518,
        address:"Butwal",
        img:"https://tse3.mm.bing.net/th/id/OIP.YFmJZ1hmnsbXTGc7zCaiPgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    }
    ]
);





return (
  <>
    <h1>Contact</h1>
    {/* user details */}

    <h1>The user details</h1>
   <div className="user">
     {detail.map((item) => (
      <div className="usercard" key={item.id}>
        <img src={item.img} alt={item.username} className="userImage" />
        <p>{item.id}</p>
        <h1>{item.username}</h1>
        <h4>{item.contact}</h4>
        <h4>{item.address}</h4>
      </div>
    ))}
   </div>
  </>
);

}
export default Contact