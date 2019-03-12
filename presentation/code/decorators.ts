import { Debounce, Memoize, BindAll } from 'lodash-decorators';
import httpService from '../http-service';
 
@BindAll()
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  @Debounce(100)
  save(date) {
    return httpService.post(data);
  }
 
  @Memoize(item => item.id)
  doSomeHeavyProcessing(arg1, arg2) {}
}
