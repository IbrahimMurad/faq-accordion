const accordions = document.querySelectorAll('.accordion');


accordions.forEach(accordion => {
    const question = accordion.querySelector('.accordion__question');
    const answer = accordion.querySelector('.accordion__answer');
    const button = accordion.querySelector('button');

    question.addEventListener('click', () => {
        const expanded = question.getAttribute('aria-expanded') === 'true' || false;

        question.setAttribute('aria-expanded', !expanded);
        button.setAttribute('aria-expanded', !expanded);
        answer.hidden = expanded;
    });
});