import React, { Fragment, useState } from 'react'

export default function Accordion(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  //helper function
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const {items} = props;
  const renderedItems = items.map((item, index) => {

    const active = index === activeIndex ? 'active' : ''; //only one can be active at a time => this leads to the previous clicked one closing automatically

    return (
      <Fragment key={item.title}>
        <div 
        className={`title ${active}`}
        onClick={()=> onTitleClick(index)} 
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });


  return (
    <div className="ui styled accordion">
      {renderedItems}
      
    </div>
  )
}
