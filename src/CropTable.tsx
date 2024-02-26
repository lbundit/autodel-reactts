import { useState } from 'react'
import './DivTable.css'
import { CropData, CropType } from "./CropData";

const defaultDelay = 5000; // 5000 ms = 5 sec
const probInterval = 100; // 100 ms = 0.1 sec
const delay = (milsec) => new Promise((resolve) => setTimeout(resolve, milsec));

export function CropTable(cropData: CropData[]) {
    const num = cropData.length;
    // const [timer, setTimer] = useState(0); // Only for debugging
    const [updateFlag, setUpdateFlag] = useState<boolean>(true);

    async function startTimer(cropIndex: number, delayTime: number) {
        var totalWait = 0;
        // setTimer(totalWait); // Only for deubigging
        while (totalWait < delayTime) {
            setUpdateFlag(true)
            if (cropData[cropIndex].selected == false) return;
            await delay(probInterval)
            totalWait += probInterval;
            // setTimer(delayTime - totalWait); // Only for debugging
        }
        cropData[cropIndex].selected = false;
        setUpdateFlag(true);
    }

    function AllCropsColumn() {
        if (updateFlag) { setUpdateFlag(false) }
        return (
            cropData.map((item,index) => {
                if (!item.selected) {
                    return (
                        <div key={index} class="divSquare" 
                            onClick= { () => { 
                                item.selected = true;
                                setUpdateFlag(true);
                                startTimer(index, 5000);
                            }}
                        >
                            {item.name}
                        </div>
                    )
                }
            })
        )  
    }

    function FruitColumn() {
        if (updateFlag) { setUpdateFlag(false) }
        return (
            cropData.map((item,index) => {
                if ((item.type == 'Fruit') && (item.selected)) {
                    return (
                        <div key={index} class="divSquare"
                            onClick= { () => {
                                item.selected = false;
                                setUpdateFlag(true);
                            }}    
                        >
                            {item.name}
                        </div>  
                    )
                }
            })
        )
    }

    function VeggieColumn() {
        if (updateFlag) { setUpdateFlag(false) }
        return (
            cropData.map((item,index) => {
                if ((item.type == 'Vegetable') && (item.selected)) {
                    return (
                        <div key={index} class="divSquare"
                            onClick= { () => {
                                item.selected = false;
                                setUpdateFlag(true);
                            }}    
                        >
                            {item.name}
                        </div>  
                    )
                }
            })
        )
    }

    return (
        <div id="cropTable" class="divTable">
            <div id="cropTableHeading" class="divTableHeading">
                <div id="cropTableHeadRow" class="divTableRow">
        
                    <div id="cropTableHeaderAll" class="divTableHead">
                        All The Crops
                    </div>
                    <div id="cropTableHeaderFruit" class="divTableHead">
                        Fruits
                    </div>
                    <div id="cropTableHeaderVeggy" class="divTableHead">
                        Vegetables
                    </div>
                </div>
            </div>
            <div id="cropTableBody" class="divTableBody">
                <div id="cropTableBodyRow" class="divTableRow">
                    <div id="cropTableList" class="divTableCell">
                        { AllCropsColumn() }
                    </div>
                    <div id="cropTableFruit" class="divTableCell">
                        { FruitColumn() }
                    </div>
                    <div id="cropTableVeggy" class="divTableCell">
                        { VeggieColumn() }
                    </div>
                </div>
            </div>
        </div>
    )
}