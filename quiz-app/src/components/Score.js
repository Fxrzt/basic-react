import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score=()=>{

    const {score,setScore,setAppState} = useContext(DataContext);

    const reScore=()=>{
        setScore(0)
        setAppState("menu")
    }

    return(
        <div className="score">
            <h1>สรุปผลคะแนนสอบ</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={reScore}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score