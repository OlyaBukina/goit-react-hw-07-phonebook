import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactsContainer, List, ContactsTitle } from './ContactsList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { Notification } from '../Notification/Notification';
import { fetchAllContacts } from '../../redux/contactsOperations';
import { Filter } from '../Filter/Filter';

export const ContactsList = () => {
  const filtedContacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactsContainer>
        <Filter />
        {filtedContacts.length ? (
          <>
            <List>
              {filtedContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
            </List>
          </>
        ) : (
          <Notification message="There are no contacts" />
        )}
      </ContactsContainer>
    </>
  );
};
