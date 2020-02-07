import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://rpsconsultingeswaribala1995.okta.com/oauth2/default',
  redirectUri: window.location.origin,
  clientId: '0oa2402uoXYwG2mvh4x6'
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user=new User("","");
   //service dependency injection
  constructor(private loginService:LoginService,
              private router:Router,private authService:AuthService,private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  ngOnInit() {
  }

  ologin(event) {
    //event.preventDefault();
    this.oauthService.initImplicitFlow();
    this.router.navigate(["http://localhost:6060/Home/"]);

  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
  login(event)
  {
    event.preventDefault();
    console.log(this.user);

    this.loginService.checkUserExistence(this.user).subscribe(response=>{
      console.log(response);
      this.newUser();
      if(response.email!=null)
        this.authService.token=response.email;
      if(this.authService.isLoggedIn)
         this.router.navigate(["/Home"]);
      else
        this.router.navigate(["/Login"]);
    })
  }


  newUser() {
    this.user = new User('','');
  }
}
