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
        "mąż stracił pracę i mają teraz trudny czas": 'Mąż stracił pracę i rodzina ma teraz trudny czas.',
        "W trakcie badania Marta zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie": "W trakcie badania Marta zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie."
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
        <h3><img src={reakcja} alt="" /><span> &gt; </span> Ochrona zdrowia <span> &gt; </span>Gabinet pielęgniarek</h3>
        <section className={style.task}>
            <img src={taskImg} alt="" />
            <PageText
                image={""}>
                <h1>Gabinet pielęgniarek</h1>
                <p>
                Do gabinetu wchodzi wraz z mamą 2-letnia Angelika. Przed nimi obowiązkowy bilans. Gdy mama rozbiera dziewczynkę, pielęgniarka Marta rozmawia z mamą. Dobrze się znają – kiedyś razem pracowały. Marta zauważa, że dawna znajoma blado wygląda, jest bardzo szczupła i drżą jej ręce. Mama narzeka, że 
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>mąż stracił pracę i mają teraz trudny czas</span>. Sama też boryka się z problemami zdrowotnymi, ale ma nadzieję, że wszystko się niedługo jakoś ułoży. Marta doskonale ją rozumie – firma, w której pracował jej partner, niedawno zbankrutowała. Pielęgniarka wraca do Angeliki. Dziewczynka jest spokojna, nie protestuje podczas ważenia i mierzenia, ale też nie wykazuje zainteresowania zabawkami w gabinecie ani śmieszną maskotką, która wygląda z kieszeni Marty. 
                <span onClick={(e)=>{addTextToList(e.currentTarget.innerText)}}>W trakcie badania Marta zauważa na ciele dziecka wiele siniaków, a także kilka łysych placków na głowie</span>. Pyta, co się stało – mama odpowiada, że dziecko jest bardzo aktywne i często się się przewraca podczas zabawy w domu czy na spacerze. Zapytana o ślady na głowie mówi, że to pewnie w żłobku dzieci się szarpią za włosy. 
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


