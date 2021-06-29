import { AnyAction } from 'redux';
import { INCREASE, DECREASE } from './counterActions';
import { initialState, CounterState } from './counterInitialState';

export const CounterReducer = (
    state = initialState,
    action: AnyAction,
  ): CounterState => {
    switch (action.type) {
      case INCREASE:
        return { ...state, counter: state.counter + 1 };
      case DECREASE:
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };