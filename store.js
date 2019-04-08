import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  displayedValue: 0, // displayed value
  savedValue: 0, // Saved value
  lastOperation: '', // Last operation
  lastKey: '', //Last key

}
export const categoryTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR'
}

export const actionTypes = {
  RESET: 'RESET',
  CLICK: 'CLICK',
  CLICK_OPERATOR: 'CLICK_OPERATOR',
  CLICK_NUMBER: 'CLICK_NUMBER',
  UNIACTION: 'UNIACTION',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return Object.assign({}, state, {
        lastOperation: '',
        displayedValue: 0,
        savedValue: 0,
        lastKey: ''
      })
    case actionTypes.CLICK_NUMBER:
      let nextValue = (state.displayedValue);
       
      if (parseInt(state.displayedValue) === 0 || state.lastKey.length){
        if(parseInt(action.value) === 0 && parseInt(state.displayedValue) === 0) {
          return Object.assign({}, state);
        }
        nextValue = '';
      }
      nextValue = nextValue + String(action.value)

      return Object.assign({}, state, {
        displayedValue: nextValue,
        lastKey: ''
    })
    case actionTypes.UNIACTION:
      const UniActionValue = calculateUniaction(state.displayedValue, action.value);
      return Object.assign({}, state, {
        displayedValue: UniActionValue,
        lastKey: ''
    })
    case actionTypes.CLICK_OPERATOR:

    let savedValue = state.savedValue;
    let displayedValue = state.displayedValue;
     const lastOperation = (action.value === "=") ? state.lastOperation : action.value;
    if (!state.lastKey.length || action.value === "=") {
      savedValue = calculate(savedValue, state.displayedValue, state.lastOperation);
      displayedValue = savedValue;
    }
      return Object.assign({}, state, {
        savedValue: savedValue,
        lastOperation: lastOperation,
        lastKey: action.value,
        displayedValue: displayedValue,
    })
    default:
      return state
  }
}

function calculateUniaction( displayedValue, operation) {
  switch (operation) {
    case '.':
      if ((/\./).test(displayedValue)) {
        return displayedValue;
      }
      return displayedValue + operation;
    case '%':
      return parseFloat(displayedValue) / 100 ;
    case '+/-':
      if (displayedValue === 0) {
        return displayedValue;
      }
      if ((/\-/).test(displayedValue)) {
        return displayedValue.replace(/\-/, '');
      }
      return '-' + displayedValue;
    default:
      return displayedValue;
  }
}
function calculate (savedValue, displayedValue, operation) {
  switch (operation) {
    case '+':
      return parseFloat(parseFloat(savedValue) + parseFloat(displayedValue));
    case '-':
      return parseFloat(parseFloat(savedValue) - parseFloat(displayedValue));
    case 'x':
      return parseFloat(parseFloat(savedValue) * parseFloat(displayedValue));
    case '÷':
      return parseFloat(parseFloat(savedValue) / parseFloat(displayedValue)).toFixed(2);
      
    default:
      return displayedValue;
  }
}

// ACTIONS
export const clickKey = (value, category, action) => {
  switch (category) {
    case categoryTypes.NUMBER:
      return { type: actionTypes.CLICK_NUMBER, value, category, action }
    case actionTypes.UNIACTION:
      return { type: actionTypes.UNIACTION, value, category, action }
    case actionTypes.RESET:
      return { type: actionTypes.RESET }
    default:
    return { type: actionTypes.CLICK_OPERATOR, value, category, action }
  }
}

export const resetCalculator = () => {
  return { type: actionTypes.RESET }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
