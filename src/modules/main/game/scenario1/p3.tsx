import { useCallback, useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_bieznia.png"
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
        Lorem: 'dupa dupa',
        ipsum: 'ipsum dolor',
        ipsum2: 'ipsum dolor2',
        dolor: 'dolor sit',
        sit: 'sit amet',
        12345678: '1234',
        12: '12',
        123: '123'
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
        <h3><span>Nazwa gry  &gt; </span> klub sportowy <span> &gt; </span>bieznia</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Bieznia</h1>
                <p>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        Lorem
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        ipsum2
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        ipsum
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        dolor
                    </span>
                    ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores, eum nesciunt aut autem nam. Nemo dolores inventore expedita sunt praesentium cupiditate ipsum a consectetur.
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        sit
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        12345678
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        12
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        123
                    </span>
                    Nobis sit aspernatur autem tempore!
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


