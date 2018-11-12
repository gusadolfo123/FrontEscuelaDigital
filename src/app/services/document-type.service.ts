import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DocumentType } from "../models/document-type";

@Injectable({
  providedIn: "root"
})
export class DocumentTypeService {
  constructor(private http: HttpClient) {}

  getAllDocumentType(): Observable<DocumentType[]> {
    const apiUri = "http://localhost:3000/document_types";
    return this.http.get<DocumentType[]>(apiUri);
  }
}
