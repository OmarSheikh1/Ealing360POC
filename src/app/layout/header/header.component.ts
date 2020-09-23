import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  user;
  constructor(private router: Router) {}

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem("credentials"));
    this.user = obj;
  }

  logout() {
    localStorage.removeItem("credentials");
    this.router.navigate(['/login']);
  }
}
