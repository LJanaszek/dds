import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola_online/online_wpis_chat.png"
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
        "późnym wieczorem przychodzi wiadomość od uczennicy": 'Późnym wieczorem przychodzi wiadomość od Eli.',
        "Nauczyciel wysyła głosówkę przez Instagram – pociesza Elę": 'Nauczyciel wysyła głosówkę i pociesza Elę.',
        "W poniedziałek nie odzywa się do niego":"Uczennica nie odzywa się do nauczyciela."
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
        <h3><img src={reakcja} alt="" /> <span> &gt; </span> Kontakty online <span> &gt; </span>Indywidualny chat</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Indywidualny chat</h1>
                <p>
                    Do Przemka, wychowawcy Eli, w sobotę
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>późnym wieczorem przychodzi wiadomość od uczennicy</span>. Ela żali się w niej, że rodzice jej nie rozumieją i zabraniają jej spotykać się z koleżankami. Tata, po kilku piwach, właśnie zrobił awanturę. 
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>Nauczyciel wysyła głosówkę przez Instagram – pociesza Elę</span>. Próbuje pokazać perspektywę rodziców, jednak po godzinie 23.40 odpisuje, że musi kończyć. Ela nadal wysyła rozpaczliwe wiadomości. Przemek wyjaśnia, że będzie miał dla niej czas w szkole. Dziewczyna jednak kontynuuje. Nauczyciel wycisza powiadomienia z czatu z dziewczynką. Ta wpada w złość.
                    {" "}
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>W poniedziałek nie odzywa się do niego</span>
                    {" "}
                    i opowiada koleżance, że zawiodła się na nauczycielu. Zawsze mogła się wygadać, a czasem nawet wypłakać w ramię.
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


