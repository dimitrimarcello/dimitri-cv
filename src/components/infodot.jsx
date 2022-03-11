import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './infodot.scss';

class InfoDot extends Component {

    constructor(props) {
        super(props);
    }

    state = { 
        info: false
    }

    setInfo = (value) => {
        if(value){
            this.setState({
                info: true
            });
        }
        else{
            this.setState({
                info: false
            });
        }
    }

    showInfo = () => {
        if(this.state.info){
            return(
                <div className='infoBox'>
                    <p>
                        {this.props.information}
                    </p>
                    <p className='info-end-title'>{this.props.endTitle}</p>
                </div>
            );
        }
    }

    render() { 
        return ( 
            <div className='infodot-container'>
                <FontAwesomeIcon style={{cursor: "pointer"}} onMouseLeave={() => this.setInfo(false)} onMouseEnter={() => this.setInfo(true)} icon={faInfoCircle}></FontAwesomeIcon> {this.showInfo()}
            </div>
        );
    }
}
 
export default InfoDot;