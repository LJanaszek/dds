import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/przychodnia/przych_wpis_zabieg.png"
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
        "Pielęgniarki się spieszą, proszą, żeby wszedł, a mama dołączy do niego, jak skończy rozmawiać": "Pielęgniarki się spieszą.",
        "Odsłaniają się regularne, cienkie blizny": "Dziecko ma ślady mogące świadczyć o samookaleczaniu."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Ochrona zdrowia <span> &gt; </span>Gabinet zabiegowy</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Gabinet zabiegowy</h1>
                <p>
                Natalia przyszła z nastoletnim synem na badania – Eryk ma zostać zważony i zmierzony. Czeka go też pobranie krwi. Jest sporo ludzi. Do Natalii dzwonią współpracownicy, więc odchodzi na bok, żeby nie przeszkadzać. W tym czasie pielęgniarka woła Eryka. Eryk informuje ją, że mama na chwilę wyszła. 
                {" "}
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>Pielęgniarki się spieszą, proszą, żeby wszedł, a mama dołączy do niego, jak skończy rozmawiać</span>. Eryk wchodzi na wagę. Pielęgniarka stwierdza: „Oj, kawał chłopa z ciebie. Grubiutki jak mój wnusio”. Następnie prosi chłopaka o zdjęcie bluzy. Eryk się ociąga. Podaje lewą rękę, ale pielęgniarka stwierdza, że chce sprawdzić prawą – bo może lepiej będzie wbić igłę. Eryk nie chce. Pielęgniarka robi się poirytowana, na siłę podwija prawy rękaw. 
                {" "}
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>Odsłaniają się regularne, cienkie blizny</span>, jak od cięcia. Pielęgniarka udaje, że nie widzi – decyduje się nakłuć lewą rękę. 
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p12)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


