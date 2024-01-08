export const questions = [
    {
        questionId: 0,
        questionText: 'Quel est l\'élément HTML utilisé pour le texte le plus important?',
        answers: [
            { answersId: 0, label: '<div>', correct: false, explanation: 'Le <div> est utilisé pour les sections ou conteneurs, pas spécifiquement pour le texte important.' },
            { answersId: 1, label: '<h1>', correct: true, explanation: '<h1> est utilisé pour le titre principal, indiquant le texte le plus important.' },
            { answersId: 2, label: '<p>', correct: false, explanation: '<p> est utilisé pour les paragraphes, pas pour le texte le plus important.' },
            { answersId: 3, label: '<header>', correct: false, explanation: '<header> est utilisé pour l’en-tête de la page ou d’une section, pas pour le texte le plus important.' }
        ]
    },
    {
        questionId: 1,
        questionText: 'Comment fait-on pour créer un lien hypertexte en HTML?',
        answers: [
            { answersId: 0, label: '<link url="http://example.com">Cliquez ici</link>', correct: false, explanation: 'La balise <link> est utilisée pour lier des feuilles de style, pas pour créer des liens hypertextes.' },
            { answersId: 1, label: '<a href="http://example.com">Cliquez ici</a>', correct: true, explanation: '<a href="..."> est la manière correcte de créer un lien hypertexte.' },
            { answersId: 2, label: '<hyperlink>http://example.com</hyperlink>', correct: false, explanation: 'La balise <hyperlink> n’existe pas en HTML.' },
            { answersId: 3, label: '<a>http://example.com</a>', correct: false, explanation: 'La balise <a> nécessite l’attribut href pour créer un lien hypertexte.' }
        ]
    },
    {
        questionId: 2,
        questionText: 'Quel élément HTML est utilisé pour insérer une image?',
        answers: [
            { answersId: 0, label: '<media>', correct: false, explanation: 'La balise <media> n’existe pas en HTML pour insérer des images.' },
            { answersId: 1, label: '<img>', correct: true, explanation: '<img> est la balise utilisée pour insérer des images.' },
            { answersId: 2, label: '<picture>', correct: false, explanation: 'Bien que <picture> soit utilisé pour les images, il sert à définir des sources multiples pour différentes situations.' },
            { answersId: 3, label: '<graphics>', correct: false, explanation: 'La balise <graphics> n’existe pas en HTML.' }
        ]
    },
    {
        questionId: 3,
        questionText: 'Quel attribut HTML spécifie l\'URL d\'une image?',
        answers: [
            { answersId: 0, label: 'link', correct: false, explanation: 'L’attribut link n’est pas utilisé pour spécifier l’URL d’une image.' },
            { answersId: 1, label: 'src', correct: true, explanation: 'L’attribut src est utilisé pour spécifier l’URL source de l’image.' },
            { answersId: 2, label: 'href', correct: false, explanation: 'L’attribut href est utilisé pour les liens, pas pour les images.' },
            { answersId: 3, label: 'source', correct: false, explanation: 'L’attribut source n’est pas utilisé pour spécifier l’URL d’une image, mais <source> est utilisé dans <picture>.' }
        ]
    },
    {
        questionId: 4,
        questionText: 'Pour définir un paragraphe en HTML, quel élément utilise-t-on?',
        answers: [
            { answersId: 0, label: '<paragraph>', correct: false, explanation: 'La balise <paragraph> n’existe pas en HTML.' },
            { answersId: 1, label: '<p>', correct: true, explanation: '<p> est la balise standard pour définir un paragraphe.' },
            { answersId: 2, label: '<text>', correct: false, explanation: 'La balise <text> n’existe pas en HTML.' },
            { answersId: 3, label: '<div>', correct: false, explanation: 'Bien que <div> puisse contenir des paragraphes, il est utilisé pour des sections ou conteneurs généraux.' }
        ]
    }
];
