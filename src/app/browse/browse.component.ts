import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  type: String;
  gender: String;
  category: String;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
        this.gender = params['gender'];
        this.category = params['category'];
      }
    );
  }

  ngOnDestroy(): void {
    this.type = new String();
    this.gender = new String();
    this.category = new String();
  }

}
