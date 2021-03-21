import { ResponseModule } from './ResponseModule';

export interface ListResponseModule<T> extends ResponseModule {
  data: T[];
}
