import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  //Lifecycles
  constructor() {
    console.log('constructor was called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges was executed');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit was called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck was called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit was called');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked was called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit was called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterContentChecked was called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy was called');
  }
}
