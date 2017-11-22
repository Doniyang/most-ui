import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Carousel extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {}
	}

	render(){
		return (<section className="carousel-wrap">
			<div className="carousel-group"></div>
			<ul className="carousel-dots"></ul>
		</section>)
	}
} 