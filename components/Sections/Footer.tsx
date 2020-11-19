import { ReactElement } from "react";
import Link from "next/link";
import Twitter from "../Icons/Twitter";
import Twitch from "../Icons/Twitch";
import Discord from "../Icons/Discord";
import Instagram from "../Icons/Instagram";
import Youtube from "../Icons/Youtube";

export default function Footer(): ReactElement {
    return <div className={'footerWrapper'}>
        <div className={'footerWrapperInner'}>
            <h3 className={'footerHeader'}>Mehr von shokzTV</h3>

            <div className={'footerLinks'}>
                <div className={'mainFooterLinks'}>
                    <div className={'footerRow x3'}>
                        <div className={'footerColumn'}>
                            <Twitch smaller noHover/>
                            <a className={'link'} href={'https://www.twitch.tv/shokztv'} target={'_blank'} rel={'noreferrer'}>Twitch</a>
                        </div>
                        <div className={'footerColumn'}>
                            <Youtube smaller noHover/>
                            <a className={'link'} href={'https://www.youtube.com/channel/UCbSSQP3v0syCn9_-e089HgA'} target={'_blank'} rel={'noreferrer'}>Youtube</a>
                        </div>
                    </div>
                    <div className={'footerRow x3'}>
                        <div className={'footerColumn'}>
                            <Twitter smaller noHover/>
                            <a className={'link'} href={'https://twitter.com/shokztv/'} target={'_blank'} rel={'noreferrer'}>Twitter</a>
                        </div>
                        <div className={'footerColumn'}>
                            <Discord smaller noHover/>
                            <a className={'link'} href={'http://www.discord.gg/hagYNWg'} target={'_blank'} rel={'noreferrer'}>Discord</a>
                        </div>
                        <div className={'footerColumn'}>
                            <Instagram smaller noHover/>
                            <a className={'link'} href={'https://www.instagram.com/shokztv/'} target={'_blank'} rel={'noreferrer'}>Instagram</a>
                        </div>
                    </div>
                </div>
                <div className={'subFooterLinks'}>
                    <div className={'footerRow x2'}>
                        <div className={'footerColumn'}>
                            <a className={'link'} href={'mailto:kontakt@shokz.tv'}>Kontakt</a>
                        </div>
                    </div>
                    
                    <div className={'footerRow x2'}>
                        <div className={'footerColumn'}>
                            <Link href={'/datenschutz'} as={'/datenschutz'}>
                                <a className={'link'}>Datenschutzerklärung</a>
                            </Link>
                        </div>
                        <div className={'footerColumn'}>
                            <Link href={'/impressum'} as={'/impressum'}>
                                <a className={'link'}>Impressum</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'footerDisclaimer'}>
            Diese Website steht in keiner offiziellen Verbindung mit Dota2 oder Valve Cooperation - Dota2 is a registered trademark of Valve Cooperation
        </div>

        <style jsx>{`
            .footerWrapper {
                background-color: var(--blue);
            }
            .footerWrapperInner {
                max-width: 1175px;
                margin: 0 auto;
                padding: 40px;
                color: #FFF;
                font-size: 18px;
            }
            .footerHeader {
                font-size: 20px;
                margin-bottom: 20px;
                color: #FFF;
            }
            .footerDisclaimer {
                background-color: var(--darkBlue);
                text-align: center;
                color: rgba(255,255,255,.8);
                padding: 10px;
                font-style: italic;
                font-size: .7rem;
            }
            .footerLinks {
                padding: 20px 0 10px 0;
            }
            .footerRow, .footerLinks {
                display: flex;
                align-items: center;
                margin: -20px;
            }
            .mainFooterLinks {
                padding: 20px;
                width: 66%;
            }
            .subFooterLinks {
                padding: 20px;
                width: 33%;
            }
            .footerColumn {
                display: flex;
                align-items: center;
            }
            .footerColumn img {
                max-width: 25px;
                margin-right: 10px;
            }
            .x2 .footerColumn {
                padding: 20px;
                width: 50%;
            }
            .x3 .footerColumn {
                padding: 20px;
                width: 33%;
            }

            .x3 .link {
                margin-left: 10px;
            }

            .link {
                color: #FFF;
                text-decoration: none;
            }
            @media only screen and (max-width: 768px) { 
                .footerRow {
                    margin: 0;
                }
                .footerLinks {
                    flex-direction: column;
                    margin: 0;
                }
                .mainFooterLinks, .subFooterLinks {
                    width: 100%;
                }
                .x2 .footerColumn {
                    padding: 20px;
                    width: 33%;
                }
            }
            @media only screen and (max-width: 425px) { 
                .footerWrapperInner {
                    padding: 15px;
                }
                .footerRow {
                    flex-direction: column;
                }
                .footerColumn, .x2 .footerColumn, .x3 .footerColumn {
                    width: 100%;
                    padding: 5px;
                }
                .mainFooterLinks {
                    padding: 10px 0;
                }
                .subFooterLinks {
                    padding: 0;
                }
            }
        `}</style>
    </div>;
}