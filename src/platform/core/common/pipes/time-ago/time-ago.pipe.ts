import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TdTimeAgoPipe implements PipeTransform {
  private transformText(diff: number, transformHelper : (amount : number, unit : string ) => string ): string {
    if (diff < 60) {
      return transformHelper(diff || 1, diff < 2 ? "second" : "seconds");      
    }
    // Minutes
    diff /= 60;
    if (diff < 60) {
      return transformHelper(diff || 1, diff < 2 ? "minute" : "minutes");
    }

    // Hours
    diff /= 60;
    if (diff < 24) {
      return transformHelper(diff || 1, diff < 2 ? "hour" : "hours");   
    }
    // Days
    diff /= 24;
    if (diff < 30) {
      return transformHelper(diff || 1, diff < 2 ? "day" : "days");         
    }
    
    // Months
    diff /= 30;
    if (diff < 12) {
      return transformHelper(diff || 1, diff < 2 ? "month" : "months"); 
    }

    // Years
    diff /= 12;    
    return transformHelper(diff || 1, diff < 2 ? "year" : "years"); 
  }

  transform(time: any, reference: any): string {
    // Convert time to date object if not already
    time = new Date(time);
    let ref: Date = new Date(reference);

    // If not a valid timestamp, return 'Invalid Date'
    if (!time.getTime()) {
      return 'Invalid Date';
    }

    // For unit testing, we need to be able to declare a static start time
    // for calculations, or else speed of tests can bork.
    let startTime: number = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
    let diff: number = Math.floor((startTime - time.getTime()) / 1000);
    
    return this.transformText(Math.abs(diff),
              diff <= -1 ? 
                (amount : number, unit : string ) => `in ${Math.floor(amount)} ${unit}` : 
                (amount : number, unit : string ) => `${Math.floor(amount)} ${unit} ago`);
  }
}
