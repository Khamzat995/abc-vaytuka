const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    images: [
      {
        filename: {
          type: String,
          required: true,
        },
        height: {
          type: Number,
          required: false,
        },
        width: {
          type: Number,
          required: false,
        },
        url: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        size: {
          type: Number,
          required: true
        },
        // thumbnails: [
        //   {
        //     full: [
        //       {
        //         height: {
        //           type: Number,
        //           required: false
        //         },
        //         url: {
        //           type: String,
        //           required: false
        //         },
        //         width: {
        //           type: Number,
        //           required: false
        //         },
        //       },
        //     ],
        //     large: [
        //       {
        //         height: {
        //           type: Number,
        //           required: false
        //         },
        //         url: {
        //           type: String,
        //           required: false
        //         },
        //         width: {
        //           type: Number,
        //           required: false
        //         },
        //       }
        //     ],
        //     small: [
        //       {
        //         height: {
        //           type: Number,
        //           required: false
        //         },
        //         url: {
        //           type: String,
        //           required: false
        //         },
        //         width: {
        //           type: Number,
        //           required: false
        //         },
        //       }
        //     ],
        //     type: {
        //       type: String,
        //       required: false
        //     },
        //     url: {
        //       type: String,
        //       required: false
        //     },
        //     width: {
        //       type: Number,
        //       required: false
        //     },
        //   }
        // ]
      },
    ],
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
    reviews: {
      type: Number,
      required: false,
    },
    featured: {
      type: Boolean,
      required: false,
    },
    stars: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;


///////////////////////////////////////////////////////////

// const mongoose = require("mongoose");
//
// const productSchema = mongoose.Schema(



// {
//   id: {
//     type: String,
//     required: true,
//   },
//   stock: {
//     type: Number,
//     required: false,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   shipping: {    ////перевозки, доставка
//     type: Boolean,
//     required: false,
//   },
//   colors: [
//     {
//       type: String,
//       required: true,
//     }
//   ],
//   category: {
//     type: String,
//     required: true,
//   },
//   reviews: {
//     type: Number,
//     required: false,
//   },
//   featured: {    ////избранный, популярный
//     type: Boolean,
//     required: false,
//   },
//   stars: {
//     type: Number,
//     required: false,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   company: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   }
// },
//   { timestamps: true }
// );
//
// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
