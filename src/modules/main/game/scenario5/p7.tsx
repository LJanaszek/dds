import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/oboz/oboz_wpis_toalety.png"
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
        "doprowadzili do zablokowania toalety dla wychowawców w ośrodku": "Dzieci doprowadziły do zablokowania toalet w ośrodku.",
        "nakazali całej trójce wysprzątać toaletę wychowawców oraz wszystkie toalety":"Opiekunowie wymierzyli nadmiarową karę, niewynikającą z rzeczywistych konsekwencji działań chłopców."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Wakacyjny obóz <span> &gt; </span>Toalety</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Toalety</h1>
                <p>
                    W wyniku śledztwa wychowawców okazało się, że Krzyś, Nikodem i Maks 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>doprowadzili do zablokowania toalety dla wychowawców w ośrodku</span>. Wrzucali do sedesu papier toaletowy, skórki od bananów i inne rzeczy. Dodatkowo do ścian przykleili papier i zabrudzili je zgniłymi owocami. Opiekunowie 
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>nakazali całej trójce wysprzątać toaletę wychowawców oraz wszystkie toalety</span> przynależne do zajmowanych przez obóz pokoi. Część dzieci, gdy dowiedziała się o karze dla chłopców, specjalnie dodatkowo pobrudziła toalety.
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


