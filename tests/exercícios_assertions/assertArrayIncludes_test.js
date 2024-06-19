import { assertArrayIncludes } from "https://deno.land/std@0.224.0/testing/asserts.ts"; //Importando a função "assertArrayIncludes" da biblioteca do DENO.


const numeros = [1, 2, 3, 4, 5]; //Declaração da array "numeros".

/*
Essa assertion tem a funcionalidade de verificar se o 
array possuí um ou mais valores. Caso não possua todos os valores passados na assertion,
ela irá falhar.
*/


Deno.test("Teste de array dos números", () => {
    //Função que executa dois testes para conferir os valores de um array de números


    assertArrayIncludes(numeros, [1, 3], "O array não possuí um ou ambos valores (1 e 3).");
    //No exemplo, o array "numeros" contém tanto o valor 1 quanto o valor 3, fazendo com que essa assertion passe.

    assertArrayIncludes(numeros, [2, 6], "O array não possuí um ou ambos valores (2 e 6).");
    //No exemplo, o array "numeros" contém o valor 2, porém não contém o valor 6, fazendo com que essa assertion falhe.
})