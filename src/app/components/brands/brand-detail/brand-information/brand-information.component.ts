import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand-information',
  templateUrl: './brand-information.component.html',
  styleUrls: ['./brand-information.component.scss'],
})
export class BrandInformationComponent implements OnInit {
  @Input() brand: Brand | undefined;
  @Output() triggerEditFlag = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  triggerEdit(): void {
    this.triggerEditFlag.emit('edit');
  }
}
