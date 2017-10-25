import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Options extends Component{
              constructor(props){
              	          super(props);
              	          this.state = {
              	          	selectIndex:-1,
              	          }
              }
              
              static get propTypes(){
		return {
		         mode:PropTypes.oneOf(['simple','complex']),
		         onClick:PropTypes.func,
		         label:PropTypes.string,
		         groupIndex:PropTypes.number,
		         selectGroupIndex:PropTypes.number	
		}
	}
                
                handleClick(index,e){
                           this.setState({selectIndex:index});
                            if(this.props.onClick){
                            	   this.props.onClick(e.currentTarget.innerText);
                            }
                }

	render(){
                        const {children,mode,label,groupIndex,selectGroupIndex}  = this.props;
                        const {selectIndex} = this.state;
                        let options = new Array();
                        if(mode==="complex"){
                        	options = [React.createElement('span',{
                                       key:'label',
                                       className:'select-item-label'
                        	},label),React.createElement('ul',{
                                        key:'sub',
                                        className:'select-sub-group'
                        	},React.Children.map(children,(child,index)=>React.createElement('li',{
                        		key:index,
                        		className:selectIndex===index&&groupIndex===selectGroupIndex?'select-item-option select-item-selected':'select-item-option',
                        		onClick:(e)=>this.handleClick(index,e)
                        	},child)))];
                        }else{
                        	React.Children.forEach(children,(child,index)=>options.push(React.createElement('span',{
                        	        key:index,
                        	        className: selectIndex===index&&groupIndex===selectGroupIndex?'select-item-option select-item-selected':'select-item-option',
                                       onClick:(e)=>this.handleClick(index,e) 
                               },child)));
                        }
                        return (<li className="select-group-item">
                        	 {options}
                        </li>);
	}

}
class Select extends Component{
	constructor(props){
		super(props);
		this.state = {
                                     value:'',
                                     visible:false,
                                     selectIndex:-1
		}
	}

	static get propTypes(){
		return {
			mode:PropTypes.oneOf(['simple','complex']).isRequired,
			placeHolder:PropTypes.string,
                        onChange:PropTypes.func
		}
	}
	static get defaultProps(){
                        return {mode:'simple'}
	}

        onSelect(val,index){
                 this.setState({value:val,selectIndex:index,visible:false});
        }

        handleChange(){
               if(this.props.onChange){
                 	this.props.onChange(this.state.value);
               }
        }

        clickHandle(){
                  this.setState({visible:true});
        }

	render(){
	       const {mode,placeHolder,children} = this.props;
	       const {selectIndex,value,visible} = this.state;	
	       return (<div className="select-wrap">
	                <div className="select-input-box">
	                	<input type="text" readOnly className="select-input" value={value} placeholder={placeHolder} onChange={()=>this.handleChange()} onClick={()=>this.clickHandle()}/>
	                	<span className="select-icon">
                                         <i className={visible?"select-icon-up":"select-icon-down"}></i>
                               </span>
	                </div>
	                <div className="select-box">
	                           <ul className="select-box-group" style={{display:visible?'block':'none'}}>
                                                  {React.Children.map(children,(child,index)=>React.cloneElement(child,{
                                                  	key:index,
                                                  	mode:mode,
                                                  	groupIndex:index,
                                                  	selectGroupIndex:selectIndex,
                                                  	onClick:(val)=>this.onSelect(val,index)
                                                  }))}  
	                           </ul>
	                </div>
	       </div>);	
	}
}

Select.Options = Options;
export default Select;

