import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Thead extends Component{
	constructor(props){
	      super(props);
	}

	render(){
                      const {children} = this.props;
                      return (<thead>
                      	<tr>{children.map((child,index)=>React.createElement('th',{key:index},child))}</tr>
                      </thead>);
	}
} 

class Tbody extends Component{
	constructor(props){
		super(props);
	}

	render(){
	        const {children} = this.props;	
	       return (<tbody>{children}</tbody>)             	
	}
}

class Tfoot extends Component{
	constructor(props){
		super(props);
	}

	render(){
	    const {children} = this.props;	
	    return (<tfoot><tr>{children}</tr></tfoot>)      	
	}
}

class Table extends Component{
	constructor(props){
		super(props);
	}
	render(){
	     const {children} = this.props;	  	
	    return (<table className="table-wrap">{children}</table>)        	
	}
} 

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tfoot = Tfoot;

export  default Table; 


