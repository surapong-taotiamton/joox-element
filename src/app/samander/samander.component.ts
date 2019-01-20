import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-samander',
  templateUrl: './samander.component.html',
  styleUrls: ['./samander.component.css']
})
export class SamanderComponent implements OnInit, AfterViewInit {

  video: Object;
  @ViewChild('mySamander') mySamander: ElementRef;

  constructor() { }

  ngOnInit() {
    this.video = {
      url: 'http://www.joox.com/th/th/single/YqaflYh+WnO0Iz2Mrp2_GA=='
    };
  }
  async ngAfterViewInit() {
    // const targetElement = this.mySamander.nativeElement.querySelector('#__next');
    console.log('############### START DEBUG ####################3333');
    const targetElement = await this.findRecursive(0);
    console.log('Finally found', targetElement);
  }


  async findRecursive(count) {
    const THIS = this;
    console.log('In step find element', THIS.mySamander.nativeElement);
    const targetElement = $(THIS.mySamander.nativeElement).closest('.itemprop');
    console.log('RESULT ', targetElement);

    if (count > 10) {
      return Promise.resolve(null);
    }

    if (targetElement != null ) {
      return Promise.resolve(targetElement);
    } else {
      return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve(THIS.findRecursive(count + 1));
        }, 500);
      });
    }
  }


}


/////////////////
// HELPER CLASS
////////////////

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
