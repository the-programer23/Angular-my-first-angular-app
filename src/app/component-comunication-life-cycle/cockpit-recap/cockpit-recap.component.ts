import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-cockpit-recap',
  templateUrl: './cockpit-recap.component.html',
  styleUrls: ['./cockpit-recap.component.css'],
})
export class CockpitRecapComponent implements OnInit {
  @ViewChild('userIdInput', { static: true }) userIdInput: ElementRef;
  @Output() userCreated = new EventEmitter<{ name: string; id: number }>();
  @Output('adminCreated') admUser = new EventEmitter<{
    name: string;
    id: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onCreateUser(userNameInput: HTMLInputElement) {
    this.userCreated.emit({
      name: userNameInput.value,
      id: this.userIdInput.nativeElement.value,
    });
  }

  onCreateAdmin(userNameInput: HTMLInputElement) {
    this.admUser.emit({
      name: userNameInput.value,
      id: this.userIdInput.nativeElement.value,
    });
  }
}
