import React, { Component} from 'react';
import item_style from './item_style.css';



class ListItem extends Component{
    constructor(props){
        super(props)
    }

   
    
    render(){
    
        return (
            <div className="clearfix mt-md-2 mb-md-2 p-md-1 listItem">
                <div className="col-md-5 float-md-left">
                    <p className='float-md-left'>{this.props.title}</p>
                </div>
                <div className="col-md-5 float-md-left">
                    <p>{this.props.author}</p>
                </div>
                <div className="float-right col-md-2 color-box" id={this.props.priority === 1 ? 'green' : this.props.priority === 2 ? 'yellow' : this.props.priority === 3 ? 'red' : 'grey'} onClick={this.props.delFunct}><h1 id='color-indicator-x'>X</h1></div>
            </div>
        )
    }
};

export default ListItem;