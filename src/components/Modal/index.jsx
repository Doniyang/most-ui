import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './index.scss';
export default class Modal extends Component {
	constructor(props){
	      super(props);
	      this.el = document.createElement('div');	        
	}

	static get defaultProps(){
                      return {
                              visible:false,
                              closable:true,
                              title:'modal title',
                              cancelText:'取消',
                              okText:'确定',
                              width:'520px'
                      }
	}

	static get propTypes(){
                      return {
                           visible:PropTypes.bool.isRequired,
                           closable:PropTypes.bool,
                           title:PropTypes.string,
                           cancelText:PropTypes.string,
                           okText:PropTypes.string,
                           width:PropTypes.string,
                           onOk:PropTypes.func,
                           onCancel:PropTypes.func
                      }
	}
                
                componentDidMount(){
                      if(this.props.visible){
                              document.body.appendChild(this.el);	
                      }	
                       
                }
                
                componentWillUpdate(nextProps, nextState){
                      nextProps.visible?document.body.appendChild(this.el):document.body.removeChild(this.el);	          
                }
               
               onClose(e){
               	      if(this.props.onCancel){
               	      	this.props.onCancel(e);
               	      }   
               }

               handleOk(e){
               	       if(this.props.onOk){
               	             this.props.onOk(e);
               	       }           	      
               }

	render(){
                      const  {title,children,cancelText,okText,width} = this.props;
	       return ReactDOM.createPortal(<div>
	       	<div className="modal-mask fade"></div>
	       	<div className="modal fade">
                                        <div className="modal-dialog" style={{width:width}}>
                                        	<div className="modal-content">
                                        		<div className="modal-header">
                                        		         <button className="close" type="button" onClick={e=>this.onClose(e)}>&times;</button>
                                        		         <h4 className="modal-title">{title}</h4>
                                        		</div>
                                        		<div className="modal-main">{children}</div>
                                        		<div className="modal-footer">
                                                                            <Button size="big"  onClick={(e)=>this.onClose(e)}>{cancelText}</Button>
                                                                            <Button type="primary" size="big"  onClick={(e)=>this.handleOk(e)}>{okText}</Button>
                                        		</div>
                                        	</div>
                                        </div>
         	 	</div>
	       </div>,this.el);
	}
}