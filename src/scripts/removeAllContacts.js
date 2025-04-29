import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
    try {

      const contacts = await readContacts();

      if (contacts.length === 0) {
        console.log('У файлі немає контактів для видалення.');
        return;
      }

      await writeContacts([]);

      console.log(' Усі контакти успішно видалені.');
    } catch (error) {
      console.error('Помилка при видаленні всіх контактів:', error);
    }
};

removeAllContacts();
