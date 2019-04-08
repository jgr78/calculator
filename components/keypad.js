import React, { PureComponent } from 'react';
import Key from './key'
import {keys} from '../config/properties' 

class Keypad extends PureComponent {
  render() {
    return (
        <div id="keypad">
        {
          keys.map(
            (item,index) => (
              <Key key={index} {...item}/>
            )
          )
        }
        <style jsx>{`
          #keypad{
              display: flex;
              flex-wrap: wrap;
            }
        `}</style>
        </div>
    );
  }
}

export default Keypad;