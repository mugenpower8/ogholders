
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8 p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Ogholders. All rights reserved.
    </footer>
  )
}
