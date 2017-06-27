const getOutbursts = (user_id, db) => {
  return db('outbursts')
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


module.exports = {
  getOutbursts,
  addOutburst,
  deleteOutburst
}
