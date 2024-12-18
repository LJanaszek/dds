import { useCallback, useEffect, useMemo, useState } from "react";
import style from "./style.module.scss"

import "../../../../style.scss";
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "../../../../routes";
import { MapComponent } from "../../../../components/map/map-component";
import Notepad from "../../../../components/notepad";

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
    })

    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: 'p3',
                pointer: {
                    name: 'bieznia',
                    visited: 'biezniaVisited',
                    width: 665,
                    height: 424,
                },
                position: {
                    x: 1670,
                    y: 730,
                },
                pointId: '8.1',

            }, {
                id: 'p4',
                pointer: {
                    name: 'boisko1',
                    visited: 'boisko1Visited',
                    width: 870,
                    height: 474,

                },
                position: {
                    x: 714,
                    y: 770,
                },
                pointId: '8.1',

            }, {
                id: 'p5',
                pointer: {
                    name: 'boisko2',
                    visited: 'boisko2Visited',
                    width: 421,
                    height: 662,

                },
                position: {
                    x: 2430,
                    y: 850,
                },
                pointId: '8.1',

            }, {
                id: 'p6',
                pointer: {
                    name: 'szkol',
                    visited: 'szkolVisited',
                    width: 1636,
                    height: 979,

                },
                position: {
                    x: 1025,
                    y: 1785,
                },
                pointId: '8.1',

            }, {
                id: 'p7',
                pointer: {
                    name: 'szatnie',
                    visited: 'szatnieVisited',
                    width: 570,
                    height: 622,

                },
                position: {
                    x: 2245,
                    y: 1586,
                },
                pointId: '8.1',

            }, {
                id: 'p10',
                pointer: {
                    name: 'parking',
                    visited: 'parkingVisited',
                    width: 1684,
                    height: 221,

                },
                position: {
                    x: 1065,
                    y: 2069,
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
        <div className={style.mapPage}>
            <h3>
                Nazwa gry &gt; klub sportowy
            </h3>
            <div className="mapPageInfo">
                <MapComponent
                    onPointerClicked={onPointerClicked}
                    mapPointsData={mapPointsData}
                    selectedPoint={selectedPoint}
                    inactivePointsId={inactivePoints}
                    selectMap="klub"
                />
               
                {showButton && <Link to={getGameRoute(PAGES.p8)} className={style.button}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}