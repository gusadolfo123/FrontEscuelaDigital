import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "../../../models/category";

@Component({
  selector: "app-list-categories",
  templateUrl: "./list-categories.component.html",
  styleUrls: ["./list-categories.component.css"]
})
export class ListCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
