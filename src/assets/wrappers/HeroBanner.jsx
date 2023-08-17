import { styled } from 'styled-components';

export const Wrapper = styled.header`
    background: var(--clr-primary-10);


    .hero-center {
        margin-top: 5rem;
        min-height: calc(100vh - 5rem);
        display: grid;
        place-items: center;
    }

    .underline {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    .hero-img {
        display: none;
    }

    .hero-info h4 {
        color: var(--clr-grey-5);
    }

    .hero-icons {
        justify-items: start;
        color: var(--clr-grey-1);
        font-size: 1.5rem;
        margin-top: 2rem;
    }

    .hero-icon {
        color: var(--clr-grey-1);
    }

    .hero-btn {
        margin-top: 1.25rem;
    }


    @media screen and (min-width: 992px) {
        .hero-img {
            display: block;
            position: relative;
        }

        .hero-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .hero-img::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0.25rem solid var(--clr-primary-5);
            top: 2rem;
            right: -2rem;
            border-radius: var(--radius);
        }
    }
`