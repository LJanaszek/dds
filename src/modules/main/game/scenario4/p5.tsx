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
        "ma zawieźć chłopaka na miejsce": 'Nauczyciel ma zawieźć ucznia na miejsce konkursu.',
        
        "mocno ściska Tymka w aucie":"Nauczyciel zabrał Tymka własnym samochodem i mocno wyściskał."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Kontakty online <span> &gt; </span>Samochód</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Samochód</h1>
                <p>
                    Paweł jest nauczycielem historii, jego uczeń Tymon przeszedł do kolejnego etapu konkursu. Pedagog 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>ma zawieźć chłopaka na miejsce</span> i sprawować nad nim opiekę. Paweł umówił się z rodzicami Tymka o godzinie 8 w szkole, skąd mają dalej pojechać komunikacją publiczną. Nauczyciel sprawdza jednak nawigację – okazuje się, że jest awaria i tramwaje nie jeżdżą. Na dodatek rozpadał się deszcz. Decyduje się więc zabrać Tymka własnym samochodem. Dojeżdżają na czas. Kiedy wracają z powrotem do szkoły, kilkoro uczniów widzi, jak Paweł 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>mocno ściska Tymka w aucie</span>.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p32)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


