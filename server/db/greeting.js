const getGreetings = (db) => {
  return db('greetings')
    .select('*')
}

function addGreeting(id, text, db) {
  return db('greetings')
    .insert({
      id: id,
      text: text
    })
}


module.exports = {
  getGreetings
}
