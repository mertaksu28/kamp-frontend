import { Category } from "./category";
import { ResponseModule } from "./ResponseModule";

export interface CategoryResponseModel extends ResponseModule{
    data:Category[]
}