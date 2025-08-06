
import React from 'react'

export default function Post({ title, summary }) {
  return (
    <div className="border-b pb-4 mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  )
}
