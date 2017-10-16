import React,{Component} from 'react';
import Parent from 'Components/Test';
import Modal from 'Components/Modal';
import Button from 'Components/Button';
import DatePicker from 'Components/DatePicker';
import Pagination from 'Components/Pagination';
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
	 	return (<div>
	 		<Parent>
	 		
	 		</Parent>
	 		<Pagination total={100} onChange={(cur,size)=>{console.log(cur)}}></Pagination>
	 		<Button type="primary" size="lg" onClick={()=>this.setVisible(true)}>open Modal</Button>
	 		<DatePicker/>
	 		<Modal visible={this.state.modalVisible} onOk={(e)=>this.setVisible(false)} onCancel={(e)=>this.setVisible(false)}>
	 			<p>modalcontent</p>
	 		</Modal>
	 	</div>);
	 }
}