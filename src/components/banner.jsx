import { faCalendar, faEnvelope, faGlobeEurope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './banner.scss';
import Rating from './rating';

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
                <div className="skills-box">
                    <p className="title-text">Skills</p>
                    <ul className="skills-list">
                        <li>
                            <p>C#</p> <Rating rating={5}></Rating>
                        </li>
                        <li>
                            <p>C++</p> <Rating rating={2}></Rating>
                        </li>
                        <li>
                            <p>Python</p> <Rating rating={3}></Rating>
                        </li>
                        <li>
                            <p>Javascript</p> <Rating rating={5}></Rating>
                        </li>
                        <li>
                            <p>Php</p> <Rating rating={4}></Rating>
                        </li>
                        <li>
                            <p>Scss/Css</p> <Rating rating={4}></Rating>
                        </li>
                    </ul>
                </div>
                <div className="traits-box">
                    <p className="title-text">Traits</p>
                    <ul>
                        <li>
                            <p>Patience</p>
                        </li>
                        <li>
                            <p>Team Work</p>
                        </li>
                        <li>
                            <p>Documenting</p>
                        </li>
                        <li>
                            <p>Creative</p>
                        </li>
                        <li>
                            <p>Following Coding Conventions</p>
                        </li>
                        <li>
                            <p>Punctual</p>
                        </li>
                    </ul>
                </div>
                <div className="tools-box">
                    <p className="title-text">Tools/Frameworks</p>
                    <ul className="tools-list">
                        <li>
                            <p>React</p> <Rating rating={4}></Rating>
                        </li>
                        <li>
                            <p>Laravel</p> <Rating rating={3}></Rating>
                        </li>
                        <li>
                            <p>Unity</p> <Rating rating={5}></Rating>
                        </li>
                        <li>
                            <p>Unreal Engine</p> <Rating rating={4}></Rating>
                        </li>
                        <li>
                            <p>Adobe Animate</p> <Rating rating={3}></Rating>
                        </li>
                        <li>
                            <p>Adobe Photoshop</p> <Rating rating={4}></Rating>
                        </li>
                        <li>
                            <p>Adobe Ilustrate</p> <Rating rating={3}></Rating>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Banner;