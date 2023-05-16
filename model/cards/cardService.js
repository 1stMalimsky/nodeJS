const Card = require("./Card")

const createCard = (cardToSave) => {
    // you must normalize the card before

    let card = new Card(cardToSave)
    return card.save()
}

module.exports = {
    createCard,
}