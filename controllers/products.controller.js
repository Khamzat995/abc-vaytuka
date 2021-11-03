const Product = require("../models/Product.model");

module.exports.productsController = {
  createProduct: async (req, res) => {
    const { ...body } = req.body;

    // const { name, price, image, featured, colors, category,
    //   company, description, id, shipping, reviews, stars, stock } = req.body;

    // if (!name) {
    //   return res.status(400).json({
    //     error: "Необходимо указать название нового продукта",
    //   });
    // }
    // if (!price) {
    //   return res.status(400).json({
    //     error: "Необходимо указать цену продукта",
    //   });
    // }
    // if (!image) {
    //   return res.status(400).json({
    //     error: "Необходимо вставить картинку продукта",
    //   });
    // }
    // if (!category) {
    //   return res.status(400).json({
    //     error: "Необходимо указать категорию нового продукта",
    //   });
    // }
    // if (!id) {
    //   return res.status(400).json({
    //     error: "Необходимо указать id нового продукта",
    //   });
    // }
    // if (!description) {
    //   return res.status(400).json({
    //     error: "Необходимо указать описание продукта",
    //   });
    //}
    try {
      const product = await new Product({ ...body });
      await product.save();
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();//.populate("genres", "name");
      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getProductByCategoryId: async (req, res) => {
     const { category } = req.params;
    try {
      const products = await Product.find({ category });//.populate("genres", "name");
      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getProductsByCompanyId: async (req, res) => {
    const { company } = req.params;
    try {
      const products = await Product.find({ company });//.populate("genres", "name");
      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);//.populate("genres", "name");
      if (!product) {
        return res.status(404).json({
          error: "Продукт с таким ID не найден",
        });
      }
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editProduct: async (req, res) => {
    const { ...body } = req.body;
    const { id } = req.params;

    try {
      const edited = await Product.findByIdAndUpdate(
        id,
        { ...body },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: "Не удалось изменить продукт. Проверь правильность ID",
        });
      }
      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Product.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить продукт. Укажите верный ID",
        });
      }

      return res.json({
        message: "Продукт успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
