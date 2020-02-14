import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand-registry',
  template: `
      <div class="uk-text-center" uk-grid>
        <div class="uk-width-auto">
        <div class="uk-panel">
        <img class="uk-align-left uk-margin-remove-adjacent" src="https://getuikit.com/docs/images/light.jpg" width="225" height="150" alt="Example image">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
        </div>
        
    </div>
  
  `,
  styles: []
})
export class DemandRegistryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
