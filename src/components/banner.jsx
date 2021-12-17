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
                <p className="title-text">Curriculum vitea</p>
            </div>
        );
    }
}
 
export default Banner;