import { useState } from "react"
export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    
    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
    }
   
    return (
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            <p><small>Total Sixes: {sixes}</small></p>
            <h2>Score: {runs}</h2>
            {
              runs>50 && <p>Congratulations!! You Score 50+</p>
            }
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}