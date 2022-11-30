import Shoes, {validateShoes} from '../models/shoes.js';


export const createShoes = async (req,res) => {
    const error = await validateShoes(req.body);
    if(error.message) res.status(400).send(error.message);
    const shoes = new Shoes({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        avatar: req.body.avatar
    });

    shoes.save().then(shoes => {
        res.send(shoes);
    }).catch(error => {
        res.status(500).send("Shoes was not stored in db")
    })
}