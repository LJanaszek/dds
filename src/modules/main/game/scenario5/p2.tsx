import { useCallback, useEffect, useMemo, useState } from "react";
import style from "./style.module.scss"

import "../../../../style.scss";
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "../../../../routes";
import { MapComponent } from "../../../../components/map/map-component";
import Notepad from "../../../../components/notepad";
import reakcja from "../../../../assets/icons/reakcja_logo_blue.svg"

export interface GameMapPoint extends PointData {
    pointId: string
}
let textList: string[] = [];
let inactivePoints: string[] = [];
const warrnWords = [
    "O wychowawcy krążą różne plotki.",
    "Wychowawczyni obserwuje dziewczynę.",
    "Wychowawczyni huśta się razem z dziewczyną.",
    "Opiekunowie poszli na zakupy z młodzieżą.",
    "Dzieci doprowadziły do zablokowania toalet w ośrodku.",
    "Opiekun przysypiał."

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
                id: 'p43',
                pointer: {
                    name: 'brama',
                    visited: 'bramaVisited',
                    width: 376,
                    height: 376,
                },
                position: {
                    x: 1850,
                    y: 1975,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p44',
                pointer: {
                    name: 'hustawka',
                    visited: 'hustawkaVisited',
                    width: 542,
                    height: 297,

                },
                position: {
                    x: 758,
                    y: 1525,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p45',
                pointer: {
                    name: 'jezioro',
                    visited: 'jezioroVisited',
                    width: 1208,
                    height: 565,

                },
                position: {
                    x: 738,
                    y: 802,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p46',
                pointer: {
                    name: 'pokoj',
                    visited: 'pokojVisited',
                    width: 1418,
                    height: 968,

                },
                position: {
                    x: 1890,
                    y: 1595,
                },
                pointId: '8.1',

            }, 
            {
                id: 'p47',
                pointer: {
                    name: 'toaletyOboz',
                    visited: 'toaletyObozVisited',
                    width: 455,
                    height: 298,

                },
                position: {
                    x: 1890,
                    y: 470,
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
        <div className={style.mapPage}>
            <h3>
            <img src={reakcja} alt="" /> &gt; klub sportowy
            </h3>
            <div className="mapPageInfo">
                <MapComponent
                    onPointerClicked={onPointerClicked}
                    mapPointsData={mapPointsData}
                    selectedPoint={selectedPoint}
                    inactivePointsId={inactivePoints}
                    selectMap="oboz"
                />
               
                {showButton && <Link to={getGameRoute(PAGES.p48)} className={style.button}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}