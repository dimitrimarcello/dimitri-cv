import { faCalendar, faEnvelope, faGlobeEurope, faLaptop, faPersonBooth, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './banner.scss';
import InfoDot from './infodot';
import Rating from './rating';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.lastClickedEl = null;
        this.state = { 
            personal: true
        }
    }

    componentDidMount(){
        this.lastClickedEl = document.getElementById('startInfo');
        this.lastClickedEl.classList.add("highlightButton");
    }

    toggleInfo = (e) =>{
        if(this.lastClickedEl !== null){
            this.lastClickedEl.classList.remove("highlightButton");
        }
        e.target.classList.add("highlightButton");
        this.lastClickedEl = e.target;
        if(this.state.personal){
            this.setState({
                personal: false
            });
        }
        else{
            this.setState({
                personal: true
            });
        }
    }

    renderProfileInformation = () => {
        if(this.state.personal){
            return(
                <React.Fragment>
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
                    <p className="title-text">Languages</p>
                    <ul className="skills-list">
                        <li>
                            <p>Dutch</p> <Rating rating={5}></Rating> <InfoDot information="This is my native language."></InfoDot>
                        </li>
                        <li>
                            <p>English</p> <Rating rating={4}></Rating> <InfoDot information="Near native proficiency."></InfoDot>
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
                </React.Fragment>
            );
        }
        else{
            return(
                <React.Fragment>
                    <div className="skills-box">
                    <p className="title-text">Programming Languages</p>
                    <ul className="skills-list">
                        <li>
                            <p>C#</p> <Rating rating={5}></Rating> <InfoDot endTitle="Experience: 5 years" information="I've used c# mostly for game development using Unity."></InfoDot>
                        </li>
                        <li>
                            <p>C++</p> <Rating rating={3}></Rating> <InfoDot endTitle="Experience: 2 years" information="I've used c++ both in the unreal engine and also for a personal project to monitor my pc using a phone app."></InfoDot>
                        </li>
                        <li>
                            <p>Python</p> <Rating rating={2}></Rating> <InfoDot endTitle="Experience: 1 year" information="I can write in Python but it's not a preference due to the conventions."></InfoDot>
                        </li>
                        <li>
                            <p>Javascript</p> <Rating rating={5}></Rating> <InfoDot endTitle="Experience: 6 years" information="I've used Javascript for both web development and game development. It was one of my first languages."></InfoDot>
                        </li>
                        <li>
                            <p>Php</p> <Rating rating={4}></Rating> <InfoDot endTitle="Experience: 3 years" information="Most of my php skills comes from working with Laravel. I've mostly used it for hooking up databases or building up a CMS"></InfoDot>
                        </li>
                        <li>
                            <p>Scss/Css</p> <Rating rating={4}></Rating> <InfoDot endTitle="Experience: 4 years" information="I always like to use custom css/scss. Especially with scss where having sass variables will always help with making a site more modulair."></InfoDot>
                        </li>
                        <li>
                            <p>Java</p> <Rating rating={4}></Rating> <InfoDot endTitle="Experience: 5 years" information="It's the first language they learned me at school. I am familiar with both command applications and using the GUI JavaFX."></InfoDot>
                        </li>
                    </ul>
                    </div>
                    <div className="tools-box">
                    <p className="title-text">Tools/Frameworks</p>
                    <ul className="tools-list">
                        <li>
                            <p>React</p> <Rating rating={4}> </Rating> <InfoDot endTitle="Experience: 4 years" information="React is my favourite go to for web development. I am still learning more about functional components. But class components I have controlled."></InfoDot>
                        </li>
                        <li>
                            <p>Laravel</p> <Rating rating={3}></Rating> <InfoDot endTitle="Experience: 2 years" information="With laravel I learn something new everyday I just love the satisfaction of a good CMS."></InfoDot>
                        </li>
                        <li>
                            <p>Unity</p> <Rating rating={5}></Rating> <InfoDot endTitle="Experience: 4 years" information="I've used unity for my best games. I have used it both during and after school. For me it's like I have my own world I can build."></InfoDot>
                        </li>
                        <li>
                            <p>Unreal Engine</p> <Rating rating={2}></Rating> <InfoDot endTitle="Experience: 1 years" information="I've used Unreal for 2 project but it never sticked like unity did."></InfoDot>
                        </li>
                        <li>
                            <p>Adobe Animate</p> <Rating rating={3}></Rating> <InfoDot endTitle="Experience: 2 years" information="Animate I've used since I was 12 and I have also had 2 years of training in middle school."></InfoDot>
                        </li>
                        <li>
                            <p>Adobe Photoshop</p> <Rating rating={4}></Rating> <InfoDot endTitle="Experience: 3 years" information="Photoshop I've had as a course for 3 years in middle school. I also still use it to this day."></InfoDot>
                        </li>
                        <li>
                            <p>Adobe Ilustrate</p> <Rating rating={3}></Rating> <InfoDot endTitle="Experience: 1 years" information="I've had a 1 year illustrate course in middle school. And it's my go to app for vector drawing."></InfoDot>
                        </li>
                    </ul>
                </div>
                </React.Fragment>
            );
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div className="banner-container">
                <img className="user-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg"/>
                <div className="banner-title">
                    <p className="title-text">Dimitri van Manen</p>
                </div>
                <div style={{textAlign: "center"}}>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <a style={{cursor: "pointer", color: "blue"}} id='startInfo' onClick={((e) => this.toggleInfo(e))}>Personal</a> | <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon> <a style={{cursor: "pointer", color: "blue"}} onClick={this.toggleInfo}>Professional</a>
                </div>
                {this.renderProfileInformation()}
            </div>
            </React.Fragment>
        );
    }
}
 
export default Banner;