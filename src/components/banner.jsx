import { faCalendar, faEnvelope, faGlobeEurope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <p className="inline-icon">Email: vmanen68@gmail.com</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <p>Phone: 0681128298</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobeEurope}></FontAwesomeIcon> <p>dimitrimanen.nl</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> <p>Born: 30-11-2000</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Banner;