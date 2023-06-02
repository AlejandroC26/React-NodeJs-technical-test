const User = require('../../models').User;
const Country = require('../../models').Country;

const index = async(req, res) => {
    const users = await User.findAll({
        include: [ {model: Country } ]
    });
    return res.json(users);
}

const store = async(req, res) => {
    const user = await User.create(req.body);
    return res.json({success: true, data: user});
}

module.exports = {
    index,
    store
}