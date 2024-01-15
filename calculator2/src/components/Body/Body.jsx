import ResultSection from "../ResultSection/ResultSection";
import OneBoard from "./OneBoard/OneBoard";
import { useContext } from "react";
import { dataContext } from "../UseContext";
import "./body.scss";

export default () => {
    const { dataField } = useContext(dataContext);
    return (
        <>
        {!!dataField?.baseBoards ? 
        <>
        < ResultSection />
        <div className="body-section">
            <OneBoard />
        </div>
        </>
         : 
        <></>}
        </>
    );
}