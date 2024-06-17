import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) { }
  register(form: any): void {
    const email = form.value.userEmail;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    if (form.valid && password == confirmPassword) {

      // Create a new user object
      const newUser = { userEmail: email, password: password };

      // Retrieve the existing users array from local storage, or create a new one if it doesn't exist
      const storedUsers = localStorage.getItem('users');
      const users: any[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Add the new user to the users array
      users.push(newUser);

      // Store the updated users array back to local storage
      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigate(['/login']);
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
