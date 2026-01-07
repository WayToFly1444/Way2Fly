import { Routes } from "@angular/router";
import { AboutComponent } from "../about-component/about-component";
import { ContactComponent } from "../contact-component/contact-component";
import { ServicesComponent } from "../services-component/services-component";
import { PrivacyComponent } from "../privacy-component/privacy-component";

export const routes: Routes = [
    
    {path: 'about', component: AboutComponent },
    {path:'contact', component: ContactComponent },
    {path:'services', component: ServicesComponent},
    {path:'privacy-policy', component: PrivacyComponent}
    
];