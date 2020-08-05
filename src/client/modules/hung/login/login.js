import { LightningElement, api, wire } from 'lwc';
import { NavigationContext, navigate } from 'webruntime/navigation';

export default class Login extends LightningElement {

    @wire(NavigationContext)
    navContext;

    name;

    team = [
        'andrew.huffman',
        'baileyjones',
        'brandon.kerr',
        'hgawor',
        'hvanlam',
        'matt.buland',    
        'xiaoxu.gu'
    ];
    
    nameChange(event) {
        this.name = event.target.value;        
    }

    login() {        
        if (this.team.find(member => member === this.name)) {
            navigate(this.navContext, '/login/loginsuccess/' + this.name);
            //navigate(this.navContext, {id: 'loginresult', state: {success: true}});
        } else {
            //navigate(this.navContext, {id: 'loginresult', attribute: {name: this.name}, state: {success: false}});
            navigate(this.navContext, '/login/loginfailure/' + this.name);            
        }
    }

}
