import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
const axios = require('axios');

class Messageapp extends React.Component{
    constructor(props){
        super(props);
        this.ids=1;
        this.state={
          todos:[]
        };
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    componentDidMount () {
      axios.get('http://127.0.0.1:3000/message/list')
      .then(response=>{
        this.setState({
          todos: response.data.list
        });
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
    deleteItem(id){
        let newtodos=this.state.todos.filter((item)=>{
            return !(item.id===id)
        });
          this.setState({
            todos:newtodos
        });
        let deleteItem = {
          id,
          is_delete: 0
        }

        axios.put('http://127.0.0.1:3000/message/update', deleteItem)
        .then(response=>{
          console.log('response', response)
          
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
    addItem(value){
       this.state.todos.unshift(
            {
                content: value,
                createdAt: (new Date()).toLocaleString()
            }
       )
        this.setState({
            todos:this.state.todos
        });
        let item = {
          content: value,
          is_delete: 1
        }

        axios.post('http://127.0.0.1:3000/message/create', item)
        .then(response=>{
          console.log('response', response)
          
        })
        .catch(error =>{
          console.log(error.message)
        })
    }

    render(){
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">           
                        <h1 className="text-center">留言板</h1>
                        <div className="message-contoiner">
                          <MessageList deleteItem={this.deleteItem} data={this.state.todos}/>
                          <MessageForm addItem={this.addItem}/>
                        </div>
                    </div>
                </div> 
            </div>         
        );
    }
}

export default Messageapp;