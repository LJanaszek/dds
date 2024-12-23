import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/oboz/oboz_wpis_hustawka.png"
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
        "obserwuje Karolinę": 'Wychowawczyni obserwuje dziewczynę.',
        "Huśtają się razem":"Wychowawczyni huśta się razem z dziewczyną.",
        "Warunki są jasne: zła ocena – lanie, dobra – nagroda":"Wychowawczyni dowiedziała się, że tata stosuje przemoc fizyczną i emocjonalną wobec Karoliny."
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> Wakacyjny obóz <span> &gt; </span>Huśtawka</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Huśtawka</h1>
                <p>
                    Agnieszka jest wychowawczynią na obozie. Od pewnego czasu 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>obserwuje Karolinę </span> ze swojej grupy dzieci. Dziewczyna wieczór zamiast przy ognisku ze wszystkimi spędza zamyślona na huśtawce. Agnieszka podchodzi porozmawiać z Karoliną. 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Huśtają się razem</span>. Na początku rozmowa się nie klei. W końcu jednak nastolatka się otwiera i mówi o sobie.  Uważa, że materialnie niczego jej nie brakuje. Tata nagradza ją za dobre oceny i spełnia jej zachcianki. 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Warunki są jasne: zła ocena – lanie, dobra – nagroda</span>. Karolina nie chce wracać. Agnieszka pociesza ją: „Sama w domu miałam bardzo trudno, wiem, jak się czujesz. Jeśli będziesz chciała pogadać, to zawsze możesz do mnie napisać”.
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


