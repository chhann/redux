import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } from '../slices/memoSlice';

export default function MemoComp() {
    const memo = useSelector((state)=>(state.memo));
    const [text, setText] = useState("");

    const dispatch = useDispatch()
    

    return (
        <div>
            
            {
                // memo 배열의 index 값을 전달하여 splice를 이용하여 삭제
                // 다양한 삭제 방법 중 하나
                memo.map((m, index)=>(
                    <div key={m.id}>
                        <p>{m.id}</p>
                        <h3>{m.text}</h3>
                        <p>{m.date}</p>
                        <button onClick={() => {dispatch(deleteMemoRedux(m.id))}}>
                            X
                        </button>

                        <button onClick={() => {dispatch(deleteMemoSplice(index))}}>
                            index-X
                        </button>
                        <hr />
                    </div>
                ))
            }
            {/**
             * 1. memo redux 내용 확인 후, slice 와 비교
             * 2. inpujt태그를 이용해서 입력받아와서 수정하기
             */
                
            }
            <input type="text" 
            value={text}
            onChange={(e) => {setText(e.target.value)}}
            />

            <button onClick={() => {dispatch(addMemoRedux({text:text, date:"2023-20-2020"}))}}>
                메모추가
            </button>

            <button onClick={() => {dispatch(addMemoToolkit({text:text, date:"2023-20-2020"}))}}>
                Toolkit형태로 추가
            </button>




        </div>
        )
    }