import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import LoginComponent & RootComponent
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root.component';



// add LoginComponent,RootComponent in @NgModule
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//@class AppModule
export class AppModule { }
