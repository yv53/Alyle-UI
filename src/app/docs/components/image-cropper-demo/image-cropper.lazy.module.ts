import { NgModule, Type } from '@angular/core';

import { ImageCropperExample01Component } from './image-cropper-example-01/image-cropper-example-01.component';
import { ImageCropperExample02Component } from './image-cropper-example-02/image-cropper-example-02.component';
import { ImageCropperExample03Component } from './image-cropper-example-03/image-cropper-example-03.component';
import { ImageCropperExample01Module } from './image-cropper-example-01/image-cropper-example-01.module';
import { ImageCropperExample02Module } from './image-cropper-example-02/image-cropper-example-02.module';
import { ImageCropperExample03Module } from './image-cropper-example-03/image-cropper-example-03.module';

const elements = [
  ImageCropperExample01Component,
  ImageCropperExample02Component,
  ImageCropperExample03Component
];

@NgModule({
  imports: [
    ImageCropperExample01Module,
    ImageCropperExample02Module,
    ImageCropperExample03Module
  ],
  entryComponents: elements
})
export class LazyModule {
  static entryComponents: Type<any>[] = elements;
}
