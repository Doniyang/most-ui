import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Pagination extends Component{
	constructor(props){
	      super(props);
	      this.state = {
	      	current:1,
	      	totalPage:0,
	      	pageSize:0
	      }
	}
                
                static get propTypes(){
                	return {
                	        current:PropTypes.number,
                	        defaultCurrent:PropTypes.number,
                	        total:PropTypes.number.isRequired,
                	        defaultPageSize:PropTypes.number,
                	        pageSize:PropTypes.number,
                	        onChange:PropTypes.func.isRequired	
                	}
                }

                static get defaultProps(){
                     return {
                           defaultCurrent: 1,
                           total: 0,
                           defaultPageSize: 10
                     }
                }
                componentDidMount(){
                       this.setState((prevState,props)=>{
                       	const totalPage = props.pageSize?(props.total/props.pageSize):(props.total/props.defaultPageSize);
                       	return {current:props.current||props.defaultCurrent,totalPage:totalPage,pageSize:props.pageSize||props.defaultPageSize};
                       });	
                }
  
                handleChange(e){
                      let curr = e.currentTarget.firstElementChild.innerText*1,
                      pageSize = this.props.pageSize||this.props.defaultPageSize;	
                      this.setState({current:curr});
                      this.props.onChange(curr,pageSize);
                }

                prevHandle(e){
                      const {current,pageSize}  = this.state;	
                      if(current===1){return;}
                      this.setState({current:current-1});
                      this.props.onChange(current-1,pageSize);
                }

                nextHandle(e){
                       const {current,totalPage,pageSize}  = this.state;	
                      if(current===totalPage){return;}
                      this.setState({current:current+1});
                      this.props.onChange(current+1,pageSize);
                }
               
               render(){
               	      const {totalPage,current} = this.state;

                      let pageList = new Array();
                      if(totalPage>10){
                             
                      }else{
                            for(let i =0;i<totalPage;i++){
                            	   let isActive = current===(i+1); 
                            	   pageList.push(React.createElement('li',{
                            	   	className: isActive ? 'pagination-item pagination-item-active':'pagination-item',
                            	   	key:i,
                            	   	onClick:(e)=>this.handleChange(e),
                            	   	children:<a>{i+1}</a>
                            	   }))
                            }
                      };
               	      return (<ul className="pagination-wrap">
               	      	<li className={current===1?"pagination-prev pagination-disabled":"pagination-prev"} onClick={(e)=>this.prevHandle(e)}>
                                       <a className="pagination-item-link">
                                             <i className="pagination-link-arrow"></i>
                                             <i className="pagination-link-arrow"></i>
                                       </a>  
               	      	</li>
               	      	{pageList}
               	      	<li className={totalPage===current?"pagination-next pagination-disabled":"pagination-next"} onClick={(e)=>this.nextHandle(e)}>
                                      <a  className="pagination-item-link">
                                               <i className="pagination-link-arrow"></i>
                                                <i className="pagination-link-arrow"></i>
                                      </a>
               	      	</li>
               	      </ul>)
               }


}


