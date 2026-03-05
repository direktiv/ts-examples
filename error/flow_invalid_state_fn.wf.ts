const flow: FlowDefinition = {
  type: "default",
  timeout: "whatever",
  state: "stateDoesNotExist"
};

function stateFirst(): StateFunction<unknown> {
  returnfinish("done")
}
