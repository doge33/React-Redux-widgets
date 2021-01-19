import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from  './components/Dropdown';

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
];

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  }
]

export default function App() {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  
  return (
    <div>
      <button onClick= {() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? 
      <Dropdown selected={selected} options={options} onSelectedChange={setSelected}/>
      : null
      }
    </div>
  )
}
