import { moduleFor, test } from "ember-qunit";

moduleFor(
  "controller:app/agenda/lista",
  "Unit | Controller | app/agenda/lista",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics"]
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
