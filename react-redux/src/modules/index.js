// 작성한 리듀서 모듈 하나로 묶어서 사용
import { combineReducers} from "redux"

// 작성한 리듀서 가져옴
import counter from "./counter"
import counter2 from "./counter2"
import memo from "./memo"

// 작성한 리듀서들을 객체로 묶어서 내보냄
const rootReduser = combineReducers({counter,counter2, memo})


export default rootReduser