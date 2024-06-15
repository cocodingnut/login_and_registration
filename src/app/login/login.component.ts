import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }
  login(loginForm: any): void {
    if (loginForm.valid) {
      const userEmail = loginForm.value.userEmail;
      const password = loginForm.value.password;

      // Retrieve users array from localStorage
      const storedUsers = localStorage.getItem('users');
      const users: any[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if there's a user with matching userEmail and password
      const loggedInUser = users.find(user => user.userEmail === userEmail && user.password === password);

      if (loggedInUser) {
        // Login successful, you can redirect or perform other actions
        console.log('Login successful!', loggedInUser);
        this.router.navigate(['/home']);
      } else {
        // Login failed, show error message or handle accordingly
        console.log('Invalid credentials. Please try again.');
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
