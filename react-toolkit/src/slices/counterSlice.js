// Slice를 이용하여 이름, 초기값, 리듀서를 작성

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : "counter",
    initialState: {
        value : 0,
    },
    reducers : {
        // 객체안에서 함수 (메서드) 작성
        increment : (state) => {
            // 툴킷은 state의 값에 직접접근하여 값을 바로 수정가능
            state.value += 1;
        },
        // 감소하는 함수(메서드)작성
        decrement: (state) => {
            // return을 이용하면 이전 방식으로 값을 저장할 수 있다
            // 이전 방식 : state의 값을 통때로 할당
            return {value : state.value - 1}
        },
        // 값을 입력받아와서 증가하는 함수
        // action은 리덕스에서 값을 전달한 액션개체의 내용
        // action의 payload는 리덕스툴킷에서 고정해서 사용
        incrementByAmount : (state, action) => {
            state.value += action.payload
        },
        decrementByAmount : (state, action) => {
            state.value -= action.payload
        },
    }
})

// 액션생성함수를 slice를 통해서 내보냄
export const { increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions
// 리듀서함수를 slice 통해서 내보냄
export default counterSlice.reducer