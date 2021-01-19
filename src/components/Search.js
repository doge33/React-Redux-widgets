import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/react';

export default function Search() {

  const [term, setTerm] = useState('programming'); //giving a default search term because srsearch param has to be set
  //const [term, setTerm] = useState(''); //if you default term to '', make sure to only perform search() when term is defined
  
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  
  const [results, setResults] = useState([]);
  

  //you are NOT allowed to mark the function inside useEffect as async await! => work around by 
  //1. create helper function with async await, and call it. OR
  //2. immediately invoked function(which can be (async...await...) wrapped in parenthesis). OR
  //3. use Promises

  //useEffect can't return anything except functions
  useEffect(()=>{

    const timerId = setTimeout(()=>{
      setDebouncedTerm(term); //update debouncedTerm to be term
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };

 }, [term] );

 useEffect(() => {

  const search = async() => {
    const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: debouncedTerm,
      }
    });
    setResults(data.query.search); //causes results to re-render
  };

    search();

 }, [debouncedTerm])

  // useEffect(() => {

  //   // console.log('initial render or term was changed');
    
  //   // return () => {
  //   //   console.log('CLEANUP')
  //   // }
  //   // ^^^ example: intial render: logs 'initial render or term was changed' & return the cleanup function (not invoked yet)
  //   //every re-render: invoke the cleanup function  -  logs 'initial...or...term...changed' - return cleanup function

    

  //   if (term && !results.length) {

  //     search();

  //   } else {

  //     const timeoutId = setTimeout(() => {
  //       if(term) {
  //         search();
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }

  // }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}//go to that wiki page
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span> 
          {/* ^ this tells the result to be rendered as html instead of plain texts, 
          but DON't do this, cuz you can be subject to XSS attack(milicious js script can execute) */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          value={term}
          onChange={(evt) => setTerm(evt.target.value)}
          className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}
