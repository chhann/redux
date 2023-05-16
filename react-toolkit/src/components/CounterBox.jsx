import React, { useState } from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '../slices/counterSlice';

export default function CounterBox() {
    const counter = useSelector((state)=>(state.counter.value))
    const counter2 = useSelector((state)=>(state.counterReducer.value))
    
    // 임의로 증가할값을 useState
    const [num, setNum] = useState(1);
    const [downnum, setDownNum] = useState(1);

    const dispatch = useDispatch();

    return (
        <div>
            <h3>{counter}, {counter2}</h3>
            <button onClick={()=>{dispatch(increment())}}>
            +1
            </button>

            <button onClick={()=>{dispatch(decrement())}}>
            -1
            </button>
            <br />

            <button onClick={()=>{
                // 매개변수로 전달되는 값은 payload로 사용할수 있다
                dispatch(incrementByAmount(parseInt(num)))
                
                }}>
                {num} 값만큼 증가
            </button>
            
            <input type="number" 
            value={num}
            onChange={(e) => {setNum(e.target.value)}}
            />
            <br />

            <button onClick={()=> {
                dispatch(decrementByAmount(parseInt(downnum)))
            }}>
                {downnum} 값만큼 감소
            </button>

            <input type="number" 
            value={downnum}
            onChange={(e) => {setDownNum(e.target.value)}}
            />


        </div>
    )
}
