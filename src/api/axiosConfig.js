import axios from "axios";

export default axios.create({
    baseURL: 'https://8822-78-26-242-14.ngrok-free.app',
    headers: {
        "ngrok-skip-browser-warning":"true"
    }
})