import React, {useState, useEffect} from 'react';

export default function Search() {

  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('in useEffect once');
  }, []);

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
