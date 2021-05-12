const { v4 } = require('uuid');
const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@gmail.com',
    phone: '12121213',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@gmail.com',
    phone: '12121213',
    category: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    const [row] = db.query('SELECT * FROM contacts');
    return row;
  }

  async findById(id) {
    const [row] = db.query('SELECT * FROM contacts where id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = db.query('SELECT * FROM contacts where email = $1', [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create(
    name, email, phone, categoryId,
  ) {
    const [row] = await db.query(`
        INSERT INTO contacts(name,email,phone,category_id)
        VALUES($1, $2 , $3 ,$4)
        RETURNING *
      `, [name, email, phone, categoryId]);
    return row;
  }

  update(id, {
    name, email, phone, categoryId,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        name,
        email,
        phone,
        category: categoryId,

      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));

      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
