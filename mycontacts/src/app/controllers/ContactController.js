const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found!' });
    }
    response.status(200).json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, categoryId,
    } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists) {
      return response.status(404).json({ error: 'This email is already in use' });
    }
    const contact = await ContactsRepository.create(name, email, phone, categoryId);
    response.status(202).json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, categoryId,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return response.status(400).json({ error: 'User not found!' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(404).json({ error: 'This email is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, categoryId,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found!' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

// Singleton : Somente uma instancia do objeto na aplicação.
module.exports = new ContactController();
