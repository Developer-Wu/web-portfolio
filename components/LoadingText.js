import {React, useRef, useEffect} from "react"
import Typed from "typed.js";

const LoadingText = () => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'changing route...',
      ],
      typeSpeed: 80,
      backSpeed: 70,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <span ref={el} />

  );
}

export {LoadingText}