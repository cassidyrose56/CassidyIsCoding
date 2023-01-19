import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import '../../styles/navbar.scss'

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="3"
        {...props}
    />
);

const transition = { duration: 0.3 };

const MenuToggle = ({ isOpen, toggle }) => {

    const outsideClick = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    toggle;
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <button id='menu-btn' aria-label='menu' aria-expanded={isOpen} aria-controls='menu-container' onClick={toggle}>
            <svg id='menu-svg' width="40" height="40" viewBox="0 0 23 23" >
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5", stroke: "#FCFAFA" },
                        open: { d: "M 3 16.5 L 17 2.5", stroke: "#FCFAFA" },
                    }}
                    transition={transition}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    stroke="#FCFAFA"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <Path
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346", stroke: "#FCFAFA" },
                        open: { d: "M 3 2.5 L 17 16.346", stroke: "#FCFAFA" },
                    }}
                    transition={transition}

                />
            </svg>
        </button>
    )
};

export default MenuToggle;