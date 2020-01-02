import React from 'react';

import MessageItem from './MessageItem';
class MessageList extends React.Component{
    render(){
        let todos=this.props.data;
       
        let todoItems=todos.map(item=>{
            return <MessageItem deleteItem={this.props.deleteItem} key={item.id} data={item}/>
        });
        
        return (
          <div>
            {todoItems}
          </div>
        );
    }
}

export default MessageList;