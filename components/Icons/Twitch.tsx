import { ReactElement } from "react";

export default function Twitch({link = ''}: {link?: string}): ReactElement {
    return <a className={'link twitter'} href={link} target={'_blank'}>
        <svg height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={'icon'}>
            <path d="M38.2002 10.1045H34.4277V20.8174H38.2002V10.1045ZM27.832 10.0586H24.0596V20.7764H27.832V10.0586ZM11.7998 0L2.37402 8.92773V41.0723H13.6855V50L23.1123 41.0723H30.6563L47.626 25V0H11.7998ZM43.8545 23.2178L36.3135 30.3584H28.7705L22.1689 36.6084V30.3584H13.6855V3.57227H43.8545V23.2178Z" />
        </svg>

        <style jsx>{`
            .icon {
                cursor: pointer;
                fill: #EEE;
                transition: fill 120ms ease-in-out;
            }
            .icon:hover {
                fill: #6441a5;
            }
        `}</style>
    </a>;
}