import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_boisko1.png"
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
        "dyskutują o polityce ze swoją wychowawczynią Małgorzatą": 'Uczniowie i uczennice przesyłają sobie zdjęcia.',
        "wrzuciła mem ośmieszający jedno z ugrupowań politycznych.":"Uczniowie i uczennice mają nauczycielkę wśród znajomych w mediach społecznościowych.",
        "Post nauczycielki polubiło wiele osób":"Post nauczycielki polubiło wiele osób."
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> kontakty online <span> &gt; </span>Media społecznościowe</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Media społecznościowe</h1>
                <p>
                2a to klasa z rozszerzonym WOS-em. Młodzi dużo
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>dyskutują o polityce ze swoją wychowawczynią Małgorzatą</span>. Mają z nią dobre relacje, lubią ją, a ona ich. Wszyscy z 2a wysłali jej zaproszenia do znajomych. Małgorzata z przyjemnością przyjmowała te zaproszenia. Dzięki temu mogła lepiej poznać zainteresowania młodych. Sama wrzuca treści pokazujące, jak ważne są demokracja i prawa człowieka. Zachęca do wspierania wielu organizacji pozarządowych. Ostatnio jednak  
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>wrzuciła mem ośmieszający jedno z ugrupowań politycznych.</span> W młodzieżówce tej partii aktywnie udziela się Janek.
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Post nauczycielki polubiło wiele osób</span>, niektórzy dawali serduszka, ktoś nawet napisał: „Trzeba się pozbyć tego zła”. Rozpoczęła się dyskusja z udziałem innych, nieznanych uczniom znajomych Małgorzaty.
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


