import React, { Component} from 'react';
import data from '../data'

class Body extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div class="body">
                <div id="box1">
                    <p><h4>From:</h4>{data[this.props.index].city + ", " + data[this.props.index].country}</p>
                    <p><h4>Job Title:</h4>{data[this.props.index].title}</p>
                    <p><h4>Employer:</h4>{data[this.props.index].employer}</p>
                </div>
                <div id="box2">
                    <h4>Favorite Movies:</h4>
                    <ol class='list'>
                    {data[this.props.index].favoriteMovies.map(element => (<li>{element}</li>))}
                    </ol>
                    
                </div>
            </div>
        )
    }
}

export default Body;