import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-langtranslate',
  templateUrl: './langtranslate.component.html',
  styleUrls: ['./langtranslate.component.css']
})
export class LangtranslateComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
