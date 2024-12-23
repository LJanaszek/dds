import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola/szkola_wpis_pedagog.png"
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
        "Rozmawiają w cztery oczy": "Nauczycielka i mama uczennicy rozmawiają w cztery oczy.",
        "jest smutna, nigdy nie ma ze sobą drugiego śniadania":"Zuzia jest smutna, nigdy nie ma ze sobą drugiego śniadania, a dodatkowo przejawia zachowania lękowe i ma trudności w nauce.",
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> szkoła <span> &gt; </span>Gabinet pedagoga</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Gabinet pedagoga</h1>
                <p>
                Małgorzata spotyka się z mamą Zuzi.
                {" "}
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>Rozmawiają w cztery oczy</span>. Nauczycielce zależy na komforcie rodzica i szczerej rozmowie. Widzi, że uczennica często
                {" "}
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>jest smutna, nigdy nie ma ze sobą drugiego śniadania</span>, a dodatkowo 
                przejawia zachowania lękowe i ma trudności w nauce. Mama Zuzi przyznaje się do uzależnienia od alkoholu – wyzwaniem jest dla niej organizacja codziennych czynności. Ostatnio zaniedbała córkę, ale podkreśla, że w żadnym wypadku nie zrobiła jej krzywdy. Prosi, żeby Małgorzata zachowała te informacje dla siebie. Obiecuje, że wszystko naprawi.
                </p>
            </PageText>

        </section>
        <Notepad
            wordsList={textList}
        />
        <nav className={style.back}>
            <Link to={getGameRoute(PAGES.p22)}
                onClick={() => localStorage.setItem('textList', JSON.stringify(textList))}
            >Wróć do mapy</Link>
        </nav>
    </div>
    );
}


