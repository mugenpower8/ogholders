
import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Ogholders</h1>
      <p>This blog was created to help collectors find and understand the history of Old Green Holders (OGH), especially among early PCGS-certified coins.</p>
      <p className="mt-4"><Link to="/" className="text-blue-600 underline">← Back to home</Link></p>
    </main>
  )
}
