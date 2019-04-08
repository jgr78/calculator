import React, { PureComponent } from 'react';
import Display from './display'
import {color} from '../config/theme'

class Screen extends PureComponent {
  render() {
    return (
      <>
        <div id="screen">
           <Display />
        </div>
        <style jsx>{`
            #screen {
                background-color: ${color.screen};
                color: white;
                min-height: 120px;
                border-radius: 10px 10px 0px 0px;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -ms-flex-align: center;
                -webkit-align-items: center;
                -webkit-box-align: center;           
                align-items: center;
                justify-content: flex-end            
            }
        `}</style>
      </>
    );
  }
}

export default Screen;


/*
   direction: rtl;

                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
              
                -ms-flex-align: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
              
                align-items: center;
                justify-content: flex-end
                */