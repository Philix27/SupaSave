"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-green-300 via-teal-500 to-lime-500`}
    >
      <div className={` `}>
        <h1 className={`pl-5 pt-5 text-2xl font-extrabold`}>
          Super<span className={`text-white`}>Save</span>
        </h1>
      </div>
    </div>
  )
}
