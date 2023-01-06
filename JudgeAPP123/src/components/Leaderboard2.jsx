import React from 'react'
import Competitor from './Competitor'

const people = [
    {
        position: '1st',
        lap: 8.79,
        time: '34.94',
        name: 'Calvin H.',
        age: '14',
        gender: 'male',
        team: 'Eliminators',
        email: 'calvin.hawkins@example.com',
        image:
            'https://placeimg.com/80/80/people',
    },
    {
        position: '2nd',
        lap: '9.79',
        time: '34.94',
        name: 'Kristen R.',
        age: '14-16',
        gender: 'female',
        team: 'Phantom Racing',
        email: 'kristen.ramos@example.com',
        image:
            'https://placeimg.com/80/80/people',
    },
    {
        position: '3rd',
        lap: '10.79',
        time: '34.94',
        name: 'Jeremy R.',
        age: '14-16',
        gender: 'male',
        team: 'Bells',
        email: 'ted.fox@example.com',
        image:
            'https://placeimg.com/80/80/people'
    },
    {
        position: '4th',
        lap: '10.79',
        time: '34.94',
        name: 'Jeremy R.',
        age: '14-16',
        gender: 'male',
        team: 'Wolverines',
        email: 'ted.fox@example.com',

        image:
            'https://placeimg.com/80/80/people'
    },
    {
        position: '5th',
        lap: '10.79',
        time: '34.94',
        name: 'Jeremy R.',
        age: '14-16',
        gender: 'male',
        team: 'Tenessee Speed Club',
        email: 'ted.fox@example.com',

        image:
            'https://placeimg.com/80/80/people'
    },
]

function Leaderboard2() {


  return (
    <div className=''>
        <div class="grouped_persons" className="flex flex-col align-items-center">
            {people.map((person, i) => (
                <div className='p-1'>
                <Competitor
                    key={i}
                    position={person.position}
                    time={person.time}
                    name={person.name}
                    email={person.email}
                    image={person.image}
                /></div>
            ))}
        </div>
    </div>
  )
}

export default Leaderboard2