import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit, OnDestroy {

  titleMessage: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    var body = document.body;
    body.classList.add('contact-modal');
  }

  ngOnDestroy() {
    var body = document.body;
    body.classList.remove("contact-modal");
  }

}
