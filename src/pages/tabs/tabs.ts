import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { GroupsPage } from '../groups/groups';
import { SessionViewPage } from '../session-view/session-view';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = DashboardPage;
  tab2Root = GroupsPage;
  tab3Root = SessionViewPage;
  tab4Root = SettingsPage;

  constructor() {}
}
