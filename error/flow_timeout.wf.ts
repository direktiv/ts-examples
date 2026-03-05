const flow: FlowDefinition = {
  type: "default",
  timeout: "whatever",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  return finish("done")
}
