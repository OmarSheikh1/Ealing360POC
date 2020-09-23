import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   * TODO: comment getUsers
   * @description Gets users
   * @author (Siva Sankar)
   * @returns
   */
  getUsers() {
    return this.http.get(`${environment.apiUrl}/People`);
  }

  /**
   * TODO: comment getUserDataById
   * @description Gets user data by id
   * @author (Siva Sankar)
   * @param id
   * @returns
   */
  getUserDataById(id) {
    return this.http.get(`${environment.apiUrl}/People/${id}`);
  }
}
