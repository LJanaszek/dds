import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola/szkola_wpis_sala.png"
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
        "chłopcy strzelają papierkami": 'Chłopcy strzelają papierkami.',
        "wykrzykuje":"Nauczycielka krzyczy i poniża uczniów."
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> szkoła <span> &gt; </span>Sala lekcyjna</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Sala lekcyjna</h1>
                <p>
                    Kasia prowadzi lekcję matematyki. Klasa nie słucha –
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>chłopcy strzelają papierkami</span>, dziewczyny odwracają się i rozmawiają na inne tematy, Janek chodzi po klasie. Nauczycielka w końcu przerywa lekcję i 
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>wykrzykuje</span>: „Widzę, że na niczym wam nie zależy. Chcecie być bandą przygłupów, to sobie bądźcie. Ja to mam w dupie i całą waszą klasę. A ty, Julia, co się śmiejesz? Zero punktów dostałaś z ostatniej kartkówki, nawet dodawać nie umiesz. Tyle z całej twojej nauki”. Michał stwierdza do Leona: „Kacha się rozkręca, zobaczysz, zaraz zacznie rzucać w nas kredą, tak jak w 4b”.
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


