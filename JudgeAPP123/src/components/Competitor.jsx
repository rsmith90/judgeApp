import React from 'react'

export default function Competitor(person) {
  return (
    <div className="my-2 px-2 flex bg-accent border-accent-focus border-y-8 border-double rounded-3xl">
      <img className="h-16 w-16 mask mask-squircle" src={person.image} alt="" />
      <div className="ml-3 divide-y divide-accent-content text-left grow">
          <p className="prose prose-xl font-bold text-accent-content">{person.name}</p>
          <p className="prose prose-base text-accent-content">{person.email}</p>
      </div>
    </div>
  )
}