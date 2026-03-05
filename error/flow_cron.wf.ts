const flow: FlowDefinition = {
  type: "default",
  timeout: "whatever",
  state: "stateFirst",
  cron: "this is not cron"
};

function stateFirst(): StateFunction<unknown> {
    finish("done")
}
