export const todo_single_schema = {
  type: "object",
  properties: {
    userId: { type: "number" },
    id: { type: "number" },
    title: { type: "string" },
    completed: { type: "boolean" },
  },
};

export const todo_all_schema = {
  type: "array",
  items: todo_single_schema,
};
