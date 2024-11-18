import { Link } from "react-router-dom";
import data from "./p9.json"

import { useState } from "react";
import { getGameRoute, PAGES } from "../../../../routes";
export default function P9() {
    const checkbox = data.checkbox
    const [points, setPoints] = useState(0);
    return (
        <div>
            {Object.values(checkbox).map((values, key) => {
                return (
                    <div key={key}>
                       
                        <label>
                            <input type="checkbox" 
                            onClick={(e)=>{
                                if(e.currentTarget.checked && values.isTrue){
                                    setPoints(points+1)
                                }
                                else{
                                    setPoints(points-1)
                                }
                            }}
                            />
                            {values.name}
                        </label>
                    </div>
                );
            })}
            <Link to={getGameRoute(PAGES.pa10)}
            onClick={()=>{
                localStorage.setItem('points', JSON.stringify(points))
            }}
            >Dalej</Link>
        </div>
    );
}