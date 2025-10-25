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
                "logo": "data:/"
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
