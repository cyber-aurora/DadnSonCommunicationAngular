import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  formData: any[] = [];



  updateFormData(data: any) {
    this.formData.push(data);
    console.log('Form data updated:', this.formData);
  }

}
