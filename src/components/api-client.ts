

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0896be4b90fb4060b4c2f5dc1275fde1",
  },
});



