const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const categoryModel = require("./models/category");
const subCategoryModel = require("./models/subCategories");
const packagesModel = require("./models/packages");
const checkoutModel = require("./models/checkout");
const usersModel = require("./models/users");

app.use(cors());

mongoose.connect(
  "mongodb+srv://moidkhan:1234@cluster0.p0qfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected Successfully");
  }
);

//Categories
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/categories", (req, res) => {
  categoryModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/categories", (req, res) => {
  let obj = {
    cat_name: "Pickup",
    cat_description: "A pickup is a light-duty truck that has an enclosed cabin and an open cargo area.",
    cat_img: 'http://suzukisouth.com.pk/wp-content/uploads/2019/05/l_slidesravi.png'
  };
  let newcategory = new categoryModel(obj);
  newcategory.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

// End Categories


//Sub Categories

app.get("/subcategories", (req, res) => {
  subCategoryModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/subcategories", (req, res) => {
  let obj = {
    sub_name: "SUV",
    sub_description: "SUVs (sport utility vehicles) and MPVs (multi-purpose vehicles) are great choices for family vehicles",
    c_id: '623f3ad51ed3fd99f5e9dc08',
    sub_img: 'https://pngimg.com/uploads/kia/kia_PNG23.png'
  };
  let newsubcategory = new subCategoryModel(obj);
  newsubcategory.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

//End Sub Categories


//Packages
app.get("/packages", (req, res) => {
  packagesModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/packages", (req, res) => {
  let obj = {
    p_days: 7,
    p_price: 16000,
    sub_id: '623f3bd6246abcf5a7adfc9d'
  };
  let newsubcategory = new packagesModel(obj);
  newsubcategory.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});
// End Packages



//Checkout
app.get("/checkout", (req, res) => {
  checkoutModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/checkout", (req, res) => {
  let obj = {
    full_name: "Taha Hani",
    card_no: "12345678901234",
    exp_date: '07/26',
    cvv: '258'
  };
  let newcheckout = new checkoutModel(obj);
  newcheckout.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

//End Checkout




// users
app.get("/users", (req, res) => {
  usersModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/users", (req, res) => {
  let obj = {
    full_name: "Taha Hani",
    contact: "03123456789",
    address: "House # 45 Zohura Garden, Malir, Karachi",
    email: "smuhammadtaha19@gmail.com", 
    password: "Taha123"
  };
  let newusers = new usersModel(obj);
  newusers.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});
// end users

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is listening on Port : ${port}`);
});
