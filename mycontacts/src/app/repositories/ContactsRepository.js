const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const [row] = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return row;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts where id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts where email = $1', [email]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOp;
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

  async update(id, {
    name, email, phone, categoryId,
  }) {
    const [row] = await db
      .query(`UPDATE contacts
      SET name = $1,
      email = $2,phone=$3,category_id:$4
      WHERE id = $5 RETURNING *`, [name, email, phone, categoryId, id]);

    return row;
  }
}

module.exports = new ContactsRepository();
