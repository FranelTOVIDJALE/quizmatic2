export const quiz = {
      topic: 'Javascript',
      level: 'Beginner',
      totalQuestions: 4,
      perQuestionScore : 5 , 
      questions: [
        {
          question:
            'Kuala lumpor is the capital of ?',
            letters:['A','B','C','D'],
          choices: ['Vietnam', 'Malaysia', 'Sweden', 'Austria'],
          type: 'MCQs',
          correctAnswer: 'Vietnam',
        },
        {
          question:
            'Which of the following variable in Javascript?',
          choices: ['var', 'let', 'and', 'None of'],
          type: 'MCQs',
          correctAnswer: 'and',
        },
        {
          question:
            'Which of the following methods  form using Javascript?',
          choices: [
            'document',
            'console',
            'window.alert',
            'of above',
          ],
          type:'MCQs', 
          correctAnswer: 'of above',
        },
        {
          question: 'How can a datatype  a constant type?',
          choices: ['const', 'var', 'let', 'constant'],
          type: 'MCQs',
          correctAnswer: 'const',
        },
      ],
    }