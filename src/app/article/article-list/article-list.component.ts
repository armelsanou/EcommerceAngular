import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  posts: object[] = [{
    image: 'assets/img/project-1.jpg',
    title: 'Things that make you love and hate.',
    price: '20',
  }, {
    image: 'assets/img/project-2.jpg',
    title: 'How can ease your pain.',
    price: '25'
  }, {
    image: 'assets/img/project-3.jpg',
    title: 'Everything you need to know about.',
    price: '30'
  }, {
    image: 'assets/img/project-4.jpg',
    title: 'How can increase your profit.',
    price: '20'
  }, {
    image: 'assets/img/project-5.jpg',
    title: 'Learn all about from this politician.',
    price: '50'
  }, {
    image: 'assets/img/project-6.jpg',
    title: 'Understand before you regret.',
    price: '20'
  }];

  constructor() {
  }

  ngOnInit() {

  }
}
