import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import './index.scss';


class Tip extends Component{
	constructor(props){
	        super(props);
	        this.el=null;
	}

	static get propTypes(){
		return {
			title:PropTypes.oneOfType([
			           PropTypes.string,
			           PropTypes.element
			  ]),
			mode:PropTypes.string.isRequired,
			okText:PropTypes.string,
			cancelText:PropTypes.string,
			visible:PropTypes.bool.isRequired,
			onOk:PropTypes.func,
			onCancel:PropTypes.func
		}
	}

	static get defaultProps(){
	       return {
	       	visible:false,
	       	okText:'yes',
	       	cancelText:'no',
	       	mode:'left'
	       }
	}
               
               componentWillMount(){
                       let domNode = document.getElementById('tooltip');
                       if(Object.prototype.toString.call(domNode)!=="[object HTMLDivElement]"){
                       	domNode = document.createElement('div');
                       	domNode.id = 'tooltip';
                       	domNode.style.cssText="position: absolute;top: 0px;left: 0px;width: 100%;" 
                       }
                       this.el = domNode;    
               }
                
               componentWillReceiveProps(nextProps){
                     if(nextProps.visible){
                     	document.body.appendChild(this.el);
                     }else{
                          let domNode = document.getElementById('tooltip');
                          if(Object.prototype.toString.call(domNode)==="[object HTMLDivElement]"){
                       	document.body.removeChild(domNode);
                           }  
                     }	
               }

               componentWillUnmount(){
               	       let domNode = document.getElementById('tooltip');
                       if(Object.prototype.toString.call(domNode)==="[object HTMLDivElement]"){
                       	document.body.removeChild(domNode);
                       }    
               }

	render(){
	          const {title,mode,styleCss,okText,cancelText,onCancel,onOk,children} = this.props;	
                         return ReactDOM.createPortal(<div className="tooltip-wrap" style={styleCss}>
                         	<div className={"tooltip-dialog tool-site-"+mode}>
                                     <div className="tooltip-arrow"></div>
                                      <div className="tooltip-content">
                                                   <div className="tooltip-header">{title}</div>
	                                    <div className="tooltip-main">
                                                            <i className="tooltip-hint-icon">!</i>
                                                            <div className="tooltip-hint-msg">{children}</div>
	                                    </div>
	                                    <div className="tooltip-footer">
                                                              <Button size="sm" onClick={onCancel}>{cancelText}</Button>
                                                              <Button size="sm" type="danger" onClick={onOk}>{okText}</Button>
	                                    </div>
                                      </div>
		</div></div>,this.el);
	}
}

export default class Tooltip extends Component{
	constructor(props){
	          super(props);
	          this.state = {
	          	  visible:false,
	          	  styleCss:{left:0,top:0}
	          }
	}

	static get propTypes(){
		return {
		        okText:PropTypes.string,
		        cancelText:PropTypes.string,
		        onConfirm:PropTypes.func,
		        onCancel:PropTypes.func,
		        mode:PropTypes.string,
		        title:PropTypes.oneOfType([
			           PropTypes.string,
			           PropTypes.element
			  ]),
		        content:PropTypes.oneOfType([
			           PropTypes.string,
			           PropTypes.element
			  ]).isRequired
		}
	}
               
                handleOk(e){
                      if(this.props.onConfirm) this.props.onConfirm();
                      this.setState({visible:false});
                }
                handleCancel(e){
                         this.setState({visible:false});	
                }
               
               handleClick(e){
               	     let site = e.currentTarget.getBoundingClientRect();
               	     this.setState((prevState,props)=>{
               	     	if(props.mode==="right"){
                                       return {visible:true,styleCss:{right:document.documentElement.clientWidth-site.right,top:site.top}}
               	     	}else{
                                      return {visible:true,styleCss:{left: site.left,top:site.top}}  
               	     	}
               	     });
               }

	render(){
		const {mode,title,content,okText,cancelText,children} = this.props;
		const {visible,styleCss} = this.state;
		return (<div className="tooltip-box">
			        <Tip mode={mode} title={title} visible={visible} styleCss={styleCss} okText={okText} cancelText={cancelText} onCancel={(e)=>this.handleCancel(e)} onOk={(e)=>this.handleOk(e)}>{content}</Tip>
			        <div className="tooltip-context" onClick={(e)=>this.handleClick(e)}><span>{children}</span></div>
		</div>);
	}
}