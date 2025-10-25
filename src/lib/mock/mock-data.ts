import {Publication} from "@/lib/types/publication.type";
import {JournalClub} from "@/lib/types/journal-club.type";
import {Team} from "@/lib/types/team.type";

const skeletonImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1NiAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjUwIiBmaWxsPSIjRTVFN0VCIi8+Cjwvc3ZnPgo="

export class SkeletonData {
    static publications: Publication[] = Array(3)
        .fill(null)
        .map((_, index) => ({
            "id": index,
            "title": "Quantifying & Modeling Multimodal Interactions: An Information Decomposition Framework",
            "authors": "Paul Pu Liang, Yun Cheng, Xiang Fan, Chun Kai Ling, Suzanne Nie, Richard J Chen, Zihao Deng, Nicholas Allen, Randy Auerbach, Faisal Mahmood, Ruslan Salakhutdinov, Louis-Philippe Morency",
            "publisher": {
                "id": 1,
                "name": "NeurIPS",
                "year": 2023,
                "logo": skeletonImg
            },
            "publication_badges": [
                {
                    "id": 1,
                    "name": "download pdf",
                    "label": "PDF",
                    "link": "https://google.com"
                },
                {
                    "id": 2,
                    "name": "qopiwehnfqoihb",
                    "label": "random long label",
                    "link": "https://google.com"
                }
            ]
        }));

    static journals: JournalClub[] = Array(3)
        .fill(null)
        .map((_, index) => (
            {
                title: "Unlearning diffusion models",
                date: "2025-10-17",
                time: "16:30",
                attendance_type: "hybrid",
                research_fields: [
                    {
                        "name": "Medical Image Analysis",
                        "image": "data:/"
                    },
                    {
                        "name": "Reinforcement Learning",
                        "image": "data:/"
                    },
                    {
                        "name": "ML Security",
                        "image": "data:/"
                    }
                ],
                image: skeletonImg,
                id: index,
                markdown: ""
            }
        ));

    static teams: Team[] = Array(3)
        .fill(null)
        .map((_, index) => (
            {
                "id": index,
                "name": "good boys",
                "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.",
                "members": Array(4)
                    .fill(null)
                    .map((_, index) => (
                        {
                            "id": index,
                            "first_name": "Moeein",
                            "last_name": "Aali",
                            "position": "Postdoctoral researcher",
                            "bio": "random bio for placeholder",
                            "image": skeletonImg,
                            "email": "moeeeinaali@gmail.com",
                            "linkedin_url": "https://www.linkedin.com/in/moeein",
                            "github_url": "https://www.github.com/moeeinaali",
                            "twitter_url": "https://google.com",
                            "website_url": "https://google.com",
                            "scholar_url": "https://google.com"
                        }
                    ))
            }
        ));

}
