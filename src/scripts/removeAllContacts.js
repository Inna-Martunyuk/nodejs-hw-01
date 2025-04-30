import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to delete.');
      return;
    }

    await writeContacts([]);

    console.log('All contacts have been successfully deleted.');
  } catch (error) {
    console.error('Error deleting all contacts:', error);
  }
};

removeAllContacts();
