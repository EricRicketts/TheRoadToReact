import * as React from 'react';
import {useState} from "react";

const getWelcome = () => ({ greeting: "Hey Ho", title: "React" });

const stories = [
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

const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={props.onSearch}/>
        </div>
    );
};

const List = (props) => {
    return (
        <ul>
            {props.list.map((item) => (
                <Item key={item.objectID} item={item} />
            ))}
        </ul>
    );
}

const Item = (props) => {
    return (
        <li>
        <span>
            <a href={props.item.url}>{props.item.title}</a>
        </span>
            <span> {props.item.author}</span>
            <span> {props.item.num_comments}</span>
            <span> {props.item.points}</span>
        </li>
    );
}
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const searchedStories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1>{getWelcome().greeting} {getWelcome().title}</h1>
            <Search onSearch={handleSearch} />
            <hr/>
            <List list={searchedStories} />
        </div>
    );
}

export default App;
