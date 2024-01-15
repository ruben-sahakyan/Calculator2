import './oneBoard.scss';
import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../UseContext';

export default () => {
    const { dataField } = useContext(dataContext);
    const {baseSquare, itemSquare, baseBoards} = dataField;
    return (
        <>
        {dataField.baseBoards ? 
        <>
        {baseBoards.map((board) => {
            return (
                <>
                {Number(itemSquare.width) > Number(itemSquare.height) ? 
                <>
                <div key={board.id} className='one-board' style={{display: 'flex', aspectRatio: `1/${baseSquare.height/baseSquare.width}`}}>
                    <div className='base-square' style={{height: `${(Number(board.firstSquareContainerHeight)*100)/Number(baseSquare.height)}%`,
                     width: `${(Number(board.firstSquareContainerWidth)*100)/Number(baseSquare.width)}%`}}>
                        {[...Array(Number(board.firstSquareItemsQuantity))].map((item, index) => {
                            return (
                                <>
                                <div className='one-item' style={{width: `${itemSquare.width*100/board.firstSquareContainerWidth}%`,
                                 height: `${itemSquare.height*100/board.firstSquareContainerWeight}%`}}></div>
                                </>
                            );
                        })}
                     </div>
                     <div className='other-square' style={{height: `${(Number(board.secondSquareContainerHeight)*100)/Number(baseSquare.height)}%`, 
                     width: `${(Number(board.secondSquareContainerWidth)*100)/Number(baseSquare.width)}%`}}>
                        {[...Array(Number(board.secondSquareItemsQuantity))].map((item, index) => {
                            return (
                                <>
                                <div className='one-item' style={{height: `${(Number(itemSquare.width)*100)/Number(board.secondSquareContainerHeight)}%`,
                                width: `${(Number(itemSquare.height)*100)/Number(board.secondSquareContainerWidth)}%`}}></div>
                                </>
                            );
                        })}
                     </div>
                </div>
                </> : 
                <>
                <div key={board.id} className='one-board' style={{display: 'block', aspectRatio: `1/${baseSquare.height/baseSquare.width}`}}>
                    <div className='base-square' style={{height: `${(Number(board.firstSquareContainerHeight)*100)/Number(baseSquare.height)}%`,
                     width: `${(Number(board.firstSquareContainerWidth)*100)/Number(baseSquare.width)}%`}}>
                        {[...Array(Number(board.firstSquareItemsQuantity))].map((item, index) => {
                            return (
                                <>
                                <div className='one-item' style={{width: `${itemSquare.width*100/board.firstSquareContainerWidth}%`,
                                 height: `${itemSquare.height*100/board.firstSquareContainerWeight}%`}}></div>
                                </>
                            );
                        })}
                     </div>
                    <div className='other-square' style={{height: `${board.secondSquareContainerHeight*100/baseSquare.height}%`,
                    width: `${board.secondSquareContainerWidth*100/baseSquare.width}%`}}>
                        {[...Array(Number(board.secondSquareItemsQuantity))].map((item, index) => {
                            return (
                                <>
                                <div className='one-item' style={{height: `${(itemSquare.width*100)/board.secondSquareContainerHeight}%`, 
                                width: `${(itemSquare.height*100)/board.secondSquareContainerWidth}%`}}></div>
                                </>
                            );
                        })}
                    </div>
                </div>
                </>}
                </>
            );
        })}
        </> : 
        <></>}
        </>
    );
}
