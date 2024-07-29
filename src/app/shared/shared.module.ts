import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

const modules = [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
]

const pipes = [
    TranslocoPipe
]

@NgModule({
    imports: [
        ...modules,
        ...pipes
    ],
    exports: [
        ...modules,
        ...pipes
    ]
})
export class SharedModule {
}