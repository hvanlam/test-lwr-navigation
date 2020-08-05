import { LightningElement, api } from 'lwc';

export default class ForgotResult extends LightningElement {

    @api name;

    @api result;

    team = [
        'andrew.huffman',
        'baileyjones',
        'brandon.kerr',
        'hgawor',
        'hvanlam',
        'matt.buland',    
        'xiaoxu.gu'
    ];

    connectedCallback() {        
        this.name = new URL(window.location.href).searchParams.get('name');   
        this.result = this.team.find(member => member.includes(this.name));
        if (!this.result) {
            this.result = "Not Found";
        }      
    }

}
