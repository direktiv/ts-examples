const flow: FlowDefinition = {
  type: "whatever",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  return finish("done")
}
