import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  private usersData;
  private loader = true;
  constructor(
    private service: UsersService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.getUsers();
    } else {
      this.router.navigate(["/login"]);
    }
  }

  /**
   * TODO: comment getUsers
   * @description Gets users
   * @author (Siva Sankar)
   */
  getUsers() {
    this.service.getUsers().subscribe(resp => {
      // console.log(resp["value"]);
      this.usersData = resp["value"];
      this.loader = false;
    });
  }

  /**
   * TODO: comment showUserDetails
   * @description Shows user details
   * @author (Siva Sankar)
   * @param obj
   */
  showUserDetails(obj) {
    console.log(obj);
    this.router.navigate(["/layout/user-details"], {
      queryParams: { id: obj.UserName }
    });
  }
}
