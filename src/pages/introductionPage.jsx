import { faBriefcase, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Banner from '../components/banner';
import './introductionPage.scss'

class IntroductionPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.getElementsByClassName("banner-container")[0].addEventListener("click", this.updateCVSize);
    }

    updateCVSize = () => {
        let banner = document.getElementsByClassName("banner-container")[0];
        let profileInfo = document.getElementsByClassName("cv-container")[0];
        console.log(banner.clientHeight)
        setTimeout(function(){
            profileInfo.style.height = banner.clientHeight + "px";
        },200);
        
    }

    state = {  }

    render() { 
        return ( 
            <div>
                <Banner></Banner>
                <div className='cv-container'>
                    <div className='about-me-container'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias autem, porro quos quibusdam corrupti adipisci hic assumenda. Quas consequatur animi ea possimus nesciunt, neque dolores quibusdam sit ex rem dolore?</p>
                    </div>
                    <div className='job-tab'>
                        <FontAwesomeIcon style={{marginLeft: "1px"}} size='3x' icon={faBriefcase}></FontAwesomeIcon> <h3 className='job-tab-title'>Work Experience</h3>
                        <br /><img className='start-line' src="img/util/balstring.png" />
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2020-2021</h3>  
                            <div className='job-skills'>
                                <h4>XRLab (Internship)</h4>
                                <p>Koos Postemalaan 2, 1217 ZC Hilversum</p>
                                <ul>
                                    <li>Had a team lead role</li>
                                    <li>Learned alround XR technologie</li>
                                    <li>Worked with javascript, c# and c++</li>
                                </ul>
                            </div>
                        </div>
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2019-2020</h3>  
                            <div className='job-skills'>
                                <h4>EverywhereIm (Internship)</h4>
                                <p>Paasheuvelweg 25, 1105 BP Amsterdam</p>
                                <ul>
                                    <li>Worked with Laravel, Angular and Ionic</li>
                                    <li>Learned a lot about web security</li>
                                </ul>
                            </div>
                        </div>
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2018-2022</h3>  
                            <div className='job-skills'>
                                <h4>Hema</h4>
                                <p>Gelderlandplein 229, 1082 KZ Amsterdam</p>
                                <ul>
                                    <li>Register work</li>
                                    <li>Customer service</li>
                                    <li>Horeca work</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='job-tab'>
                        <FontAwesomeIcon style={{marginLeft: "4px"}} size='3x' icon={faBuilding}></FontAwesomeIcon> <h3 className='job-tab-title'>Education</h3>
                        <br /><img className='start-line' src="img/util/balstring.png" />
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2017-2021</h3>  
                            <div className='job-skills'>
                                <h4>Mediacollege Amsterdam</h4>
                                <p>Contactweg 36, 1014 AN Amsterdam</p>
                                <p>MBO 4, Game Developer</p>
                            </div>
                        </div>
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2013-2017</h3>  
                            <div className='job-skills'>
                                <h4>Mediacollege Amsterdam</h4>
                                <p>Dintelstraat 15, 1078 VN Amsterdam</p>
                                <p>VMBO-KB</p>
                            </div>
                        </div>
                        <div className='job-tab-job'>
                            <img className='job-line' src="img/util/balstring.png" /> <h3 className='job-tab-title'>2006-2013</h3>  
                            <div className='job-skills'>
                                <h4>De Ark</h4>
                                <p>Zuid Hollandstraat 7, 1082 EK Amsterdam</p>
                                <p>Elementry School</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default IntroductionPage;