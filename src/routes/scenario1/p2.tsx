import { useCallback, useMemo, useState } from "react";
import { MapComponent } from "../../components/map/map-component";
import { PointData } from "../../components/map/pixi-app/types";
import { PAGES } from "..";



export interface GameMapPoint extends PointData {
    pointId: string
}

export default function P2() {
    const [selectedPoint, setSelectedPoint] = useState<string>();
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showTime, setShowTime] = useState<boolean>(false);

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
        setShowPopup(true);
        setTimeout(() => { setShowTime(true) }, 300)
        window.location.href = PAGES.pa3

    }, []);

    return (
        <div>
            <MapComponent
                onPointerClicked={onPointerClicked}
                mapPointsData={mapPointsData}
                selectedPoint={selectedPoint}
            /> 
             {/* {showPopup && } */}
        </div>
    );
}