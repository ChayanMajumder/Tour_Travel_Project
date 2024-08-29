import React from 'react'
import BlogCard from './BlogCard'
import BlogsImg1 from "../../assets/Images/BlogsImages/BlogsImg1.jpg"
import BlogsImg2 from "../../assets/Images/BlogsImages/BlogsImg2.jpg"

function BlogComp() {
    const BlogsData = [
        {
            id: 1,
            title: "The 10 best places to visit in india",
            image: BlogsImg1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.",
            author: "Chayan Majumder",
            date: "10-08-2024",
        },
        {
            id: 2,
            title: "The 10 best places to visit in india",
            image: BlogsImg2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.",
            author: "Chayan Majumder",
            date: "10-08-2024",
        },
        {
            id: 3,
            title: "The 10 best places to visit in india",
            image: BlogsImg1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.",
            author: "Chayan Majumder",
            date: "10-08-2024",
        },
        {
            id: 4,
            title: "The 10 best places to visit in india",
            image: BlogsImg1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.",
            author: "Chayan Majumder",
            date: "10-08-2024",
        },
        {
            id: 5,
            title: "The 10 best places to visit in india",
            image: BlogsImg1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem tempora est totam? Expedita harum cum praesentium illum blanditiis incidunt, earum debitis mollitia voluptatem ut porro vero magnam provident quia.",
            author: "Chayan Majumder",
            date: "10-08-2024",
        },
    ] 
  return (
    <>
    
     <div className="">
        <div className="container">
            <h2 className='my-6 border-l-8 border-primary/50 py-2 pl-1 text-3xl font-bold'>Our Latest Blogs</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {
                    BlogsData.map((item, index) => (
                        <BlogCard key={index} {...item} />
                    ) )
                }
            </div>
        </div>
        </div> 
    </>
  )
}

export default BlogComp
