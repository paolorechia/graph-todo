/**
 * @typedef Card
 * @property {string} shid - short hash id for card
 * @property {string} name.required - Card name
 */

console.log("Reading cards model")

class Card {
  shid: string;
  name: string;
}

export default Card;
