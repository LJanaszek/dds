import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.scss"
import { getGameRoute, PAGES } from "../../../../routes";
export default function P9() {
    //fetch data from p9.json file with utf-8 pl encoding
    const [showButton, setShowButton] = useState(false);
    const [number, setNumber] = useState(0);
    const [caseList, setCaseList] = useState([]);
    const data = require('./p9.json');
    let keys = (Object.keys(data))

    useEffect(() => {
        setCaseList(Object.values(data[keys[number]]));
        if (number === keys.length - 1) {
            setShowButton(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number]);

    return (
        <div className={style.listDiv}>
            <h1>
                {keys[number]}
            </h1>
            <form className={style.checkboxForm}>
                {caseList.map((item: any) => {
                    return (
                        <label>
                            <input type="checkbox" key={item} />
                            {item}
                        </label>
                    )
                })}

            </form>
            <div className={style.nav}>
                {!showButton &&
                    <button className={style.buttonNext} onClick={() => { setNumber(number + 1); console.log(number) }}>
                        Dalej
                    </button>
                }
                {showButton &&
                    <Link to={getGameRoute(PAGES.pa11)} className={style.buttonNext}>
                        Dalej2
                    </Link>
                }
            </div>
        </div>

    );
}