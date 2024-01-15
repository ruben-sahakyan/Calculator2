import "./resultSection.scss";
import { useContext } from "react";
import { dataContext } from "../UseContext";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { TbSum } from "react-icons/tb";

export default () => {
    const { dataField } = useContext(dataContext);
    const {baseSquare, itemSquare, baseBoards} = dataField;
    return (
        <>
        <div className="result-info">
            <p>Board quantity: {baseBoards.length}</p>
            <p>items quantity: {itemSquare.quantity}</p>
            <p>item hight: {itemSquare.height}</p>
            <p>item width: {itemSquare.width}</p>
        </div>
        </>
    );
}