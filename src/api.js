import axios from "axios";

// const searchImages = async () => {
//   const response = await fetch(
//     `https://api.unsplash.com/search/photos?query=cars`,
//     {
//       headers: {
//         Authorization: "Client-ID 7qwSTxmAHuH-l4KMo1yRTHxBpy-yXRm1-Q2dT08loZA",
//       },
//     }
//   );
//   console.log(response);
//   return response;
// };

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7qwSTxmAHuH-l4KMo1yRTHxBpy-yXRm1-Q2dT08loZA",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
