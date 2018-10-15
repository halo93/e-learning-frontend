import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-test-select',
    templateUrl: './test-select.component.html',
    styleUrls: ['./test-select.component.css'],
    animations: [
        trigger("openClose", [
            state("open", style({
                height: '160px'
            })),
            state("closed", style({
                height: '0px'
            })),
            transition("open => closed", [
                animate('0.2s'),
            ]),
            transition("closed => open", [
                animate('0.1s'),
            ])
        ])
    ]
})
export class TestSelectComponent implements OnInit {
    @Input() questionCodes: any[];
    @Input() order: number;
    isShowOption: boolean;
    constructor() {
        this.isShowOption = false;
    }

    ngOnInit() {
        console.log(this.questionCodes);
    }

    handleSelect(): void {

    }

    showOption(): void {
        this.isShowOption = !this.isShowOption;
    }
}
