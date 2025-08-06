
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-5xl font-bold text-leaf mb-4">Welcome to Ogholders</h1>
        <p className="text-xl mb-4">A curated space for collectors passionate about PCGS Old Green Holders and early U.S. coinage.</p>
        <Link to="/about" className="text-leaf underline">Learn more →</Link>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          <li><span className="font-bold">What is an OGH?</span> – A beginner’s guide to the green label legacy.</li>
          <li><span className="font-bold">How to Spot a Real OGH</span> – Spotting fakes, variants, and generation differences.</li>
          <li><span className="font-bold">The Market for OGH Coins</span> – Price premiums, demand trends, and risks.</li>
        </ul>
      </section>
    </main>
  )
}
