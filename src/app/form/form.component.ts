import { Component } from '@angular/core';
import { FormDataService } from '../form-data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  id: number | null;
  name: string;
  lastName: string;
  position: string;
  salary: number | null;
  results: any[] = [];

  constructor(private formDataService: FormDataService) {
    this.id = null;
    this.name = '';
    this.lastName = '';
    this.position = '';
    this.salary = null;
  }

  submitForm() {
  //  console.log('Form')
    const formData = {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      position: this.position,
      salary: this.salary
    };
    this.formDataService.updateFormData(formData);
    this.clearForm();
  }

  clearForm() {
    this.id = null;
    this.name = '';
    this.lastName = '';
    this.position = '';
    this.salary = null;
  }
}
