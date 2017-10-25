import React,{Component} from 'react';
import Layout from 'Components/Layout';
import Modal from 'Components/Modal';
import Button from 'Components/Button';
import DatePicker from 'Components/DatePicker';
import Pagination from 'Components/Pagination';
import Tooltip from 'Components/Tooltip';
import Avatar from 'Components/Avatar';
import Checkbox,{ CheckboxGroup } from 'Components/Checkbox';
import Radio,{ RadioGroup } from 'Components/Radio';
import Select from 'Components/Select';
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
                                                  <Aside>
                                                           <CheckboxGroup onChange={(a)=>console.log(a)}>
                                                                           <Checkbox value="1">checkbox</Checkbox>
                                                                           <Checkbox value="2">checkbox</Checkbox>
                                                                           <Checkbox value="3">checkbox</Checkbox>
                                                           </CheckboxGroup>  
                                                           <RadioGroup>
                                                                   <Radio value="1" onChange={(a)=>console.log(a)}>1</Radio>
                                                                   <Radio value="1" onChange={(a)=>console.log(a)}>2</Radio>
                                                                   <Radio value="1" onChange={(a)=>console.log(a)}>3</Radio>
                                                           </RadioGroup>
                                                           <Select mode="complex" placeHolder="选择" onChange={(a)=>console.log(a)}>
                                                                    <Select.Options label="a">
                                                                             <span>after</span>
                                                                    </Select.Options>
                                                                     <Select.Options label="b">
                                                                              <span>before</span>
                                                                               <span>bad</span>
                                                                     </Select.Options>
                                                                      <Select.Options label="c">
                                                                              <span>core</span>
                                                                               <span>case</span>
                                                                      </Select.Options>
                                                           </Select>
                                                  </Aside>
                                                  <Layout>
                                                  	<Header>
                                                             <Avatar icon={<i className="ao"></i>}></Avatar>
                                                    </Header>
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