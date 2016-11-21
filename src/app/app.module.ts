import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AppComponent } from './app';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { GroupsPage } from '../pages/groups/groups';
import { GroupViewPage } from '../pages/group-view/group-view';
import { SessionViewPage } from '../pages/session-view/session-view';
import { SettingsPage } from '../pages/settings/settings';

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
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
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
    SettingsPage
  ],
  providers: []
})
export class AppModule {}
