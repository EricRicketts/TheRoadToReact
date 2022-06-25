import * as React from 'react';

function App() {
    function getWelcome() {
        return {
            greeting: "Hey Ho",
            title: "React"
        }
    }

  return (
      <div>
        <h1>
            {getWelcome().greeting} {getWelcome().title}
        </h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
      </div>
  );
}

export default App;
