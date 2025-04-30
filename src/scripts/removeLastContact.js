import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to delete.');
      return;
    }

    contacts.pop();

    await writeContacts(contacts);

    console.log('The last contact has been successfully deleted.');
  } catch (error) {
    console.error('Error deleting the last contact:', error);
  }
};

removeLastContact();
