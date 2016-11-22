import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'listMax'})
export class ListMaxPipe implements PipeTransform {
    transform(list: string[], limit: number): string {
        let result: string = "", numRemaining: number = list.length - limit;

        for (let i=0; i<Math.min(limit, list.length); i++) {
            result += list[i] + ", ";
        }

        // Get rid of last comma
        result = result.slice(0,-2);
        
        result = list.length < limit ? result : result + " + " + numRemaining + " more";
        return result;
    }
}