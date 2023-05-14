const axios = require('axios')
const { Temperament } = require('../db')

let temperaments = []
let arr2 = []

const getTemperamentsByApi = async () => {
    const { data } = await axios('https://api.thedogapi.com/v1/breeds')
    data.forEach(dog => temperaments.push(dog.temperament))
    for (str in temperaments) {
        for (temp in temperaments[str]?.split(',')) {
            let temperament = temperaments[str]?.split(',')[temp]
            if (!arr2.some(temp => temp === temperament)) arr2.push(temperament)
        }
    }
    for (temp in arr2) {
        await Temperament.bulkCreate([{ name:  arr2[temp]}])
    }
}
module.exports = { getTemperamentsByApi }