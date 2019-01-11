const axios = require('axios')
const url = 'https://dotapi-production.herokuapp.com'

class Heroes {
    static getHero(req, res) {
        axios.get(`${url}/heroes`)
            .then(function (response) {
                res.status(200).json(response.data)
            })
            .catch(function (error) {
                res.status(500).json({
                    message: "Internal server error",
                    error: error.message
                })
            });
    }

}

module.exports = Heroes