import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { GroupsPage } from '../groups/groups';
import { InstantSessionPage } from '../instant-session/instant-session';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = DashboardPage;
  tab2Root = GroupsPage;
  tab3Root = InstantSessionPage;
  tab4Root = SettingsPage;

  constructor() {}
}
