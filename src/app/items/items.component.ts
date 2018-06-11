import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[];
  inputData: Item = {
    id: 0,
    title: '',
    isChecked: false
  };
  isDisabledBtn = true;
  showCard = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.showCard = true;
    });
  }

  toggleBtn() {
    if (this.inputData.title === '') {
      this.isDisabledBtn = true;
    } else {
      this.isDisabledBtn = false;
    }
  }

  addItem() {
    this.itemService.addItem(this.inputData);
    this.inputData.title = '';
    this.isDisabledBtn = true;
  }

  checkItem(item) {
    this.itemService.checkItem(item);
  }

  // orderItems() {
  //   this.itemService.orderItems();
  // }

}
