import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Show } from "../models/Show";
import { ShowService } from "./show.service";
import { Observable } from "rxjs";

@Injectable()
export class ShowResolver implements Resolve<Show> {
  constructor(private showService: ShowService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return this.showService.getShow(route.params.id);
  }
}
