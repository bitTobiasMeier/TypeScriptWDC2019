import { Action, createAction, props, union } from '@ngrx/store';
import { Contact, NewContact } from '../../../shared/contact';
import { logMethod } from 'src/app/shared/log.decorator';

export enum AdminActionTypes {
  CreateContact = '[Admin] Create Contact2',
  CreateContactSuccess = '[Admin] Create Contact Success',
  UpdateContact = '[Admin] Update Contact',
  UpdateContactSuccess = '[Admin] Update Contact Success'
}

export const CreateContact = createAction(
  '[Admin] Create Contact',
  props<{contact: NewContact}>(),
);

export const CreateContactSuccess = createAction(
  '[Admin] Create Contact Success',
  props<{contact: Contact}>(),
);

export const UpdateContact = createAction(
  '[Admin] Update Contact',
  props<{contact: Contact}>(),
);

export const UpdateContactSuccess = createAction(
  '[Admin] Update Contact Success',
  props<{contact: Contact}>(),
);

export type AdminActions =
ReturnType<typeof CreateContact | typeof CreateContactSuccess
| typeof UpdateContact | typeof UpdateContactSuccess>;


