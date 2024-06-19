import { assertStringIncludes  } from "https://deno.land/std/testing/asserts.ts"; // Importando a função "assertStringIncludes" da biblioteca do DENO.

/*
Essa assertion tem a função de verificar se a string contém o texto que você deseja, 
caso não esteja contido, a assertion irá falhar.
*/

const nossaStringLinda = "Olá, eu me chamo Ronisvaldo!";


Deno.test("Teste de string", () => {
    //Essa função verifica se a string contém a palavra passada como parâmetro


    assertStringIncludes(nossaStringLinda, "Ronisvaldo", 'A string não contém a palavra "Ronisvaldo" ');
    //Nesse exemplo, a String contém a palavra "Ronisvaldo", fazendo com que a assertion passe.

    assertStringIncludes(nossaStringLinda, "Batata", 'A string não contém a palavra "Batata" ');
    //Nesse exemplo, como a String NÃO contém a palavra "Batata", a assertion irá falhar.
})
