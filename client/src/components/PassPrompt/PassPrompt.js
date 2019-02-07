import React, { Component} from 'react';
import './pass-prompt.css';



class PassPrompt extends Component{
    constructor(props){
        super(props)
    }

   
    
    render(){
    
        return (
            <div id='pass-prompt-div' className='col-md-8 mx-auto'>
                <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Enter</button>
                </form>
            </div>
        )
    }
};

export default PassPrompt;