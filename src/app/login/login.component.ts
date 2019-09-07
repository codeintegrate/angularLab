import {Component, OnInit} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public isRegistered = false;
  public color = 'red';
  public message = 'You are not registered !';
  public user: User[] = [
    {username: 'Girish', password: 'gir123'},
    {username: 'Gayatri', password: 'nun123'},
    {username: 'Amisha', password: 'dobi123'},
    {username: 'Prachit', password: 'mulgi'},
  ];
  // prevents default refreshing of the page...
  doNotRefresh(event: Event) {
    event.preventDefault();
    return false;
  }
  showCredentials(username: string, password: string) {
    console.log('Username: ', username, 'Password: ', password);
    this.username = username;
    this.password = password;
    this.user.forEach(u => {
      if (u.username === username && u.password === password) {
        this.color = '#33cc00';
        this.message = 'Login successful';
      }
    });
    document.getElementById('result').innerHTML = this.message;
    document.getElementById('result').style.backgroundColor = this.color;
    document.getElementById('result').style.display = 'block';
    this.color = 'red';
    this.message = 'You are not registered';
  }

  constructor() {}
  ngOnInit() {}
}
