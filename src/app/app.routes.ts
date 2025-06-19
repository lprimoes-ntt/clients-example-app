import { Routes } from "@angular/router"
import { ExamplesComponent } from "./pages/examples.component"
import { SignalsComponent } from "./pages/signals.component"

export const routes: Routes = [
  {
    path: "examples",
    component: ExamplesComponent,
  },
  {
    path: "signals",
    component: SignalsComponent,
  },
  {
    path: "**",
    redirectTo: "examples",
  },
]
