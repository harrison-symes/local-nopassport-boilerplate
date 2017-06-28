const getUserOutbursts = (user_id, db) => {
  return db('outbursts')
  .where('outbursts.user_id', user_id)
  .select('*')
}

const addOutburst = (outburst, db) => {
  return db('outbursts')
  .insert(outburst)
}

const deleteOutburst = (outburst_id, db) => {
  return db('outbursts')
  .where('outbursts.id', outburst_id)
  .del()
}

const getPublicOutbursts = (db) => {
  return db('outbursts')
  .select('*')
  .where('outbursts.is_public', true)
}

module.exports = {
  getUserOutbursts,
  getPublicOutbursts,
  addOutburst,
  deleteOutburst
}
