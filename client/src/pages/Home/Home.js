import React, { Component} from 'react';
import List from '../../components/List';
import AddForm from '../../components/AddForm';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            title_input: '',
            author_input: ''
        }
    }
    componentDidMount(){
        setTimeout(load, 1000);
        
        function load() {
          document.querySelector('.wrapper').classList.add('wrapper-loaded');
          document.querySelector('#home-background').classList.add('wrapper-loaded');

          
        }  
    }

    handleInput = (e) => {

        switch (e.target.id){
            case "title-input":
                this.setState( {title_input: e.target.value} );
                break;
            case "author-input":
            this.setState( {author_input: e.target.value} );
                break;
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('sub call')
        console.log(this.state)
    }

    render(){
        return (
            <div className='row'>
                <div id='home-background' className='col-12 text-center'>

                    <AddForm width={'col-md-6'} funct={this.handleInput} subFunct={this.handleSubmit}/>

                    <List />
                </div>
            </div>
        )
    }
};

export default Home;