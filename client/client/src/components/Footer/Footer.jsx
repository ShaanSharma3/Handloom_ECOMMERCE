import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>MEN</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>

                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>


                <div className="item">
                    <h1>About</h1>
                    <span>
                    Nestled in the heart of the Himalayas, 
                    we take pride in preserving the rich heritage
                    of Himachal Pradesh through our exquisite
                    handwoven textiles. Each piece is a 
                    testament to the skill and dedication
                    of local artisans, reflecting the 
                    vibrant culture and timeless beauty
                    of our region.
                    </span>
                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>
                    Our dedicated team is here to assist you and
                    provide insights into our craftsmanship and 
                    collections. Connect with us via email at 
                    [your@email.com] or give us a call at
                    [your phone number].Follow us on social media for updates on new 
                    arrivals, events, and stories from our artisans
                    </span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">HIMACHAL HANDLOOM</span>

                    <span className="copyright">
                        © Copyright 2024. All Rights Reserved
                    </span>  
                </div>

                <div className="right">
                    <img src="/img/payment.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer