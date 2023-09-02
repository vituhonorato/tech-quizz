const quizDataJs = [
    {
      question: "Which language runs in a web browser?",
      options: [
        { text: "Java", id: "a" },
        { text: "C", id: "b" },
        { text: "Python", id: "c" },
        { text: "JavaScript", id: "d" },
      ],
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      options: [
        { text: "Central Style Sheets", id: "a" },
        { text: "Cascading Style Sheets", id: "b" },
        { text: "Cascading Simple Sheets", id: "c" },
        { text: "Cars SUVs Sailboats", id: "d" },
      ],
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      options: [
        { text: "Hypertext Markup Language", id: "a" },
        { text: "Hypertext Markdown Language", id: "b" },
        { text: "Hyperloop Machine Language", id: "c" },
        { text: "Helicopters Terminals Motorboats Lamborghinis", id: "d" },
      ],
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      options: [
        { text: "1996", id: "a" },
        { text: "1995", id: "b" },
        { text: "1994", id: "c" },
        { text: "none of the above", id: "d" },
      ],
      correct: "b",
    },
    {
        question: "Qual operador retorna verdadeiro se os dois valores comparados não forem iguais?",
        options: [
          { text: "<>", id: "a" },
          { text: "~", id: "b" },
          { text: "==!", id: "c" },
          { text: "!==", id: "d" },
        ],
        correct: "d",
      },
      {
        question: "Como uma instrução forEach é diferente de uma instrução for?",
        options: [
          { text: "A instrução for usa somente uma função de retorno de chamada.", id: "a" },
          { text: "Uma instrução for é genérica, mas uma instrução forEach pode ser usada apenas com um array.", id: "b" },
          { text: "Somente uma instrução forEach permite que você especifique seu próprio iterador.", id: "c" },
          { text: "Uma instrução forEach é genérica, mas uma instrução for pode ser usada apenas com um array.", id: "d" },
        ],
        correct: "b",
      },
      {
        question: "Qual declaração é a maneira correta de criar uma variável chamada rate e atribuir a ela o valor 100?",
        options: [
          { text: "let rate = 100;", id: "a" },
          { text: "let 100 = rate;", id: "b" },
          { text: "100 = let rate;", id: "c" },
          { text: "rate = 100;", id: "d" },
        ],
        correct: "a",
      },
      {
        question: "Qual instrução cria um novo objeto usando o construtor Person? Qual instrução cria um novo objeto Person chamado 'student'?",
        options: [
          { text: "var student = new Person();", id: "a" },
          { text: "var student = construct Person;", id: "b" },
          { text: "var student = Person();", id: "c" },
          { text: "var student = construct Person();", id: "d" },
        ],
        correct: "a",
      },
  ];


  export default quizDataJs