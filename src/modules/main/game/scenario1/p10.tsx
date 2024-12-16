import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_parking.png"
import style from './style.module.scss'
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import PageText from "../../../../components/pageText";
import Notepad from "../../../../components/notepad";

export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P3() {

    const [textList, setTextList] = useState<string[]>([])
    const [stateAdd, setStateAdd] = useState(0)

    const words: { [key: string]: string } = {
        "krzyczał": "",
        "uderzył w twarz": "Ojciec stosuje przemoc wobec Ady."
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
        <h3><span>Nazwa gry  &gt; </span> klub sportowy <span> &gt; </span>Parking</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Parking</h1>
                <p>
                Skończył się trening tenisa. Ada bardzo się starała. Trener docenił jej zaangażowanie. Jednak ćwiczenia były trudne, o skomplikowanym układzie. Ada, podobnie jak inne zawodniczki, popełniała błędy. Miała problemy z serwisem i kontrolowaniem gry. Jej tata już to z nią ćwiczył w miniony weekend. Z tego powodu irytowała go niska jakość gry Ady. Kiedy byli już przy samochodzie, tata zaczął wymieniać błędy córki,
                {" "} 
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                krzyczał
                </span>
                {""}, że zbyt mało się stara, że nie docenia tego, ile czasu i pieniędzy poświęca on na przygotowanie jej do bycia tenisistką. Ada próbowała się bronić, mówiąc, że trener ją pochwalił. Ta próba polemiki wywołała w ojcu jeszcze większe zdenerwowanie — 
                {' '}
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                uderzył w twarz
                </span> 
                {' '}
                Adę. Popchnął ją w kierunku samochodu, trzasnął drzwiami. Odjechali.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.pa2)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


