import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/klub/sport_wpis_szatnie.png"
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
        "warunki lokalowe": "Warunki lokalowe w szatniach."
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
        <h3><span>Nazwa gry  &gt; </span> klub sportowy <span> &gt; </span>szatnie</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Szatnie</h1>
                <p>
                    Dostałeś pismo, w którym rodzice skarżą się na
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                        warunki lokalowe
                    </span>
                    {" "}. Szatnia klubu składa się z kilku pomieszczeń. Zawodnikom udostępnione są dwie sale. Mogą się przebrać, zostawić swoje rzeczy na czas treningu. Zdarza się, że młodsze roczniki mają zajęcia w tym samym czasie co nastolatki. Ostatnio mama Maćka z U-8 weszła pomóc mu założyć korki. Akurat przebierała się drużyna U-15. Mamę bardzo zbulwersował język, jaki usłyszała w szatni. Było sporo przekleństw i obelg wobec ostatnich przeciwników. Na dodatek dziewczyny grające w drużynie Maćka muszą przebierać się w toalecie lub w domu, bo dla nich w ogóle nie ma oddzielnej przestrzeni.
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


