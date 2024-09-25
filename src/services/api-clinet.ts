import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "b74181bd12b34c98a02f948478364656",
  },
});
