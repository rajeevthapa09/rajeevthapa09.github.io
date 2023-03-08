
 
 export const calculator = {
    read: function(c,d){
        this.a=c;
        this.b=d;
    },
    sum: function(){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    }
}