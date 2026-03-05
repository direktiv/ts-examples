const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
    test()

    return transition(stateSecond, "")
}

function stateSecond(): StateFunction<unknown> {
    return finish("done")
}

function test() {
    return transition(stateSecond, "")
}