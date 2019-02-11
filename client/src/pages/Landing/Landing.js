import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/book-logo.png';
import './landing-style.css';
import PassPrompt from '../../components/PassPrompt';
import API from '../../utils/API';


class Landing extends Component {
    constructor (props){
        super(props);
        this.state = {
          logged: false
        };
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

      passCheck = ( {username, password} ) => {
        // const that = this;
        // console.log(`${username}: ${password}`)
        const userInfo = {
          user: username,
          password: password
        }
        API.checkPass(userInfo)
            .then(response => {
              if(password === response.data[0].password){
                this.setState( {logged: true} );
                this.hide();
              }else{
                this.wrongAlert();
              }
            })
      }
      
      
      hide = () => {
        document.querySelector('#pass-prompt-div').classList.add('hide-pass')
      };

      wrongAlert = () => {
        document.querySelector('#wrong-alert').classList.add('visible')

          setTimeout(function(){
            document.querySelector('#wrong-alert').classList.remove('visible');
            document.querySelector('#password-input-form').reset();
          }, 1000)
      };

 
      render(){
        return (
                <div className="landing-background text-center col-12">
                    <PassPrompt id='pass-prompt' funct={this.passCheck}/>
                    <div id="logo-div">
                        <Link to={'/home'} style={this.state.logged ? null : {pointerEvents: 'none'}}>
                            <img className="img-fluid" src={logo}></img>
                        </Link>
                    </div>
                </div>
        )
      }
}

export default Landing;