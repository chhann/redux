import { createSlice } from "@reduxjs/toolkit";

export const memoSlice = createSlice({
    name: "memo",
    initialState: 
    [
        {
            id : 1,
            text : "메모입니다",
            date : "20-05-16",
            like : false,
            
        }
    ],
    reducers : {
        addMemoToolkit : (state, action) => {
            const newMemo  = {
                ...action.payload,
                id : id,
                like : false
            }
            id++;
            state.push(newMemo)
        },

        deleteMemoToolkit : (state, action) => {
            state.splice(action.payload,1);
        },

        likeToolkit : (state, action) => {
            let num = action.payload
            const {...newLike} = 
                state.map((like) => like.id === action.payload ? {...like} : like)
                let likee = newLike[num]

                if(likee.like === true) {
                    likee.like = false
                } else {
                    likee.like = true;
                }
                console.log(likee.like);
        }
    }

})

let id = 2;
let like = true

export const {addMemoToolkit, deleteMemoToolkit, likeToolkit} = memoSlice.actions
export default memoSlice.reducer