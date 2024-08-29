import React from 'react'
import PlacesCard from './PlacesCard'
import Img1 from "../../assets/Images/Img1.jpg"
import Img2 from "../../assets/Images/Img2.jpg"
import Img3 from "../../assets/Images/Img3.jpg"

function Places() {
    const PlacesData = [
        {
            img: Img1,
            title: "Boat Tour",
            location: "Dubai",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto modi repudiandae odit, ipsa eaque officiis dolores!",
            price: 10000,
            type: "Cultural Relax",
        },
        {
            img: Img2,
            title: "Taj Mahal",
            location: "India",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto modi repudiandae odit, ipsa eaque officiis dolores!",
            price: 13000,
            type: "Cultural Relax",
        },
        {
            img: Img3,
            title: "Ladakh Tour",
            location: "India",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto modi repudiandae odit,",
            price: 33000,
            type: "Cultural Relax",
        },
        {
            img: Img1,
            title: "Boat Tour",
            location: "Dubai",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto modi repudiandae odit, ipsa eaque officiis dolores!",
            price: 10000,
            type: "Cultural Relax",
        },
    ]
  return (
    <>
    
      <div className='bg-gray-50 py-10'>
        <div className='container'>
            <h1 className='my-6 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to Visit</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    PlacesData.map((item, index) => (
                        <PlacesCard key={index} {...item} />
                    ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Places
