import { styled } from 'styled-components';

export const Wrapper = styled.nav`
    height: 5rem;
    padding: 1rem;
    display: grid;
    align-items: center;
    transition: var(--transition);

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    box-shadow: var(--light-shadow);

    h4 {
        margin: 0;
        font-size: 1rem;
    }

    .last-name {
        color: var(--clr-primary-5);
    }

    .nav-links {
        display: none;
    }

    .nav-center {
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
    }

    .nav-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .nav-btn {
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        font-size: 2rem;
        cursor: pointer;
        justify-self: end;
    }

    @media screen and (min-width: 768px)  {
        background: var(--clr-primary-10);
        h4 {
            font-size: 2rem;
        }
        .nav-btn {
            display: none;
        }

        .nav-links {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
            align-items: center;
            column-gap: 2rem;
        }

        .nav-links a {
            text-transform: capitalize;
            color: var(--clr-grey-1);
            font-weight: bold;
            letter-spacing: var(--spacing);
            transition: var(--transition);
        }

        .nav-links a:hover {
            color: var(--clr-primary-5);
        }

        .nav-header {
            grid-template-columns: auto 1fr;
        }

        .nav-center {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`