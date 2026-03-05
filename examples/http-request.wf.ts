const flow: FlowDefinition = {
  type: "default",
  timeout: "PT30S",
  state: "stateFirst",
};

function stateFirst(): StateFunction<unknown> {
  const r = fetchSync("https://v2.jokeapi.dev/joke/Any?type=single");

  const json = JSON.stringify(r);
  log(json);

  // access headers
  log(r["headers"]["Content-Length"]);

  // access body
  log(r.json()["joke"]);
  log("This", "is", "the", "text", r.text());

  return finish({ joke: r.json()["joke"] });
}
