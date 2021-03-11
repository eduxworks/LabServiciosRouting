import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {
  }
  // tslint:disable-next-line:typedef
  onclickMenu(tag){
    if (tag === 'mycards'){
      this.router.navigate(['/mycards']);
    }
    else if (tag === 'table'){
      this.router.navigate(['/table']);
    }
    /*
   else if (tag === 'myportafolio'){
     this.router.navigate(['/myportafolio']);
   }
   else if (tag === 'myform'){
     this.router.navigate(['/myform']);
   }
   */
  }
}
