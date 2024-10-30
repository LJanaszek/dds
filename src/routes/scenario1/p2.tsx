import { useCallback, useEffect, useMemo, useState } from "react";
import { MapComponent } from "../../components/map/map-component";
import { PointData } from "../../components/map/pixi-app/types";
import { getGameRoute, PAGES } from "..";
import Notepad from "../../components/notepad";

import "../../style.scss";
import { Link } from "react-router-dom";

export interface GameMapPoint extends PointData {
    pointId: string
}
let textList: string[] = [];
export default function P2() {
    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<string>();
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
                position: {
                    x: 240,
                    y: 140,
                },
                pointId: '8.1',
               
            },{
                id: 'pa4',
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
        // alert(`KTOS KLIKNAL ${id} `);
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
            /> 
            <Notepad wordsList={textList} />
             {showButton && <Link to={getGameRoute(PAGES.pa8)}>Przejdź dalej</Link>}
        </div>
    );
}