import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export class CheckboxGroup extends Component{
          constructor(props){
          	    super(props);
          	    this.state = {
          	          checkVals:[]
          	    }
          }

          static get propTypes(){
          	     return {
          	     	onChange:PropTypes.func
          	     }
          }
          componentDidMount(){
                   this.setState((prevState,props)=>{
                   	React.Children.forEach(props.children,(child,index)=>{
                               if(child.props.defaultChecked){
                                     prevState.checkVals.push(child.props.value);
                               }       
                   	});
                   	return prevState;    
                   });
         }
         componentWillUpdate(nextProps, nextState){
          	if(nextProps.onChange){
          		nextProps.onChange(nextState.checkVals.filter((v)=>v!==""));
          	}
         }
         changeHandle(val,checked){
          	   this.setState(prevState=>checked?prevState.checkVals.push(val):{checkVals:prevState.checkVals.filter((v)=>v!==val)});

          } 
          
          render(){
          	const {children} = this.props;
          	return (<div className="checkbox-group-wrap">
	          	{React.Children.map(children,(child,index)=>React.cloneElement(child,{
	          	        key:index,
	          	        className:'checkbox-group-item',
	          	        onChange:(val,checked)=>this.changeHandle(val,checked)	
	          	}))}
          	</div>);
          }


}

export default class Checkbox extends Component{
	constructor(props){
	        super(props);
	        this.state={
	        	checked:false
	        }
	}

	static get propTypes(){
		return {
		      value:PropTypes.string.isRequired,
		      onChange:PropTypes.func,
		      className:PropTypes.string,
                      defaultChecked:PropTypes.bool.isRequired
		}
	}
	static get defaultProps(){
		return {defaultChecked:false}
	}

       componentDidMount(){
                   this.setState((prevState,props)=>({checked:props.defaultChecked}));
       }

       handleChange(e){
                const isChecked = e.currentTarget.checked;
                if(this.props.onChange){
                	this.props.onChange(e.currentTarget.value,isChecked);
                };
        }

        handleClick(){
                 this.setState(prevState=>({checked:!prevState.checked}));
        }

	render(){
		const {checked} = this.state;
		const {children,value,className} = this.props;
		return (<label className={className?"checkbox-wrap "+className:"checkbox-wrap"}>
			<span className={checked?"checkbox-box checkbox-checked":"checkbox-box"}>
				<input type="checkbox" checked={checked} value={value} className="checkbox-input" onClick={()=>this.handleClick()} onChange={(e)=>this.handleChange(e)}/>
				<span className="checkbox-icon"></span>
			</span>
			<span className="checkbox-content">{children}</span>
		</label>)
	}
}