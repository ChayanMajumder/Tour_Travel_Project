import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({title, image, description, author, date}) {
  return (
    <>
      <Link
      to={`/blogs/${title}`}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      state={{title, image, description, author, date}}
      >

      <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl'>
        <div className="overflow-hidden">
            <img className='mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:scale-110' src={image} alt="" />
        </div>
        <div className='px-3'>
        <div className="flex justify-between items-center py-2 text-slate-600">
            <p>{date}</p>
            <p>by {author}</p>
        </div>
        <div className="space-y-2">
            <h4 className=' line-clamp-1 font-bold'>{title}</h4>
            <p className='line-clamp-2'>{description}</p>
        </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default BlogCard
