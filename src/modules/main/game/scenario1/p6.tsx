import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_bglow.png"
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
        "Jest drużynową fotografką" : "Osoby z zewnątrz fotografują zawodników"
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
        <h3><span>Nazwa gry  &gt; </span> klub sportowy <span> &gt; </span>szkola</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Szkola</h1>
                <p>
                Odbywa się sesja zdjęciowa. Zawodnicy ubrani są w stroje meczowe. Profesjonalny fotograf robi zdjęcia drużynom oraz indywidualne. Jest wesoła atmosfera. Chłopcom trudno zachować powagę, robią śmieszne miny. Jeden z nich, dla żartu, zdejmuje koszulkę. Pozostali szybko podłapują pomysł kolegi. Mama Łukasza również uwiecznia te momenty. 
                {" "}
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                Jest drużynową fotografką
                </span>
                {" "}
                . Ma niezły aparat z wysokiej jakości obiektywem. Już od dwóch lat, w miarę możliwości, jeździ na mecze i pstryka chłopakom foty. 
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p2)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


