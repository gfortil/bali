import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { BaliPage } from '../bali/bali';
import { SettingsPage } from '../Settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BaliPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
