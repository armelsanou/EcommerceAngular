import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNewArticleComponent } from 'src/app/article/add-new-article/add-new-article.component';
import { DeleteArticleComponent } from 'src/app/article/delete-article/delete-article.component';
import { EditArticleComponent } from 'src/app/article/edit-article/edit-article.component';

@Injectable({
providedIn: 'root'
})

export class CoreService {

public rtlShowStatus: boolean = false;

constructor( private http: HttpClient,
             private modalService: NgbModal ) { }

/**
 * getCourses method is used to get the courses data from json file.
 */
getCourses() {
return this.http.get('assets/data/courses.json').map(response => response);
}

/**
 * addNewArticleDialog function is used to open Add Dialog Component.
 */
addNewArticleDialog() {
    const modalRef = this.modalService.open(AddNewArticleComponent);
    return modalRef.result;
}

/**
 * deleteArticleDialog function is used to open Delete Dialog Component.
 */
deleteArticleDialog(titleMessage) {
const modalRef = this.modalService.open(DeleteArticleComponent);
modalRef.componentInstance.titleMessage = titleMessage;
return modalRef.result;
}

/**
 * editList function is used to open Edit Dialog Component.
 */
editArticleList(data) {
  const modalRef = this.modalService.open(EditArticleComponent);
  modalRef.componentInstance.data = data;
  return modalRef.result;
}

}
