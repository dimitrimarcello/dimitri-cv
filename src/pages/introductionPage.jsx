import React, { Component } from 'react';
import './introductionPage.scss'

class IntroductionPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='introduction-page'>
                <div className='intro-title'>Dimitri van Manen</div>
                <div>
                    I'm a software developer with many angles. I go from game to web and from web to apps. 
                    I like to be creative and modulair in the projects I run. I like both working in teams or by myself. 
                    I have a deep passion for programming especialy the challenge that comes with it.
                    I like keeping myself up to date with all things tech related. I'm also not afraid to work 
                    on hardware although it's outside my job qualification. 
                </div>
            </div>
        );
    }
}
 
export default IntroductionPage;