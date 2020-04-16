import React from 'react';

class MessageItem extends React.Component{
    delete(){
        this.props.deleteItem(this.props.data.id);
    }
    render(){

        let {content,createdAt,id}=this.props.data;

        return (
          <div className="message-item">
            <div className="message-item_content">{content}</div>
            <div className="message-item_option">
              <div>{createdAt}</div>
              <div className="message-item_delete"><span className="btn glyphicon glyphicon-remove btn-danger" onClick={this.delete.bind(this)}>删除留言</span></div>
            </div>
          </div>
        );
    }
}

export default MessageItem;