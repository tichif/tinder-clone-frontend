import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';
import instance from '../axios';

const TinderCards = () => {
  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instance.get('/cards');
      setPeople(data);
    };

    fetchData();
  }, []);

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className='swipe'
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{
                backgroundImage: `url(${person.imgUrl})`,
              }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
