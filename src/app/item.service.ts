import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from './item';


@Injectable()
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
  }

  getItems() {
    return this.items;
  }

  addItem(inputData) {
    this.afs.collection('items').doc(inputData.title).set({ title: inputData.title, isChecked: false });
  }

  checkItem(item) {
    this.afs.collection('items').doc(item.title).update({
      isChecked: !item.isChecked
    });
  }

}
