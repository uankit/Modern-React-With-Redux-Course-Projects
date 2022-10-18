import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID sCuzjqD5bC2UsE3I77F6KGyAsdmoHJuzsUH6av2BbVM",
  },
});
