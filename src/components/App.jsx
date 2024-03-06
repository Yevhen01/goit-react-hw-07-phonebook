import { Container } from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Message from "./Message/Message";
import s from "../components/App.module.css";

const App = () => {
  return (
    <Container>
      <h1 className={s.mainHeading}>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Message />
    </Container>
  );
};

export default App;
