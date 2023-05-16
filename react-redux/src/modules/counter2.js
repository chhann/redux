

export const doublepluse = () => ({
    type : "DOUBLEPLUSE"    
});
export const doubleminus = () => ({
    type : "DOUBLEMINUS"    
});
export const change_num = num => ({
    type : "CHANGE_NUM", 
    payload : num
});



// state의 기본값 작성 > 값이 여러개 일 때 객체
const initalState = {
    count:0,
    num : 1
}

// 액션과 state를 받아와서 state를 바꾸는 리듀서함수
// 매개변수에 =을 통해서 값을 미리넣어돌 수 있다
function counter2 (state = initalState, action) {
    // switch를 통해 액션의 타입확인
    switch (action.type) {
        case "DOUBLEPLUSE" : 
        // state의 값의 형태가 객체라면 그 형태를 계속 유지
            return {
                ...state,
                count : state.count + state.num
            }

        case "DOUBLEMINUS" :
            return {
                ...state,
                count : state.count - state.num
            }

        case "CHANGE_NUM" :
            return {
                ...state,
                num : action.payload //** initalState의 num 값을 바꿔서 버튼의 +,-num의 값을 바꿈 */
                // count : state.count + action.payload //** 숫자 입력하고 버튼누르면 그 값이 value로부터 +되서 나옴 */
            }


        default : 
            return state;
    }
}

export default counter2;