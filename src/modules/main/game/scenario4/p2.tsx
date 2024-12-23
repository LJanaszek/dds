import { useCallback, useEffect, useMemo, useState } from "react";
import style from "./style.module.scss"

import "../../../../style.scss";
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "../../../../routes";
import { MapComponent } from "../../../../components/map/map-component";
import Notepad from "../../../../components/notepad";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"
import MoreInfo from "../../../../components/moreInfo";

export interface GameMapPoint extends PointData {
    pointId: string
}
let textList: string[] = [];
let inactivePoints: string[] = [];
const warrnWords = ["Trener był widocznie niezadowolony z jazdy Pawła."]
export default function P2() {
    if (!localStorage.getItem('inactivePoints')) {
        localStorage.setItem("inactivePoints", JSON.stringify([]));
    }
    else {
        inactivePoints = JSON.parse(localStorage.getItem('inactivePoints')!);
    }

    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<string>();
    if (localStorage.getItem('textList')) {
        textList = (JSON.parse(localStorage.getItem('textList')!));

    }
    useEffect(() => {
        if (textList.length === 6 

            &&
            warrnWords.every(word => !textList.includes(word))
        ) {
            setShowButton(true);
        }
    },[])

    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: 'p33',
                pointer: {
                    name: 'chat',
                    visited: 'chatVisited',
                    width: 797,
                    height: 779,
                },
                position: {
                    x: 2317,
                    y: 1960,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p34',
                pointer: {
                    name: 'gklasowa',
                    visited: 'gklasowaVisited',
                    width: 634,
                    height: 404,

                },
                position: {
                    x: 2050,
                    y: 900,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p35',
                pointer: {
                    name: 'samochod',
                    visited: 'samochodVisited',
                    width: 323,
                    height: 465,

                },
                position: {
                    x: 1460,
                    y: 1890,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p36',
                pointer: {
                    name: 'spotkanie',
                    visited: 'spotkanieVisited',
                    width: 714,
                    height: 395,

                },
                position: {
                    x: 490,
                    y: 670,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p37',
                pointer: {
                    name: 'wakacje',
                    visited: 'wakacjeVisited',
                    width: 794,
                    height: 1020,

                },
                position: {
                    x: 610,
                    y: 1980,
                },
                pointId: '8.1',

            }, 
        ];
    }, []);


    const onPointerClicked = useCallback((id: string) => {

        if (!inactivePoints.includes(id)) {
            inactivePoints.push(id);
        }


        setSelectedPoint(id);

        localStorage.setItem("inactivePoints", JSON.stringify(inactivePoints));
        window.location.href = PAGES[id]

    }, []);



    return (
        <div className={style.mapPage}> <MoreInfo />
            <h3>
            <img src={reakcja} alt="" /> &gt; Kontakty online
            </h3>
            <div className="mapPageInfo">
            <p className="mapPageInfoParagraph">
                    Aby zapoznać się z historią danego miejsca kliknij w jeden z 5 czerwonych elementów na mapie
                </p>
                <MapComponent
                    onPointerClicked={onPointerClicked}
                    mapPointsData={mapPointsData}
                    selectedPoint={selectedPoint}
                    inactivePointsId={inactivePoints}
                    selectMap="szkolaOnline"
                />
               
                {showButton && <Link to={getGameRoute(PAGES.p38)} className={style.button}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}