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
                               showPage:PropTypes.number, 
                               bufferPage:PropTypes.number,
                               bufferPageSize:PropTypes.number, 
                	        onChange:PropTypes.func.isRequired	
                	}
                }

                static get defaultProps(){
                     return {
                            defaultCurrent: 1,
                            total: 0,
                            showPage:9,
                            bufferPage:2,
                            bufferPageSize:5,
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
                     const {showPage,bufferPage,bufferPageSize} = this.props;
                      let pageList = new Array();
                      if(totalPage>showPage){
                              if(current <(bufferPage*2)){
                                         for(let bf = 0;bf<bufferPageSize;bf++){
                                                 let isActive = current===(bf+1);  
                                                 pageList.push(React.createElement('li',{
                                                           className: isActive ? 'pagination-item pagination-item-active':'pagination-item',
                                                           key:bf,
                                                           onClick:(e)=>this.handleChange(e)
                                                 },React.createElement('a',null,bf+1)))
                                         }
                                         pageList.push(...[React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'next'
                                         },React.createElement('a',{
                                                  className:'pagination-link-ellipsis'
                                         })),React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'last',
                                                     onClick: (e)=>this.handleChange(e)   
                                         },React.createElement('a',null,totalPage))])

                              }else if((current+bufferPage+1)>totalPage){
                                       let buf = new Array();
                                       for(let rf=(totalPage-bufferPageSize);rf <=totalPage ;rf++){
                                               buf.push(React.createElement('li',{
                                                         className:current===rf?'pagination-item pagination-item-active':'pagination-item',
                                                         key:rf,
                                                         onClick: (e)=>this.handleChange(e)
                                               },React.createElement('a',null,rf)))
                                       }

                                       pageList = [...[React.createElement('li',{
                                                  className:'pagination-item',
                                                  key:'first',
                                                  onClick: (e)=>this.handleChange(e)
                                       },React.createElement('a',null,1)),React.createElement('li',{
                                               className:'pagination-item',
                                               key:'prev'
                                       },React.createElement('a',{
                                             className:'pagination-link-ellipsis'       
                                       }))],...buf];
                              }else {
                                       let buffer = new Array();
                                       for(let cf=current-bufferPage;cf<=(current+bufferPage);cf++){
                                             buffer.push(React.createElement('li',{
                                                       className:cf===current?'pagination-item pagination-item-active':'pagination-item',
                                                       key:cf,
                                                       onClick: (e)=>this.handleChange(e)
                                             },React.createElement('a',null,cf)))
                                       }

                                       if(current >(bufferPage*2)){
                                             pageList = [...[React.createElement('li',{
                                                      className:'pagination-item',
                                                      key:'first',
                                                      onClick: (e)=>this.handleChange(e)  
                                             },React.createElement('a',null,1)),React.createElement('li',{
                                                      className:'pagination-item',
                                                      key:'prev'
                                             },React.createElement('a',{
                                                     className:'pagination-link-ellipsis'
                                             }))],...buffer,...[React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'next'
                                             },React.createElement('a',{
                                                  className:'pagination-link-ellipsis'
                                            })),React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'last',
                                                     onClick: (e)=>this.handleChange(e)   
                                            },React.createElement('a',null,totalPage))]]
                                       }else{
                                              pageList = [React.createElement('li',{
                                                      className:'pagination-item',
                                                      key:'first',
                                                      onClick: (e)=>this.handleChange(e)  
                                             },React.createElement('a',null,1)),...buffer,...[React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'next'
                                             },React.createElement('a',{
                                                  className:'pagination-link-ellipsis'
                                            })),React.createElement('li',{
                                                     className:'pagination-item',
                                                     key:'last',
                                                     onClick: (e)=>this.handleChange(e)   
                                            },React.createElement('a',null,totalPage))]]
                                       }

                              }

                      }else{
                            for(let i =0;i<totalPage;i++){
                            	   let isActive = current===(i+1); 
                            	   pageList.push(React.createElement('li',{
                            	   	className: isActive ? 'pagination-item pagination-item-active':'pagination-item',
                            	   	key:i,
                            	   	onClick:(e)=>this.handleChange(e),
                            	   	children:React.createElement('a',null,i+1)
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


