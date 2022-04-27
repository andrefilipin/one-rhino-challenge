import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {

  romainToArabic(s: string): Number {
    //define roman sample with values
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    //set default result
    let result = 0;
    if (s === '') return result;
    //convert string to array and get values
    let inputsVal = Array.of(...s).map((e) => roman[e]);
    //calc total
    for (let i = 0; i < inputsVal.length; i++) {
      inputsVal[i] < inputsVal[i + 1]
        ? (result -= inputsVal[i])
        : (result += inputsVal[i]);
    }
    return result;
  }
}
