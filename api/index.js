import { createServer } from "http";
import app from "../dist/index.js";

const server = createServer(app);
server.listen(3000);

export default app;
