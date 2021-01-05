import './Navbar.css';
import React,{useEffect,useState} from 'react';
import { FaSearch } from "react-icons/fa";

function Navbar() {

    const [show, setShow] = useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>300){
                setShow(true)
            }else setShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }


    },[]);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img className={'nav_logo'} src="logo.png" alt=""/>
            {/*<img className={'nav_search'} src="search.png" alt=""/>*/}
            <FaSearch className={'nav_search'}/>
        </div>
    )
}

export default Navbar;
