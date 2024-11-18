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
            ['klub', `${config.assetsPath}klub/klub.png`],
            ['bieznia', `${config.assetsPath}klub/bieznia.png`],
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
