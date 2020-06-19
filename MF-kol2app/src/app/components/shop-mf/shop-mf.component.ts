import { Component, OnInit } from '@angular/core';
import { MFDataService } from './../../services/mf-data.service';
@Component({
  selector: 'app-shop-mf',
  templateUrl: './shop-mf.component.html',
  styleUrls: ['./shop-mf.component.css'],
})
export class ShopMFComponent implements OnInit {
  constructor(private service: MFDataService) {}
  public items$: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((response) => {
      this.items$ = response;
    });
  }
}
