import React from 'react';
import "./Mycount.css";
class Mycount extends React.Component{
    constructor(){
        super()
        this.state={
            count:10,
            msg:'🟢 Starting Point 🟢'
        }
    }
    IncreaseFun(){
       if(this.state.count<20){
        this.setState({
            count: this.state.count +1,
            msg:''
        })
       }else{
        this.setState({
            msg:'⚠️ Increase limit reached ⚠️'
        })
       }
    }
    DecreaseFun(){
        if(this.state.count>0){
            this.setState({
                count: this.state.count -1,
                msg:''
            })
        }
        else{
            this.setState({
                msg:'⚠️ Decrease limit reached ⚠️'
            })
        }
    }
    resetFun(){
        this.setState({
            count:10,
            msg:'🟢 Starting Point 🟢'
        })
        
    }
    render(){
        return(
            <>
            <header>INTERACTIVE COUNTER</header>
            <div id='container'>
                <div id='countContainer'>
                    <h1>{this.state.count}</h1>
                </div>
                <div id="msgContainer">
                    <p>{this.state.msg}</p>
                </div>
                <div id='buttonsContainer'>
                    <button id='increase' onClick={()=>this.IncreaseFun()}>🢁</button>
                    <button id='reset' onClick={()=>this.resetFun()}>⟳</button>
                    <button id='decrease' onClick={()=>this.DecreaseFun()}>🢃</button>
                </div>
            </div>
            </>
        );
    }
}

export default Mycount;