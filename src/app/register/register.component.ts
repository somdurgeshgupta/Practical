import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public RegisterForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      fname:['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      role_user: [true, Validators.required]
    }) 
  }
  register(){
    this.http.post<any>('http://localhost:3000/registerUserList', this.RegisterForm.value)
    .subscribe(res=>{
      alert('register Success');
      this.RegisterForm.reset();
      this.router.navigate(['login'])
    }, err=>{
      alert('Resistration Failed')
    })
  }
}
