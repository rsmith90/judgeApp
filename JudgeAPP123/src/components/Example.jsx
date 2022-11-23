import Competitor from "./Competitor"

const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function Example() {
    return (
        <div>
            <h3 class="prose prose-xl">Registered Racers:</h3>
            <div className="divide-y divide-gray-200">
                {people.map((person) => (
                    <Competitor name={person.name} email={person.email} image={person.image} />
                ))}
            </div>
        </div>
    )
}