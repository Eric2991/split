import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AppComponent } from './app';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { GroupsPage } from '../pages/groups/groups';
import { GroupViewPage } from '../pages/group-view/group-view';
import { SessionViewPage } from '../pages/session-view/session-view';
import { InstantSessionPage } from '../pages/instant-session/instant-session';
import { QuickAddPage } from '../pages/quick-add/quick-add';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';

import { ListMaxPipe } from './pipes/listMax.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListMaxPipe,
    TabsPage,
    DashboardPage,
    LoginPage,
    GroupsPage,
    GroupViewPage,
    SessionViewPage,
    InstantSessionPage,
    QuickAddPage,
    SettingsPage,
    AccountPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    TabsPage,
    DashboardPage,
    LoginPage,
    GroupsPage,
    GroupViewPage,
    SessionViewPage,
    InstantSessionPage,
    QuickAddPage,
    SettingsPage,
    AccountPage
  ],
  providers: []
})
export class AppModule {}
