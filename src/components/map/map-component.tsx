import { PropsWithChildren, useRef, useState, useEffect } from "react";
import styles from './map-component.module.scss';
import PixiApp from "./pixi-app/app";
import { PointData } from "./pixi-app/types";

type Props = {
    // Co ma się stać jak user kliknie w punkt na mapie
    onPointerClicked(id: string): void;

    // Lista wszsytkich punktów w grze
    mapPointsData: PointData[],

    // ID zaznaczonego punktus
    selectedPoint?: string,
}

/**
 * To jest podstawowy komponent mapy.
 * Style są tak skonstruowane aby zajmował całą dostepną przestrzeń rodzica.
 */
export function MapComponent({ onPointerClicked, selectedPoint, mapPointsData }: PropsWithChildren<Props>) {
    // Ref do kontenera w którym umieścimy Widget PIXI
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    // Tu przechowywujemy referencje do mapy pomiędzy renderowaniami.
    const appRef = useRef<PixiApp>();

    // Czy Widget PIXI jest gotowy do przyjmowania danych
    const [appReady, setAppReady] = useState(false);

    // W tym useEffect tworzymy instancje mapy.
    useEffect(() => {
        if (appRef.current) return;

        const app = new PixiApp({
            assetsPath: '/',
            onPointerClicked
        });

        appRef.current = app;

        app.events.on('ready', () => {
            console.log('onReady.....');
            setAppReady(true);
        });

        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(app.view as HTMLCanvasElement);
        }

        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [onPointerClicked, setAppReady]);

    // Jak dostaniemy nowe listy aktywnych/nieaktywnych punktów to je przesyłamy do Widgetu

    // Jak dostaniemy nowe ID zaznaczonego punktu to jest przesyłamy do Widgetu
    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setSelectedPoint(selectedPoint || null);
        }
    }, [selectedPoint, appReady]);

    // Jak zmienią sie dane punktów (nie powinny) to jest przesyłamy do widgetu
    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setMapPointsData(mapPointsData || []);
        }
    }, [mapPointsData, appReady]);

    return <div className={styles.mapComponent} ref={widgetContainerRef}></div>
}
