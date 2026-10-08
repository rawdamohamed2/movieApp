import { createRoot } from "react-dom/client";
import App from "./App/App";
import UserContextProvider from "./Context/Usercontext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
let root = createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </QueryClientProvider>,
);
