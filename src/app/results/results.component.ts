import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: any[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    console.log('Results Component initialized');
    this.results = this.formDataService.formData;
  }


  addCharacteristics() {
    const characteristics = 'Some characteristics';
    this.results.forEach(result => {
      if (!result.characteristics) {
        result.characteristics = [];
      }
      result.characteristics.push(characteristics);
    });
  }

}
