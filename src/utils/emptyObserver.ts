import {Observer} from '../Observer';
export var emptyObserver: Observer<any> = {
  next: null,
  error: null,
  end: null,
};