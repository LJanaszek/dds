import { useCallback, useEffect, useMemo, useState } from "react";
import { MapComponent } from "../../components/map/map-component";
import { PointData } from "../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "..";
import PageText from "../../components/pageText";
import style from './style.module.scss'
import { Link } from "react-router-dom";



export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P3() {
    let textList: string[] = []

    // if(localStorage.getItem('textList')) {
    //     setTextList(JSON.parse(localStorage.getItem('textList')!))
    // }
    useEffect(() => {
        localStorage.setItem('textList', JSON.stringify(textList))
    }, [textList])


    const addTextToList = (text: string) => {
        if (!textList.includes(text)) {
            textList.push(text)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('textList')) {
            textList = JSON.parse(localStorage.getItem('textList')!)
        }
    }, [])

    function removeTextFromList(text: string) {
        if (textList.includes(text)) {
            textList.splice(textList.indexOf(text), 1)
        }
    }
    return (<div>
        <PageText
            image="">
            <p>
                <span onClick={(e) =>
                    addTextToList(e.currentTarget.innerText)}>Lorem</span>
                ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores, eum nesciunt aut autem nam. Nemo dolores inventore expedita sunt praesentium cupiditate ipsum a consectetur.
                <span onClick={(e) => addTextToList(e.currentTarget.innerText)} >Praesentium</span>
                Nobis sit aspernatur autem tempore!</p>
        </PageText>
        <ul className={style.textList}>
            {textList.map((text, index) => <li key={index} onClick={(e) => removeTextFromList(e.currentTarget.innerText)}>{text}</li>
            )}
        </ul>
        <Link onClick={() => {
            if (!localStorage.getItem('textList')) {
                localStorage.setItem('textList', JSON.stringify(textList));
            }
        }} to={getGameRoute(PAGES.pa2)}>Wróć do mapy</Link>
    </div>
    );
}


