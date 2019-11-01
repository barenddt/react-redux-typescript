import {
  CounterState,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterActionTypes
} from "./types";

const initialState: CounterState = {
  count: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      ++state.count;
      return { ...state };
    case DECREMENT_COUNTER:
      --state.count;
      return { ...state };
    default:
      return { ...state };
  }
}
