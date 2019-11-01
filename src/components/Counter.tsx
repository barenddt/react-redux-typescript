import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { CounterState, CounterActionTypes } from "../store/counter/types";
import { incrementCounter, decrementCounter } from "../store/counter/actions";

type PropTypes = {
  counter: CounterState;
  dispatch: Dispatch<CounterActionTypes>;
};

const Counter = ({ counter, dispatch }: PropTypes) => {
  return (
    <div className="container">
      <h1>{counter.count}</h1>
      <button
        className="btn green"
        onClick={() => dispatch(incrementCounter())}
      >
        Increase
      </button>
      <button className="btn red" onClick={() => dispatch(decrementCounter())}>
        Decrease
      </button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(Counter);
