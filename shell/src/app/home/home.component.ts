import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(private injector: Injector,
    private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  async ngAfterViewInit()
  {
    const version = document.getElementById('version');
    const useless = await import('useless-lib');

    if(version) 
      version.innerText = useless.version;

    loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'movies',
        exposedModule: './Shared',
      })
        .then(m => {
          return m.TestComponent;
        })
        .then(comp => {
          const factory = this.resolver.resolveComponentFactory(comp);
          this.viewContainer.createComponent(factory, undefined, this.injector);
        });
  }
}