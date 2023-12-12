//Valores 1
const valorX1                   = document.querySelector(".valorX1");
const valorX2                   = document.querySelector(".valorX2");
const valorBias1                = document.querySelector(".valorBias1");
const valorEsperado1            = document.querySelector(".valorEsperado1");

//Valores 2
const valorX3                   = document.querySelector(".valorX3");
const valorX4                   = document.querySelector(".valorX4");
const valorBias2                = document.querySelector(".valorBias2");
const valorEsperado2            = document.querySelector(".valorEsperado2");

//Valores 3
const valorX5                   = document.querySelector(".valorX5");
const valorX6                   = document.querySelector(".valorX6");
const valorBias3                = document.querySelector(".valorBias3");
const valorEsperado3            = document.querySelector(".valorEsperado3");

//Valores 3
const valorW1                   = document.querySelector(".valorW1");
const valorW2                   = document.querySelector(".valorW2");
const valorWBias                = document.querySelector(".valorWBias");

//Taxa de Aprendizagem
const taxaAprendizagem          = document.querySelector(".taxaAprendizagem");
const minhaTaxaAprendizagem     = document.querySelector(".minhaTaxaAprendizagem");

const entradas                  = document.querySelector(".entradasResposta");
const btnCalcular               = document.querySelector(".btn");

class Perceptron{

    constructor(){
        //Variáveis para acabar o loop
        this.diferenca1 = false;
        this.diferenca2 = false;
        this.diferenca3 = false;

        btnCalcular.addEventListener("click", () => {
            this.calcular();
        });
    }

    calcular(){ 
        //Taxa de Aprendizagem
        this.taxa_aprendizagem  = Number(taxaAprendizagem.value);
        minhaTaxaAprendizagem.innerHTML = taxaAprendizagem.value;

        //Valores 1
        this.valorX1            = Number(valorX1.value);
        this.valorX2            = Number(valorX2.value);
        this.valorBias1         = Number(valorBias1.value);
        this.valorEsperado1     = Number(valorEsperado1.value);

        //Valores 2
        this.valorX3            = Number(valorX3.value);
        this.valorX4            = Number(valorX4.value);
        this.valorBias2         = Number(valorBias2.value);
        this.valorEsperado2     = Number(valorEsperado2.value);

        //Valores 3
        this.valorX5            = Number(valorX5.value);
        this.valorX6            = Number(valorX6.value);
        this.valorBias3         = Number(valorBias3.value);
        this.valorEsperado3     = Number(valorEsperado3.value);

        //Valores do W
        this.valorW1            = Number(valorW1.value);
        this.valorW2            = Number(valorW2.value);
        this.valorWBias1        = Number(valorWBias.value);

        while(this.diferenca1 == false || this.diferenca2 == false || this.diferenca3 == false){

            //Calculo do FNet
            this.fnet = (this.valorX1 * this.valorW1) + (this.valorX2 * this.valorW2) + (this.valorBias1 * this.valorWBias1);

            if(this.fnet <= 0){
                this.saidaFinal = 0;
            }else{
                this.saidaFinal = 1;
            }

            this.diferenca = this.valorEsperado1 - this.saidaFinal;

            if(this.diferenca === 0){
                this.diferenca1 = true;
            }

            //Calculos dos deltas
            this.deltaW1 = this.taxa_aprendizagem * this.diferenca * this.valorX1;
            this.deltaW2 = this.taxa_aprendizagem * this.diferenca * this.valorX2;
            this.deltaWBias = this.taxa_aprendizagem * this.diferenca * this.valorBias1;

            let meuHtmlPrimeiroValores = `<div class="entradas">
                                            <div class="entradas__aux">
                                                <p>${this.valorX1}</p>
                                                <p>${this.valorX2}</p>
                                                <p class="bias">${this.valorBias1}</p>
                                                <p>${this.valorW1.toFixed(1)}</p>
                                                <p>${this.valorW2.toFixed(1)}</p>
                                                <p>${this.valorWBias1.toFixed(1)}</p>
                                            </div>
                                            <div class="entradas__secundaria">
                                                <p class="meuValorEsperado">${this.valorEsperado1}</p>
                                                <p>${this.fnet}</p>
                                                <p>${this.saidaFinal}</p>
                                                <p>${this.diferenca}</p>
                                            </div>
                                            <div class="entradas__terceiro">
                                                <p>${this.deltaW1.toFixed(1)}</p>
                                                <p>${this.deltaW2.toFixed(1)}</p>
                                                <p>${this.deltaWBias.toFixed(1)}</p>
                                            </div>
                                        </div>`;
            
            entradas.insertAdjacentHTML("beforebegin", meuHtmlPrimeiroValores);

            this.valorW1 += this.deltaW1;
            this.valorW2 = this.valorW2 + this.deltaW2;
            this.valorWBias1 = this.valorWBias1 + this.deltaWBias;

            //2 Chamada

            this.fnet = (this.valorX3 * this.valorW1) + (this.valorX4 * this.valorW2) + (this.valorBias2 * this.valorWBias1);

            if(this.fnet <= 0){
                this.saidaFinal = 0;
            }else{
                this.saidaFinal = 1;
            }

            this.diferenca = this.valorEsperado2 - this.saidaFinal;

            if(this.diferenca === 0){
                this.diferenca2 = true;
            }

            //Calculos dos deltas
            this.deltaW1 = this.taxa_aprendizagem * this.diferenca * this.valorX3;
            this.deltaW2 = this.taxa_aprendizagem * this.diferenca * this.valorX4;
            this.deltaWBias = this.taxa_aprendizagem * this.diferenca * this.valorBias1;

            let meuHtmlSegundoValores = `<div class="entradas">
                                            <div class="entradas__aux">
                                                <p>${this.valorX3}</p>
                                                <p>${this.valorX4}</p>
                                                <p class="bias">${this.valorBias2}</p>
                                                <p>${this.valorW1.toFixed(1)}</p>
                                                <p>${this.valorW2.toFixed(1)}</p>
                                                <p>${this.valorWBias1.toFixed(1)}</p>
                                            </div>
                                            <div class="entradas__secundaria">
                                                <p class="meuValorEsperado">${this.valorEsperado2}</p>
                                                <p>${this.fnet}</p>
                                                <p>${this.saidaFinal}</p>
                                                <p>${this.diferenca}</p>
                                            </div>
                                            <div class="entradas__terceiro">
                                                <p>${this.deltaW1.toFixed(1)}</p>
                                                <p>${this.deltaW2.toFixed(1)}</p>
                                                <p>${this.deltaWBias.toFixed(1)}</p>
                                            </div>
                                        </div>`;
            
            entradas.insertAdjacentHTML("beforebegin", meuHtmlSegundoValores);

            this.valorW1 += this.deltaW1;
            this.valorW2 = this.valorW2 + this.deltaW2;
            this.valorWBias1 = this.valorWBias1 + this.deltaWBias;


            //3 Chamada

            this.fnet = (this.valorX5 * this.valorW1) + (this.valorX6 * this.valorW2) + (this.valorBias3 * this.valorWBias1);

            if(this.fnet <= 0){
                this.saidaFinal = 0;
            }else{
                this.saidaFinal = 1;
            }

            this.diferenca = this.valorEsperado3 - this.saidaFinal;

            if(this.diferenca === 0){
                this.diferenca3 = true;
            }

            //Calculos dos deltas
            this.deltaW1 = this.taxa_aprendizagem * this.diferenca * this.valorX5;
            this.deltaW2 = this.taxa_aprendizagem * this.diferenca * this.valorX6;
            this.deltaWBias = this.taxa_aprendizagem * this.diferenca * this.valorBias1;

            let meuHtmlTerciroValores = `<div class="entradas">
                                            <div class="entradas__aux">
                                                <p>${this.valorX5}</p>
                                                <p>${this.valorX6}</p>
                                                <p class="bias">${this.valorBias3}</p>
                                                <p>${this.valorW1.toFixed(1)}</p>
                                                <p>${this.valorW2.toFixed(1)}</p>
                                                <p>${this.valorWBias1.toFixed(1)}</p>
                                            </div>
                                            <div class="entradas__secundaria">
                                                <p class="meuValorEsperado">${this.valorEsperado3}</p>
                                                <p>${this.fnet}</p>
                                                <p>${this.saidaFinal}</p>
                                                <p>${this.diferenca}</p>
                                            </div>
                                            <div class="entradas__terceiro">
                                                <p>${this.deltaW1.toFixed(1)}</p>
                                                <p>${this.deltaW2.toFixed(1)}</p>
                                                <p>${this.deltaWBias.toFixed(1)}</p>
                                            </div>
                                        </div><br><br>`;
            
            entradas.insertAdjacentHTML("beforebegin", meuHtmlTerciroValores);

            this.valorW1 += this.deltaW1;
            this.valorW2 = this.valorW2 + this.deltaW2;
            this.valorWBias1 = this.valorWBias1 + this.deltaWBias;
        }
        

    }

}

let redesNeurais = new Perceptron();
