import Controller from "@ember/controller";
import { defineProperty } from "@ember/object";
import { alias } from "@ember/object/computed";

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    defineProperty(
      this,
      "weirdBackingAlias",
      alias("something.really.strange")
    );
  }
}
