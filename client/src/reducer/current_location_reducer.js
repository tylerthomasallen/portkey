// import {
//     SET_LOCATION,
// } from '../../util/yelp_api_util';

const currentLocationReducer = (state = 'San Franciso', action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default currentLocationReducer;
