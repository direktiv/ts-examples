const flow: FlowDefinition = {
  type: "cron",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  return finish("done");
}
