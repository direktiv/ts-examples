const flow: FlowDefinition = {
  type: "whatever",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
    finish("done")
}
