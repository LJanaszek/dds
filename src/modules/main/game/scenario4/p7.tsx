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
        "uczniowie przesyłają sobie zdjęcia": 'Uczniowie i uczennice przesyłają sobie zdjęcia.',
        "wysyła również swoje zdjęcia":"Nauczyciel komentuje zdjęcia uczniów i przesyła swoje zdjęcia."
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
        <h3><img src={reakcja} alt="" />  <span>&gt;</span> Kontakty online <span> &gt; </span>Grupa klasowa w wakacje</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Grupa klasowa w wakacje</h1>
                <p>
                    Od miesiąca są wakacje. Na grupie klasowej nagle zaczynają przychodzić nowe wiadomości – 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>uczniowie przesyłają sobie zdjęcia</span>. Pokazują, gdzie są, co zwiedzają i robią. Dziewczyny chwalą się zdjęciami w bikini, a chłopcy prężą swoje mięśnie. Adam, ich wychowawca, wysyła wszystkim serduszka i komentuje zdjęcia: „Pięknie wyglądacie!”, „Dziewczyny, chłopaki się pewnie za Wami oglądają”, „Chłopcy, co za muskulatura – widać efekty ćwiczeń”. W końcu 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>wysyła również swoje zdjęcia</span> w obcisłych kąpielówkach.
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


