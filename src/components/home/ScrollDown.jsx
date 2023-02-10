import React from "react";
 
const ScrollDown = () => {
    return (
       <div className="home_scroll">
        <a href="#about" className="home_scroll-button button--flex">
              <svg
               xmlns="http://www.w3.org/2000/svg" 
               class="home_scroll-mouse" 
               width="32px"
               height="32px"
               fill="currentColor" 
               viewBox="0 0 24 24"> 
              <path d="M8 3a.5.5 0 0 1 
              .5.5v2a.5.5 0 0 1-1 0v-2A
              .5.5 0 0 1 8 3zm4 8a4 4 0
               0 1-8 0V5a4 4 0 1 1 8 0v
               6zM8 0a5 5 0 0 0-5 5v6a5
                5 0 0 0 10 0V5a5 5 0 0 
                0-5-5z"/> 
                </svg>
                
            <span className="home_scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down  home_scroll-arrow"></i>
        </a>
       </div>
    )
}

export default ScrollDown