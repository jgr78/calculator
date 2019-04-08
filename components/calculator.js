import React, { PureComponent } from 'react';
import Screen from './screen'
import Keypad from './keypad'
import { connect } from 'react-redux'
import {resetCalculator} from '../store'

class Calculator extends PureComponent {
    componentDidMount () {
        this.props.dispatch(resetCalculator());
    }
  render() {
    return (
        <>
        <div id="calculator">
            <Screen />
            <Keypad />
        </div>

        <style jsx>{`
            #calculator{
                max-width: 400px;
                margin: 0 auto;
                box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.4);
                top: 50px;
                position: relative;
                border-radius: 10px
            }
            #screen {
                background-color: black;
                color: white;
                min-height: 120px;
                border-radius: 10px 10px 0px 0px;
            }
            #keypad {
                background-color: red;
                border-radius: 0 0 10px 10px;
            }
        `}</style>
        </>
    );
  }
}

export default connect()(Calculator)