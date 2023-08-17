import { styled } from 'styled-components';

export const Wrapper = styled.footer`
    padding-bottom: 2rem;
    background: #222;
    display: grid;
    place-items: center;

    .social-icons {
        margin-bottom: 2rem;
    }

    .social-icon {
        color: var(--clr-primary-5);
        font-size: 1.5rem;
    }

    .social-icon:hover {
        color: var(--clr-primary-10);
    }

    p {
        font-size: 1.25rem;
        text-transform: capitalize;
    }
`