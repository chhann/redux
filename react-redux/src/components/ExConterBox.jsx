import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doublepluse, doubleminus, change_num } from '../modules/counter2';


export default function ExConterBox() {

    const counter2 = useSelector((state)=>(
        state.counter2
    ))
    
    const dispatch = useDispatch();

    const [num, setNum] = useState(1)
    

    return (
        <div>
            <p>counter2의 (state) 객체에서 값을 가져와서 출력</p>
            <h3>{counter2.count}</h3>
            
            <button onClick={() => {
                dispatch(doublepluse())
            }}>
                +{counter2.num}
            </button>

            <button onClick={() => {
                dispatch(doubleminus())
            }}>
                -{counter2.num}
            </button>
            <br />
            

            
            <input 
            onChange={(e) => {setNum(e.target.value)}}
            value={num}
            />
            <button onClick={() => {
                dispatch(change_num(parseInt(num)))
                setNum("")
            }}>
                숫자입력
            </button>


        </div>
    )
}
