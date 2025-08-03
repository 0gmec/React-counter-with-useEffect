import {useState, useEffect} from 'react'

export default function AdvancedCounter() {
    const [count, setCount]=useState<number>(0)
    const [historyCount, setHistoryCount]=useState<number[]>([0])

    // history tracking
    useEffect(()=>{
if (historyCount) {
    setHistoryCount(prevCount => [...prevCount, count ])
    return setHistoryCount([count])
}

    },[count])

// local storage 
useEffect (()=>{
    localStorage.setItem("count", JSON.stringify(count)), {
    }
}, [count])


 useEffect(()=>{
          const saved = localStorage.getItem("count")
        const initialValue= saved ? JSON.parse(saved): 0
        setCount (initialValue)
    }, [])

    // Event Listeners
    useEffect(()=>{
        document.addEventListener

    })

    // handler for reset
const handleClick = () => {
    setCount(0), 
    setHistoryCount([0])
  };


    return (
        <div>
<h2>Advanced Counter</h2>
<p>Count: {count}</p>
<button onClick={()=> setCount(c=> c+ 1)} >Increment Count</button>
<button onClick={()=> setCount(c=> c- 1)}>Decrement Count</button>
<button onClick={handleClick}>Reset</button>
<div>
<h4>Count History:</h4>
</div>
  </div>
        
    )



}


