const accordions = document.querySelectorAll('.accordion');


accordions.forEach(accordion => {
    const question = accordion.querySelector('.question');
    const answer = accordion.querySelector('.accordion__answer');
    const button = accordion.querySelector('button');

    const toggleAccordion = () => {
        const expanded = question.getAttribute('aria-expanded') === 'true' || false;

        question.setAttribute('aria-expanded', !expanded);
        question.classList.toggle('open');
        button.setAttribute('aria-expanded', !expanded);
        answer.hidden = expanded;
    };

    question.addEventListener('click', toggleAccordion);
    button.addEventListener('click', toggleAccordion);
});