exports.up = function (knex) {
  return knex.schema
    .createTable('hobbits', tbl => {
      tbl.increments('id');
      tbl.string('name')
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('hobbits');
};
