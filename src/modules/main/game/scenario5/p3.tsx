import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/oboz/oboz_wpis_brama.png"
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
        "wracają z grupą obozową z zakupów": 'Opiekunowie poszli na zakupy z młodzieżą',
        "Maciek i Paweł nie reagują": 'Opiekunowie nie sprawdzają, co kupują młodzi, oraz nie reagują na przemocowe komentarze chłopców.',
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
        <h3><img src={reakcja} alt="" /> <span> &gt; </span> Obóz wakacyjny <span> &gt; </span>Brama przed obozem</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Brama przed obozem</h1>
                <p>
                    Maciek i Paweł
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>wracają z grupą obozową z zakupów</span>. Dziś jest zielona noc. Opiekunowie 
                    nie przyglądali się specjalnie temu, co kupują młodzi. W torbach znalazły się napoje energetyczne, dużo słonych i słodkich przekąsek. Stasiek niesie cztery ciężkie torby, Julek zwraca się do niego: „No, dobrze się spisałeś, może weźmiemy Cię do naszej drużyny na mecz finałowy. Idź i zanieś to do naszego pokoju”. Stasiek posłusznie wykonuje polecenie. Julek dodaje do dziewczyn: „Ale z tego grubasa frajer. Naprawdę myśli, że z nami zagra”.
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Maciek i Paweł nie reagują</span>.
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


