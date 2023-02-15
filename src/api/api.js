import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Tj_CXttGbmi_mIqEt7Rbl-g49jlpQNdboQIMxoDja44",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImage;
