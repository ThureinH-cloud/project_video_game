import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "3bdd7ff954bd4f9b97bfe5e0efe1df6c",
    }
})