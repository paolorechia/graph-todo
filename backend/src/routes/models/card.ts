
/**
 * @typedef Tag
 * @property {string} name - tag name
 */

class TagModel {
  name: string;
}

/**
 * @typedef CardRef 
 * @property {string} shid - short hash id for card
 * @property {string} name.required - Card name
 */


/**
 * @typedef Card
 * @property {CardRef} current - current card
 * @property {Array<Tag>} tags - children cards
 * @property {Array<CardRef>} children - children cards
 * @property {Array<CardRef>} parents - parents cards
 */


/**
 * @typedef TreeNode
 * @property {CardRef} current - current Ref
 * @property {Array<Card>} children - children nodes
 * @property {Array<Card>} parents  - parent nodes
 */

class CardRef {
  shid: string;
  name: string;
}

class CardModel {
  current: CardRef;
  tags: Array<TagModel>;
  children: Array<CardModel>;
  parents: Array<CardModel>;
}



export {
  CardModel,
  TagModel
}
