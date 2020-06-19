import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item-mf',
  templateUrl: './shop-item-mf.component.html',
  styleUrls: ['./shop-item-mf.component.css'],
})
export class ShopItemMFComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;

  constructor() {}

  ngOnInit(): void {}
}
