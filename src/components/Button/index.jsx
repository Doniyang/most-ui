import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Button extends Component{
	constructor(props){
	        super(props);
	        this.state = {
	        	classList:[]
	        }
	}

	
	static get propTypes(){
                      return {
                      	type:PropTypes.string,
                      	size:PropTypes.string,
                      	onClick:PropTypes.func
                      }
	}
                
                 componentDidMount(){
                         this.setState((prevState, props)=>{
                         	prevState.classList.push('btn');
                         	if(props.type){
                         	      prevState.classList.push('btn-'+props.type);
                         	};
                         	if(props.size){
                         	        prevState.classList.push('btn-'+props.size);	
                         	}
                         	return prevState;
                         })
                 }  

	render(){
                       return (<button type="button"  className={this.state.classList.join(' ')} onClick={this.props.onClick}>{this.props.children}</button>)
	}
}