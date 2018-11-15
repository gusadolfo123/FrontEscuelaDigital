import { Student } from "./student";

export interface Course {
  id?: string;
  Title?: string;
  UrlImage?: string;
  Description?: string;
  teacher_id?: string;
  created_at?: string;
  students?: Student[];
  cnt?: number
}
