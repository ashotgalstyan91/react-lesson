import React, {Component} from 'react';
import Cars from './cars';
import PropTypes from 'prop-types'
class Head extends Component {
    render() {
        console.log(this.props.title, this.props.lro);
        return (
            <div>
                <h1></h1>
                <Cars title={this.props.title} lro={this.props.lro} />
            </div>
        )
      }
}
Head.propTypes ={
    title:PropTypes.string.isRequired,
}
export default Head 