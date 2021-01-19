import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from  './components/Dropdown';
import Translate from './components/Translate';
import Route from "./components/Route";
import Header from "./components/Header";

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
];


export default function App() {

  const [selected, setSelected] = useState(options[0]);

  //const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);
  
  return (
    // using a separate Route component to display components under different path;
    //this makes it compoenents more re-usable!
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/> 
      </Route>
      <Route path="/list">
        <Search /> 
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        /> 
      </Route>
      <Route path="/translate">
        <Translate /> 
      </Route>
    </div>
  )
}
