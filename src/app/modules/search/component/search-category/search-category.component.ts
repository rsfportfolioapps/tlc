import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { SearchCategory } from '../../models/search.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss']
})
export class SearchCategoryComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;

  @Input()
  public category: SearchCategory;

  @Output()
  public categoryEmitter = new EventEmitter<number>();

  public isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public select(): void {
    this.isSelected = !this.isSelected;
  }

  // public selectCategory(event: any) {
  //   const tags = document.querySelectorAll('.category');
  //   tags.forEach(el => {
  //     el.classList.remove('selected');
  //   });

  //   setTimeout(() => {
  //     event.classList.add('selected');
  //     this.categoryEmitter.emit(this.category.id);
  //   }, 100);
  // }
}
