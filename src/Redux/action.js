import axios from "axios";
import { GET_FULL_LIST, GET_IMAGE_LIST, GET_COUNTRY_LIST } from "./reducer";

export const getFullList = () => {
    const getRandomNo = () => {
        let num = Math.floor(Math.random() * 10);
        // console.log(num);
        if(num < 7) return num;
        getRandomNo();
    }
  return async (dispatch) => {
    const ImageData = await axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`);
    // console.log(ImageData.data[2].Image, ImageData.data[1].Image);
    const ImageList = JSON.parse(JSON.stringify(ImageData.data));
    await axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`).then((res) => {
      const responseData = (res.data);
      let countryList = []
      dispatch({
        type: GET_FULL_LIST,
        payload: responseData,
      });
      if(Array.isArray(responseData)){
        responseData.forEach((data, index) => {
            let num = getRandomNo();
            // console.log(num);
            if(!countryList.includes(data.Country)){ countryList.push(data.Country)};
            responseData[index].Image = ImageList[num ? num : 0].Image;
        })
      }
      console.log(responseData);
      dispatch({
        type: GET_COUNTRY_LIST,
        payload: countryList,
      });
    }).catch(err => {
        console.log(err.message);
    });
  };
};
// export const getImageList = () => {
//     return (dispatch) => {
//       axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`).then((res) => {
//         dispatch({
//           type: GET_IMAGE_LIST,
//           payload: res.data,
//         });
//       });
//     };
//   };

// export const decreaseCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };
