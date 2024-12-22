import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/przychodnia/przych_wpis_korytarz.png"
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
        "U ojca wywołuje to zdenerwowanie": 'U ojca wywołuje to zdenerwowanie.',
        "Popycha Adama": 'Ojciec stosuje przemoc wobec Adama. Wyzywa i popycha syna.',
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
        <h3><img src={reakcja} alt="" /> <span> &gt; </span> przychodnia <span> &gt; </span>korytarz</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Korytarz</h1>
                <p>
                Jest czwartek po południu. Do przychodni wpada Krzysztof wraz z synem, 15-letnim Adamem. Zgłasza u chłopaka silny ból gardła i utratę głosu, podejrzewa anginę. Rejestratorka informuje, że lekarz nie ma już wolnych terminów tego dnia i że może zapisać chłopca na wizytę na następny dzień o godz. 8 rano. 
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>U ojca wywołuje to zdenerwowanie</span>. 
                Pyta, czy może wejść do gabinetu i poprosić lekarza o pilne przyjęcie między zapisanymi pacjentami. Kiedy otrzymuje negatywną odpowiedź, zaczyna przeklinać, gwałtownie porusza się po przychodni. Podkreśla, że Adam jest muzykiem i jutro ma ważny egzamin do szkoły muzycznej II stopnia, koniecznie musi na nim zaśpiewać. Muszą natychmiast podać chłopcu leki, po których odzyska głos. W końcu szturcha Adama i mówi: „Pierdoło, musiałeś się właśnie teraz przeziębić! Idziemy, kur..., prywatnie nas od razu obsłużą”. <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>Popycha Adama</span>, żeby szedł szybciej. 
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


