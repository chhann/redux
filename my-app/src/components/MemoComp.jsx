import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addMemoToolkit, deleteMemoToolkit, likeToolkit } from '../memo/memoSlice';

export default function MemoComp() {
    const memo = useSelector((state) =>(state.memo));
    const [text, setText] = useState("");

    // const [like, setLike] = useState('')

    // const likeDefault = function(){
    //     if(like === 1) {
    //         return <div>{memo.like}</div>
    //     }
    //     else if (like ===0) {
    //         return <div>{memo.unlike}</div>
    //     }
    // }

    // console.log(like)

    const dispatch = useDispatch()



    return (
        <div>
            <h1>메모장</h1>
            <input type="text" 
                onChange={(e) => {setText(e.target.value)}}
            />
            
            <button
                onClick={() => {dispatch(addMemoToolkit({text:text, date:"2023-05-16"}))}}
            >
                추가
            </button>
            {
                memo.map((m, idx) => (
                    <div key={m.id}>
                        <h3>{m.text}</h3>
                        <p>{m.date}

                        {m.like ?
                            <button onClick={() => {dispatch(likeToolkit(idx))}}>
                                ♥
                            </button> :
                            <button onClick={() => {dispatch(likeToolkit(idx))}}>
                                ♡
                            </button>
                    }

                            <button onClick={() => {dispatch(deleteMemoToolkit(idx))}}>
                                X
                            </button>
                        </p>

                    </div>
                ))
            }
        </div>
    )
}
