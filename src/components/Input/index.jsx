import React , { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
export default class Input extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){

	}


	render(){
                      const {icon,ref,name,type,placeHolder} = this.props;
	      if(icon){
	      	return (<div className="input-with-icon">
                                                      <input ref={ref} name={name} type={type} placeholder={placeHolder} className="input-block"/>
                                                      <span className="input-icon">{icon}</span>
	      		</div>)
	      }

	      return (<input ref={ref} name={name} type={type} placeholder={placeHolder} className="input-block"/>)

	}
}