import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  imports: [],
  templateUrl: './pagination-buttons.html',
  styleUrl: './pagination-buttons.css',
})
export class PaginationButtons implements OnInit {

  @Input({ required: true }) nbrButtons!: number
  @Input() buttonDisabledNbr: number = 0 // numéro du bouton à désactiver
  @Output() pagedChanged = new EventEmitter<number>

  // si nbrButtons est égal à 4, paginationArray sera égale à [1,2,3,4]

  paginationArray?: number[]

  ngOnInit(): void {
    this.paginationArray = Array.from({ length: this.nbrButtons }, (_, idx) => idx + 1)
  }

  handleClick(pageNbr: number): void {
    this.pagedChanged.emit(pageNbr)
  }

}
