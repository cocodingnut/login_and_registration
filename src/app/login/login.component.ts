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
      // 有@和. 顶级域名部分匹配两个或更多字母，没有数字
      const userEmail = loginForm.value.userEmail;
      // 包含至少一个数字 (0-9)，至少一个特殊字符（!@#$%^&* 等），至少一个字母（可以是大写或小写字母）
      // 总长度至少为 8 个字符 
      const password = loginForm.value.password;

      // Retrieve users array from localStorage
      const storedUsers = localStorage.getItem('users');
      const users: any[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if there's a user with matching userEmail and password
      const loggedInUser = users.find(user => user.userEmail === userEmail && user.password === password);

      if (loggedInUser) {
        // Login successful, you can redirect 
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
