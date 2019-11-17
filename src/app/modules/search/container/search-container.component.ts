import { Component, OnInit } from '@angular/core';
import { SearchCategory, People } from '../models/search.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  public assetImgPath: string = environment.assetImgPath;
  
  public searchCategory: SearchCategory[] = [
    {
      id: 1,
      name: 'Learnings',
      icon: 'learning_search.svg'
    },
    {
      id: 2,
      name: 'Processes',
      icon: 'processess_orange.svg'
    },
    {
      id: 3,
      name: 'Content',
      icon: 'content_discussions_search.svg'
    },
    {
      id: 4,
      name: 'Intelligent people',
      icon: 'content_discussions_search.svg'
    }
  ];
  public people: People[] = [
    {
      icon: 'ci-1-2x.png',
      name: 'Francis Paramore'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'TImika Morris'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Wen Rochin'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Socorro Quinton'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Junnie Furnis'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Lorinda Rothchild'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'TImika Ferrer'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Wen Samieniego'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Tilda Ali'
    },
    {
      icon: 'ci-1-2x.png',
      name: 'Domonique Constante'
    }
  ];
  public selectedId: number = 0;

  constructor() { }

  ngOnInit(): void { }


}
