"use strict";

// just make sure the method works
describe("IntlTelInput#utilsLoaded()", function() {

  it("works", function() {
    var intlTelInput = new IntlTelInput(document.createElement("input"));
    expect(intlTelInput.utilsLoaded()).toBe(undefined);
  });
});
