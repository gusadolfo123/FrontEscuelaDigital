import { Course } from "./course";

export interface Teacher {
  id?: string;
  Description?: string;
  Position?: string;
  user_id?: string;
  courses?: Course[]
}
