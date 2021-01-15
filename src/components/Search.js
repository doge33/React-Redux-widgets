import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/react';

export default function Search() {

  const [term, setTerm] = useState('');

  //you are NOT allowed to mark the function inside useEffect as async await! => work around by 
  //1. create helper function with async await, and call it. OR
  //2. immediately invoked function(which can be (async...await...) wrapped in parenthesis). OR
  //3. use Promises

  //useEffect can't return anything except clean-up functions
  useEffect(() => {
    const search = async() => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      })
    };
    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          value={term}
          onChange={(evt) => setTerm(evt.target.value)}
          className="input"
          ></input>
        </div>
      </div>
    </div>
  )
}
