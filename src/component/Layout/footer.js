import React from "react";
import classes from './footer.module.css';



const Footer = (props) => {

  
  return (
    <div className={classes.footer}>
   <h1>{props.Description}</h1>
  <ul className={classes.footerlist}>
    <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
    <li><a href="https://open.spotify.com/" target="_blank"><i className="fa fa-spotify" ></i></a></li>
    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
  </ul>
   </div>
  );
};

export default Footer;
