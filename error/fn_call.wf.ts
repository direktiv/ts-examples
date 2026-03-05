const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

test()

function stateFirst(): StateFunction<unknown> {
    finish("done")
}

function test() {

}