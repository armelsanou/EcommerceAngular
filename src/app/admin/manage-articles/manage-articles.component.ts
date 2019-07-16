import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../service/core/core-service.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.css']
})
export class ManageArticlesComponent implements OnInit {
  checkboxes: any;

  articleManageList: any = [
    {
      imageName: "assets/img/user-1.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-2.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-4.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-3.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-5.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-6.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-7.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    },
    {
      imageName: "assets/img/user-8.jpg",
      designation: "Chemise",
      price: "10",
      stockQuantity: 500,
      category: "Chemise",
      description: "lorem ipsum dolor sit amet",
      tva: "20%",
      tauxRemise: "5%"
    }
  ];

  constructor( public coreService: CoreService) { }

  ngOnInit() {
  }

/**
 * selectall method is used to Checked/Unchecked all other checkboxes when one master is checked/Unchecked.
 */
  selectall(source) {
    this.checkboxes = document.getElementsByName('checkboxes');
    for (var i = 0, n = this.checkboxes.length; i < n; i++) {
      this.checkboxes[i].checked = source.target.checked;
    }
  }

/**
 * addNewArticleDialog method is used to open a add new article dialog.
 */
  addNewArticleDialog() {
    this.coreService.addNewArticleDialog().
      then(res => { this.getAddArticlePopupResponse(res)})
      .catch(error => console.log(error));
  }

/**
 * getAddArticlePopupResponse method is used to get a new article dialog response.
 * if response will be get then add new article into article list.
 */
  getAddArticlePopupResponse(response: any) {
    if (response) {
      let addArticle = {
        imageName: "assets/img/user-4.jpg",
        designation: response.designation,
        price: response.price,
        stockQuantity: response.stockQuantity,
        category: response.category,
        description: response.description,
        tva: response.tva,
        tauxRemise: response.tauxRemise,
      }
      this.articleManageList.push(addArticle);
    }
  }

  /**
   * onDelete method is used to open a delete dialog.
   */
  onDelete(i) {
    this.coreService.deleteArticleDialog("Are you sure you want to delete this article permanently?").
      then(res => { this.getDeleteResponse(res, i)})
      .catch(error => console.log(error));
  }

/**
 * getDeleteResponse method is used to delete a article from the article list.
 */
  getDeleteResponse(response, i) {
    if (response === true) {
      this.articleManageList.splice(i, 1);
    }
  }

  /**
   * onEdit method is used to open a edit dialog.
   */
  onEditArticleList(data, index) {
    this.coreService.editArticleList(data).
      then(res => { this.getEditResponse(res, data, index)})
      .catch(error => console.log(error));
  }

  /**
   * getEditResponse method is used to edit a article data.
   */
  getEditResponse(response: any, data, i) {
    if (response) {
      this.articleManageList[i].designation = response.designation,
      this.articleManageList[i].price = response.price,
      this.articleManageList[i].stockQuantity = response.stockQuantity,
      this.articleManageList[i].category = response.category,
      this.articleManageList[i].description = response.description,
      this.articleManageList[i].imageName = response.imageName,
      this.articleManageList[i].tva = response.tva,
      this.articleManageList[i].tauxRemise = response.tauxRemise;
    }
  }

}
