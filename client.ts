// for client side hydration

import { hydrateRoot } from "preact-dom/client";
import App from "./src/app.tsx";

hydrateRoot(document, <App />);
