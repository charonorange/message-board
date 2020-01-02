import React from 'react';
import { Button, Input } from 'antd'
const { TextArea } = Input;

class MessageForm extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        value: ''
      }
   }
   tijiao(event){
      event.preventDefault();
    }
    reset(e) {
      this.setState({
        value: e.target.value
      })
    }
    add(event){        
        if(event.type==="keyup"){
            return false;
        }
        let txt = this.state.value;
        if(txt==="") return false;       
        this.props.addItem(txt);
        this.setState({
          value: ''
        })
    }
    render(){
        return(
             <form className="form-horizontal" onSubmit={this.tijiao.bind(this)}>
                <div className="form-group">
                    <div className="col-sm-10">
                      <TextArea ref="txt" value={this.state.value} type="text" className="form-control" onChange={this.reset.bind(this)} id="exampleInputName2" placeholder="请输入留言内容"/>
                    </div>
                    <div className="col-sm-2">
                     <Button type="button" className="btn btn-primary" onClick={this.add.bind(this)}>留言</Button>
                    </div>
                </div>
            </form>
        );
    }
}
export default MessageForm;