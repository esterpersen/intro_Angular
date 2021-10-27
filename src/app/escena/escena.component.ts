import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FrasesHistoria } from '../frases-historia.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {
  @Input() frasesPerMostrar: FrasesHistoria[] = [];
  @Input() currentSentence: number = 0;
  @Output() updatedCurrentSentence: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.updatedCurrentSentence.emit(this.currentSentence);
  }

  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
      this.updatedCurrentSentence.emit(this.currentSentence);
    }
  }

  next() {
    if (this.currentSentence < this.frasesPerMostrar.length - 1) {
      this.currentSentence++;
      this.updatedCurrentSentence.emit(this.currentSentence);
    }
  }
}
