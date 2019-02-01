import React, { Component} from 'react';
import List from '../../components/List';
import AddForm from '../../components/AddForm';

class Home extends Component {
    componentDidMount(){
        setTimeout(load, 1000);
        
        function load() {
          document.querySelector('.wrapper').classList.add('wrapper-loaded');
          document.querySelector('#home-background').classList.add('wrapper-loaded');

          
        }
    }
    render(){
        return (
            <div className='row'>
                <div id='home-background' className='col-12 text-center'>

                    <AddForm width={'col-md-6'}/>

                    <List />
                </div>
            </div>
        )
    }
};

export default Home;