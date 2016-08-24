# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create(title: "Something", body: "I will do", done: false);
Todo.create(title: "Another Thing", body: "I will do this also", done: false);
Todo.create(title: "Last thing", body: "I will do!!!", done: false);
