import Link from "next/link";
import MaterialSymbolsMailOutlineRounded from "@/ui/icons/MaterialSymbolsMailOutlineRounded";
import MaterialSymbolsLocationOnOutline from "@/ui/icons/MaterialSymbolsLocationOnOutline";
import {Social} from "@/ui/components/social/social.component";
import SkillIconsLinkedin from "@/ui/icons/SkillIconsLinkedin";
import LogosYoutubeIcon from "@/ui/icons/LogosYoutubeIcon";
import SkillIconsGithubLight from "@/ui/icons/SkillIconsGithubLight";
import LogosTelegram from "@/ui/icons/LogosTelegram";

export default function ContactPage() {
    return (
        <>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>Contact</h1>
            <hr/>
            <br/>

            <div className={"flex gap-3"}>
                <MaterialSymbolsMailOutlineRounded className={"text-2xl"}/> <Link href={"mailto:Rohban@sharif.edu"}
            >Rohban@sharif.edu</Link>
            </div>

            <br/>

            <div className={"flex gap-3"}>
                <MaterialSymbolsLocationOnOutline className={"text-2xl"}/> <Link
                href={"https://maps.app.goo.gl/FLP3ufm7oHoLeQ2r6"}
                target={'_blank'}>Azadi sreet, Tehran,
                Iran </Link>
            </div>

            <br/>
            <br/>
            <br/>

            <h2 className={"text-3xl font-semibold text-neutral-700 mb-2"}>Socials</h2>
            <div className={"flex flex-col lg:flex-row pt-4 gap-4 lg:gap-10 xl:gap-20 2xl:gap-28"}>
                <Link href={"https://www.linkedin.com/company/robust-and-interpretable-machine-learning-lab/"}
                      className={"flex gap-3 justify-center items-center hover:opacity-80 text-neutral-700 font-medium"}
                      target={'_blank'}>
                    <SkillIconsLinkedin className={"text-2xl"}/>
                    Linkedin
                </Link>
                <Link href={"https://www.youtube.com/@RIMLLAB"}
                      className={"flex gap-3 justify-center items-center hover:opacity-80 text-neutral-700 font-medium"}
                      target={'_blank'}>
                    <LogosYoutubeIcon className={"text-2xl"}/>
                    Youtube
                </Link>
                <Link href={"https://github.com/rohban-lab"}
                      className={"flex gap-3 justify-center items-center hover:opacity-80 text-neutral-700 font-medium"}
                      target={'_blank'}>
                    <SkillIconsGithubLight className={"text-3xl"}/>
                    Github
                </Link>
                <Link href={"https://t.me/RIMLLab"}
                      className={"flex gap-3 justify-center items-center hover:opacity-80 text-neutral-700 font-medium"}
                      target={'_blank'}>
                    <LogosTelegram className={"text-3xl"}/>
                    Telegram
                </Link>

            </div>
        </>
    );
}
