import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
    {path:'', pathMatch:'full', redirectTo:'/customers'},
    {path:'**', pathMatch:'full', redirectTo:'/customers'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRoutingModule {}