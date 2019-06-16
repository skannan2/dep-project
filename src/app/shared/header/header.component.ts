import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserSettingComponent } from '../user-setting/user-setting.component';
import 'rxjs/add/operator/pairwise';
import { filter, debounceTime } from 'rxjs/operators';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSettings = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private service: ApiService) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((data: any) => {
      if (data.url === '/login') {
        this.showSettings = false;
      } else {
        this.showSettings = true;
      }
    })
  }

  ngOnInit() {

  }

  changeSetting(val) {

    console.log(val);
    if (val === 'signOut') {
      this.router.navigateByUrl('/').then(e => {
        if (e) {
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
      });
    } else {
      this.service.getUserDetails().subscribe(data => {
        const dialogRef = this.dialog.open(UserSettingComponent, {
          data
        });


        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            console.log(result)
            this.service.updateUserDetails(result).subscribe(res => { console.log(res) })
          }
        });

      });

    }

  }

}
