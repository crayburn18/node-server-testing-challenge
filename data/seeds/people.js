
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {people_id: 1, name: 'jack'},
        {people_id: 2, name: 'kyle'},
        {people_id: 3, name: 'andy'}
      ]);
    });
};
