import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {FilterInterface} from "../../shared/types/filter.interface";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSubject = new BehaviorSubject<FilterInterface[]>([]);
  filter$ = this.filterSubject.asObservable();

  constructor() { }

  setFilter(filter: FilterInterface[]): void {
    this.filterSubject.next(filter);
  }

  resetFilter(): void {
    this.filterSubject.next([]);
  }
}
