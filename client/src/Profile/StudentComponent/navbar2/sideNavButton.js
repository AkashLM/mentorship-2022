import React, {useState, useEffect} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import StudentSideNav from './Studentsidenav';
import Media from 'react-media';
import './navbar.css';


const HamburgerButton2 = (props) => {
  const {refresher , setRefresher}= props;
  const [wid, setWid] = useState({wid: undefined});
  const [isOpen, setOpen] = useState(false)
  const anchor = document.querySelectorAll('.navElements')
  var i;
  const sidebar = document.querySelectorAll('.sidenav')

useEffect(() => {
  function handleResize() {
    if(window.matchMedia('(max-width: 699px)').matches){
    setWid('0')
    setOpen(false)
    for (i = 0; i < sidebar.length; i++){
      sidebar[i].style.visibility = "hidden";
      }
  }else{
    setWid('6rem')
    setOpen(false)
    for (i = 0; i < anchor.length; i++){
      anchor[i].style.display = "none";        
    }
    for (i = 0; i < sidebar.length; i++){
      sidebar[i].style.visibility = "visible";
      }
  }
}
 window.addEventListener("resize", handleResize);
 handleResize();
 return () => window.removeEventListener("resize", handleResize);
}, []);
  
  const openCloseSidenav = ( ) => {

    if(wid==="20rem"){
      setWid('6rem')
      document.body.style.marginLeft = "6rem";
      for (i = 0; i < anchor.length; i++){
        anchor[i].style.display = "none";        
      }
    }
    else if (wid==="6rem"){
      setWid('20rem')
      document.body.style.marginLeft = "20rem";
      for (i = 0; i < anchor.length; i++){
        anchor[i].style.display = "block";
        
      }
    }else if (wid==="0"){
      setWid('100%')
      document.body.style.marginLeft = "0";
      for (i = 0; i < sidebar.length; i++){
        sidebar[i].style.visibility = "visible";
        }
      for (i = 0; i < anchor.length; i++){
        anchor[i].style.display = "block";
      }
    }else if (wid==="100%"){
      setWid('0')
      for (i = 0; i < sidebar.length; i++){
      sidebar[i].style.visibility = "hidden";
      }
      document.body.style.marginLeft = "0";
      for (i = 0; i < anchor.length; i++){
        anchor[i].style.display = "none";
      }
    }
  
  }

return (
  <>
  <Media query="(max-width: 699px)">
          {matches =>
            matches ? (
              <button onClick={openCloseSidenav} className='hamburger'>  <Hamburger direction="right" duration={0.6} color={"#111"} toggled={isOpen} toggle={setOpen} rounded/> </button>
            ) : (
              <button onClick={openCloseSidenav} className='hamburger'>  <Hamburger direction="right" duration={0.6} color={props.color} toggled={isOpen} toggle={setOpen} rounded/> </button>
            )
          }
        </Media>
    <StudentSideNav width={wid} refresher={refresher} setRefresher={setRefresher}/>
  </>
 );
};
export default HamburgerButton2;