import Competitor from "./Competitor";


// look to add more information into the cards in columns
const people = [
    {
        position: 'First',
        time: '8.79',
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://placeimg.com/80/80/people',
    },
    {
        position: 'Second',
        time: '9.79',
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://placeimg.com/80/80/people',
    },
    {
        position: 'Third',
        time: '10.79',
        name: 'Ted Fox',
        email: 'ted.fox@example.com',

        image:
            'https://placeimg.com/80/80/people'
    },
]

export default function Leaderboard() {
    return (
        // box div around card for sizing location
        <div className="flex w-screen m-1 p-1 justify-left">
            {/* actual card positioning and layout */}
            <div className="max-w-2xl shadow-lg p-1 m-1">
                {/* header */}
                <h3 className="text-center prose prose-xl">Registered Racers:</h3>
                <div className="">
                    {people.map((person, i) => (
                        <Competitor
                            key={i} name={person.name} email={person.email} image={person.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}