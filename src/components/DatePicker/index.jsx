import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class DatePicker extends Component{
          	constructor(props){
          	       super(props);
                                 this.state = {
                                          year:2017,
                                          month:10,
                                          day:15,
                                          hour:0,
                                          minute:0,
                                          seconds:0,
                                          dateVisible:false,
                                          timeVisible:false,
                                          monthFirstDay:0,
                                          monthTotal:30,
                                          prevToal:30,
                                          dateTime:''
                                 }
          	}

          	static get propTypes(){
                               return {
                                     	type:PropTypes.string.isRequired,
                                       cells:PropTypes.number,
                                       name:PropTypes.string,
                                       placeHolder:PropTypes.string,
                                       spliter:PropTypes.array,
                                       weeks:PropTypes.array,
                                      maxHour:PropTypes.number,
                                      maxMiSe:PropTypes.number
                               }
          	}

          	static get defaultProps(){
                                return {
                                	type:'timepicker',
                                         cells:42,
                                         maxHour:24,
                                         maxMiSe:60,
                                         spliter:[0,1,2,3,4,5],
                                         weeks:[0,1,2,3,4,5,6]   
                                }
          	}

	       componentDidMount(){
        	        let date = new Date();	
        	        let year = date.getFullYear(),month = date.getMonth()+1;
        	        this.setState({
        	        	day:date.getDate(),
        	        	hour:date.getHours(),
        	        	minute:date.getMinutes(),
        	        	seconds:date.getSeconds()
        	        });	
                       this.datePicker(year,month);
	       }
               
                datePicker(year,month){                   
                      let day = new Date(year+'-'+month+'-01').getDay();
                      switch (month){
                              case 1 : {
                                    this.setState(prevState=>({
                                            year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:31	
                                    }));
                                    break;
                              }
                              case 2 : {
                                   year%4==0||year%100==0||year%400==0 ? this.setState(prevState=>({
                                             year:year,
                                            month:month, 	
                                            monthFirstDay:day,
                                            monthTotal:29,
                                            prevToal:31	
                                    })): this.setState(prevState=>({
                                            year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:28,
                                            prevToal:31	
                                    }));
                                   break;
                              }
                              case 3 : {
                              	     year%4==0||year%100==0||year%400==0 ? this.setState(prevState=>({
                                             year:year,
                                            month:month,
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:29	
                                    })):this.setState(prevState=>({
                                             year:year,
                                            month:month,
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:28	
                                    }));
                                    break;
                              }
                              case 4 : {
                                    this.setState(prevState=>({
                                             year:year,
                                            month:month,  	
                                            monthFirstDay:day,
                                            monthTotal:30,
                                            prevToal:31	
                                    }));
                                    break;
                              }
                              case 5 : {
                                   this.setState(prevState=>({
                                             year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:30	
                                    }));
                                    break;
                              }
                              case 6 : {
                                   this.setState(prevState=>({
                                             year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:30,
                                            prevToal:31	
                                    })); 
                                    break;
                              }
                              case 7 : {
                                    this.setState(prevState=>({
                                             year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:30	
                                    }));
                                    break;
                              }
                              case 8 : {
                                    this.setState(prevState=>({
                                            year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:31	
                                    }));
                                    break;
                              }
                               case 9 : {
                                    this.setState(prevState=>({
                                             year:year,
                                            month:month,   	
                                            monthFirstDay:day,
                                            monthTotal:30,
                                            prevToal:31	
                                    })); 
                                    break;
                              }
                              case 10 : {
                                    this.setState(prevState=>({
                                             year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:30	
                                    })); 
                                    break;
                              }
                               case 11 : {
                                    this.setState(prevState=>({
                                              year:year,
                                            month:month,	
                                            monthFirstDay:day,
                                            monthTotal:30,
                                            prevToal:31	
                                    })); 
                                    break;
                              }
                              case 12 : {
                                    this.setState(prevState=>({
                                             year:year,
                                            month:month,  	
                                            monthFirstDay:day,
                                            monthTotal:31,
                                            prevToal:30
                                    })); 
                                    break;
                              }
                              default:{
                                  break;
                              }
                       }
                }
                dayChange(e){
                        let day = e.currentTarget.firstElementChild.innerText*1;
                        this.setState({day:day});	
                } 
                nextMonth(){
                       let year = this.state.year,month = this.state.month;
                       (month+1) >12 ?this.datePicker(year+1,(month+1-12)):this.datePicker(year,month+1);	
                }

                prevMonth(){
                      let year = this.state.year,month = this.state.month;
                      (month - 1) < 1 ?this.datePicker(year-1,(month-1+12)):this.datePicker(year,month-1);    	
                }

                prevYear(){
                      let year = this.state.year,month = this.state.month;
                      this.datePicker(year-1,month);
                } 

                nextYear(){
                       let year = this.state.year,month = this.state.month;
                      this.datePicker(year+1,month);
                }

                hourChange(e){
                        let hour = e.currentTarget.innerText*1;
                        this.setState({hour:hour});
                }
                minuteChange(e){
                        let minute = e.currentTarget.innerText*1;
                        this.setState({minute:minute});
                }

                secondsChange(e){
                       let seconds = e.currentTarget.innerText*1;
                       this.setState({seconds:seconds});
                }
                
                setDateVisible(flag){
                    this.setState({dateVisible:flag});
                }

               setTimeVisible(flag){
                      this.setState({timeVisible:flag});
               }
                
               clear(){
                      this.setState({dateTime:'',dateVisible:false,timeVisible:false});
               }

               nowPicker(){
                      let now = this.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss');
                      this.setState({dateVisible:false,timeVisible:false,dateTime:now});
               }

               submit(){
                        const {year,month,day,hour,minute,seconds} = this.state;
                        let time = this.dateFormat(new Date(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+seconds),'yyyy-MM-dd HH:mm:ss')
                        this.setState({dateVisible:false,timeVisible:false,dateTime:time}); 
               }
               dateFormat(date,fmt){
                       const o = {
                              "M+": date.getMonth() + 1,
                              "d+": date.getDate(), 
                              "H+": date.getHours(),
                              "m+": date.getMinutes(),
                              "s+": date.getSeconds(),
                              "q+": Math.floor((date.getMonth() + 3) / 3),
                              "S": date.getMilliseconds()
                        };
                       if (/(y+)/.test(fmt)){
                                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
                       };
                       for (let k in o){
                               if (new RegExp("(" + k + ")").test(fmt)) {
                                          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                               }   
                       }    
                        return fmt;
               }   

	       render(){
                       const {monthFirstDay,monthTotal,prevToal,day,hour,minute,seconds,dateVisible,timeVisible,dateTime} = this.state;
                       const {spliter,weeks,cells,maxHour,maxMiSe,placeHolder,name} = this.props;
                       let daysList = new Array(),hourList=new Array(),minuteList = new Array(),secondsList = new Array();
                       for(let mf=monthFirstDay;mf>0;mf--){
                         	daysList.push(React.createElement('td',{
                         		key:mf+'prev',
                         		className:'date-picker-day-prev'
                         	},React.createElement('span',{
                         		className:'date-picker-day-cell'	
                         	},prevToal-mf)));
                       }

                       for(let mt=0;mt<monthTotal;mt++){
                               daysList.push(React.createElement('td',{
                               	     key:mt+'now',
                               	     className:mt===day-1?'date-picker-day-now date-picker-day-selected':'date-picker-day-now',
                                    onClick:(e)=>this.dayChange(e)
                               },React.createElement('span',{
                               	        className:'date-picker-day-cell'
                               },mt+1)));
                       }

                       for(let mn=0;mn<(cells-monthTotal);mn++){
                         	daysList.push(React.createElement('td',{
                         		key:mn+'next',
                         		className:'date-picker-day-next'
                         	},React.createElement('span',{
                         		className:'date-picker-day-cell'
                         	},mn+1)))
                       }
                       
                       for(let h=0;h<maxHour;h++){
                               hourList.push(React.createElement('li',{
                                	key:h,
                                	onClick:(e)=>this.hourChange(e),
                                	className:hour===h ? 'hour-minute-seconds hms-active':'hour-minute-seconds'
                                },h)); 
                       }  

                       for(let ms=0;ms<maxMiSe;ms++){
                              minuteList.push(React.createElement('li',{
                              	     key:ms,
                              	     onClick:(e)=>this.minuteChange(e),
                              	     className:minute===ms ? 'hour-minute-seconds hms-active':'hour-minute-seconds'
                              },ms));
                       }

                       for(let cs=0;cs<maxMiSe;cs++){
                              secondsList.push(React.createElement('li',{
                              	     key:cs,
                              	     onClick:(e)=>this.secondsChange(e),
                              	     className:seconds===cs? 'hour-minute-seconds hms-active':'hour-minute-seconds'
                              },cs));
                       }

	       return(<div className="date-wrap">
	       	<div className="date-input-box">
                          <input type="text" data-role="datepicker" onClick={()=>this.setDateVisible(true)} className="date-picker-input" value={dateTime} placeholder={placeHolder} name={name} />
	       	</div>
	       	<div className="date-picker-box" style={{display:dateVisible?'block':'none'}}>
		       	<div className="date-box-header">
                               <div className="date-prev-btns">
                                         <button onClick={()=>this.prevYear()} className="date-year-prev-btn">
                                                  <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                    </span>
                                                    <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                    </span>  
                                         </button>
                                         <button onClick={()=>this.prevMonth()} className="date-month-prev-btn">
                                                   <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                    </span>     
                                         </button>   
                               </div>
                               <div className="date-montn-year">
                                     <span>{this.state.year}年</span><span>{this.state.month}月</span>
                               </div>
                               <div className="date-next-btns">
                                           <button onClick={()=>this.nextMonth()} className="date-month-next-btn">
                                                         <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                        </span>
                                           </button>  
                                           <button onClick={()=>this.nextYear()} className="date-year-next-btn">
                                                     <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                    </span>
                                                    <span data-role="arrow">
                                                    	<i className="date-icon-arrow"></i>
                                                    	<i className="date-icon-arrow"></i>
                                                    </span>     
                                           </button>
                               </div>
		       	</div>
		       	<div className="date-box-main">
                                   <table className="date-picker-table">
                                   	<thead>
                                   		<tr>
                                   			<th className="date-picker-week">日</th>
                                   			<th className="date-picker-week">一</th>
                                   			<th className="date-picker-week">二</th>
                                   			<th className="date-picker-week">三</th>
                                   			<th className="date-picker-week">四</th>
                                   			<th className="date-picker-week">五</th>
                                   			<th className="date-picker-week">六</th>
                                   		</tr>
                                   	</thead>
                                   	<tbody>
                                   	        {spliter.map((item,index)=>{
                                   	        	return (<tr key={index}>{weeks.map((it,dex)=>{
                                                                  return daysList[index*7+dex]
                                   	        	})}</tr>);	
                                   	        })}
                                   	</tbody>
                                   </table>
		       	</div>
		       	<div className="date-box-footer">
                                     <div className="date-select-time">
                                               <a onClick={()=>this.setTimeVisible(true)}>选择时间</a>
                                     </div>
                                     <div className="date-core-btns">
                                                   <button className="date-btn" onClick={()=>this.clear()}>清空</button>
                                                   <button className="date-btn" onClick={()=>this.nowPicker()}>现在</button>
                                                   <button className="date-btn" onClick={()=>this.submit()}>确定</button>
                                     </div>
		       	</div>
	       	</div>
	       	<div className="time-picker-box" style={{display:timeVisible?'block':'none'}}>
                                 <div className="time-box-header">
                                           <span>{this.state.year}-{this.state.month}-{this.state.day}</span>
                                 </div>
                                 <div className="time-box-main">
                                              <div className="time-main-item">
                                                        <ul className="time-for-hour">{hourList}</ul>
                                             </div>
                                              <div className="time-main-item">
                                                         <ul className="time-for-minute">{minuteList}</ul>
                                              </div>
                                              <div className="time-main-item">
                                                      <ul className="time-for-seconds">{secondsList}</ul>
                                              </div>
                                 </div>
                                 <div className="time-box-footer">
                                              <div className="date-select-day">
                                                         <a onClick={()=>this.setTimeVisible(false)}>选择时间</a>
                                               </div>
                                               <div className="time-core-btns">
                                                      <button className="date-btn" onClick={()=>this.clear()}>清空</button>
                                                      <button className="date-btn" onClick={()=>this.nowPicker()}>现在</button>
                                                      <button className="date-btn" onClick={()=>this.submit()}>确定</button>
                                               </div>
                                 </div>
	       	</div>
	       </div>)	
	}
} 