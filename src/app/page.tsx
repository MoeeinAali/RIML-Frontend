import TextArea from "@/ui/components/text-area/text-area.component";


export default function Home() {
    return (
        <section className={""}>
            <h1 className={"text-4xl font-black text-neutral-700"}>Robust and Interpretable Machine Learning</h1>
            <TextArea>
                Welcome to the <strong className={"text-primary underline"}>RIML Lab</strong> at Sharif University of
                Technology,
                led by <strong className={"text-primary underline"}>Dr. Mohammad
                Hossein Rohban</strong>. We focus on developing robust and interpretable machine learning solutions,
                addressing challenges in anomaly detection, adversarial robustness, and computational biology.
                Let's grow together.​
            </TextArea>

            <br/>
            <h2 className={"text-3xl mt-4 font-black text-neutral-700"}>
                About the Lab
            </h2>
            <TextArea>
                At RIML Lab, we focus on creating machine learning algorithms that can withstand adversarial conditions
                and provide insights into their decision-making processes. Our research aims to bridge the gap between
                theoretical advancements and practical implementations, ensuring that AI systems are both effective and
                trustworthy.
            </TextArea>

            <br/>
            <h2 className={"text-3xl mt-4 font-black text-neutral-700"}>
                Our Goals
            </h2>
            <TextArea>
                <>
                    <p className="text-gray-700 leading-relaxed">
                        By embodying these principles, the RIML Lab aims to be a beacon of excellence in machine
                        learning
                        research, contributing to a more vibrant, growing, self-actualized, and sustainable world.
                    </p>

                    <ul className="mt-4 ml-6 list-disc space-y-2 text-neutral-700">
                        <li>
                            <span className="font-semibold text-primary">Vibrant:</span> Cultivating an energetic and
                            inclusive
                            research environment.
                        </li>
                        <li>
                            <span className="font-semibold text-primary">Growing:</span> Advancing knowledge and
                            expanding impact.
                        </li>
                        <li>
                            <span className="font-semibold text-primary">Self-Actualized:</span> Empowering individual
                            potential.
                        </li>
                        <li>
                            <span className="font-semibold text-primary">Sustainable:</span> Committing to long-term
                            responsibility.
                        </li>
                    </ul>
                </>

            </TextArea>

            <br/>
            <h2 className={"text-3xl mt-4 font-black text-neutral-700"}>
                Our Research Fields
            </h2>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-gray-800">
                <li>
                    <span className="font-semibold text-primary">ML Security</span> Cultivating an energetic and
                    inclusive
                    research environment.
                </li>

            </ul>
        </section>
    );
}
