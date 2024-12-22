import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/przychodnia/przych_wpis_rejestr.png"
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
        "Wpada w ataki płaczu" : "Chłopiec wpada w ataki płaczu.",
        "Mówi na tyle głośno": "Rejestratorka głośno komentuje zachowanie i diagnozę pacjenta."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> przychodnia <span> &gt; </span>Rejestracja</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Rejestracja</h1>
                <p>
                Do przychodni razem z mamą wszedł Pawełek. Ma 6 lat. Pracownicy dobrze go znają. Chłopiec ma orzeczoną niepełnosprawność ze względu na autyzm. Dodatkowo jest w trakcie diagnozy ADHD. Jego obecność nie pozostaje niezauważona. Paweł jest dość głośny. 
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Wpada w ataki płaczu</span>
                , boi się badań i rozmów z lekarzem. Tym bardziej że dziś przyjmie go nowa pani doktor. Mama stara się go wyciszyć, przytula, mówi spokojnym głosem. Rejestratorka dzwoni do gabinetu. 
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Mówi na tyle głośno</span>, że wszyscy słyszą: „Pani doktor, przyszedł ten autystyk. Mamy z nim problem – niech go pani szybciej przyjmie”.
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


