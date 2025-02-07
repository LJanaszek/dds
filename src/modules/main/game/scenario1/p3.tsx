import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_bieznia.png"
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
        "widocznie niezadowolony": 'Trener był widocznie niezadowolony z jazdy Pawła.',
        "ośmieszał": 'Trener ośmiesza zawodników, wyżywa się na Pawle.',
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
        <h3><img src={reakcja} alt="" /> <span> &gt; </span> klub sportowy <span> &gt; </span>bieżnia</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Bieżnia</h1>
                <p>
                    Mija połowa treningu rolkarskiego. Drużyna Pawła ćwiczy slalom. On jednak ma za zadanie biegać – robi kolejne okrążenia wokół boiska. Takie jest polecenie trenera. Cała drużyna wie, że z decyzją trenera się nie dyskutuje. Podczas ostatniego wyścigu szkoleniowiec był
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                        widocznie niezadowolony
                    </span>
                    {" "}
                    z jazdy Pawła. W szatni
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                        ośmieszał
                    </span>
                    {" "}
                    chłopców, mówiąc, że to, co widział, to rywalizacja na poziomie dzieci z zerówki, a nie prawie dorosłych 15-latków. Podczas przerwy w treningu Maciek, kolega Pawła, szepcze do niego: „On się na tobie wyżywa.
                    Wcale nie ma racji. Wszyscy to wiemy. Nie przejmuj się”.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p2)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


