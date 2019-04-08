import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class Display extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1
    }
  }
  componentDidUpdate() {
    const parentWidth = document.getElementById('display').parentNode.parentElement.clientWidth;
    let scale = 1;
    if (parentWidth < document.getElementById('display').scrollWidth + 100) {
      scale = (parentWidth ) / (document.getElementById('display').scrollWidth + 100);  
    }
    if (scale != this.state.scale) {
      this.setState({scale: scale});
    }
  }
  render() {
    const pStyle = {transform: `scale(${this.state.scale})`};
    return (
      <>
      <div id="display" style={pStyle}>
          {this.props.displayedValue}
      </div>
      <style jsx>{`
          #display {
            color: white;
            font-size: 5em;
            padding-right: 20px;
            text-align: right;
            transform: scale(1);

            position: absolute;
            right: 0;
            -webkit-transform-origin: right;
            transform-origin: right;

          }
      `}</style>
    </>
    )
  }
}

function mapStateToProps (state) {
  const { displayedValue} = state
  return { displayedValue }
}

export default connect(mapStateToProps)(Display)
