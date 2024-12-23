import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.scss"
import { getGameRoute, PAGES } from "../../../../routes";
import image from "../../../../assets/icons/pen.png"
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import MoreInfo from "../../../../components/moreInfo";
export default function P9() {
    //fetch data from p9.json file with utf-8 pl encoding
    const [showButton, setShowButton] = useState(false);
    const [number, setNumber] = useState(0);
    const [caseList, setCaseList] = useState([]);
    const data = require('./p9.json');
    let keys = (Object.keys(data))
    const warnWords = [
        "wysyła głosówkę",
        "zabrał Tymka",
        "plotkowała o innych nauczycielkach i dzieciach",
        "komentuje zdjęcia uczniów i przesyła",
        "mają nauczycielkę wśród znajomych",
    ]
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
    let test: AssociativeArray = {};
    function addSelectedInputs() {
        if(number === 0){
            localStorage.removeItem('userAnswers');
        }
        if (!localStorage.getItem('userAnswers')) {
            localStorage.setItem('userAnswers', JSON.stringify([]));
        }
        document.querySelectorAll("label").forEach((input: any) => {
            if (input.firstChild!.checked) {

                if (localStorage.getItem('userAnswers')) {
                    let userAnswers = JSON.parse(localStorage.getItem('userAnswers')!);
                    test[keys[number]] = input.firstChild!.value;
                    userAnswers.push(test);
                    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

                }
            }
        })
    }

    return (
        <div className={style.listDiv}>
            <MoreInfo />
             <h3 className={style.linkWithLogo}><img src={reakcja} alt="" /><span> &gt; </span> klub sportowy <span> &gt; </span>rekomendacja rozwiązań</h3>
            <div className={style.title}>
                <img src={image} alt="" />
                <h1>
                    {/* if keys[number].includes(warnWords[number]) strip keys[number] by wrong words and paste first part of keys[number] with warnWords[index] inside h1 in span then add second part with red color */}
                    {
                        keys[number].includes(warnWords[number]) &&
                        <span>{keys[number].split(warnWords[number])[0]}<span style={{ color: "red" }}>{warnWords[number]}</span>{keys[number].split(warnWords[number])[1]}</span>
                    }

                </h1>
            </div>
            <form className={style.checkboxForm}>
                {caseList.map((item: any) => {
                    return (
                        <label key={item + Math.random()}>
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
                    <Link to={getGameRoute(PAGES.p41)} className={style.buttonNext} onClick={addSelectedInputs}>
                        Dalej
                    </Link>
                }
            </div>
        </div>

    );
}