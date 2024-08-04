import InstagramCommentsImplementation from '@/implementation/InstagramCommentsImplementation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InstagramCommentsPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Instagram Comments <span className="text-indigo-600">Component</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        An in-depth look at the Instagram Comments implementation
      </p>
      <Link 
        href={"/preview/instagram-comments"}
        className="block mb-16 transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <Image
          height={1000}
          width={1280}
          className='mx-auto rounded-lg shadow-lg'
          src={"/instagram-comments/cover.png"}
          alt='Cover Preview Instagram Comments'
        />
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <InstagramCommentsImplementation />
      </div>
    </div>
  )
}

export default InstagramCommentsPage