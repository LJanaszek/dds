import { useEffect, useState } from "react";
import { PointData } from "../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "..";
import PageText from "../../components/pageText";
import './style.module.scss'
import { Link } from "react-router-dom";
import Notepad from "../../components/notepad";

export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P7() {

    const [textList, setTextList] = useState<string[]>([])

    useEffect(() => {
        onLoadUpdate();
    }, [])
    function onLoadUpdate() {
        if (localStorage.getItem('textList')) {
            setTextList(JSON.parse(localStorage.getItem('textList')!));
        }
    }
    // onLoadUpdate();

    const addTextToList = (text: string) => {
        if (!textList.includes(text)) {
            setTextList([...textList, text])

        }
    }
    
    return (<div>
        <section>
            <PageText
                image="">
                <p>
                    <span onClick={(e) =>
                        addTextToList(e.currentTarget.innerText)}>123</span>
                    <span vocab={"123"} onClick={(e) => addTextToList(e.currentTarget.innerText)}>dupa</span>ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores, eum nesciunt aut autem nam. Nemo dolores inventore expedita sunt praesentium cupiditate ipsum a consectetur.
                    <span onClick={(e) => addTextToList(e.currentTarget.innerText)} >Praesentium</span>
                    Nobis sit aspernatur autem tempore!</p>
            </PageText>
            <Notepad wordsList={textList} />
        </section>
        <Link onClick={() => {
            localStorage.setItem('textList', JSON.stringify(textList));
        }} to={getGameRoute(PAGES.pa2)}>Wróć do mapy</Link>
    </div>
    );
}


