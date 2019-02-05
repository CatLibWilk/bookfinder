import React, { Component} from 'react';
import item_style from './item_style.css';



class ListItem extends Component{
    constructor(props){
        super(props)
    }

   
    
    render(){
    
        return (
            <div className="clearfix mt-md-2 mb-md-2 p-md-1 listItem">
                <tr>
                    <td className='col-4'>
                        <h2 className="float-md-left">{this.props.title}</h2>
                    </td>

                    <td className='col-4'>
                        <h2 className="float-md-left ml-md-5">{this.props.author}</h2>
                    </td>

                    <td className='col-4'>
                        <div className="float-right col-md-2" id={this.props.priority === 1 ? 'green' : this.props.priority === 2 ? 'yellow' : this.props.priority === 3 ? 'red' : 'grey'} onClick={this.props.delFunct}><h1 id='color-indicator-x'>X</h1></div>
                    </td>

                </tr>
            </div>
        )
    }
};

export default ListItem;