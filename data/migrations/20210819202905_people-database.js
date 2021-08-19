
exports.up = function(knex) {
    return knex.schema.createTable("people", table => {
        table.increments("people_id");
        table.string("name",136).notNullable();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("people");
  };
