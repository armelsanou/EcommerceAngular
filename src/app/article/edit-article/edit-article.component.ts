import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {

  form: FormGroup;
  data: any;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              public translate: TranslateService) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      designation: [],
      price: [],
      stockQuantity: [],
      category: [],
      description: [],
      imageName: [],
      tva: [],
      tauxRemise: []
    });

    if (this.data) {
      this.form.patchValue({
        designation: this.data.designation,
        price: this.data.price,
        stockQuantity: this.data.stockQuantity,
        category: this.data.category,
        description: this.data.description,
        imageName: this.data.imageName,
        tva: this.data.tva,
        tauxRemise: this.data.tauxRemise
      });
    }

    var body = document.body;
    body.classList.add("management-modal");
  }

// onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
  onFormSubmit() {
    this.activeModal.close(this.form.value);
  }

  ngOnDestroy() {
    var body = document.body;
    body.classList.remove("management-modal");
  }

}
