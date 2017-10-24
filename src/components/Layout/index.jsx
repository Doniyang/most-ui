import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Header extends Component{
	constructor(props){
	          super(props);
	}
                
                static get propTypes(){
                	return {
                		style:PropTypes.object,
                		className:PropTypes.string
                	}
                }

	render(){
	         const {style,className,children} = this.props;  	
	         return React.createElement('header',{
	         	style:style,
	         	className:className?('layout-header '+className):'layout-header'
	         },children);
	}
}

class Main extends Component{
          constructor(props){
	super(props);
          }
          
          static get propTypes(){
                	return {
                		style:PropTypes.object,
                		className:PropTypes.string
                	}
          }
          render(){
          	const {style,className,children} = this.props;
          	return React.createElement('main',{
	         	style:style,
	         	className:className?('layout-main '+className):'layout-main'
	         },children);
          }
}

class Footer extends Component{
          constructor(props){
	 super(props);
          }
          
          static get propTypes(){
                	return {
                		style:PropTypes.object,
                		className:PropTypes.string
                	}
           }

          render(){
          	const {style,className,children} = this.props;
          	return React.createElement('footer',{
	         	style:style,
	         	className:className?('layout-footer '+className):'layout-footer'
	         },children);
          }	
} 

class Aside extends Component{
	constructor(props){
	          super(props);
	}
       static get _LAYOUT_ASIDE(){
       	    return true;
       }
       static get propTypes(){
                  return {
                         style:PropTypes.object,
                         role:PropTypes.string, 
                        className:PropTypes.string
                  }
        }
	render(){
                const {className,style,children,role} = this.props;
                let classList = ['layout-aside'];
                if(className){classList.push(className)};
                if(role==="admin"){classList.push('layout-admin-aside')}    
		return (<aside className={classList.join(' ')} style={style}>{children}</aside>)
	}
}


class Layout extends Component{
	constructor(props){
	          super(props);
	}
                
                static get propTypes(){
                	return {
                		style:PropTypes.object,
                		className:PropTypes.string
                	}
                }
                 static get defaultProps(){
                	return {className:''}
                }
	render(){
	       const {style,className,children} = this.props;
	       let hasSider = false,classList = ['layout-container'];	
	       React.Children.forEach(children, (element)=>{
	       	if(element && element.type && element.type._LAYOUT_ASIDE){
	       		hasSider = true; 
	       	}
	       });
	       if(hasSider){classList.push('layout-has-sider');}
                      if(className){classList.push(className);}

	       return (<div className={classList.join(' ')} style={style}>{children}</div>)
	}
}

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;
Layout.Aside = Aside;
export default Layout;



