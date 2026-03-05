const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {


  fetchSync("https://v2.jokeapi.dev/joke/Any?type=single")


// https://v2.jokeapi.dev/joke/Any?type=single

  return finish({ data: "hello world" })  
}
