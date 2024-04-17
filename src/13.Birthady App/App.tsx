import React, { useState } from 'react';
import Data from './13.Birthady App/Data';
import './App.css'

interface Person {
    id: number;
    name: string;
    age: number;
    image: string;
}

const App: React.FC = () => {
    const [data, setData] = useState<Person[]>(Data);

    return (
        <div className='App'>
             <section className='container'>
             <h3>{data.length} birthdays today</h3>
            {data.map((person) => (
                 <article key={person.id} className='person'>
                 <img src={person.image} alt='name'/>
                 <div>
                   <h4>{person.name}</h4>
                   <p>{person.age} years</p>
                 </div>
               </article>
            ))}
             <button onClick={() => setData([])}>Clear</button>
            </section>
           
        </div>
    );
}

export default App;
