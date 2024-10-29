/**
 * Dane punktu mapy
 */
export interface PointData {
    // ID punktu
    id: string,

    // Pozycja punktu na grafice mapy
    position: {
        x: number,
        y: number
    }
}
