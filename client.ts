// for client side hydration

import { hydrate } from "preact";
import App from "./src/app.tsx";

hydrate(<App />, document);
