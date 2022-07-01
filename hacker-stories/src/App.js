import * as React from 'react';

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
// below <>, </> pair are react fragments, we could have used <React.Fragment> & </React.Fragment>
const InputWithLabel = ({id, label, value, type = 'text', onInputChange}) => (
   <>
       <label htmlFor={id}>{label}</label>
       <input
           id={id}
           type={type}
           value={value}
           onChange={onInputChange}
       />
   </>
);

/*
const Search = ({search, onSearch}) => (
    <>
        <label htmlFor="search">Search: </label>
        <input id="search"
               type="text"
               value={search}
               onChange={onSearch}
        />
    </>
);
 */

const List = ({list}) => (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
);

const Item = ({item}) => (
    <li>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
    </li>
);
const App = () => {
    const useStorageState = (key, initialState) => {
        const [value, setValue] = React.useState(
            localStorage.getItem(key) || initialState
        );

        React.useEffect(() => {
            localStorage.setItem(key, value)
        }, [key, value]);

        return [value, setValue];
    };

    const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const searchedStories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>{getWelcome().greeting} {getWelcome().title}</h1>
            <InputWithLabel
                id="search"
                label="Search"
                value={searchTerm}
                onInputChange={handleSearch}
            />
            <hr/>
            <List list={searchedStories} />
        </div>
    );
}

export default App;
