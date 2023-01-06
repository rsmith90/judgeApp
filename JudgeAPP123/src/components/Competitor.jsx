import React from 'react';
import "../styles/leaderboard2.css"

// competitor component will pull from a registered database the particular persons that will be attending the event
// this component will also update with said event as it progresses

export default function Competitor(person) {
  return (
    <>  
      <div class="comp_cards">
        <img className="h-16 w-16 mask mask-parallelogram-4 absolute -left-1 z-index: 10;" src={person.image} alt="" />
        <p className='text-lg absolute bottom-20 left-0'>{person.position}</p>
        <table class='table table-auto relative left-14'>
          <thead>
            <tr>
              {/* Head */}
              <th>Name: {person.name}</th>
              <th>Age: {person.age}</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Middle */}
              <td>Dist: 500m</td>
              <td>Time: {person.time}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              {/* Bottom */}
              <td>Fastest Lap: {person.lap}</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
          </table>
        
        
        {/* <div className="ml-3 divide-y divide-accent-content text-center grow z-index: 15;">
          <p className="prose font-bold text-accent-content">{person.name}</p>
          <p className="prose text-accent-content">{person.email}</p>
        </div> */}
      </div>
    </>
  )
}