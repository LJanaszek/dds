import { useCallback, useMemo, useState } from "react";
import { MapComponent } from "../../components/map/map-component";
import { PointData } from "../../components/map/pixi-app/types";
import { PAGES } from "..";
import Notepad from "../../components/notepad";

import "../../style.scss";

export interface GameMapPoint extends PointData {
    pointId: string
}
let textList: string[] = [];
export default function P2() {
    const [selectedPoint, setSelectedPoint] = useState<string>();
    if (localStorage.getItem('textList')) {
        textList = (JSON.parse(localStorage.getItem('textList')!));
    }
    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: '1',
                position: {
                    x: 240,
                    y: 140,
                },
                pointId: '8.1',
               
            },
        ];
    }, []);


    const onPointerClicked = useCallback((id: string) => {

        console.log(`KTOS KLIKNAL ${id} `);
        // alert(`KTOS KLIKNAL ${id} `);
        setSelectedPoint(id);
        
        window.location.href = PAGES.pa3

    }, []);

    return (
        <div className="mapPageInfo">
            <MapComponent
                onPointerClicked={onPointerClicked}
                mapPointsData={mapPointsData}
                selectedPoint={selectedPoint}
            /> 
            <Notepad wordsList={textList} />
             {/* {showPopup && } */}
        </div>
    );
}