import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class TabPane extends Component{
	constructor(props){
		super(props);
	}

	static get propTypes(){
		return {
		         tab:PropTypes.node.isRequired	
		}
	}

	render(){
		const {className,children} = this.props;
		return (<div className={"tabs-panel "+className}>{children}</div>)
	}
} 

class Tabs extends Component{
	constructor(props){
		super(props);
		this.state = {
                                      tabKey:0,
                                      tabStyle:{transform: "translate3d(0px, 0px, 0px)",width: "0px"},
                                      panelStyle:{marginLeft:'0%'}
		}
	}

	static get propTypes(){
		return {
			defaultActiveKey:PropTypes.number,
			activeKey:PropTypes.number,
			onChange:PropTypes.func
		}
	}

	static get defaultProps(){
		return {defaultActiveKey:0}
	}

	componentDidMount(){
	           let key = this.props.activeKey||this.props.defaultActiveKey;
	           this.tabChange(key);
	}

	onTabClick(key){
                       this.tabChange(key);
                       if(this.props.onChange){
                       	this.props.onChange(key);
                       }
	}

	tabChange(key){
	     let rect = this.refs.tabsnav.children[key].getBoundingClientRect();
	     this.setState({
		tabKey:key,
		tabStyle:{transform:'translate3d('+(rect.width*key+24*key)+'px, 0, 0)',width:Math.round(rect.width)+'px'},
		panelStyle:{marginLeft:-100*key+'%'}
	      });		
	}

	render(){
	      const { children } = this.props;
	      const {tabKey,tabStyle,panelStyle} = this.state;
	      let tabar = new Array();
	      let content = React.Children.map(children, (child,index)=>{
	      	tabar.push(React.createElement('div',{
                                     key:'tab'+index,
                                     onClick:()=>this.onTabClick(index),
                                     className:index===tabKey?'tabs-nav tabs-nav-active':'tabs-nav',   
	      	},child.props.tab));
	      	return React.cloneElement(child,{
	      		className:index===tabKey?'tabs-panel-active':'tabs-panel-inactive',
	      		key:'panel'+index
	      	});
	      });
                     return(<section className="tabs-wrap">
                                           <div className="tabs-nav-wrap">
                                                   <div className="tabs-link-arrow" style={tabStyle}></div>
                                                   <div className="tabs-nav-content" ref="tabsnav">{tabar}</div>
                                           </div>
                                           <div className="tabs-panel-wrap" style={panelStyle}>{content}</div>
                     	</section>); 
	}
}
Tabs.TabPane = TabPane;
export default Tabs;