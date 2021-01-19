//no need to import React because not returning any JSX

//this compoenent is for displaying different widgets according to different routes   (window.location.pathname)
//receiving the inner component as "children" because if a component is inside another component in the JSX returned, then it's called "children" prop for the outer component
export default function Route({path, children}) {
  return window.location.pathname === path ? children : null;
}
