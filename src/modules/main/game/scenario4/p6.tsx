import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola_online/online_wpis_spotkanie.png"
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
        "Została zaproszona na urodziny dziewczynki": "Nauczycielka została zaproszona na urodziny uczennicy.",
        "poplotkowała o innych nauczycielkach i dzieciach":"Nauczycielka plotkowała na temat innych nauczycieli i dzieci.",
        "Uczennice podsłuchały":"Uczennice podsłuchały rozmowę nauczycielki z mamą uczennicy."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> kontakt online <span> &gt; </span>Spotkanie w weekend</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Spotkanie w weekend</h1>
                <p>
                    Klaudia jest przyjaciółką mamy Karoliny z 5b i jednocześnie jej wychowawczynią.
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Została zaproszona na urodziny dziewczynki</span>. Świętowanie się udało, było dużo dobrego jedzenia, zorganizowano zabawy w ogrodzie. Klaudia spotkała sporo dzieci, które uczy. W swobodnej atmosferze trochę
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>poplotkowała o innych nauczycielkach i dzieciach</span>.
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Uczennice podsłuchały</span>, jak żaliła się mamie Karoliny, że trudno pracuje jej się z jej grupą. O wszystkim napisały koleżance z tej klasy.
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


