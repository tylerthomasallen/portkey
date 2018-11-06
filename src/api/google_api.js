export const RECEIVE_DESTINATION_PREDICTIONS = 'RECEIVE_DESTINATION_PREDICTIONS';

export const receivePlaces = payload => {
    return {
        type: RECEIVE_DESTINATION_PREDICTIONS,
        payload
    }
}


// export async function fetchPlaces() {
//     debugger;
//     try {
//         let response = await fetch(
//             'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=SanFrancisco&key=AIzaSyDQKxMvYxiQzgIHDF1_QHYG1ysmifP6XDY'
//         );
//         let responseJson = await response.json();
//         const { predictions } = responseJson;
//         receivePlaces(predictions)
//     } catch (error) {
//         console.error(error);
//     }
// }
