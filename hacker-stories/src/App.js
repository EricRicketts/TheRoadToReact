import * as React from 'react';

const getWelcome = () => ({ greeting: "Hey Ho", title: "React" });

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

const Search = () => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
    </div>
);

const List = () => (
    <ul>
        {list.map(function(item) {
            return (
                <li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                    <span> {item.author}</span>
                    <span> {item.num_comments}</span>
                    <span> {item.points}</span>
                </li>
            );
        })}
    </ul>
);

const App = () => (
    <div>
        <h1>{getWelcome().greeting} {getWelcome().title}</h1>
        <Search />
        <hr/>
        <List />
    </div>
  );

export default App;
