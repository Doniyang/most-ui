import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export class RadioGroup extends Component{
	constructor(props){
	             super(props);
                             this.state = {
                             	    checkedIndex:-1
                             }
	}

	static get propTypes(){
	        return {}
	}
                
        componentDidMount(){
                   this.setState((prevState,props)=>{
                   	   let checkedIndex = -1;
                   	  React.Children.forEach(props.children,(child,index)=>{
                                   if(child.props.defaultChecked){
                                   	   checkedIndex = index;
                                   }         
                   	  });
                   	 return {checkedIndex:checkedIndex}    
                   });
        }
        
        clickHandle(index){
                   this.setState({checkedIndex:index});
        } 
	render(){
                         const {children} = this.props;
                         const {checkedIndex} = this.state;
                        return (<div className="radio-group-wrap">
                           {React.Children.map(children, (child,index)=>React.cloneElement(child,{
                           	   key:index,
                           	   onClick:()=>this.clickHandle(index),
                           	   className:'radio-group-item',
                           	   role:'group',
                                  defaultChecked:checkedIndex===-1?false:checkedIndex===index?true:false
                           }))}
                        </div>);
	}
}


export default class Radio extends Component{
	constructor(props){
		super(props);
		this.state = {
		        checked:false
		}
	}

	static get propTypes(){
		return{
			name:PropTypes.string.isRequired,
			defaultChecked:PropTypes.bool.isRequired,
			role:PropTypes.oneOf(['single','group']).isRequired,
			value:PropTypes.string,
                        className:PropTypes.string,
			onChange:PropTypes.func,
			onClick:PropTypes.func
		}
	}

	static get defaultProps(){
		return {
			name:'status',
			role:'single',
			defaultChecked:false
		}
	}
        componentDidMount(){
                   this.setState((prevState,props)=>({checked:props.defaultChecked}));
        }
        componentWillUpdate(nextProps, nextState){
                if(nextProps.role === 'group'){
                	nextState.checked = nextProps.defaultChecked;
                } 
        }

        handleChange(e){
                const isChecked = e.currentTarget.checked;
                if(this.props.onChange&&isChecked){
                	this.props.onChange(e.currentTarget.value);
                };
        }

        handleClick(){
               this.setState(prevState=>({checked:!prevState.checked}));	   	
               if(this.props.onClick){
                       this.props.onClick();
                }; 	     
        }

	render(){
		const {children,name,value,className} = this.props;
		const {checked} = this.state;
		return(<label  className={className?"radio-wrap "+className:"radio-wrap"}>
                                       <span className={this.state.checked?"radio-box radio-checked":"radio-box"}>
                                       	<input type="radio" name={name} value={value} checked={checked} className="radio-input" onClick={(e)=>this.handleClick(e)} onChange={(e)=>this.handleChange(e)}/>
                                       	<span className="radio-icon"></span>
                                       </span>
                                       <span className="radio-content">{children}</span>
	               </label>);
	}
}

