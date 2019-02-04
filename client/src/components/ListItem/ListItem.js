import React, { Component} from 'react';
import item_style from './item_style.css';



class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: ''
        }
    }

    componentDidMount(){
        this.figureColor();
    }

    figureColor = () => {
        console.log('color fig called')
        console.log(this.props.priority)
        switch(this.props.priority){
            case 1:
                this.setState( {color: 'green'} )
                break;
            case 2:
            this.setState( {color: 'yellow'} )
                break;
            case 3:
            this.setState( {color: 'red'} )
                break;
            default:
                console.log('its grey')
            this.setState( {color: 'grey'} )

        }
    }
    
   
    
    render(){
    
        return (
                <div id='listItem' className="clearfix mt-md-2 mb-md-2 p-md-1 bg-light">
                    <h2 className="float-md-left">{this.props.title}</h2>
                    <h2 className="float-md-left ml-md-5">{this.props.author}</h2>
                    <div className="float-right col-md-2" id={this.state.color} onClick={this.props.delFunct}><h1 id='color-indicator-x'>X</h1></div>
                </div>
        )
    }
};

export default ListItem;