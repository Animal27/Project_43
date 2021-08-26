class Security{
    constructor(){
     this.button3 = createInput('check')
    }

    display(){
        this.button3.position(200,200);
this.button3.mousePressed(() =>{
if(system.authenticate(accessCode3,this.accessCode3.value())){
    this.button3.hide();
    this.accessCode3.hide();
}
 });
    }


}

