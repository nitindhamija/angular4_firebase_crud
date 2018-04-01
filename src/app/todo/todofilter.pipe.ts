// import { PipeTransform, Pipe } from '@angular/core';
//
// @Pipe({
//     name: 'callback',
//     pure: false
// })
// export class CallbackPipe implements PipeTransform {
//     transform(items: any[], callback: (item: any) => boolean): any {
//         if (!items || !callback) {
//             return items;
//         }
//         return items.filter(item => callback(item));
//     }
// }


// import { Injectable, Pipe, PipeTransform } from '@angular/core';
// 
// @Pipe({
//  name: 'callback'
// })
//
// @Injectable()
// export class CallbackPipe implements PipeTransform {
//  transform(items: any[],  value: string): any[] {
//    if (!items) return [];
//    console.log(items);
//    console.log(value);
//    if(value.indexOf('ALL')>-1)
//    return items;
//    else
//    if(value.indexOf("ACTIVE")>-1)
//    return items.filter(it => it.status == 'pending');
//    else
//    if(value.indexOf("COMPLETE")>-1)
//    return items.filter(it => it.status == 'Completed');
//
//  }
// }
