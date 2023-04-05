import { reactive } from 'vue';

export const store = reactive(
    {
        movies: [],
        series: [],
        search:"",
        cast:[],
        api:"api_key=e99307154c6dfb0b4750f6603256716d"
    }
);