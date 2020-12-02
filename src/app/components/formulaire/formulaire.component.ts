import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  name: string;
  email: string;
  message: string;
    constructor() { }
  
    ngOnInit(): void {
    }
  validationForm(){
    const myInfo = `Mon nom est ${this.name}. Mon email est ${this.email}. Mon message est ${this.message}.`
    alert(myInfo)
  }
  }
  