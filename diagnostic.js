import app from "./src/worker-vless.js";

export default {
  async fetch(request, env, ctx) {
    if (new URL(request.url).pathname === "/health") {
      return new Response("DIAGNOSTIC OK");
    }
    try {
      return await app.fetch(request, env, ctx);
    } catch (error) {
      console.error(error);
      return new Response("ERROR: " + String(error), { status: 500 });
    }
  }
};
