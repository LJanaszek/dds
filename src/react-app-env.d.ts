/// <reference types="react-scripts" />

// add reference to mp4 files
declare module '*.mp4' {
    const src: string;
    export default src;
}
