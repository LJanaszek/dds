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
    interface AssociativeArray {
        [key: string]: string
    }
    let test:AssociativeArray={};
    function addSelectedInputs() {
        if (!localStorage.getItem('userAnswers')) {
            localStorage.setItem('userAnswers', JSON.stringify([]));
        }
        document.querySelectorAll("label").forEach((input: any) => {
            if (input.firstChild!.checked) {
                console.log(input.firstChild!.value);
                //create associative array
                
                if (localStorage.getItem('userAnswers')) {
                    let userAnswers = JSON.parse(localStorage.getItem('userAnswers')!);
                    //add value to array with key keys[number]
                    test[keys[number]] = input.firstChild!.value;
                    userAnswers.push(test);
                    console.log(userAnswers);
                    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
                    //  localStorage.setItem('userAnswers', JSON.stringify([input.firstChild!.value]));
                }
            }
        })
    }

    return (
        <div className={style.listDiv}>
            <h1>
                {keys[number]}
            </h1>
            <form className={style.checkboxForm}>
                {caseList.map((item: any) => {
                    console.log(Math.random());
                    return (
                        <label key={item+ Math.random()}>
                            <input type="checkbox" key={item} value={item} />
                            {item}
                        </label>
                    )
                })}

            </form>
            <div className={style.nav}>
                {!showButton &&
                    <button
                        className={style.buttonNext}
                        onClick={() => {
                            setNumber(number + 1);
                            addSelectedInputs();
                        }}>
                        Dalej
                    </button>
                }
                {showButton &&
                    <Link to={getGameRoute(PAGES.p11)} className={style.buttonNext} onClick={addSelectedInputs}>
                        Dalej2
                    </Link>
                }
            </div>
        </div>

    );
}