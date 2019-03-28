import React, { Component} from 'react';
import data from '../data'

class Header extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div class="header">
                <h2 class="headerInfo" id="name">{data[this.props.index].name.first + ' ' + data[this.props.index].name.last}</h2>
                <div class='headerInfo'>{(this.props.index + 1) + "/" + data.length}</div>
            </div>
        )
    }

}

export default Header;