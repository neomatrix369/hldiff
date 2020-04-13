import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../users/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../users/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, { width: '400px' });
  }

  logout() {
    this.authenticationService.logout();
  }
}
