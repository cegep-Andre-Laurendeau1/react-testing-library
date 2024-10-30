import axios from "axios";

export const fetchFollowers = async (url) => {
    try {
        return await axios.get(url);
    } catch (e) {
        return [];
    }
};