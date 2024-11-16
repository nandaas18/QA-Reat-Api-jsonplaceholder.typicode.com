import expect from "../libs/expect.js";
import { get_single_comment } from "../apis/comments.api.js";
import { comment_single_schema } from "../schemas/comments.schema.js";

describe("COMMENTS API", function () {
  describe("/comments/<ID> - Get Single Comment", function () {
    it("check valid response status and json schema", async function () {
      const res = await get_single_comment(1);

      expect(res.data).to.be.jsonSchema(comment_single_schema);
    });
  });
});
