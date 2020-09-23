import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  public loader = false;
  public nameMinLength = 2;
  public nameMaxLength = 15;
  public pwdMinLength = 6;
  public pwdMaxLength = 15;

  public reqMsg = "This is a required field";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formValidations();
    if (this.authService.isLogged()) {
      this.router.navigate(["/layout/users-list"]);
    } else {
      return true;
    }
  }

  /**
   * TODO: comment formValidations
   * @description Forms validations
   * @author (Siva Sankar)
   */
  formValidations() {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(this.nameMinLength),
          Validators.maxLength(this.nameMaxLength)
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(this.pwdMinLength),
          Validators.maxLength(this.pwdMaxLength)
        ])
      ]
    });
  }

  /**
   * TODO: comment frmCtrls
   * @description Gets frm ctrls
   */
  get frmCtrls() {
    return this.loginForm.controls;
  }

  /**
   * TODO: comment onSubmit
   * @description Determines whether submit on
   * @author (Siva Sankar)
   */
  onSubmit() {
    if (this.loginForm.valid) {
      this.loader = true;
      if (
        this.loginForm.value &&
        Object.keys(this.loginForm.value).length > 1
      ) {
        localStorage.setItem(
          "credentials",
          JSON.stringify(this.loginForm.value)
        );
        setTimeout(() => {
          this.loader = false;
          this.router.navigate(["/layout/users-list"]);
        }, 5000);
      }
    }
  }
}
