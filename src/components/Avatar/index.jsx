import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
export default class Avatar extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {
		       icon:PropTypes.element,
                                      src:PropTypes.string,
                                      shape:PropTypes.oneOf(['circle','square']),
                                      size:PropTypes.oneOf(['large','small','default','mini'])
		}
	}

	static get defaultProps(){
		return {
	                      shape:'circle',
		       size:'default'
	                }
	}
	
	render(){
		const {icon,src,shape,size} = this.props;
		let avaChildren = null;
		if(icon){avaChildren=icon};
		if(src){avaChildren=React.createElement('img',{
		         src:src,
		         alt:'avatar'	
		})};
		return (<span className={"avatar-wrap"+" avatar-"+shape+" avatar-"+size}>{avaChildren}</span>)
	}
}