/* 
The critical information for each car is the VIN, make, model, and mileage.
They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
*/

exports.up = function(knex, Promise) {
  return knex.schema.createTable("carsData", tbl => {
    // id for primary key
    tbl.increments();

    //VIN
    tbl
      .string("VIN", 22)
      .notNullable()
      .unique()
      .index();

    //make
    tbl
      .string("make", 255)
      .notNullable()
      .index();

    //model
    tbl
      .string("model", 255)
      .notNullable()
      .index();

    //mileage
    tbl.integer("mileage", 12);

    //transmission type
    tbl.string("transmission_type", 255);

    //title status
    tbl.string("clean_title", 255).defaultTo("true");

    ///*
tbl.integer("sale_id")
.unsigned()
.notNullable()
.references("id")
.inTable("sales")
.onDelete("CASCADE")
.onUpdate("CASCADE")
    //*/
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("carsData").dropTableIfExists("sales");
};
