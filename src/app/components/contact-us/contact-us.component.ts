import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name = new FormControl('', [
    Validators.required])
  street = new FormControl('') 
  houseNamber = new FormControl('') 
  emailAddress = new FormControl('')
  message = new FormControl('')
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

}
