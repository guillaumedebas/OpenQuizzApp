export const questions = [
    {
        questionId: 0,
        questionText: 'Quel est l\'élément HTML utilisé pour le texte le plus important?',
        answers: [
            { answersId: 0, label: '<div>', correct: false },
            { answersId: 1, label: '<h1>', correct: true },
            { answersId: 2, label: '<p>', correct: false },
            { answersId: 3, label: '<header>', correct: false }
        ]
    },
    {
        questionId: 1,
        questionText: 'Comment fait-on pour créer un lien hypertexte en HTML?',
        answers: [
            { answersId: 0, label: '<link url="http://example.com">Cliquez ici</link>', correct: false },
            { answersId: 1, label: '<a href="http://example.com">Cliquez ici</a>', correct: true },
            { answersId: 2, label: '<hyperlink>http://example.com</hyperlink>', correct: false },
            { answersId: 3, label: '<a>http://example.com</a>', correct: false }
        ]
    },
    {
        questionId: 2,
        questionText: 'Quel élément HTML est utilisé pour insérer une image?',
        answers: [
            { answersId: 0, label: '<media>', correct: false },
            { answersId: 1, label: '<img>', correct: true },
            { answersId: 2, label: '<picture>', correct: false },
            { answersId: 3, label: '<graphics>', correct: false }
        ]
    },
    {
        questionId: 3,
        questionText: 'Quel attribut HTML spécifie l\'URL d\'une image?',
        answers: [
            { answersId: 0, label: 'link', correct: false },
            { answersId: 1, label: 'src', correct: true },
            { answersId: 2, label: 'href', correct: false },
            { answersId: 3, label: 'source', correct: false }
        ]
    },
    {
        questionId: 4,
        questionText: 'Pour définir un paragraphe en HTML, quel élément utilise-t-on?',
        answers: [
            { answersId: 0, label: '<paragraph>', correct: false },
            { answersId: 1, label: '<p>', correct: true },
            { answersId: 2, label: '<text>', correct: false },
            { answersId: 3, label: '<div>', correct: false }
        ]
    }
];
