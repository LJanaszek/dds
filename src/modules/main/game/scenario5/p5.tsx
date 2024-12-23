import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/oboz/oboz_wpis_jezioro.png"
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
        "kąpać się nago": 'Wychowawca kąpie się nago w jeziorze i zaprasza do tego wychowanki.',
        "krążyły różne plotki":"O wychowawcy krążą różne plotki."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Obóz wakacyjny <span> &gt; </span>Jezioro</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Jezioro</h1>
                <p>
                    Mateusz jest aktywistą klimatycznym, studiuje ochronę środowiska. W wakacje dorabia jako wychowawca kolonijny. Każdego dnia wieczorem, kiedy już wypełni wszystkie obowiązki, lubi chodzić nad pobliskie jezioro na terenie obozu, oglądać zachód słońca i
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>kąpać się nago</span>
                    {" "}
                    w spokojnej, rześkiej wodzie. O jego sposobie spędzania wolnego czasu
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>krążyły różne plotki</span>. Wiedział o nich, więc nie był zaskoczony, kiedy zobaczył, że podglądają go uczestniczki obozu. Wyszedł z wody i zapytał: „Nie chcecie dołączyć? Woda jest wspaniała!”.
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


