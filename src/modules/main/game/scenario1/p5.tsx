import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_boisko2.png"
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
        "Obwiniają bramkarkę": 'Rodzice obwiniają bramkarkę za porażkę drużyny.'
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
    }, [stateAdd])
    return (<div className={style.page}>
        <h3><img src={reakcja} alt="" /><span> &gt; </span> klub sportowy <span> &gt; </span>boisko2</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Boisko2</h1>
                <p>
                    Właśnie odbywa się mecz młodzieżowych składów piłkarek dwóch największych klubów w mieście – Topoli i Akacji. Rodzice zawodniczek obu drużyn zacięcie kibicują. Są w klubowych koszulkach, w rękach trzymają szaliki. Poziom gry jest wyrównany. Pada upragniona bramka dająca prowadzenie. Po stronie zawodniczek Topoli włączają się silne emocje. Wywołują faule na zawodniczkach Akacji, nawet dość brutalne. Zdaniem rodziców część tych zachowań jest ostentacyjnie niezauważana przez sędziego. W jego stronę płyną niewybredne komentarze. W końcu tata Marceliny - piłkarki Akacji- nazywa jedną z dziewczyn z przeciwnej drużyny „zerem”, podchodzi do niej i zaczyna na nią krzyczeć: „Czemu ją podcięłaś? Tak się nie gra w piłkę! Jesteś totalnym zerem!”. Dziewczyna zaczyna płakać. W tym czasie gospodarze tracą gola. Koniec meczu. Przegrana. Rodzice omawiają mecz między sobą.
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                        Obwiniają
                    bramkarkę</span>
                    {" "} za porażkę. Stwierdzają, że nie nadaje się do pierwszego składu i już dawno powinna zostać przesunięta do słabszej drużyny. Rozmawiają na tyle głośno, że wszystkie dziewczyny to słyszą.
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


