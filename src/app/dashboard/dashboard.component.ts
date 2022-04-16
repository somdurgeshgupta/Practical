import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlluserdataService } from '../alluserdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:any=[]

  constructor(private UserService: AlluserdataService, private router: Router) { }


  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res=>{
      console.log(res,"res")
      this.user=res;
      console.log(this.user,"this user")
    })

    }
    logout(){
      this.router.navigate(['login'])
    }
}
