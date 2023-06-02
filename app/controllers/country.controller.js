const Country = require('../../models').Country;

const index = async (req, res) => {
   const countries = await Country.findAll({
        attributes: [['id', 'value'], ['name', 'label']]
   });
   return res.json(countries);
}

module.exports = {
    index
}
