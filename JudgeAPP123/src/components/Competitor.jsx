import React from 'react'

export default function Competitor(person) {
  return (
    <div class="py-2 flex">
        <div class="skew"></div>
        <div>
            <img className="h-12 w-12 mask mask-squircle" src={person.image} alt="" />
            <div className="ml-3">
                <p className="prose prose-base font-medium text-gray-900">{person.name}</p>
                <p className="prose prose-sm text-gray-500">{person.email}</p>
            </div>
        </div>
    </div>
  )
}