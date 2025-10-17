'use client';

import {FC} from "react";
import {MemberCardProps} from "@/ui/components/member/member.interface";
import SkillIconsLinkedin from "@/ui/icons/SkillIconsLinkedin";
import SkillIconsTwitter from "@/ui/icons/SkillIconsTwitter";
import SkillIconsGithubLight from "@/ui/icons/SkillIconsGithubLight";
import Image from "next/image";
import SkillIconsGmailLight from "@/ui/icons/SkillIconsGmailLight";
import {Social} from "@/ui/components/social/social.component";
import GoogleScholar from "@/ui/icons/GoogleScholar";

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
            className="relative hover:shadow-xl transition-shadow w-[300px] sm:w-[250px] 2xl:w-[300px] flex flex-col gap-2 bg-[#f8f8f8] fade-in">
            <Image
                className="w-full h-[300px] sm:h-[250px] 2xl:h-[300px] object-cover object-center"
                src={image}
                width={300}
                height={200}
                alt={`${first_name} ${last_name}`}
            />

            <div className="p-8 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold">{`${first_name} ${last_name}`}</h3>
                    <p className="text-sm font-semibold">{position}</p>
                    {bio && <p className="text-sm">{bio}</p>}
                </div>

                <div className="flex items-center gap-2 pt-8">
                    <Social href={`mailto:${email}`} icon={<SkillIconsGmailLight className={"text-3xl"}/>}/>
                    <Social href={twitter_url} icon={<SkillIconsTwitter className={"text-2xl"}/>}/>
                    <Social href={linkedin_url} icon={<SkillIconsLinkedin className={"text-2xl"}/>}/>
                    <Social href={github_url} icon={<SkillIconsGithubLight className={"text-4xl"}/>}/>
                    <Social href={scholar_url} icon={<GoogleScholar className={"text-2xl"} />}/>
                        <Social href={website_url} icon={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-[#006db6] w-6 h-6"
                    >
                        <path
                            d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 17.93V14h-2v5.93a8.013 8.013 0 01-6.06-6.06H10V10H4.94A8.013 8.013 0 0111 3.07V8h2V3.07a8.013 8.013 0 016.06 6.06H14v2h5.06A8.013 8.013 0 0113 19.93z"/>
                    </svg>}/>
                </div>
            </div>
        </div>
    );
};
