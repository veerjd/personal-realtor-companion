const { DataTypes } = require('sequelize');

module.exports = function makePropertyModel(sequelize) {
  const Property = sequelize.define('property', {
    mls_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    land_size: {
      type: DataTypes.INTEGER,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_rejected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })


  async function sync() {
    await Property.sync()
  }

  async function findAll({ isSold = false, isRejected = false } = {}) {
    const query = {}
    query.is_sold = isSold ? true : false
    query.is_rejected = isRejected ? true : false

    const result = await Property.findAll({
      where: query
    })
    return result
  }
  async function findById({ propertyId }) {
    if (!propertyId)
      return false

    const result = await Property.findOne({ where: { id: propertyId } })
    if (result)
      return true
    else
      return false
  }
  async function insert(property) {
    // TODO
    return await Property.create({
      userId: property.getUserId(),
      author: property.getAuthor(),
      source: property.getSource(),
      description: property.getDescription(),
      curated: property.isCurated(),
    })
  }
  async function remove(propertyId) {
    return await Property.destroy({
      where: {
        id: propertyId
      }
    })
  }
  async function update(property) {
    // TODO
    return await Property.update({
      userId: property.getUserId(),
      author: property.getAuthor(),
      source: property.getSource(),
      description: property.getDescription(),
      curated: property.isCurated()
    }, {
      where: {
        id: property.getId()
      }
    })
  }

  return Object.freeze({
    sync,
    findAll,
    findById,
    insert,
    remove,
    update
  })
}