class game24Model{
    constructor(simpleformula="Enter Your Solution:)",result=" ") {
        this.observer=[]
        this.simpleformula=simpleformula
        this.formulastack=[]
        this.usedCard=[]
        this.result=result
        this.complexformula=""
        this.cardFlag=false
        this.lefttime=""
        this.settime=120000
    }

    addCardtoFormula(x){
        //console.log("used Card",this.usedCard)
        if(this.cardFlag===true){
            if(this.usedCard[this.usedCard.length-1]!==x){
               this.delete()
            }
        }
        if(this.simpleformula==="Enter Your Solution:)"){this.simpleformula=""}
        var card
        switch (x[0]) {
            case "A":
                card="1";
                break;
            case "0":
                card="10";
                break;
            case "J":
                card="11";
                break;
            case "Q":
                card="12";
                break;
            case "K":
                card="13";
                break;
            default:
                card=x[0];
        }
        if(this.usedCard.indexOf(x)===-1){
            this.formulastack=[...this.formulastack,card]
            this.simpleformula=this.formulastack.join("")
            this.cardFlag=true
            this.usedCard=[...this.usedCard,x]
        }else{
            console.log("Illegal Action: Card Already Used")
        }
    }

    addOperatortoFormula(x){
        this.formulastack=[...this.formulastack,x]
        this.simpleformula=this.formulastack.join("")
        this.cardFlag=false
    }

    ac(){
        this.usedCard=[]
        this.simpleformula="Enter Your Solution:)"
        this.complexformula=""
        this.result=" "
        this.formulastack=[]
        this.cardFlag=false
    }

    delete(){
        if(this.formulastack.length!==0){
            var temp1
            var temp2
            temp1=this.formulastack.pop()
            switch (temp1){
                case "+":
                case "-":
                case "*":
                case "/":
                case "(":
                case ")":
                    this.cardFlag=true;
                    break;
                default:
                    temp2=this.usedCard.pop();
                    this.cardFlag=false;
            }
            this.simpleformula=this.formulastack.join("")
            if(this.simpleformula===""){
                this.simpleformula="Enter Your Solution:)"
            }
        }
    }

    generatecomplexformula(){
        for(var i=0;i<this.formulastack.length;i++){
            switch (this.formulastack[i]) {
                /*case "+":
                    this.complexformula=this.complexformula+"%2B";
                    break;
                case "/":
                    this.complexformula=this.complexformula+"%2F";
                    break;*/
                default:
                    this.complexformula=this.complexformula+this.formulastack[i]
            }
        }
        try{
            this.result=eval(this.complexformula)
        }catch (err){
            this.result="Syntax Error"
        }finally {
            console.log(this.result)
            this.ac()
        }

    }


    showtime(){
        var leftm
        var lefts
        leftm = Math.floor(this.lefttime/(1000*60)%60)
        lefts = Math.floor(this.lefttime/1000%60)
    }

    nosolution(){
        this.result="No Solution"
    }
}