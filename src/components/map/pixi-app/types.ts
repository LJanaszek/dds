/**
 * Dane punktu mapy
 */
export interface PointData {
    // ID punktu
    id: string,

    pointer:{
        name: string,
        visited: string,
        height: number,
        width: number
    }
    // Pozycja punktu na grafice mapy
    position: {
        x: number,
        y: number
    }
}
