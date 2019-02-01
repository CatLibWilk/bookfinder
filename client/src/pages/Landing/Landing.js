import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/book-logo.png';
import './landing-style.css';

// const Landing = () => {
    
    
//     return (
//         <div className='row'>
//             <div className="landing-background text-center col-12">
//                 <div id="logo-div">
//                     <img className="img-fluid" src={logo}></img>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Landing;

class Landing extends Component {
    constructor (props){
        super(props)
      }
      componentDidMount(){
        setTimeout(load, 2000);
        
        function load() {
          document.querySelector('.wrapper').classList.add('wrapper-loaded');
          document.querySelector('.landing-background').classList.add('wrapper-loaded');
    
          setTimeout(loadLogo, 1500);
          
        }
    
        function loadLogo() {
          document.querySelector('#logo-div').classList.add('wrapper-loaded');
        }
      }

      render(){
        return (
            <div className='row'>
                <div className="landing-background text-center col-12">
                    <div id="logo-div">
                        <Link to={'/home'}>
                            <img className="img-fluid" src={logo}></img>
                        </Link>
                    </div>
                </div>
            </div>
        )
      }
}

export default Landing;