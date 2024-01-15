export const calculate = ({width, height, quantity}) => {
    // base array
    const baseListBoards = [];
    // base square width and height
	const baseSquareWidth = 3630;
	const baseSquareHeight = 1830;
    //first square
    const firstSquareWidth = Number(width)*Math.floor(baseSquareWidth/width);
    const firstSquareHeight = Number(height)*Math.floor(baseSquareHeight/height);
    //second square
    const secondSquareWidth = baseSquareWidth - firstSquareWidth;
    const secondSquareHeight = baseSquareHeight - firstSquareHeight;
    // first square max items quantity
    const firstSquareMaxItemsQuantity = (firstSquareWidth/width) * (firstSquareHeight/height);
    // second square max items quantity
    const secondSquareMaxItemsQuantity = Number(width) > Number(height) ? Math.floor(((baseSquareWidth - firstSquareWidth)/height)) * Math.floor(baseSquareHeight/width): Math.floor(baseSquareWidth/height) * Math.floor((baseSquareHeight - firstSquareHeight)/width);
    // base square max items quantity
    const baseSquareItemsQuantity = firstSquareMaxItemsQuantity + secondSquareMaxItemsQuantity;
    // base square (board) quantity
    const baseBoardsQuantity = Math.ceil(quantity/baseSquareItemsQuantity);
    // base boards
    const baseBoards = [];
    let count = Number(quantity);
    for(let i=0; i<baseBoardsQuantity; ++i) {
        if(count > baseSquareItemsQuantity) {
            baseBoards.push({id: Math.floor(Math.random() * 10000000),
            firstSquareItemsQuantity: firstSquareMaxItemsQuantity, secondSquareItemsQuantity: secondSquareMaxItemsQuantity,
            firstSquareContainerHeight: Math.ceil(firstSquareMaxItemsQuantity/(firstSquareWidth/width))*height,
            firstSquareContainerWidth: firstSquareWidth,

            secondSquareContainerHeight: Number(width) > Number(height) ? Math.ceil(secondSquareMaxItemsQuantity/Math.floor(secondSquareWidth/height))*width
             : Math.ceil(secondSquareMaxItemsQuantity/Math.floor(baseSquareWidth/Number(height)))*width,

            secondSquareContainerWidth: Number(width) > Number(height) ? Math.floor(secondSquareWidth/height)*height
             : Math.floor(baseSquareWidth/Number(height))*height,
            });
            count -= baseSquareItemsQuantity;
        } else {
            if(count > firstSquareMaxItemsQuantity) {
                baseBoards.push({id: Math.floor(Math.random() * 10000000),
                firstSquareItemsQuantity: firstSquareMaxItemsQuantity, secondSquareItemsQuantity: count - firstSquareMaxItemsQuantity,
                firstSquareContainerHeight: Math.ceil(firstSquareMaxItemsQuantity/(firstSquareWidth/width))*height,
                firstSquareContainerWidth: firstSquareWidth,
                secondSquareContainerHeight: Number(width) > Number(height) ? Math.ceil((count - firstSquareMaxItemsQuantity)/Math.floor(secondSquareWidth/height))*width
                 : Math.ceil(secondSquareMaxItemsQuantity/Math.floor(baseSquareWidth/Number(height)))*width,
                secondSquareContainerWidth: Number(width) > Number(height) ? Math.floor(secondSquareWidth/height)*height
                 : Math.floor(baseSquareWidth/Number(height))*height,
                });
                count -= firstSquareMaxItemsQuantity;
            } else {
                baseBoards.push({id: Math.floor(Math.random() * 10000000),
                firstSquareItemsQuantity: count, secondSquareItemsQuantity: 0,
                firstSquareContainerHeight: Math.ceil(count/(firstSquareWidth/width))*height,
                firstSquareContainerWidth: firstSquareWidth,
                secondSquareContainerHeight: Number(width) > Number(height) ? 0 : 0,
                secondSquareContainerWidth: Number(width) > Number(height) ? 0 : 0,
                })
            }
        }
    };

    const result = {
        baseSquare: {width: baseSquareWidth, height: baseSquareHeight, maxQuantity: baseSquareItemsQuantity},
        itemSquare: {width, height, quantity},
        baseBoards,
    }
    return result;
};
