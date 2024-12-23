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
const warrnWords = [
    "Chłopcy strzelają papierkami.", 
    "Ojciec robi się zniecierpliwiony.", 
    "Nauczycielka i mama uczennicy rozmawiają w cztery oczy.", 
    "Pan Piotr każe wyjść nastolatkom z toalety.",
    "Pan Robert nie jest specjalnie wymagający."
]
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
        if (textList.length === 5

            &&
            warrnWords.every(word => !textList.includes(word))
        ) {
            setShowButton(true);
        }
    },[])

    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: 'p23',
                pointer: {
                    name: 'toalety',
                    visited: 'toaletyVisited',
                    width: 848,
                    height: 623,
                },
                position: {
                    x: 2310,
                    y: 690,
                },
                pointId: '8.1',

            },
             {
                id: 'p24',
                pointer: {
                    name: 'klasa',
                    visited: 'klasaVisited',
                    width: 1154,
                    height: 618,

                },
                position: {
                    x: 1320,
                    y: 690,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p25',
                pointer: {
                    name: 'korytarzSzkola',
                    visited: 'korytarzSzkolaVisited',
                    width: 2593,
                    height: 924,

                },
                position: {
                    x: 1440,
                    y: 1600,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p26',
                pointer: {
                    name: 'parkingSzkola',
                    visited: 'parkingSzkolaVisited',
                    width: 1763,
                    height: 240,

                },
                position: {
                    x: 1025,
                    y: 1970,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p27',
                pointer: {
                    name: 'pedagog',
                    visited: 'pedagogVisited',
                    width: 620,
                    height: 614,

                },
                position: {
                    x: 455,
                    y: 691,
                },
                pointId: '8.1',

            }
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
            <img src={reakcja} alt="" /> &gt; szkoła
            </h3>
            <div className="mapPageInfo">
                <MapComponent
                    onPointerClicked={onPointerClicked}
                    mapPointsData={mapPointsData}
                    selectedPoint={selectedPoint}
                    inactivePointsId={inactivePoints}
                    selectMap="szkola"
                />
               
                {showButton && <Link to={getGameRoute(PAGES.p28)} className={style.button}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}