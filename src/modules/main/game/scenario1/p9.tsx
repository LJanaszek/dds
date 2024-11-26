import { Link } from "react-router-dom";
import { useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
export default function P9() {
    //fetch data from p9.json file with utf-8 pl encoding
    const data = require('./p9.json');
    let currentTable: { [key: string]: any } = {}
    let keys: any[] = []
    const [points, setPoints] = useState(0);

    console.log(Object.keys(data));
    Object.keys(data).forEach((key: any) => {
        // console.log(key);
        currentTable = ((data as { [key: string]: any })[key]);
    })
    Object.keys(currentTable).forEach((key: any) => {
        keys.push(key)
    })
    let number = 0

    if (localStorage.getItem('textList')) {

    }

    return (

        <form>
            {keys.map((key: any) => {
                console.log(currentTable[key].name);
                return <label key={key}>
                    <input type="radio" key={key} />
                    {currentTable[key].name}
                </label>

            })}
        </form>


    );
}