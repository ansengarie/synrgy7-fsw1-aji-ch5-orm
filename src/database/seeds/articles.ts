import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    { id: 1, title: "title 1", body: "body1", isApproved: false },
    { id: 2, title: "rowValue2", body: "body2", isApproved: false },
    { id: 3, title: "rowValue3", body: "body3", isApproved: false },
  ]);
}
