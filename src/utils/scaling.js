import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const guidelineBaseWidth = 1280;

const scale = (size) => (width / guidelineBaseWidth) * size;
const imageScale = (size) => (width / 1920) * size;

export {scale, imageScale};
