import React, { useCallback, useState } from 'react';
import CounterCell from '../../component/counterCell';

//style
import "./CartCounter.css";

const counters = [1,2,3];
const CartCounter = () => {

  //state
  const [count , setCount] = useState({
    total:0 ,
    items:{
      1:{
        isPreesed : false,
        count: 0
      } ,
      2:{
        isPreesed : false,
        count: 0
      },
      3:{
        isPreesed : false,
        count: 0
      }
    }
  
  });

  //function
  const Increment = useCallback((id) =>{
    setCount(prev => ({
      ...prev ,
      total : count.items[id].isPreesed ? prev.total + 1 : prev.total,
      items:{
        ...prev.items,
        [id]:{
          ...prev.items[id] ,
          count : prev.items[id].count + 1 ,
          isPreesed : true
        }
      }
    }) 
    )} , [count]);




  const decrement = useCallback((id) =>{
    setCount(prev => ({
      ...prev ,
      total :  !count.items[id].isPreesed && prev.items[id].count == 0 ? prev.total - 1 : prev.total,
      items:{
        ...prev.items,
        [id]:{
          ...prev.items[id] ,
          count : prev.items[id].count - 1 ,
          isPreesed : prev.items[id].count == 0 ? false : true 
        }
      }
    })
    )} , [count]);


  return (
  <div>
      <h1>Cart Counert {count.total}</h1>
      {counters.map(counter =>{
        return (
          <div key={counter}>
            <CounterCell
            count={count.items[counter].count} 
            Increment={Increment}
            decrement={decrement}
            id={counter}/>
          </div>
        )
      })

      }
  </div>
  );
}

export default CartCounter;



