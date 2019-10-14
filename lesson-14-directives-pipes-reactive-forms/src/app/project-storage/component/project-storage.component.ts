import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { ProjectStatus } from "../models/project-status.interface";
import { ProjectValidators } from "./project-storage.validators";


@Component({
  selector: 'app-project-storage',
  templateUrl: './project-storage.component.html',
  styleUrls: ['./project-storage.component.css']
})
export class ProjectStorageComponent {
  statuses: ProjectStatus[] = [
    {id: 1, status: "Staible"},
    {id: 2, status: "Critical"},
    {id: 3, status: "Finished"}
  ];

  parent: FormGroup;
     
  constructor(){
    this.parent = new FormGroup ({
      projectStorage: new FormGroup({
        projectName: new FormControl(
          '',
          [Validators.required],
          [ProjectValidators.nameValidator]),
        mail: new FormControl("", [Validators.email, Validators.required]),
        projectStatus: new FormControl("", Validators.required)
      })
    });
  }

  onSubmit(): void{
    console.log(this.parent.value)
  }
}
