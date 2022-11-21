const data = {
  hello: "world",
};

const json = JSON.stringify(data, null, 2);

export function onRequest(context) {
  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
