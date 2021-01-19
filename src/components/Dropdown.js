import React, {useState, useEffect, useRef} from 'react'

export default function Dropdown({options, selected, onSelectedChange}) {

  const [open, setOpen] = useState(false);
  const ref = useRef(); //useRef: a direct reference to DOM element

  //use useEffect to set up a manual event listener on <body> to listen for click event.
  useEffect(() => {
    //manual event listeners gets called first before other react event listeners
    document.body.addEventListener('click', (evt) => {
      if(ref.current && ref.current.contains(evt.target)) {
        return;
      }
      setOpen(false);
    }, { capture: true });
  }, []);

  const renderedOptions = options.map(option => {

    //if an option is currently selected, don't render it in the dropdown
    if (option.value === selected.value) {
      return null;
    }

    return  (
      <div 
        key={option.value} 
        className="item"
        onClick={() => {onSelectedChange(option)}}
      >
        {option.label} 
        
      </div>
    )
  });
  
  //console.log(ref.current); //first time logs "undefined", but every re-render will give you the current element clicked on

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">
          {`select a color ${open}`}
        </label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${open ? "visible active" : "" }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : "" }`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}