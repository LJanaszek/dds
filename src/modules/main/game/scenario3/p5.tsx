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
        
        "seksistowskich dowcipów":"Pan Robert wypytuje uczennice o chłopaków, łapie za biodra, opowiada seksistowskie dowcipy.",
        "nie jest specjalnie wymagający":"Pan Robert nie jest specjalnie wymagający.",
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> szkoła <span> &gt; </span>Korytarz</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Korytarz</h1>
                <p>
                    Podczas przerwy uczennice żywo dyskutują na korytarzu o panu Robercie, jednym z pracowników w zakładzie, w którym odbywają praktyki. Dzielą się swoimi doświadczeniami w relacjach z nim. Olę wypytywał o chłopaków, Agnieszkę cały czas 
                    łapie za biodra – niby zawsze wtedy, kiedy chce przejść, a w korytarzu jest wąsko, ale jednak dziewczyna czuje, że to specjalnie. Z kolei Natalia mówi, że ciągle czuje na sobie jego wzrok. Dziewczyny mają też dość jego 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>seksistowskich dowcipów</span>. Z drugiej strony 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>nie jest specjalnie wymagający</span> i można u niego bez problemów zaliczyć praktyki. A egzamin zawodowy już za chwilę.
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

