import axios from 'axios'
const KEY = 'AIzaSyBrTi8Yu7l2YndsSdeaMJ5TQmHypmlw-fw';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key:KEY
    }
})