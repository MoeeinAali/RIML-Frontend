import {Publication} from "@/lib/types/publication.type";

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
                "logo": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1NiAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjUwIiBmaWxsPSIjRTVFN0VCIi8+Cjwvc3ZnPgo="
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
}
