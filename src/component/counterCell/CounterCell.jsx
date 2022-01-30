import react from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

//style
import './CounterCell.css';

const CounterCell = (props) =>
{
    return (
        <div className='flex-counter'>
        <p className={classNames({ 
            "green": props.count >= 8 ,
             "yellow": 7 >= props.count && props.count >= 5 ,
              "red" : props.count < 5 })}>
                  {props.count}
                  </p>
        <div className='flex-counter'>
          <button onClick={() => props.Increment(props.id)}>+</button>
          <button disabled = {props.count == 0} onClick={() => props.decrement(props.id)}>-</button>

        </div>
      </div>
    );
}


CounterCell.propTypes = {
    count: PropTypes.number.isRequired ,
    Increment : PropTypes.func.isRequired,
    decrement : PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };

export default CounterCell;