import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../users/users.service";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"]
})
export class UserViewComponent implements OnInit {
  loader = true;
  userData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.activatedRoute.queryParams.subscribe(params => {
        let data = params;
        console.log(data);
        this.getUserData(data.id);
      });
    } else {
      this.router.navigate(["/login"]);
    }
  }

  /**
   * TODO: comment getUserData
   * @description Gets user data
   * @author (Siva Sankar)
   * @param id
   */
  getUserData(id) {
    this.service.getUserDataById(id).subscribe(resp => {
      console.log(resp);
      this.userData = resp;
      this.loader = false;
    });
  }
}
