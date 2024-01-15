import { useState, useContext } from "react";
import { dataContext } from "../UseContext";
import "./header.scss";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { TbSum } from "react-icons/tb";
// calculate function
import { calculate } from "../calculate";

export default () => {
    const { setDataField } = useContext(dataContext);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [widthErrorText, setWidthErrorText] = useState('');
    const [heightErrorText, setHeightErrorText] = useState('');
    const [quantityErrorText, setQuantityErrorText] = useState('');
    const handleCalculate = (ev) => {
        ev.preventDefault();
        setWidthErrorText('');
        setHeightErrorText('');
        setQuantityErrorText('');
        if(width.trim() === '') {
            setWidthErrorText('Please add width');
        } else if(height.trim() === '') {
            setHeightErrorText('Please add height')
        } else if(quantity.trim() === '') {
            setQuantityErrorText("Please add quantity")
        } else {
            setWidthErrorText('');
            setHeightErrorText('');
            setQuantityErrorText('');
            setWidth('');
            setHeight('');
            setQuantity('');
            const result = calculate({width, height, quantity});
            setDataField(result);
        }
    }
    return (
        <>
        <header>
            <form onSubmit={handleCalculate}>
                <div className="width-section">
                    <p className="width-error-text">{widthErrorText}</p>
                    <div className="width-input">
                        <TbArrowAutofitWidth className="width-symbol"/>
                        <input type="number" min="1"  max="3630" placeholder="Width" onChange={ev => {setWidth(ev.target.value)}} value={width}/>
                    </div>
                </div>
                <div className="height-section">
                    <p className="height-error-text">{heightErrorText}</p>
                    <div className="height-input">
                        <TbArrowAutofitHeight className="height-symbol"/>
                        <input type="number" min="1"  max="1830" placeholder="Height" onChange={ev => {setHeight(ev.target.value)}} value={height}/>
                    </div>
                </div>
                <div className="quantity-section">
                    <p className="quantity-error-text">{quantityErrorText}</p>
                    <div className="quantity-input">
                        <TbSum className="quantity-symbol"/>
                        <input type="number" min="1" placeholder="Quantity" onChange={ev => {setQuantity(ev.target.value)}} value={quantity}/>
                    </div>
                </div>
                <button>CALCULATE</button>
            </form>
        </header>
        </>
    );
}