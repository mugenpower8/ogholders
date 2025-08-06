
import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-leaf mb-4">About Ogholders</h1>
      <p className="mb-4">This site is dedicated to showcasing, identifying, and understanding PCGS Old Green Holders (OGH) — an iconic piece of coin grading history.</p>
      <p className="mb-4">Whether you're a seasoned collector or a curious newcomer, you'll find helpful information, market insights, and authentic examples of OGH coins.</p>
      <Link to="/" className="text-leaf underline">← Back to Home</Link>
    </main>
  )
}
