const flow: FlowDefinition = {
  type: "cron",
  timeout: "whatever",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
    return finish("done")
}
