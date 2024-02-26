import cropList from './CropDB.json';

export enum CropType { Fruit = 'Fruit', Vegetable = 'Vegetable' };
export interface CropData {
    type: CropType;
    name: string;
    selected: boolean;
};

//var cropData: CropData[] = [ { type: CropType.Fruit, name: 'Banana', selected: false } ];
export function getCropData(): CropData[] {
    const cropData = cropList as CropData[];
    cropData.array.forEach( (item, index) => {
        item.selected = false;
    });
    return cropData
}