const getUserOutbursts = (user_id, db) => {
  return db('outbursts')
    .where('outbursts.user_id', user_id)
    .select('*')
}

function addOutburst(outburst, db) {
  return db('outbursts')
    .insert(outburst)
}

function deleteOutburst(outburst, db) {
  return db('outbursts')
    .insert(outburst)
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
