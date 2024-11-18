import { useCallback, useEffect, useMemo, useState } from "react";


import "../../style.scss";
import { Link } from "react-router-dom";
import { PointData } from "../../../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "../../../../routes";
import { MapComponent } from "../../../../components/map/map-component";
import Notepad from "../../../../components/notepad";

export interface GameMapPoint extends PointData {
    pointId: string
}
let textList: string[] = [];
export default function P2() {
    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<string>();
    const [inactivePoints, setInactivePoints] = useState<string[]>([]);
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
                pointer:{
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
               
            },{
                id: 'pa4',
                pointer:{
                    name: 'bieznia',
                    visited: 'biezniaVisited',
                    height: 90,
                    width: 60
                },
                position: {
                    x: 440,
                    y: 240,
                },
                pointId: '8.1',
               
            },
        ];
    }, []);


    const onPointerClicked = useCallback((id: string) => {

        console.log(`KTOS KLIKNAL ${id} `);
        inactivePoints.push(id);
        alert(`KTOS KLIKNAL ${id} `);
        setSelectedPoint(id);
        console.log(selectedPoint);
        console.log(typeof(PAGES[id]), "--------------")
        window.location.href = PAGES[id]

    }, []);
  


    return (
        <div className="mapPageInfo">
            <MapComponent
                onPointerClicked={onPointerClicked}
                mapPointsData={mapPointsData}
                selectedPoint={selectedPoint}
                inactivePointsId={inactivePoints}
                selectMap="klub"
            /> 
            <Notepad wordsList={textList} />
             {showButton && <Link to={getGameRoute(PAGES.pa8)}>Przejdź dalej</Link>}
        </div>
    );
}