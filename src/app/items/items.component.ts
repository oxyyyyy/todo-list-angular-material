import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { NewItem } from '../new-item';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[];
  inputData: Item = {
    title: '',
    isChecked: false
  };
  isDisabledBtn = true;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  addItem() {
    this.itemService.addItem(this.inputData);
  }

  checkItem(item) {
    this.itemService.checkItem(item);
  }

}
