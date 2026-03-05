const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
    test()
}

function stateSecond(): StateFunction<unknown> {
    test()
}

function test() {
    return transition(stateSecond, "")
}