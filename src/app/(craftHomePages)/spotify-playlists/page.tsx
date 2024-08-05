import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SpotifyPlaylistsPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Spotify Playlists <span className="text-indigo-600">Component</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        An interactive Spotify-inspired playlist management system
      </p>
      <Link href={`preview/spotify-playlists`} className="mb-16 transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src="/spotify-playlists/demo.gif"
          alt="Spotify Playlists Component Demo"
          width={1280}
          height={720}
          className="rounded-lg shadow-lg"
        />
      </Link>
      <div className="mt-20 bg-white rounded-lg shadow-lg p-8 border border-gray-200 prose prose-indigo max-w-none">
        <h2 className="text-3xl font-bold mb-4">Implementation Details</h2>
        <p className="mb-6">This technical writeup provides an in-depth look at how the Spotify Playlists Component works and how it was built.</p>
        
        <h3 className="text-2xl font-semibold mb-4">Table of Contents</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Introduction</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Component Overview</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Key Features</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Implementation</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Usage</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Conclusion</a></li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p className="mb-6">The Spotify Playlists Component is a React-based implementation that replicates the core functionality of Spotify&apos;s playlist management system.</p>

        <h3 className="text-2xl font-semibold mb-4">Component Overview</h3>
        <p className="mb-6">The component consists of a playlist display, search functionality, and track management features.</p>

        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Dynamic playlist creation and editing</li>
          <li className="mb-2">Track search and addition</li>
          <li className="mb-2">Drag-and-drop track reordering</li>
          <li className="mb-2">Responsive design</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Implementation</h3>
        <p className="mb-6">The component is implemented using React hooks for state management, react-beautiful-dnd for drag-and-drop functionality, and custom styling to mimic Spotify&apos;s interface.</p>

        <h3 className="text-2xl font-semibold mb-4">Usage</h3>
        <p className="mb-4">To use the Spotify Playlists Component in your project, import it and include it in your React component:</p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6"><code>{`import SpotifyPlaylists from './SpotifyPlaylists';

<SpotifyPlaylists initialPlaylists={userPlaylists} />`}</code></pre>

        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="mb-6">The Spotify Playlists Component offers a feature-rich and user-friendly way to implement playlist management functionality in music-related applications.</p>
      </div>
    </div>
  )
}

export default SpotifyPlaylistsPage