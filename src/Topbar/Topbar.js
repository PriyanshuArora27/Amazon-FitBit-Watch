import React from 'react';
import classes from './Topbar.module.css';


const Topbar = ()=>{
    return(
        <header className="App-header">
        
      
        <nav className={classes.Topbar}>
          <img src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1" alt="Amazon Logo"/>
        </nav>
        </header>
    )

}

export default Topbar;