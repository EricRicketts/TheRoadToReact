import * as React from 'react';
import {useLayoutEffect} from "react";

function App() {
    const min = 1, max = 100;
    function getWelcome() {
        return {
            greeting: "Hey Ho",
            title: "React"
        }
    }
    function generateKey(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max - min) + min);
    }
    const list = [
        {
            title: 'React',
            url: 'https://reactjs.org',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1
        },
    ];

  return (
      <div>
        <h1>
            {getWelcome().greeting} {getWelcome().title}
        </h1>
          {
            list.map(listItem => {
                return <ul key={listItem.objectID}>
                    <li key={generateKey(min, max)}>{listItem.title}</li>
                    <li key={generateKey(min, max)}>{listItem.url}</li>
                    <li key={generateKey(min, max)}>{listItem.author}</li>
                    <li key={generateKey(min, max)}>{listItem.num_comments}</li>
                    <li key={generateKey(min, max)}>{listItem.points}</li>
                </ul>
            })
          }
          <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
      </div>
  );
}

export default App;
