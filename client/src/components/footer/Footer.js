import React from 'react';
import "./Footer.css";
// import facebook from "../images/fb.png";
// import instagram from "../images/fb.png";
// import linkedin from "../images/fb.png";
import {TiSocialTwitter,TiSocialFacebook,TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <h2>Borderfree</h2>
                    <p class="menu">
                        <a href="#">Home</a>
                        <a href="#">Agent</a>
                        <a href="#">About</a>
                        <a href="#">Products</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </p>
                    <ul>
                        <li>
                            <TiSocialTwitter size="4rem"/>
                        <a href="#" data-original-title="Twitter"><span class="ion-logo-twitter"></span></a>
                        </li>
                        <li>
                          <TiSocialFacebook size="4rem"/>  
                        <a href="#" data-original-title="Facebook"><span class="ion-logo-facebook"></span></a>
                        </li>
                        <li>
                           <TiSocialPinterest size="4rem"/> 
                        <a href="#" data-original-title="Pinterest"><span class="ion-logo-pinterest"></span></a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    );
}

export default Footer;
