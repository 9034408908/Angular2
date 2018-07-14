import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-patientdynamicform',
  templateUrl: './patientdynamicform.component.html',
  styleUrls: ['./patientdynamicform.component.css']
})
export class PatientdynamicformComponent implements OnInit {
 private docForm:FormGroup;
  private patients: any[];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    return this.docForm=this.fb.group({
      name:[''],
      age: [''],
      patients : this.fb.array([this.createPatientForm()])
    })
  }
  addPatient() {
    const patients = <FormArray> this.docForm.get('patients') ;
    patients.push(this.createPatientForm())
  }
  createPatientForm(){
    return this.fb.group({
      patient_name:[''],
      patient_age: [''],
      patient_disease: ['']
    })
  }

}
