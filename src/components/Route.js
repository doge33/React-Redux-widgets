//no need to import React because not returning any JSX
import {useState, useEffect} from 'react';

//this compoenent is for displaying different widgets according to different routes   (window.location.pathname)
//receiving the inner component as "children" because if a component is inside another component in the JSX returned, then it's called "children" prop for the outer component
export default function Route({path, children}) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname); //the only job for this state is to track what the pathname is. Also, window.location.pathname always accurately reflects the current path url

  //set a event listener on Route to listen for URL change
  useEffect(() => {

    //define callback as a separate function so that we can clean it up;
    const onLocationChange = () => {
      //purpose is to update state and cause Route to re-render itself!
      setCurrentPath(window.location.pathname); //always makes sure the current path state is the accurate one(which has been updated by window.history.pushState when a link is clicked)
    }

    window.addEventListener('popstate', onLocationChange); //will detect which <Link> has been clicked(refer to Link.js), and handle it using onLocationChange

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);


  //every Route has a path prop. 
  //return currentPath === path ? children : null;
  return window.location.pathname === path ? children : null; //=>same as above
}
