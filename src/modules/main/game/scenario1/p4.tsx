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
        "krzyczał": 'Trener regularnie krzyczy i zawstydza zawodniczki.',
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> klub sportowy <span> &gt; </span>boisko</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Boisko</h1>
                <p>
                    Kolejny w tym tygodniu trening. Jeszcze przed wejściem na murawę dziewczyny zastanawiają się, czy trener będzie bardzo {" "}
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>
                    krzyczał
                    </span>. Po rozgrzewce trener wprowadza nowe ćwiczenie. Jest dość skomplikowane. Szkoleniowiec wymaga od nich maksimum skupienia. Tłumaczy tylko raz. Kiedy Marysia popełnia błąd, trener donośnym głosem tłumaczy raz jeszcze. Marysia ponownie źle wykonuje zadanie. Trener ostrzega, że przeniesie ją do drużyny B. Po pewnym czasie zaczyna się mecz. Marysia nie dobiega do piłki. Trener rzuca: „Nie biegaj jak ostatnia ofiara losu, walcz o tę piłkę”. Na koniec treningu wygłasza mowę: „Nikt w tej drużynie nie jest na siłę. Jeśli wam nie zależy, nie chcecie grać, to idźcie gdzie indziej”. Jak się później okazuje, część dziewcząt faktycznie chce zrezygnować z piłki, niektóre z nich mają po treningach trudności z zaśnięciem.
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


