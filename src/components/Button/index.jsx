import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Button extends Component{
	constructor(props){
	        super(props);
	}
  
	static get propTypes(){
                      return {
                      	   type:PropTypes.string,
                      	   size:PropTypes.string,
                          model:PropTypes.string,
                      	  onClick:PropTypes.func
                      }
	}
        
	render(){
               let classList = ['btn'];
               let attrs = ['type','size','model'];
               let selfProps = this.props;
               attrs.forEach((it,index)=>{
                    if(it in selfProps){classList.push('btn-'+selfProps[it])}
              });    
              return (<button type="button"  className={classList.join(' ')} onClick={this.props.onClick}>{this.props.children}</button>)
	}
}