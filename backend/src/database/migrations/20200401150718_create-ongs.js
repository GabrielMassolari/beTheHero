// Metodo Up vai criar a tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('watsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};
// Metodo DOWN é oq que deve ser feito caso de um erro
// nesse caso vai deletar a tabela ONGS
exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
