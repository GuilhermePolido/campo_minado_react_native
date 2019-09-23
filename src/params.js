import {Dimensions} from 'react-native';

const params = {
    blockSise: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultLavel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSise);
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio);
        return Math.floor(boardHeight / this.blockSise);
    },
};

export default params;
