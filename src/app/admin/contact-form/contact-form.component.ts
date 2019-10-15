import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Contact } from '../../shared/contact';

@Component({
  selector: 'ta-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnChanges {

  contactForm: FormGroup | undefined = undefined;

  @Input() contact: Contact;
  @Input() editing = false;
  @Output() submitContact = new EventEmitter<Contact>();

  constructor(
    private fb: FormBuilder  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
    if (this.contact) {
      this.setFormValues(this.contact);
    }
  }

  private setFormValues(contact: Contact) {
    if (this.contactForm) {
     this.contactForm.patchValue(contact);
    }
  }

  private initForm() {
    if (! this.contact) {
      this.contact = {firstname: '', lastname: '', id: undefined};
    }
    if (this.contactForm) { return; }

    this.contactForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required]
    });
  }


  submitForm() {
    if (this.contactForm) {
      const formValue = this.contactForm.value;

      const newContact: Contact = {
        ...formValue,
      };

      this.submitContact.emit(newContact);
      this.contactForm.reset();
    }
  }
}
