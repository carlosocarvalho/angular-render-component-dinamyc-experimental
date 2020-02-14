import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DemandRegistryComponent } from '../demand-registry/demand-registry.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
  <nav class="uk-navbar-container" uk-navbar>
  <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
          <li class="uk-active"><a (click)="togglePermission()" href="javascript:void(0);">Trocar Perfil</a></li>
      </ul>
  </div>
</nav>
    <!-- Seu componente será renderizado aqui -->
  `,
  styles: []
})
export class HomeComponent implements OnInit {


  private permissionUser = false

  private onChangeComponent$ = new BehaviorSubject<any>(null)

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit() {

    this.onChangeComponent$.subscribe(() => {
      this.viewContainerRef.clear()
      /** begin: Rule Component 
       * Regra para renderizar dinamicamente o componente */
      let factory = this.permissionUser ?
        this.componentFactoryResolver.resolveComponentFactory(DashboardComponent)
        : this.componentFactoryResolver.resolveComponentFactory(DemandRegistryComponent)
      this.viewContainerRef.createComponent(factory)
      //end: Rule Component 
    })

  }
  togglePermission() {
    this.permissionUser = !this.permissionUser
    this.onChangeComponent$.next(true)

  }
}
