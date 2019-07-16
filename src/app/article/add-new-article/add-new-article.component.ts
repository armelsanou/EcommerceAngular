import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';


@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css'],
})
export class AddNewArticleComponent implements OnInit, OnDestroy {

  addNewArticleForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              public router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.addNewArticleForm = this.formBuilder.group({
      designation: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stockQuantity: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
      tva: ['', [Validators.required]],
      tauxRemise: ['', [Validators.required]]
    });

    // tslint:disable-next-line:prefer-const
    var body = document.body;
    body.classList.add('addArticle-modal');
  }

  // onFormSubmit method is submit a add new article form.
  onFormSubmit() {
    this.activeModal.close(this.addNewArticleForm.value);
  }

  ngOnDestroy() {
    const body = document.body;
    body.classList.remove('addArticle-modal');
  }

}
