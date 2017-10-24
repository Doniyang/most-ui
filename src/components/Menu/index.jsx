import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Item extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {}
	}

	render(){
		const {children} = this.props;
		return (<li className="menu-item">{children}</li>) 
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
		const {children} = this.props;
		return (<ul className="menu-wrap">{children}</ul>)
	}
}

Menu.Item = Item;
export default Menu;
