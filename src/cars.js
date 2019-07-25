import React, {Component} from 'react';

class Cars extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.title}</li>
                <li>{this.props.lro}</li>
            </ul>
        )
      }
}
export default Cars 