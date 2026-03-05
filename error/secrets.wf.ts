const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  getSecret()
  getSecret(100)
  getSecret("does_not_exist")

  return finish("done")
}