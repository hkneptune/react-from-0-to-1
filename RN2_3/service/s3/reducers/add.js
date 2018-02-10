import React, {
	ListView
} from 'react-native';

module.exports = function(state = 0, action) {
    //根据传进来的action改变state的值
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}