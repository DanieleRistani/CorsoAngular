import { Routes } from '@angular/router';
import { BuildingComponent } from './SharedComponents/building/building.component';
import { FormTemplateVariableComponent } from './SharedComponents/form-template-variable/form-template-variable.component';
import { CreateDirectiveComponent } from './SharedComponents/create-directive/create-directive.component';
import { ServiceUserJsonComponent } from './SharedComponents/service-user-json/service-user-json.component';
import { DetailsUserComponent } from './SharedComponents/details-user/details-user.component';
import { NotFoundComponent } from './SharedComponents/not-found/not-found.component';
import { OnlyAuthComponent } from './SharedComponents/only-auth/only-auth.component';
import { AdminGuard } from './auth/admin.guard';
export const routes: Routes = [
    // redirect in hompage
    {path:"", pathMatch:"full" , redirectTo:"/building"},
    {path:"building",component:BuildingComponent},
    {path:"viewChild",component:FormTemplateVariableComponent},
    {path:"createDirective", component:CreateDirectiveComponent},
    {path:"serviceUserJson", component:ServiceUserJsonComponent,children:[{path:":id", component:DetailsUserComponent}]},
    {path:"auth",canActivate:[AdminGuard], component:OnlyAuthComponent,},
    
    
    {path:"notFound",component:NotFoundComponent},


    //error in caso di path non trovato
    {path:"**",redirectTo:"/notFound"}
];
