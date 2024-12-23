import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/przychodnia/przych_wpis_lekarski.png"
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
        "„Pokaż gardło. Oj, ale brzydkie. Brzydka dziewczynka, źle to wygląda”": 'Lekarka oceniająco i bezosobowo zwraca się do dziecka.',
        "Ania jednak nie chce współpracować": "Ania nie chce współpracować z lekarką."
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> Ochrona zdrowia <span> &gt; </span>gabinet lekarski</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Gabinet lekarski</h1>
                <p>
                    Do gabinetu wchodzi tata z 3-letnią córką Anią. Czeka ich wizyta kontrolna po dość długiej infekcji. Lekarka instruuje: „Dziecko usiądzie tutaj” – wskazuje odpowiedni fotel. „Tata zdejmie dziecku koszulkę i sweter. Osłucham”. Kierując wzrok ku ojcu, informuje, że teraz sprawdzi gardło oraz uszy. Mówi:
                    {" "}<span onClick={(e) => { addTextToList(e.currentTarget.innerText) }}>„Pokaż gardło. Oj, ale brzydkie. Brzydka dziewczynka, źle to wygląda”</span>. Gdy zaczyna badać uszy, Ania się wyrywa. Lekarka na swój sposób chce zachęcić dziecko do współpracy: „Jak nie będzie grzeczna, to nie dostanie naklejki!”.
                    {" "}
                    <span onClick={(e) => { addTextToList(e.currentTarget.innerText) }}>Ania jednak nie chce współpracować</span>. Pani doktor nie czeka, aż dziewczynka się wyciszy, i prosi tatę, aby przytrzymał jej mocno głowę, a ona zajrzy do uszu. W obu jest silne zapalenie.
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


