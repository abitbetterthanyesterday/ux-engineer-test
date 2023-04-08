import "./App.css";

import { AppProvider } from "./contexts/AppContext";
import { Router } from "./pages/router";

export default function App(): JSX.Element {
   

   return (
      <AppProvider>
         <Router/>
</AppProvider>
   )




}
