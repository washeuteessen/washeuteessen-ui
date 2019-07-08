import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private data = {
    chefkoch: {
      logo: 'https://www.appgefahren.de/wp-content/uploads/2018/07/Chefkoch-Icon-300x300.jpg',
      name: 'Chefkoch'
    },
    eatsmarter: {
      logo: 'data:image/png;base64,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',
      name: 'EatSmarter'
    },
    essenundtrinken: {
      logo: 'https://yt3.ggpht.com/a/AGF-l79vW5xcZM6fOmGE1_fVgNT-Ppu0k5aDEoeXUg=s900-mo-c-c0xffffffff-rj-k-no',
      name: 'Essen & Trinken'
    },
    lecker: {
      logo: 'https://www.petrella-foodservice.de/files/petrella-foodservice/news/news-gewinnspiel-rezeptwettbewerb-lecker-de.png',
      name: 'Lecker.de'
    }
  };

  constructor() {
  }

  getLogo(source: string) {
    if (this.data[source]) {
      return this.data[source].logo;
    } else {
      return '';
    }
  }

  getName(source: string) {
    if (this.data[source]) {
      return this.data[source].name;
    } else {
      return '';
    }
  }


}
