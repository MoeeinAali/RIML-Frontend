import {FC} from "react";
import {MemberCardProps} from "@/ui/components/member/member.interface";
import SkillIconsLinkedin from "@/ui/icons/SkillIconsLinkedin";
import SkillIconsTwitter from "@/ui/icons/SkillIconsTwitter";
import SkillIconsGithubLight from "@/ui/icons/SkillIconsGithubLight";
import Image from "next/image";
import SkillIconsGmailLight from "@/ui/icons/SkillIconsGmailLight";
import {Social} from "@/ui/components/social/social.component";
import GoogleScholar from "@/ui/icons/GoogleScholar";
import PepiconsPopInternet from "@/ui/icons/PepiconsPopInternet";
import Link from "next/link";

export const MemberCard: FC<MemberCardProps> = ({member}) => {
    const {
        email,
        first_name,
        last_name,
        position,
        bio,
        image,
        twitter_url,
        linkedin_url,
        github_url,
        scholar_url,
        website_url,
    } = member;
    return (
        <div
            className="relative hover:shadow-xl transition-shadow w-[300px] sm:w-[250px] 2xl:w-[300px] flex flex-col gap-2 bg-[#f8f8f8] rounded-b-sm">
            <Image
                className="w-full h-[300px] sm:h-[250px] 2xl:h-[300px] object-cover object-center rounded-t-sm"
                src={image}
                width={300}
                height={200}
                alt={`${first_name} ${last_name}`}
            />

            <div className="p-8 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <Link href={"#"}
                          className="text-lg font-bold hover:text-primary border-primary text-neutral-800 transition-colors border-b-2 w-fit">{`${first_name} ${last_name}`}</Link>
                    <p className="text-sm font-semibold text-neutral-700">{position}</p>
                    {bio && <p className="text-sm">{bio}</p>}
                </div>

                <div className="flex justify-start items-center gap-2 mt-8 flex-wrap">
                    <Social href={website_url} icon={<PepiconsPopInternet className={"text-3xl"}/>}/>
                    <Social href={github_url} icon={<SkillIconsGithubLight className={"text-4xl"}/>}/>
                    <Social href={`mailto:${email}`} icon={<SkillIconsGmailLight className={"text-3xl"}/>}/>
                    <Social href={scholar_url} icon={<GoogleScholar className={"text-2xl"}/>}/>
                    <Social href={twitter_url} icon={<SkillIconsTwitter className={"text-2xl"}/>}/>
                    <Social href={linkedin_url} icon={<SkillIconsLinkedin className={"text-2xl"}/>}/>
                </div>
            </div>
        </div>
    );
};
