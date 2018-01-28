import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() messages: { [key: string]: string };
  @Input() submitted: boolean;

  constructor() { }

}
