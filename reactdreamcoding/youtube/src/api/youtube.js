
import axios from 'axios';

export default class Youtube{
    constructor(apiClient){
        this.apliClient = apiClient;
    }
    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }
    async #searchByKeyword(keyword){
        return this.apliClient.search({params:{
            part:"snippet",
            maxResults:25,
            q:keyword,
        }}).then(res=>res.data.items)
        .then(items=> items.map(item => ({...item, id: item.id.videoId|| item.id.channelId })))
    }

    async #mostPopular(){
       return this.apliClient.videos({params:{
        part:"snippet",
        maxResults:25,
        chart:"mostPopular",
        regionCode:"kr"
       }}).then(res=>res.data.items)
    }

}