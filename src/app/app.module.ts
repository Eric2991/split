import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AppComponent } from './app';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { GroupsPage } from '../pages/groups/groups';
import { GroupViewPage } from '../pages/group-view/group-view';
import { SessionViewPage } from '../pages/session-view/session-view';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    LoginPage,
    GroupsPage,
    GroupViewPage,
    SessionViewPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    DashboardPage,
    LoginPage,
    GroupsPage,
    GroupViewPage,
    SessionViewPage
  ],
  providers: []
})
export class AppModule {}
