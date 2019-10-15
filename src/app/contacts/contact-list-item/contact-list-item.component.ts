import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../../shared/contact';

@Component({
  selector: 'ta-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact | undefined;

  ngOnInit() {
  }
}
