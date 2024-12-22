import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola/szkola_wpis_korytarz.png"
import style from './style.module.scss'
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import PageText from "../../../../components/pageText";
import Notepad from "../../../../components/notepad";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P3() {

    const [textList, setTextList] = useState<string[]>([])
    const [stateAdd, setStateAdd] = useState(0)

    const words: { [key: string]: string } = {
        "prześladowany": 'Maciek prześladuje Adama.',
        "każe nastolatkom wyjść z toalety": 'Pan Piotr każe wyjść nastolatkom z toalety.',
    }
    const addTextToList = (text: string) => {
        if (!textList.includes(words[text]) && textList.length < 5) {
            setTextList([...textList, words[text]])
        }
        localStorage.setItem('textList', JSON.stringify(textList));
        setStateAdd(stateAdd + 1)
    }
    useEffect(() => {
        if (localStorage.getItem('textList') && textList.length === 0) {
            setTextList(JSON.parse(localStorage.getItem('textList')!));
        }
        // eslint-disable-next-line
    }, [stateAdd])
    return (<div className={style.page}>
        <h3><img src={reakcja} alt="" /> <span> &gt; </span> szkoła <span> &gt; </span>Toaleta męska</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Toaleta męska</h1>
                <p>
                    Jest październik. Mija drugi miesiąc, odkąd Adam, pierwszoklasista, jest 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>prześladowany</span> przez Maćka z 5 klasy technikum. Tym razem Maciek złapał Adama w toalecie – chce, żeby ten mu dał kasę i e-papierosa. Bije go i grozi, że wepchnie jego głowę do muszli klozetowej. Przerywa mu wejście nauczyciela dyżurującego – pan Piotr 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>każe nastolatkom wyjść z toalety</span>. To już kolejny raz, kiedy ich stamtąd wygania.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p22)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


