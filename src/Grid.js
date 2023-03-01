import React,{useEffect, useState} from 'react'
import style from './grid.module.css'
export default function Grid() {
    const [score,setScore]=useState(0);
    const [best,setBest]=useState();
    const [status,setStatus]=useState(true);
    useEffect(()=>{
                  var a=localStorage.getItem("bestScore");
                  if(a===undefined)
                  {
                       localStorage.setItem("bestScore",0);
                  }
                  else
                  {
                    setBest(a);
                  }
    },[])
  return (
        <>
        <div className={style.centerContent}>

                    <h2>Best : {best}</h2>
                    {status?(<button className={style.btn}> Start </button>): <h2>Score : {score}</h2>}
                    <br></br>
                    <table className={style.center}>
                <tr>
                  <td id='1'></td>
                  
                  <td id='2'></td>
                  
                  <td id='3'></td>
                </tr>
                
                <tr>
                  <td id='4'></td>
                  
                  <td id='5'></td>
                  
                  <td id='6'></td>
                </tr>
                
                <tr>
                  <td id='7'></td>
                  
                  <td id='8'></td>
                  
                  <td id='9'></td>
                </tr>
              </table>
              </div>

        </>
    )
}
