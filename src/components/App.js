import { Container } from './Container/Container.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <ContactsList />
    </Container>
  );
}
