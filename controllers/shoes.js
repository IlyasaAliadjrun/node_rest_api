import Shoes, { validateShoes } from "../models/shoes.js";
import mongoose from "mongoose";

export const createShoes = async (req, res) => {
  const error = await validateShoes(req.body);
  if (error.message) res.status(400).send(error.message);
  const shoes = new Shoes({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    avatar: req.body.avatar,
  });

  shoes
    .save()
    .then((shoes) => {
      res.send(shoes);
    })
    .catch((error) => {
      res.status(500).send("Shoes was not stored in db");
    });
};

export const getAllShoes = (req, res) => {
  Shoes.find()
    .then((shoe) => res.send(shoe))
    .catch((error) => {
      res
        .status(500)
        .send(`Something wrong happened with this ${error.message}`);
    });
};

export const getShoesById = async (req, res) => {
  await Shoes.findById(req.params.shoesId)
    .then((shoe) => {
      if (!shoe) {
        res.status(404).send("Shoes not found");
      } else if (shoe) {
        res.send(shoe);
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });

  // let myquery = {
  //     _id: mongoose.Types.ObjectId(req.params.shoesId)
  // };
  // Shoes.findOne(myquery, (err, shoe) => {
  //     if(err) {
  //         res.status(500).send(err.message)
  //     }
  //     else if(!shoe){
  //         res.status(404).send("Shoes Not Found")
  //     }
  //     else{
  //         res.send(shoe)
  //     }
  // })
};

export const updateShoes = async (req, res) => {
  await Shoes.findByIdAndUpdate(
    req.params.shoesId,
    {
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      avatar: req.body.avatar,
    },
    { new: true }
  )
    .then((shoe) => {
      if (!shoe) {
        res.status(404).send("Shoes not found");
      } else if (shoe) {
        res.send(shoe);
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

export const deleteShoes = async (req, res) => {
  await Shoes.findByIdAndRemove(req.params.shoesId)
    .then((shoe) => {
      if (!shoe) {
        res.status(404).send("Shoes not found");
      } else if (shoe) {
        res.send(shoe);
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
