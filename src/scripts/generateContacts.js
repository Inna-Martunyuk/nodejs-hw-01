import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
      const existingContacts = await readContacts();

      const newContacts = Array.from({ length: number }, () =>
        createFakeContact(),
      );

      const updatedContacts = [...existingContacts, ...newContacts];

      await writeContacts(updatedContacts);

      console.log(
        `Додано ${number} нових контактів. Загалом контактів: ${updatedContacts.length}`,
      );
    } catch (error) {
      console.error('Помилка при створенні контактів:', error);
    }
};

generateContacts(5);
