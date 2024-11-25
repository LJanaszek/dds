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
export default function P2() {
    if (!localStorage.getItem('inactivePoints')) {
        localStorage.setItem("inactivePoints", JSON.stringify([]));
    }
    else {
        inactivePoints = JSON.parse(localStorage.getItem('inactivePoints')!);
    }

    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<string>();
    console.log(inactivePoints);
    if (localStorage.getItem('textList')) {
        textList = (JSON.parse(localStorage.getItem('textList')!));

    }
    useEffect(() => {
        if (textList.length === 5) {
            setShowButton(true);
        }
    })

    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: 'pa3',
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
                id: 'pa4',
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
                id: 'pa5',
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
                id: 'pa6',
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
                id: 'pa7',
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
                id: 'pa8',
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

        console.log(`KTOS KLIKNAL ${id} `);
        if (!inactivePoints.includes(id)) {
            inactivePoints.push(id);
        }


        setSelectedPoint(id);

        localStorage.setItem("inactivePoints", JSON.stringify(inactivePoints));
        console.log(selectedPoint);
        console.log(typeof (PAGES[id]), "--------------")
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
               
                {showButton && <Link to={getGameRoute(PAGES.pa8)}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}