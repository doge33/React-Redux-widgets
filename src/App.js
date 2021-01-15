import React from 'react';
//import Accordion from './components/Accordion';
import Search from './components/Search';

export default function App() {

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework'
    },
    {
      title: 'Why use React?',
      content: 'React is awesome'
    },
    {
      title: 'How do you use React?',
      content: 'By creating components!'
    }
  ]
  return (
    <div>
      
      <Search />
    </div>
  )
}
