import expect from "../libs/expect.js";

describe("TYPES SCHEMA", function () {
  it("primitive type validation", function () {
    const name = "bambang";
    const schema = { type: "string" };

    expect(name).to.be.jsonSchema(schema);
  });

  it("object type validation", function () {
    const todo = {
      id: 1,
      title: "membersihkan kamar",
      completed: false,
    };

    const schema = {
      type: "object",
      properties: {
        id: { type: "number" },
        title: { type: "string" },
        completed: { type: "boolean" },
      },
    };

    expect(todo).to.be.jsonSchema(schema);
  });
});

it("array type validation", function () {
  const fruits = ["banana", "papaya", "manggo"];

  const schema = {
    type: "array",
    items: { type: "string" },
  };
  expect(fruits).to.be.jsonSchema(schema);
});

it("array of object validation", function () {
  const todos = [
    { id: 1, completed: true, title: "membersihkan kamar" },
    { id: 2, completed: false, title: "minum coklat panas" },
    { id: 3, completed: false, title: "bermain tictac toe" },
  ];

  const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "number" },
        title: { type: "string" },
        completed: { type: "boolean" },
      },
    },
  };
  expect(todos).to.does.jsonSchema(schema);
});
