import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { UsersComponent } from "./users/users.component";
import { UserViewComponent } from "./user-view/user-view.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "users-list",
        pathMatch: "full"
      },
      {
        path: "users-list",
        component: UsersComponent
      },
      {
        path: "user-details",
        component: UserViewComponent
      },
      {
        path: "**",
        redirectTo: "users-list",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
