import * as PIXI from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';
import { GrayscaleFilter } from '@pixi/filter-grayscale';
import { Container, Application, Sprite, Rectangle } from 'pixi.js';
import { IScreen } from "../app";
import { PointData } from '../types';

const glowFilter = new GlowFilter({ distance: 15, outerStrength: 3 })
const greyscaleFilter = new GrayscaleFilter();

export default class GameScreen extends Container implements IScreen {
    inactivePoints: string[] = [];


    activePoints: string[] = [];
    pointsMarkers: Container[] = [];
    mapPoints: PointData[] = [];
    selectedPointId: string | null = null;
    selectMap: string = 'klub';
    events = new PIXI.utils.EventEmitter()

    constructor(private app: Application) {
        super();

        this.sortableChildren = true;

        this.initMap();
    }

    private initMap() {
        const bg = Sprite.from(this.selectMap!);
        this.addChild(bg);
        this.updatePoints();
    }

    private updatePoints() {
        if (!localStorage.getItem('inactivePoints') && this.inactivePoints.length === 0) {
            this.inactivePoints = [];
        }
        else if (localStorage.getItem('inactivePoints') && this.inactivePoints.length === 0) {
            this.inactivePoints = JSON.parse(localStorage.getItem('inactivePoints')!);
        }
        this.pointsMarkers.forEach(p => p.destroy());
        this.pointsMarkers.length = 0;

        this.mapPoints
           
            .forEach((p) => {
                let point = Sprite.from(p.pointer.name);
                point.anchor.set(.5, 1);
                point.width = p.pointer.width;
                point.height = p.pointer.height;
                point.position.set(p.position.x, p.position.y);

                this.addChild(point);

                point.eventMode = 'static';
                point.cursor = 'pointer';

                const hisBoxSize = point.height;
                const hisBoxSizeWidth = point.width

                const rect = new Rectangle(-hisBoxSizeWidth / 2, -hisBoxSize, hisBoxSizeWidth, hisBoxSize);

                point.hitArea = rect;

                point.on('pointerdown', () => {
                    this.events.emit('pointer-clicked', p.id);


                });

                if (p.id === this.selectedPointId) {
                    point.filters = [
                        ...(point.filters || []),
                        glowFilter
                    ]
                }

                this.pointsMarkers.push(point);
            });
            this.mapPoints
            .filter((p) => this.inactivePoints.includes(p.id))
            .forEach((p) => {
                let point = Sprite.from(p.pointer.visited);
                point.anchor.set(.5, 1);
                point.width = p.pointer.width;
                point.height = p.pointer.height;
                point.position.set(p.position.x, p.position.y);

                this.addChild(point);
                point.eventMode = 'static';
                point.cursor = 'pointer';

                const hisBoxSize = point.height;

                const rect = new Rectangle(-hisBoxSize / 2, -hisBoxSize, hisBoxSize, hisBoxSize);

                point.hitArea = rect;

                point.on('pointerdown', () => {
                    this.events.emit('pointer-clicked', p.id);


                });

                if (p.id === this.selectedPointId) {
                    point.filters = [
                        ...(point.filters || []),
                        glowFilter
                    ]
                }

                this.pointsMarkers.push(point);
            });
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }

    setPoints(active: string[], inactive: string[]) {
        this.activePoints = active;
        this.inactivePoints = inactive;
        this.updatePoints();
    }

    setMapPointData(points: PointData[]) {
        this.mapPoints = points;
        this.updatePoints();
    }

    setSelectedPoint(id: string | null) {
        this.selectedPointId = id;
        this.updatePoints();
    }
    setSelectMap(map: string) {
        this.selectMap = map;
        this.initMap();
    }
}
