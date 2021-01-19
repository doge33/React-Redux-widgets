import React from 'react'

export default function Link({className, href, children}) {
  

  const handleClick = (evt) => {

    //this is a little check to handle cmd/ctrl key behaviors, so that they work normally (eg. cmd+click ==> open in new tab)
    if(evt.metaKey || evt.ctrlKey) { //metaKey and ctrlKey are boolean values
      return;
    }

    evt.preventDefault();
  
    window.history.pushState({}, '', href) //this updates the url properly when different links are clicked, but without a full-page refresh
  
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent); //these codes tells <Route> comps that URL just changed. <Route> needs to listen to these events
  }
  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
