import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  @Input() showModal !: boolean
  @Output() emitshowFlag = new EventEmitter<boolean>()
  constructor() {}

  ngOnInit(): void {}
  closeModal(flag: boolean){
    this.showModal = flag
    this.emitshowFlag.emit(flag)
  }
}
