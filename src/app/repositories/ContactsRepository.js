const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Leonardo',
    email: 'leonardo@gmail.com',
    phone: '123-456-4512',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@gmail.com',
    phone: '123-421-4142',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // Listar todos os registros
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
