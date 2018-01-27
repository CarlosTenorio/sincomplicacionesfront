import { Injectable } from '@angular/core';

@Injectable()
export class CookiesService {

  constructor() { }

  /**
   * Storage cookie on the browser with (key, value, expires days)
   */
  setCookie(cname: string, cvalue: any, exdays: number) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /**
   * Get cookie with key
   */
  getCookie(cname: string): any {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  /**
   * Return boolean to know if the cookie exists
   */
  checkCookie(): boolean {
    let user = this.getCookie("username");
    return user != null;
  }

  /**
   * In order to delete a cookie set the expires date to something in the past.
   */
  deleteCookie(cname: string) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

}
