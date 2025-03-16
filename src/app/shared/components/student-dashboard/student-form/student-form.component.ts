import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Istd } from 'src/app/shared/models/std';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  @ViewChild('fname') fnameRef!: ElementRef;
  @ViewChild('lname') lnameRef!: ElementRef;
  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('contact') contactRef!: ElementRef;

  @Output() emitStdobj = new EventEmitter<Istd>();
  constructor() {}

  ngOnInit(): void {}

  onStdClick() {
    if (
      this.fnameRef.nativeElement.value.length > 0 &&
      this.lnameRef.nativeElement.value.length > 0 &&
      this.emailRef.nativeElement.value.length > 0 &&
      this.contactRef.nativeElement.value.length > 0
    ) {
      let stdObj: Istd = {
        fname: this.fnameRef.nativeElement.value,
        lname: this.lnameRef.nativeElement.value,
        email: this.emailRef.nativeElement.value,
        contact: this.contactRef.nativeElement.value,
      };
      console.log(stdObj)
      this.fnameRef.nativeElement.value = '';
      this.lnameRef.nativeElement.value = '';
      this.emailRef.nativeElement.value = '';
      this.contactRef.nativeElement.value = '';
      this.emitStdobj.emit(stdObj)
    
    }
  }
}
