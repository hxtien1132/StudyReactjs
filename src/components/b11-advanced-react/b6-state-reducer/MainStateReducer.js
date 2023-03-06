import React from 'react';
import Counter from './Counter';
import useCounter from './useCounter';

const MainStateReducer = () => {
    const userReducer = (state, action) => { //đè lên hàm usecouter
        switch (action.type) {
          case "decrement":
            return {
              count: state.count - 5,
            };
          default:
            return useCounter.reducer(state, action);
        }
      };
      const { count, handleDecrement, handleIncrement } = useCounter(
        {
          initial: 0,
        },
        userReducer
      );
      return (
        <div>
          <Counter
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          ></Counter>
        </div>
      );
};

export default MainStateReducer;