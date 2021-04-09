import { ResponseModule } from './ResponseModule';

export interface SingleResponseModule<T> extends ResponseModule {
  data: T;
}
