import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutuswithuid',
  templateUrl: './aboutuswithuid.component.html',
  styleUrls: ['./aboutuswithuid.component.css']
})
export class AboutuswithuidComponent implements OnInit {
  uid:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.router.snapshot.params['uid'];
  }

}
