const accordions = document.querySelectorAll('.accordion');


accordions.forEach(accordion => {
    const question = accordion.querySelector('.question');
    const answer = accordion.querySelector('.accordion__answer');
    const button = accordion.querySelector('button');

    const toggleAccordion = () => {
        const expanded = button.getAttribute('aria-expanded') === "true" || false;

        question.setAttribute('aria-expanded', !expanded);
        question.classList.toggle('open');
        button.setAttribute('aria-expanded', !expanded);
        answer.hidden = expanded;
    };

    question.addEventListener('click', toggleAccordion);
    button.addEventListener('click', toggleAccordion);

    button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            question.focus();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            accordion.nextElementSibling?.querySelector('button').focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            accordion.previousElementSibling?.querySelector('button').focus();
        }
    });

    question.addEventListener('keydown', (e) => {
        if (['Enter', ' '].includes(e.key)) {
            e.preventDefault();
            toggleAccordion();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            accordion.nextElementSibling?.querySelector('.question').focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            accordion.previousElementSibling?.querySelector('.question').focus();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            button.focus();
        }
    });
});
