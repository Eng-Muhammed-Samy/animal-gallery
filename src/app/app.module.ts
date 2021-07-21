import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SliderbarComponent } from './home/sliderbar/sliderbar.component';
import { WildAnimalsComponent } from './home/wild-animals/wild-animals.component';
import { WildBirdsComponent } from './home/wild-birds/wild-birds.component';
import { FooterComponent } from './home/footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { CardComponent } from './home/card/card.component';
import { homeService } from './services/home/home.service';
import { TestComponent } from './home/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PosterComponent } from './home/poster/poster.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactMeComponent,
    SliderbarComponent,
    WildAnimalsComponent,
    WildBirdsComponent,
    FooterComponent,
    SummaryPipe,
    CardComponent,
    TestComponent,
    PosterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [homeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
