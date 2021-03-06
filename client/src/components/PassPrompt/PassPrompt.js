import React, { Component} from 'react';
import './pass-prompt.css';



class PassPrompt extends Component{
    constructor(props){
        super(props)
    }

   
    
    render(){
    
        return (
            <div id='pass-prompt-div' className='col-md-8 mx-auto'>
            <div id='wrong-alert'><h4>password incorrect</h4></div>
            <div id='no-user'><h4>password or user incorrect</h4></div>
                <form id="password-input-form" className="form-inline justify-content-center">
                   
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="username-input" className="sr-only">username</label>
                        <input type="username" className="form-control" id="username-input" placeholder="username"></input>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="password-input" className="sr-only">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                    </div>
                    <button id="pass-sub" type="submit" className="btn btn-primary mb-2" onClick={(e) => {e.preventDefault(); this.props.funct( {username: document.querySelector('#username-input').value, password: document.querySelector('#password-input').value} )}}>Enter</button>
                </form>
            </div>
        )
    }
};

export default PassPrompt;