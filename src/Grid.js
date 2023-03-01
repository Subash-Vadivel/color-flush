import React,{useEffect, useState,useRef} from 'react'
import style from './grid.module.css'
export default function Grid() {
    const [score,setScore]=useState(0);
    const [best,setBest]=useState();
    const [time,setTime]=useState(0);
    const [status,setStatus]=useState(true);
    var pre=1;
    const inv=useRef(null);
    
    const start=()=>{
        setStatus(false);
        var cnt=30;
        inv.current=setInterval(()=>{
            document.getElementById(pre).style.background="red";
             var i=Math.ceil(Math.random()*9)
             pre=i;
             document.getElementById(i).style.background="green";
             setTime(cnt);
             cnt=cnt-1;

            },1000) 
            
            setTimeout(()=>{
                document.getElementById(pre).style.background="red";
                    setScore(0);
                 setTime(0);
                 clearInterval(inv.current);
                 setStatus(true);
                
            },[30000]) 
        
    }
    const stop=()=>{
        for(let i=1;i<=9;i++)
            document.getElementById(i).style.background="red";
           
           
           
            setScore(0);

            setTime(0);
            clearInterval(inv.current);
            setStatus(true);
           
    }
    const check=(idx)=>{
        
        if(document.getElementById(idx).style.background==="green") 
             setScore(prev=>prev+1)
    }
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
    },[best])
    useEffect(()=>{
               if(score>best)
               {
                localStorage.setItem("bestScore",score);
                setBest(score);   
            }

    },[score])
  return (
        <>
        <div className={style.centerContent}>
                     
                    <h2>Best : {best}</h2>  {time===0?(<></>):<h2>Time : {time}</h2>}
                    {status?(<button onClick={start} className={style.btn}> Start </button>):<><button onClick={stop} className={style.btn}> End </button><h2>Score : {score}</h2></>}
                    <br></br>
                    <table className={style.center}>
                <tr>
                  <td id='1' onClick={()=>check(1)}></td>
                  
                  <td id='2' onClick={()=>check(2)}></td>
                  
                  <td id='3' onClick={()=>check(3)}></td>
                </tr>
                
                <tr>
                  <td id='4' onClick={()=>check(4)} ></td>
                  
                  <td id='5' onClick={()=>check(5)}></td>
                  
                  <td id='6' onClick={()=>check(6)}></td>
                </tr>
                
                <tr>
                  <td id='7' onClick={()=>check(7)}></td>
                  
                  <td id='8' onClick={()=>check(8)}></td>
                  
                  <td id='9' onClick={()=>check(9)}></td>
                </tr>
              </table>
              </div>

        </>
    )
}
