
import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Ogholders Blog</h1>
      <Post title="What Is an OGH?" summary="A beginner’s guide to Old Green Holders." />
      <Post title="How to Spot a Real OGH" summary="Visual and descriptive guide to authentic OGH holders." />
      <Post title="The Market for OGH Coins" summary="Why collectors value old holders more." />
      <Post title="Sheridan Downey & the CBH Scene" summary="Mail bids and CBH collecting culture." />
      <p className="mt-6"><Link to="/about" className="text-blue-600 underline">About this site</Link></p>
    </main>
  )
}
