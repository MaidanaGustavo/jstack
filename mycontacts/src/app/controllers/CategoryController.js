const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);
    response.status(200).json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);
    if (!category) return response.status(404).json({ error: 'Category not found!' });
    return response.status(200).json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) return response.status(404).json({ error: 'Name is required' });
    const categoryExist = await CategoriesRepository.findByName(name);
    if (categoryExist) return response.status(404).json({ error: 'Name already has been taken !' });
    const category = await CategoriesRepository.create(name);
    return response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    const categoryExist = await CategoriesRepository.findById(id);
    if (!categoryExist) return response.status(404).json({ error: 'Category not found!' });
    const category = await CategoriesRepository.update(id, { name });
    return response.status(200).json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    const categoryExists = await CategoriesRepository.findById(id);
    if (!categoryExists) return response.status(404).json({ error: 'Category not found !' });
    await CategoriesRepository.delete(id);
    return response.sendStatus(204);
  }
}
module.exports = new CategoryController();
