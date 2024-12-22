import { useEffect, useState } from "react";

import { getGameRoute, PAGES } from "../../../../routes";
import taskImg from "../../../../assets/locations/szkola/szkola_wpis_parking.png"
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
        "robi się zniecierpliwiony" : "Ojciec robi się zniecierpliwiony.",
        "krzyczy na Łukasza":"Ojciec krzyczy na syna, poniża go, wyzywa i stosuje wobec niego przemoc fizyczną."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> szkola <span> &gt; </span>Parking przed szkołą</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Parking przed szkołą</h1>
                <p>
                Na szkolny parking pełen nauczycieli i uczniów wjechał Tomasz. Musi szybko zabrać syna Łukasza na zaplanowaną wizytę u lekarza. Jest zły na niego: właśnie dostał wiadomości z negatywnymi uwagami dotyczącymi zachowania syna, dodatkowo Łukasz nie zaliczył trzech sprawdzianów. Tomasz 
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>robi się zniecierpliwiony</span> – chłopak już dawno powinien przyjść. Skończył lekcje 7 minut temu. Dzwoni do niego, ale młody nie odbiera. W końcu Tomasz dostrzega syna idącego spokojnym krokiem w stronę parkingu. Ojciec jest zaniepokojony, 
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)}>krzyczy na Łukasza</span>: „Pierdoło ostatnia, nie możesz, k…, szybciej się ruszać. Ja pier… kur… Ja cię nauczę punktualności. Robisz mi same problemy i wstyd w szkole”. 
                Popycha go, żeby szybciej wszedł do samochodu.
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


