import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/oboz/oboz_wpis_pokoj.png"
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
        "Ten już przysypia" : "Opiekun przysypiał.",
        "leży obok niego":"Opiekun położył się w samych bokserkach obok chłopca."
    }
    const addTextToList = (text: string) => {
        if (!textList.includes(words[text]) && textList.length < 6) {
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Obóz wakacyjny <span> &gt; </span>szkoła</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Pokój</h1>
                <p>                
                Michał jest opiekunem najmłodszej grupy na obozie. Chłopcy nie mogą zasnąć. W końcu jeden z nich, Olek, decyduje się pójść po pomoc do Michała.
                {" "}
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Ten już przysypia</span>, ale szybko reaguje na sygnał od Olka. Nie przebierając się, w samych bokserkach idzie do pokoju chłopców. Julek tęskniąc za rodzicami, szlocha w poduszkę. Michał
                {" "}
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>leży obok niego</span>
                {" "}
                i czyta mu jego ulubione opowiadanie. Po parunastu minutach wszyscy zasypiają, Michał również. Dopiero rano budzi go kolega prowadzący obchód.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p42)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


