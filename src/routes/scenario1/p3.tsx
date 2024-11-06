import { useEffect, useState } from "react";
import { PointData } from "../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "..";
import PageText from "../../components/pageText";
import style from './style.module.scss'
import { Link } from "react-router-dom";

export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P3() {

    const [textList, setTextList] = useState<string[]>([])

    const words :{[key: string]: string} = {
        Lorem : 'dupa dupa',
        ipsum : 'ipsum dolor',
        dolor : 'dolor sit',
        sit : 'sit amet',
    }
    const addTextToList = (text: string) => {
        if (!textList.includes(words[text]) && textList.length < 5) {
            setTextList([...textList, words[text]])
        }
    }
    const removeTextFromList = (text: any) => {
        //adding elements to list according to words keys
        if (textList.includes(text)) {   
            setTextList(textList.filter(item => item !== text))
        }
    }
    useEffect(() => {
        if (localStorage.getItem('textList')) {
            setTextList(JSON.parse(localStorage.getItem('textList')!));
            localStorage.removeItem('textList')
        }
    }, [textList])
    return (<div>
        <section>
            <PageText
                image="">
                <p>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        Lorem
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        ipsum
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        dolor
                    </span>
                    ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores, eum nesciunt aut autem nam. Nemo dolores inventore expedita sunt praesentium cupiditate ipsum a consectetur.
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        sit
                    </span>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>
                        12345678
                    </span>
                    Nobis sit aspernatur autem tempore! </p>
            </PageText>
            <ul>
                {textList.map((text, index) =>
                    <li 
                    className={style.textList} 
                    key={index}
                        onClick={(e) => removeTextFromList(e.currentTarget.innerText)}>
                        {text}
                    </li>)}
            </ul>
        </section>
        <Link onClick={() => {
            localStorage.setItem('textList', JSON.stringify(textList));
        }} to={getGameRoute(PAGES.pa2)}>Wróć do mapy</Link>
    </div>
    );
}


