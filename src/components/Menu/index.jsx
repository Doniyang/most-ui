import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import 'index.scss';

class Item extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {}
	}

	render(){
		return (<li className="menu-item"></li>) 
	}
}

class Menu extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {}
	}

	render(){
		return (<ul className="menu-wrap"></ul>)
	}
}
