export interface Indexable {
    getWidth: () => number;
}
export declare function getIndex(column: number, row: number, indexable: Indexable): number;
