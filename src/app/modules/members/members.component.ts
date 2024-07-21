import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members',
  template: '<router-outlet></router-outlet>',
  styles: [
  ],
  standalone: true,
  imports: [RouterModule]
})
export class MembersComponent { }
