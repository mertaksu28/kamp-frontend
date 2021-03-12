import { Product } from "./product";
import { ResponseModule } from "./ResponseModule";

export interface ProductResponseModule extends ResponseModule {
    data:Product[]

}