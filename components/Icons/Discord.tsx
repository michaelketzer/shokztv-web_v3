import classNames from "classnames";
import { ReactElement } from "react";

interface Props {
    link?: string;
    smaller?: boolean;
    noHover?: boolean;
}

export default function Discord({ link = '', smaller, noHover }: Props): ReactElement {
    return <a rel="noopener" className={'link discord'} href={link} target={'_blank'} title={'Discord Server'} aria-label={'Discord Server'}>
        <svg height={smaller ? 25 : 40} viewBox="0 0 44 50" xmlns="http://www.w3.org/2000/svg" className={classNames('icon', { noHover })}>
            <path d="M29.025 23.75C29.025 25.275 27.9 26.525 26.475 26.525C25.075 26.525 23.925 25.275 23.925 23.75C23.925 22.225 25.05 20.975 26.475 20.975C27.9 20.975 29.025 22.225 29.025 23.75ZM17.35 20.975C15.925 20.975 14.8 22.225 14.8 23.75C14.8 25.275 15.95 26.525 17.35 26.525C18.775 26.525 19.9 25.275 19.9 23.75C19.925 22.225 18.775 20.975 17.35 20.975ZM43.75 5.15V50C37.4518 44.4342 39.466 46.2766 32.15 39.475L33.475 44.1H5.125C2.3 44.1 0 41.8 0 38.95V5.15C0 2.3 2.3 0 5.125 0H38.625C41.45 0 43.75 2.3 43.75 5.15ZM36.625 28.85C36.625 20.8 33.025 14.275 33.025 14.275C29.425 11.575 26 11.65 26 11.65L25.65 12.05C29.9 13.35 31.875 15.225 31.875 15.225C25.9364 11.9702 18.9605 11.9696 13.2 14.5C12.275 14.925 11.725 15.225 11.725 15.225C11.725 15.225 13.8 13.25 18.3 11.95L18.05 11.65C18.05 11.65 14.625 11.575 11.025 14.275C11.025 14.275 7.425 20.8 7.425 28.85C7.425 28.85 9.525 32.475 15.05 32.65C15.05 32.65 15.975 31.525 16.725 30.575C13.55 29.625 12.35 27.625 12.35 27.625C12.7178 27.8824 13.3242 28.2161 13.375 28.25C17.5947 30.6131 23.5887 31.3873 28.975 29.125C29.85 28.8 30.825 28.325 31.85 27.65C31.85 27.65 30.6 29.7 27.325 30.625C28.075 31.575 28.975 32.65 28.975 32.65C34.5 32.475 36.625 28.85 36.625 28.85V28.85Z" />
        </svg>

        <style jsx>{`
            .icon {
                cursor: pointer;
                fill: #AAA;
                transition: fill 120ms ease-in-out;
            }
            .icon:hover, .icon.noHover {
                fill: #7289da;
            }

            .icon.noHover {
                margin-bottom: -4px;
            }
        `}</style>
    </a>;
}