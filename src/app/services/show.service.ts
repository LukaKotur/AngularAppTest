import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Show } from "../models/Show";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Actor } from "../models/Actor";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ShowService {
  url: string = "https://api.themoviedb.org/3/tv/";
  personUrl: string = "https://api.themoviedb.org/3/person/";
  apiKey: string = "?api_key=a51b17f07161ad5f5646855d878e4c1e&language=en-US";
  page: string = "&page=1";
  credits: string = "&append_to_response=credits";
  searchUrl: string =
    "https://api.themoviedb.org/3/search/tv?api_key=a51b17f07161ad5f5646855d878e4c1e&language=en-US&query=";
  constructor(private http: HttpClient) {}

  getShows(): Observable<any> {
    return this.http.get<Show>(`${this.url}popular${this.apiKey}`);
  }

  getShow(id: number): Observable<any> {
    return this.http.get<Show>(`${this.url}${id}${this.apiKey}${this.credits}`);
  }

  findShow(term: string): Observable<any> {
    return this.http.get<Show>(`${this.searchUrl}${term}`);
  }

  getActor(id: number): Observable<any> {
    return this.http.get<Actor>(`${this.personUrl}${id}${this.apiKey}`);
  }
}
