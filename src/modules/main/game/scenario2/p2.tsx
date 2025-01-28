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
    "Pielęgniarki się spieszą.", 
    "Chłopiec wpada w ataki płaczu.", 
    "Ania nie chce współpracować z lekarką.", 
    "Mąż stracił pracę i rodzina ma teraz trudny czas."
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
                id: 'p13',
                pointer: {
                    name: 'korytarz',
                    visited: 'korytarzVisited',
                    width: 398,
                    height: 1312,
                },
                position: {
                    x: 1455,
                    y: 1443,
                },
                pointId: '8.1',

            }, {
                id: 'p14',
                pointer: {
                    name: 'lekarski',
                    visited: 'lekarskiVisited',
                    width: 1165,
                    height: 546,

                },
                position: {
                    x: 754,
                    y: 675,
                },
                pointId: '8.1',

            }, {
                id: 'p15',
                pointer: {
                    name: 'pielegniarki',
                    visited: 'pielegniarkiVisited',
                    width: 1165,
                    height: 466,

                },
                position: {
                    x: 755,
                    y: 1130,
                },
                pointId: '8.1',

            }, {
                id: 'p16',
                pointer: {
                    name: 'rejestracja',
                    visited: 'rejestracjaVisited',
                    width: 2102,
                    height: 948,

                },
                position: {
                    x: 1220,
                    y: 2070,
                },
                pointId: '8.1',

            }, {
                id: 'p17',
                pointer: {
                    name: 'zabiegowy',
                    visited: 'zabiegowyVisited',
                    width: 1092,
                    height: 929,

                },
                position: {
                    x: 2105,
                    y: 1059,
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
        window.location.href = `game/${PAGES[id]}`

    }, []);



    return (
        <div className={style.mapPage}> <MoreInfo />
            <h3>
            <img src={reakcja} alt="" /> &gt; Ochrona zdrowia
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
                    selectMap="przychodnia"
                />
               
                {showButton && <Link to={getGameRoute(PAGES.p18)} className={style.button}>Przejdź dalej</Link>}
            </div>
             <Notepad wordsList={textList} />
        </div>
    );
}