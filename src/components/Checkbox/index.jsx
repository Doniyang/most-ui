import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Checkbox extends Component{
	constructor(props){
	        super(props);
	        this.state={
	        	isChecked:false
	        }
	}

	static get propTypes(){
		return {
		      value:PropTypes.string.isRequired,
		      onClick:PropTypes.func.isRequired	
		}
	}
               
               handleClick(e){
               	     if(e.target.nodeName.toLocaleLowerCase()==='input'){
                               const isChecked = e.target.checked;
	               	const {onClick,value} = this.props;
	               	this.setState({isChecked:isChecked});
	               	if(isChecked){
	               	         onClick(value);
	               	}
               	     }     
               }

	render(){
		const {isChecked} = this.state;
		const {children} = this.props;
		return (<label className="checkbox-wrap" onClick={(e)=>this.handleClick(e)}>
			<span className={isChecked?"checkbox-box checkbox-checked":"checkbox-box"}>
				<input type="checkbox" className="checkbox-input"/>
				<span className="checkbox-icon"></span>
			</span>
			<span className="checkbox-content">{children}</span>
		</label>)
	}
}