
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BaliService{
    http:any;
    baseUrl: any;
    

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://newsapi.org/v1/articles?';
    }

    getNews(key, source, sortBy){
        return this.http.get(this.baseUrl+'source='+source+'&sortBy='+sortBy+'&apiKey='+key)
            .map(res => res.json());
    }
}