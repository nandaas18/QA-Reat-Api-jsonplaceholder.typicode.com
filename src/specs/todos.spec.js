import expect from "../libs/expect.js";
import { get_single_todo, get_all_todo } from "../apis/todos.api.js";
import {
  todo_single_schema,
  todo_all_schema,
} from "../schemas/todos.schema.js";

describe("TODOS API", function () {
  describe("/todos/<ID> - Get Single Todo", function () {
    it("check valid response status code", async function () {
      const res = await get_single_todo(1);

      expect(res.status).to.equal(200);
    });

    it("check valid response json schema", async function () {
      const res = await get_single_todo(1);

      expect(res.data).to.be.jsonSchema(todo_single_schema);
    });

    it("get nonexistent todo with ID 0", async function () {
      try {
        await get_single_todo(0);
        throw Error;
      } catch (err) {
        expect(err?.response?.status).to.equal(404);
      }
    });
  });
});

describe("/todos - Get All Todo", function () {
  it("check valid response code", async function () {
    const res = await get_all_todo();

    expect(res.status).to.equal(200);
  });

  it("check valid response json schema", async function () {
    const res = await get_all_todo();

    expect(res.data).to.be.jsonSchema(todo_all_schema);
  });
});
