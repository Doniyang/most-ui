import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Search extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
                         return {
                         	searchRef:PropTypes.string.isRequired,
                         	placeHolder:PropTypes.string,
                         	onSearch:PropTypes.func
                         }
	}
                
                static get defaultProps(){
                	return {searchRef:'search'}
                }
                
                handleClick(){
                      if(this.props.onSearch){
                      	let val = this.refs[this.props.searchRef].value;
                      	this.props.onSearch(val);
                      }
                } 

	render(){
	      const {searchRef,placeHolder,icon} = this.props;
	      return (<div className="search-wrap">
                                                      <input ref={searchRef} type="search" placeholder={placeHolder} className="input-block"/>
                                                      <span className="input-search-icon" onClick={()=>this.handleClick()}>
                                                                 <i className="search-icon"></i>
                                                      </span>
	      	</div>);	
	}
} 