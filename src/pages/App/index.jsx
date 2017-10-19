import React,{Component} from 'react';
import Layout from 'Components/Layout';
import Modal from 'Components/Modal';
import Button from 'Components/Button';
import DatePicker from 'Components/DatePicker';
import Pagination from 'Components/Pagination';
import Tooltip from 'Components/Tooltip';

import './index.scss';
const {Aside,Header,Main,Footer} = Layout;
export default class App extends Component{
	 constructor(props){
	       super(props);
	        this.state = {
	      	modalVisible:false
	       }
	 }
                             
                setVisible(flag){
                     this.setState(prevState=>({modalVisible:flag}));
                }

	 render(){
	 	return (<div className="app-container">
                                        <Layout style={{height:'100%'}}>
                                                  <Aside>aside</Aside>
                                                  <Layout>
                                                  	<Header>header</Header>
                                                  	<Main>
                                                  		<div>
                                                  			<DatePicker></DatePicker>
                                                  		</div>
                                                  		<div>
                                                  		       <Pagination total={200} onChange={(i,v)=>console.log(i)}></Pagination>
                                                  		</div>
                                                  		<div style={{margin:"60px 60px 0"}}>
                                                  			<div style={{float:"left"}}>
                                                                                                          <Tooltip content="tooltipmsg">left</Tooltip>
                                                  			</div>
                                                  			<div style={{float:"right"}}>
                                                                                                        <Tooltip content="tooltipmsg" mode="right">right</Tooltip>
                                                  			</div>
                                                  		</div>
                                                  	</Main>
                                                  	<Footer>
                                                  	         <Button type="primary" size="lg" onClick={()=>this.setVisible(true)}>open modal</Button>
                                                              </Footer>
                                                  </Layout>
                                        </Layout>
                                       <Modal visible={this.state.modalVisible}>
                                                 <p>content</p>
                                                 <p>content</p>
                                                 <p>content</p>
                                       </Modal>
	 	</div>);
	 }
}