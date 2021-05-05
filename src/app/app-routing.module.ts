import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    
    { path: 'about', component: AboutComponent },  
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'post', component: PostComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
