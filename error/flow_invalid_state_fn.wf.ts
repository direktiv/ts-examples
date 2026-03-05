const flow: FlowDefinition = {
  type: "default",
  state: "stateDoesNotExist"
};

function stateFirst(): StateFunction<unknown> {
  return finish("done")
}
