import {  Component,
          OnInit,
          OnChanges,
          DoCheck,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: Number = 10;
  constructor() {
    this.log('contrutor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  private log(hook: string) {
    console.log(hook);
  }

}
