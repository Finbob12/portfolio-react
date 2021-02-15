import React, { useState, useEffect } from 'react'
import classNames from "classnames";

const Cursor = () => {
       const [position, setPosition] = useState({x: 0, y: 0});
       const [hidden, setHidden] = useState(false);
       const [clicked, setClicked] = useState(false);
       const [linkHovered, setLinkHovered] = useState(false);
           
       useEffect(() => {
           addEventListeners();
           handleLinkHoverEvents();
           return () => removeEventListeners();
       });
    
    const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
       };
    
       const removeEventListeners = () => {
           document.removeEventListener("mousemove", onMouseMove);
           document.removeEventListener("mousedown", onMouseDown);
           document.removeEventListener("mouseup", onMouseUp);
       };

        const onMouseLeave = () => {
               setHidden(true);
           };
        
        const onMouseEnter = () => {
               setHidden(false);
           };

              const onMouseDown = () => {
                   setClicked(true);
               };
            
               const onMouseUp = () => {
                   setClicked(false);
               };

                  const handleLinkHoverEvents = () => {
                       document.querySelectorAll("a").forEach(el => {
                           el.addEventListener("mouseover", () => setLinkHovered(true));
                           el.addEventListener("mouseout", () => setLinkHovered(false));
                       });
                   };

                    const isMobile = () => {
                         const ua = navigator.userAgent;
                         return /Android|Mobi/i.test(ua);
                     };

       const cursorClasses = classNames(
                   'cursor',
                   {
                    'cursor-clicked': clicked,
                    'cursor-hidden': hidden,
                    'cursor-link-hovered': linkHovered
                   }
               );  

       const onMouseMove = (e) => {
           setPosition({x: e.clientX, y: e.clientY});
       };                                                               
    
       if (typeof navigator !== 'undefined' && isMobile())
        return null
       else
        return <div className={cursorClasses}
       style={{
           left: `${position.x}px`,
           top: `${position.y}px`
       }}/>
}


export default Cursor
