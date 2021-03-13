import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css'],
})
export class UserElementComponent implements OnInit {
  @Input() name: string;
  @ContentChild('contentParagraphId', { static: true })
  contentParagraphId: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log(this.contentParagraphId.nativeElement.textContent);
  }
}
