import React, { Component} from 'react';
import data from '../data'

class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="footer">
                {this.props.index > 0 ? <button class="button" onClick={this.props.previous}>{'<'} previous</button> : <button class="button">{'<'} previous</button>}
                <div class='buttonHolder'>
                    <button class="hardbutton">Edit</button>
                    <button class="hardbutton">Delete</button>
                    <button class="hardbutton">New</button>
                </div>
                {this.props.index < (data.length - 1) ? <button class="button" onClick={this.props.next}>next {'>'}</button> : <button class="button" >next {'>'}</button>}
            </div>
        )
    }

}

export default Footer;