import { useState } from 'react';

import './App.css';


var data = require("./MOCK_DATA.json");

function App() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    //our api to fetch search result
    console.log('search', searchTerm);
  }
  return (
    <div className="App">
      <h1>Search</h1>
      <div className='search-container'>
        <div className='search-inner'>
          <input type='text' value={value} onChange={onChange}></input>
          <button onClick={ () => onSearch(value)}> Search</button>
        </div>
        <div className='dropdown'>
          {data.filter(item => {
            const searchItem = value.toLowerCase();
            const full_name = item.full_name.toLowerCase();
            return searchItem && full_name.startsWith(searchItem) && full_name !== searchItem;
          }).slice(0,10).map((item) => (
            <div onClick = {() => onSearch(item.full_name)} className='dropdown-row' key={item.full_name}>
              {item.full_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
