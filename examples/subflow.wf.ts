const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  let resp = execSubflow("/examples/called.wf.ts", "DATA IN");
  return finish(resp);
}
