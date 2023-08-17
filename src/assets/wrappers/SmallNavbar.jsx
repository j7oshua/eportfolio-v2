import { styled } from 'styled-components';

export const Aside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    place-items: center;
    transition: var(--transition);

    .sidebar-links {
        text-align: center;
    }

    .sidebar-links a {
        font-size: 2rem;
        text-transform: capitalize;
        transition: var(--transition);
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
        display: inline-block;
        margin: 1.5rem;
    }

    .sidebar-links a:hover {
        color: var(--clr-primary-5);
    }

    .social-icon {
        font-size: 1.5rem;
        color: var(--clr-grey-1);
        transition: var(--transition);
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #bb2525;
        background: transparent;
        border: transparent;
        margin-bottom: 1rem;
        font-size: 2rem;
        cursor: pointer;
        transition: var(--transition);
     }

     .close-btn:hover {
        color: #e66b6b;
     }
`