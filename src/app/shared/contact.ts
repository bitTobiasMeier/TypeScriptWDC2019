export interface Contact {
  id: number | undefined;
  firstname: string;
  lastname: string;
}


export type NewContact = Omit <Contact, 'id'>;

