import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Data has been successfully written to the file.');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};
