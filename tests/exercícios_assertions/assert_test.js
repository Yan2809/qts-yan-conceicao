import { assert } from "https://deno.land/std@0.224.0/testing/asserts.ts"; //Importando a função "assert" da biblioteca do DENO.

let idade = 15; //Declaração da variável idade.

//Essa assertion tem a funcionalidade de garantir que o retorno do seu teste tenha um valor true.

Deno.test("Teste de idade", () => { 
    //Função que executa dois testes de idade


    assert(idade < 18, "Idade maior ou igual a 18 anos!");
    //No exemplo, a variável idade recebe o valor 15, fazendo com que essa assertion passe, pois 15 é menor que 18.

    assert(idade >= 18, "Idade menor que 18 anos!");
    //No exemplo, a variável idade recebe o valor 15, fazendo com que essa assertion falhe, uma vez que 15 é menor que 18.
});