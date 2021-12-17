import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="banner-container">
                <img className="user-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg"/>
                <div className="banner-title">
                    <p className="title-text">Curriculum vitea</p>
                </div>
                <div className="contact-box">
                    <p>Email: vmanen68@gmail.com</p>
                    <p>Phone: 0681128298</p>
                    <p>dimitrimanen.nl</p>
                    <p>Born: 30-11-2000</p>
                </div>
            </div>
        );
    }
}
 
export default Banner;