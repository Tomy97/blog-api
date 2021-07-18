import { PostModule } from './Pages/post/post.module';
import { AlbumesModule } from './Pages/albumes/albumes.module';
import { UsuariosModule } from './Pages/usuarios/usuarios.module';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './shared/shared.module'
import { TodosModule } from './Pages/todos/todos.module';
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
    SharedModule,
    UsuariosModule,
    TodosModule,
    AlbumesModule,
    PostModule
  ],
  exports: [MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
