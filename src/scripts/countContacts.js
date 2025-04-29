import {readContacts} from "../utils/readContacts.js"
export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;
        console.log(`Кількість контактів = ${ count }`);
        return count;
    } catch (error) {
console.error(" Помилка при підрахунку контактів:", error);
    return 0;
    }
 };

console.log(await countContacts());
