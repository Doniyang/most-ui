import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export class Col extends Component{
	constructor(props){
		super(props);
	}
                
                static get propTypes(){
                	return {}
                }

                render(){
                       return (<div className="grid-row-col">{this.props.children}</div>)	
                }
}

export class Row extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
                	return {
                		mode:PropTypes.oneOf(['inline','block']),
                		type:PropTypes.oneOf(['column','row']),
                		justify:PropTypes.oneOf(['center','start','between']),
                		align:PropTypes.oneOf(['center','start','end','full'])
                	}
                }

                static get defaultProps(){
                	return {
                		justify:'center',
                		align:'start'
                	}
                }

                render(){
                        const {mode,type,justify,align,children} = this.props;
                        let classList = ['grid-row-wrap'];
                        mode==="inline"?classList.push('grid-flex-inline-box'):classList.push('grid-flex-box');
                        type==="column"?classList.push('grid-flex-col-box'):classList.push('grid-flex-row-box');
                        classList.push('grid-flex-content-'+justify);
                        classList.push('grid-flex-items-'+align);	
                       return (<section className={classList.join(' ')}>{children}</section>)	
                }
}