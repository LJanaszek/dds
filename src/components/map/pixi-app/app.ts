import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';
import { PointData } from './types';

type AppConfig = {
    // Bazowy adres pod którym Widget bedzie spodziewał sie grafik
    assetsPath: string,

    // Callback po kliknieciu w punkt
    onPointerClicked(id: string): void;
}

// Szerokość grafiki mapy
export const MAP_WIDTH = 2812;

// Wysokość grafiki mapy
export const MAP_HEIGHT = 2076;

export default class PixiApp extends PIXI.Application {

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 0,
            backgroundColor: 0xDFD7CD,
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
            antialias: true
        });

        this.renderer.events.autoPreventDefault = false;

        if (this.renderer.view.style) {
            this.renderer.view.style.touchAction = 'auto';
        }

        loadSprites([
            ['przychodnia', `${config.assetsPath}przychodnia.png`],
            ['pinezka', `${config.assetsPath}pinezka.png`],
            //mapy
            ['klub', `${config.assetsPath}klub/klub.png`],
            ['oboz', `${config.assetsPath}oboz/oboz_calosc.png`],
            ['przychodnia', `${config.assetsPath}przychodnia/przych_calosc.png`],
            ['szkola', `${config.assetsPath}szkola/szkola_calosc.png`],
            ['szkolaOnline', `${config.assetsPath}szkola_online/online_calosc.png`],
            ['transparent', `${config.assetsPath}transparent.png`],
            //klub
            ['bieznia', `${config.assetsPath}klub/bieznia.png`],
            ['biezniaVisited', `${config.assetsPath}klub/bieznia_done.png`],
            ['boisko1' , `${config.assetsPath}klub/boisko1.png`],
            ['boisko1Visited' , `${config.assetsPath}klub/boisko1_done.png`],
            ['boisko2' , `${config.assetsPath}klub/boisko2.png`],
            ['boisko2Visited' , `${config.assetsPath}klub/boisko2_done.png`],
            ['szkol', `${config.assetsPath}klub/bud_glow.png`],
            ['szkolVisited', `${config.assetsPath}klub/bud_glow_done.png`],
            ['szatnie', `${config.assetsPath}klub/szatnie.png`],
            ['szatnieVisited', `${config.assetsPath}klub/szatnie_done.png`],
            ['parking', `${config.assetsPath}klub/parking.png`],
            ['parkingVisited', `${config.assetsPath}klub/parking_done.png`],

            //oboz
            ['brama', `${config.assetsPath}oboz/brama.png`],
            ['bramaVisited', `${config.assetsPath}oboz/brama_done.png`],
            ['hustawka', `${config.assetsPath}oboz/hustawka.png`],
            ['hustawkaVisited', `${config.assetsPath}oboz/hustawka_done.png`],
            ['jezioro', `${config.assetsPath}oboz/jezioro.png`],
            ['jezioroVisited', `${config.assetsPath}oboz/jezioro_done.png`],
            ['pokoj', `${config.assetsPath}oboz/pokoj.png`],
            ['pokojVisited', `${config.assetsPath}oboz/pokoj_done.png`],
            ['toalety', `${config.assetsPath}oboz/toalety.png`],
            ['toaletyVisited', `${config.assetsPath}oboz/toalety_done.png`],

            //przychodnia
            ['korytarz', `${config.assetsPath}przychodnia/przych_korytarz.png`],
            ['korytarzVisited', `${config.assetsPath}przychodnia/przych_korytarz_done.png`],
            ['lekarski', `${config.assetsPath}przychodnia/przych_lekarski.png`],
            ['lekarskiVisited', `${config.assetsPath}przychodnia/przych_lekarski_done.png`],
            ['pielegniarki', `${config.assetsPath}przychodnia/przych_pielegniarki.png`],
            ['pielegniarkiVisited', `${config.assetsPath}przychodnia/przych_pielegniarki_done.png`],
            ['rejestracja', `${config.assetsPath}przychodnia/przych_rejestracja.png`],
            ['rejestracjaVisited', `${config.assetsPath}przychodnia/przych_rejestracja_done.png`],
            ['zabiegowy', `${config.assetsPath}przychodnia/przych_zabiegowy.png`],
            ['zabiegowyVisited', `${config.assetsPath}przychodnia/przych_zabiegowy_done.png`],

            //szkola
            ['toalety', `${config.assetsPath}szkola/szkoal_toalet.png`],
            ['toaletyVisited', `${config.assetsPath}szkola/szkoal_toalet_done.png`],
            ['klasa', `${config.assetsPath}szkola/szkola_klasa.png`],
            ['klasaVisited', `${config.assetsPath}szkola/szkola_klasa_done.png`],
            ['korytarzSzkola', `${config.assetsPath}szkola/szkola_koryt.png`],
            ['korytarzSzkolaVisited', `${config.assetsPath}szkola/szkola_koryt_done.png`],
            ['parkingSzkola', `${config.assetsPath}szkola/szkola_parking.png`],
            ['parkingSzkolaVisited', `${config.assetsPath}szkola/szkola_parking_done.png`],
            ['pedagog', `${config.assetsPath}szkola/szkola_pedagog.png`],
            ['pedagogVisited', `${config.assetsPath}szkola/szkola_pedagog_done.png`],

            //szkola online
            ['chat', `${config.assetsPath}szkola_online/chat.png`],
            ['chatVisited', `${config.assetsPath}szkola_online/chat_done.png`],
            ['gklasowa', `${config.assetsPath}szkola_online/gklasowa.png`],
            ['gklasowaVisited', `${config.assetsPath}szkola_online/gklasowa_done.png`],
            ['samochod', `${config.assetsPath}szkola_online/samochod.png`],
            ['samochodVisited', `${config.assetsPath}szkola_online/samochod_done.png`],
            ['spotkanie', `${config.assetsPath}szkola_online/spotkanie.png`],
            ['spotkanieVisited', `${config.assetsPath}szkola_online/spotkanie_done.png`],
            ['wakacje', `${config.assetsPath}szkola_online/wakacje.png`],
            ['wakacjeVisited', `${config.assetsPath}szkola_online/wakacje_done.png`],

        ]).then(() => {
            this.initApp();
        });

        this.renderer.on('resize', () => {
            this.onResize();
        })
    }

    events = new PIXI.utils.EventEmitter();

    private gameScreen?: GameScreen;

    private initApp() {
        if(this.stage) {
            this.gameScreen = new GameScreen(this);

            this.gameScreen.events.on('pointer-clicked', (id) => {
                this.config.onPointerClicked(id);
            })

            this.stage.addChild(this.gameScreen);
            this.events.emit('ready');
            this.onResize();
        }
    }

    private onResize() {}

    public destroy(x: boolean) {
        super.destroy(x);
    }

    setPoints(active: string[], inactive: string[]) {
        this.gameScreen?.setPoints(active, inactive);
    }

    setSelectedPoint(id: string | null) {
        this.gameScreen?.setSelectedPoint(id);
    }

    setMapPointsData(points: PointData[]) {
        this.gameScreen?.setMapPointData(points);
    }
    setSelectMap(map: string) {
        this.gameScreen?.setSelectMap(map);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
