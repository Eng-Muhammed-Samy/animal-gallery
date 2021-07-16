import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() description: string = '';

  @Output('delete') addCard = new EventEmitter();
  constructor() {}

  deleteCard() {
    this.addCard.emit();
  }
  ngOnInit(): void {}
}
