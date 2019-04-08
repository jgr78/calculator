import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickKey } from '../store'
import {color} from '../config/theme'

class Key extends PureComponent {
  click = () => {
    const { clickKey } = this.props
    clickKey(this.props.value, this.props.category)
  }
  render() {
    return (
        <>
        <div className={`key ${ this.props.classes ? this.props.classes : ''}`} onClick={this.click}>
             {this.props.value}
        </div>
        <style jsx>{`
          .key{
            cursor: pointer;
            width: 25%;
            border-top: 1px solid ${color.border};
            border-right: 1px solid ${color.border};
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            font-size: 2em;
            padding-top: 5%;
          }
          .key:active {
            -webkit-filter: brightness(50%);
            filter: brightness(50%);
          }
          .key:after {
            content: "";
            display: block;
            padding-bottom: 18%;
          }
          .double {
            width: 50%;
          }
          .orange_color {
            color: ${color.white};
            background-color: ${color.orange};
          }
          .gray_color {
            background-color: ${color.gray};
          }
          .darkgray_color {
            background-color: ${color.darkgray};
          }
          .border_bottom_right {
            border-radius: 0 0 10px 0;
          }
          .border_bottom_left {
            border-radius: 0 0 0 10px;
          }
        `}</style>
        </>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ clickKey }, dispatch)

export default connect('',mapDispatchToProps)(Key)
