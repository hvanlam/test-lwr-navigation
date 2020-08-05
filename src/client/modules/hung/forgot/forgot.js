import { LightningElement, api, wire } from 'lwc';
import { NavigationContext, navigate } from 'webruntime/navigation';

export default class Forgot extends LightningElement {

    @api name;

    @wire(NavigationContext)
    navContext;

    nameChange(event) {
        this.name = event.target.value;        
    }

    retrieve() {
        navigate(this.navContext, 'forgotresult?name=' + this.name);
    }
}
