import { Component, OnInit, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-transselect',
  templateUrl: './transselect.component.html',
  styleUrls: ['./transselect.component.css'],

  host: {
    "(document:click)": "outClick($event)"
  }
})
export class TransselectComponent implements OnInit {
  public toggleSelect: boolean;
  public selectLable: string;
  public selectedItem: string;
  public selectedImg: any;
  private dataList: any[] = [
    {
      value: "ENG",
      img: "assets/images/united-states.png", language: "en"
    },
    {
      value: "FRN",
      img: "assets/images/flag-french.png", language: "fr"
    }
  ];
  public unimg: boolean;
  @Input() label: string;
  @Input() data: any;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef, private translate: TranslateService) {
    this.toggleSelect = false;
    this.selectedItem = "ENG";
    this.unimg = true;

    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.selectLable = this.label;
  }


  private outClick($event: Event): void {
    let classList = $event.target['classList'][0];
    if (classList !== 'select-button' && classList !== 'text' && classList !== 'label' && classList !== 'caret') {
      this.toggleSelect = false;

    }
  };

  public toggleSelectBox($event: any): void {
    this.toggleSelect = !this.toggleSelect;
  };

  public selectedValue(value) {
    this.selectedItem = value.value;
    this.selectedImg = value.img;
    this.toggleSelect = false;
    this.selected.emit(value);
    this.unimg = false;
  }
}
