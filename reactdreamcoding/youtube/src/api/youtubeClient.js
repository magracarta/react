
import axios from 'axios';

export default class YoutubeClient{
    constructor(){
        this.http = axios.create({
            baseURL:`https://youtube.googleapis.com/youtube/v3`,
            params: {key:process.env.REACT_APP_YOUTUBE_API_KYE}
        });
    }
    async search(params){
        return this.http.get('search', params);
    }
    async videos(params){
        return this.http.get('videos', params);
    }

}