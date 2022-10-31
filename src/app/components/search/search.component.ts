import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  filter,
} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('input') input: ElementRef | undefined;
  @Output() outoutSearchTerm = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input?.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((text) => {
          if (this.input) {
            this.outoutSearchTerm.emit(this.input.nativeElement.value);
          }
        })
      )
      .subscribe();
  }
}
