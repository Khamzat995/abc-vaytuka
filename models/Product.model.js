const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    shipping: {    ////перевозки, доставка
      type: Boolean,
      required: false,
    },
    colors: [
      {
        type: String,
        required: true,
      }
    ],
    category: {
      type: String,
      required: true,
    },
    reviews: {
      type: Number,
      required: false,
    },
    featured: {    ////избранный, популярный
      type: Boolean,
      required: false,
    },
    stars: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;


///////////////////////////////////////////////////////////

// const mongoose = require("mongoose");
//
// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     image: [
//       {
//         type: String,
//         required: true,
//       }
//     ],
//     featured: {    ////избранный, популярный
//       type: Boolean,
//       required: false,
//     },
//     colors: [
//       {
//         type: String,
//         required: false,
//       }
//     ],
//     /// colors: ["#000", "#ff0000"]
//     // 0: "#000"
//     // 1: "#ff0000"
//     category: {
//       type: String,
//       required: true,
//     },
//     company: {
//       type: String,
//       required: true,
//     },
//     description: { ///описание
//       type: String,
//       required: true,
//     },
//     shipping: {    ////перевозки, доставка
//       type: Boolean,
//       required: false,
//     },
//     reviews: {
//       type: Number,
//       required: false,
//     },
//     id: {
//       type: String,
//       required: true,
//     },
//     stars: {
//       type: Number,
//       required: false,
//     },
//     stock: {   // снабжать
//       type: Number,
//       required: false,
//     },
//   },
//   { timestamps: true }
// );
//
// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
