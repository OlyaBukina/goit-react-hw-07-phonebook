import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';
import { Notification } from '../Notification/Notification';
import { List } from './ContactList.styled';
import { fetchAllContacts } from '../../redux/contactsOperations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filtedContacts = getFilterContacts();
  return (
    <>
      {filtedContacts.length ? (
        <List>
          {filtedContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <Notification message="There are no contacts" />
      )}
    </>
  );
};
