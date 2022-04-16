import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/registerUserList")
    .subscribe(res=>{
      const user = res.find((cred: any)=>{
        return cred.email === this.loginForm.value.email && cred.password === this.loginForm.value.password
      });
      if(user){
        alert('login Success');
        this.loginForm.reset()
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found")
      }
    },err=>{
      alert('something went wrong');
    })
  }

}
