/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { useState } from 'react';
import './searchArticle.scss';

let list = [];

const SearchArticles = (props) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      if(e.target.value !== ''){
        if(list.length > 4){
          list.shift()
        }
        list.push({name: e.target.value})
      }
      props.searchArticles(searchValue)
      setVisible(false)
    }
  }

  const selectItem = (e,name) => {
    e.preventDefault()
    setSearchValue(name);
    setVisible(false);
  };
 
  return (
      <>
      <div className="search_container">
        <input
          className="search-input"
          type="text"
          placeholder="Search article"
          value={searchValue} 
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleSubmit(e)}
          onFocus={() => { setVisible(true)} }
        />
      </div>
      <div  className={`search-dropdown ${visible ? 'v' : ''}`}>
        {visible && (
          <ul>
            {
              list.map((x, i) => (
                <li
                  key={i}
                  id={x.name}
                  name={x.name}
                  onMouseDown={(e) => selectItem(e, x.name)}
                  className="dropdown_item"
                >
                  <div className="search_text">{x.name}</div>
                </li>
              ))}
          </ul>
        )}
      </div>
      </>
  );
};

export default SearchArticles;