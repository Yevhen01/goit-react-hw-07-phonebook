import axios from "axios";

const contactsAPI = axios.create({
  baseURL: "https://65e73f0553d564627a8e54ab.mockapi.io",
});

export const fetchContacts = async () => {
  const { data } = await contactsAPI.get("/contacts");
  return data;
};

export const addContacts = async (contact) => {
  const { data } = await contactsAPI.post("/contacts", contact);
  return data;
};

export const deleteContacts = async (id) => {
  console.log(id);
  const { data } = await contactsAPI.delete(`/contacts/${id}`);
  return data;
};
