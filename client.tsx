// for client side hydration

import { hydrate } from "preact";
import App from "./src/components/app.tsx";

hydrate(<App />, document);
