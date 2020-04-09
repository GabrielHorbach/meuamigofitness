import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const responsiveSize = size => width / size;
