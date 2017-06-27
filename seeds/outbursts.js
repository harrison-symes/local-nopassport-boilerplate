exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('outbursts').del()
    .then(function () {
      // Inserts seed entries
      return knex('outbursts').insert([
        {id: 1, user_id: 1, name: 'bus driver', description: 'bus driver yelled at me because I forgot to top up my card. There was no need to yell at me. He ruined my mood and made me very angry', incident_date: '20170505'},
        {id: 2, user_id: 1, name: 'chairs', description: "I was walking past a furniture store and it made me angry that all the people with money are able to afford chairs and I'm not", incident_date: '20170506'},
        {id: 3, user_id: 1, name: 'moving girl', description: "In the movies the girl sitting in front of me couldn't decide in which position to sit and just kept moving and shifting. It was very distracting and really ticked me off", incident_date: '20170504'},
        {id: 4, user_id: 1, name: 'avocados 2', description: 'avocados are damn expensive!!', incident_date: '20170503'},
        {id: 5, user_id: 1, name: 'avocados', description: 'avocados are so bloody good I ate a gigantic bowl of guac and got angry at myself for having no self control', incident_date: '20170502'}
      ]);
    });
};
