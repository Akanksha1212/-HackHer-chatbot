import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import '../App.css'



const Footer = () => {
  return (
  <footer className="footer-distributed" id="footer">


		<div className="footer-bottom">
			<p>Contact</p>
		</div>

		<div className="footer-left">
		<p></p>
		</div>
		<div className="footer-center">
			<h2>Email</h2>
			<div className="part">
				<p>anjali.sridharan8</p><br/>
				
			</div>
		</div>
 
		<div className="footer-right">
			<h2>Phone Number</h2>
			<div className="footer-icons">
				<a> testmail.com</a>
				
			</div>
		</div>
		
	</footer>
  );
}

export default Footer;



