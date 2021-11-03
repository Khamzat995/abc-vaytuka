const SingleProduct = require("../models/SingleProduct.model");

module.exports.singleProductSchema = {
  createSingleProduct: async (req, res) => {
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
      const product = await new SingleProduct({ ...body });
      await product.save();
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getAllSingleProduct: async (req, res) => {
    try {
      const products = await SingleProduct.find();//.populate("genres", "name");
      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },


  getSingleProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await SingleProduct.findById(id);//.populate("genres", "name");
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

  editSingleProduct: async (req, res) => {
    const { ...body } = req.body;
    const { id } = req.params;

    try {
      const edited = await SingleProduct.findByIdAndUpdate(
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

  removeSingleProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await SingleProduct.findByIdAndRemove(id);

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
