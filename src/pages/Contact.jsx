
import React from 'react'

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-leaf mb-4">Contact</h1>
      <p className="mb-4">Have a question, suggestion, or coin to share? Reach out below:</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your message" className="w-full border p-2 rounded h-32"></textarea>
        <button type="submit" className="bg-leaf text-white px-4 py-2 rounded">Send</button>
      </form>
    </main>
  )
}
