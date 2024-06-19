import { assertExists } from "https://deno.land/std@0.224.0/testing/asserts.ts"; //Importando a função "assertExists" da biblioteca do DENO.


//Essa assertion tem a funcionalidade de verificar se a variável tem o valor NULL ou UNDEFINED.



Deno.test("Teste de informações de uma pessoa", () => {
    //Essa função executa 2 testes para verificar se as informações de uma pessoa foram preenchidas


    const nome = "Marcelo"; //Declaração da variável nome.
    assertExists(nome, "Variável nome não existe"); 
    //No exemplo, a variável nome recebe o valor "Marcelo", fazendo com que essa assertion passe.

    const idade = null; //Declaração da variável idade.
    assertExists(idade, "Variável idade não existe");
    //No exemplo, a variável idade recebe um valor NULO, consequentemente, essa assertion falha.

})