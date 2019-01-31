import React, { Component} from 'react';


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
                <div id='home-background' className='col-12'>
                    <h1>Home</h1>
                </div>
            </div>
        )
    }
};

export default Home;