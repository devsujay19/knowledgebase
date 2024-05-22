import Bold from "@/components/Bold";
import HighLightText from "@/components/HighLightText";
import Link from "@/components/Link";
import OnboardingCitation from "@/components/OnboardingCitation";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import ReferencingVisual from "@/components/ReferencingVisual";
import SubTitle from "@/components/SubTitle";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Primate - Knowledge Base | Developer Sujay",
};

export default function Primate() {
    const content = (
        <>
            <p>
                <Bold>Primates</Bold> is an order of <Link slug="Mammal" title="mammals" />, which is further divided into the strepsirrhines, which include lemurs, galagos, and lorisids; and the haplorhines, which include tarsiers; and the simians, which include monkeys and apes. Primates arose 85–55 million years ago first from small terrestrial mammals, which adapted for life in tropical forests: many primate characteristics represent adaptations to the challenging environment among tree tops, including large brain sizes, binocular vision, color vision, vocalizations, shoulder girdles allowing a large degree of movement in the upper limbs, and opposable thumbs (in most but not all) that enable better grasping and dexterity. Primates range in size from Madame Berthe&apos;s mouse lemur, which weighs 30 g (1 oz), to the eastern gorilla, weighing over 200 kg (440 lb). There are 376–524 species of living primates, depending on which classification is used. New primate species continue to be discovered: over 25 species were described in the 2000s, 36 in the 2010s, and six in the 2020s.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lemur_catta_001.jpg/218px-Lemur_catta_001.jpg" w={250} h={150} caption={
                (
                    <>
                        Ring-tailed lemur
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Loris_tardigradus_tardigradus_003.jpg/179px-Loris_tardigradus_tardigradus_003.jpg" w={250} h={150} caption={
                (
                    <>
                        Red slender loris
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Garnett%27s_Galago_%28Greater_Bushbaby%29.jpg/194px-Garnett%27s_Galago_%28Greater_Bushbaby%29.jpg" w={250} h={150} caption={
                (
                    <>
                        Northern greater galago
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bohol_Tarsier.jpg/203px-Bohol_Tarsier.jpg" w={250} h={150} caption={
                (
                    <>
                        Philippine tarsier
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ateles_paniscus_-Brazil-8.jpg/203px-Ateles_paniscus_-Brazil-8.jpg" w={250} h={150} caption={
                (
                    <>
                        Black spider monkey
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Papio_hamadryas_%28aka%29.jpg/194px-Papio_hamadryas_%28aka%29.jpg" w={250} h={150} caption={
                (
                    <>
                        Hamadryas baboon
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/RickMurphy_graueri72.jpg/281px-RickMurphy_graueri72.jpg" w={250} h={150} caption={
                (
                    <>
                        Eastern gorilla
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Akha_cropped_hires.JPG/116px-Akha_cropped_hires.JPG" w={250} h={150} caption={
                (
                    <>
                        <Link slug="Human" title="Humans" />
                    </>
                )
            } />
            <br />
            <br />
            <p>
                Primates have large brains (relative to body size) compared to other mammals, as well as an increased reliance on visual acuity at the expense of the sense of smell, which is the dominant sensory system in most mammals. These features are more developed in monkeys and apes, and noticeably less so in lorises and lemurs. Some primates, including gorillas, <Link slug="Human" title="humans" /> and baboons, are primarily ground-dwelling rather than arboreal, but all species have adaptations for climbing trees. Arboreal locomotion techniques used include leaping from tree to tree and swinging between branches of trees (brachiation); terrestrial locomotion techniques include walking on two hindlimbs (<Link slug="Bipedalism" title="bipedalism" />) and modified walking on four limbs (quadripedalism) via knuckle-walking.
                <br />
                <br />
                Primates are among the most social of all animals, forming pairs or family groups, uni-male harems, and multi-male/multi-female groups. Non-human primates have at least four types of social systems, many defined by the amount of movement by adolescent females between groups. Primates have slower rates of development than other similarly sized mammals, reach maturity later, and have longer lifespans. Primates are also the most cognitively advanced animals, with humans (genus <i><Link slug="Homo" title="Homo" /></i>) capable of creating complex <Link slug="Language" title="languages" /> and sophisticated <Link slug="Civilization" title="civilizations" />, and non-human primates are recorded to use tools. They may communicate using facial and hand gestures, smells and vocalizations.
                <br />
                <br />
                Close interactions between humans and non-human primates (NHPs) can create opportunities for the transmission of zoonotic diseases, especially virus diseases including herpes, measles, <Link slug="Ebola" title="ebola" />, rabies and hepatitis. <HighLightText text="Thousands of non-human primates are used in research around the world because of their psychological and physiological similarity to humans. About 60% of primate species are threatened with extinction. Common threats include deforestation, forest fragmentation, monkey drives, and primate hunting for use in medicines, as pets, and for food. Large-scale tropical forest clearing for agriculture most threatens primates" />.
            </p>
            <ParagraphSecondaryHeader id="Etymology">Etymology</ParagraphSecondaryHeader>
            <p id="Etymology">
                The English name <i>primates</i> is derived from Old French or French <i>primat</i>, from a noun use of Latin <i>primat</i>-, from <i>primus</i> (&apos;prime, first rank&apos;). The name was given by Carl Linnaeus because he thought this the &quot;highest&quot; order of <Link slug="Animal" title="animals" />. The relationships among the different groups of primates were not clearly understood until relatively recently, so the commonly used terms are somewhat confused. For example, ape has been used either as an alternative for <i>monkey</i> or for any tailless, relatively human-like primate.
                <br />
                <br />
                Sir Wilfrid Le Gros Clark was one of the primatologists who developed the idea of trends in primate evolution and the methodology of arranging the living members of an order into an &quot;ascending series&quot; leading to humans. Commonly used names for groups of primates such as <i>prosimians</i>, <i>monkeys</i>, <i>lesser apes</i>, and <i>great apes</i> reflect this methodology. According to our current understanding of the evolutionary history of the primates, several of these groups are paraphyletic, or rather they do not include all the descendants of a common ancestor.
                <br />
                <br />
                In contrast with Clark&apos;s methodology, modern classifications typically identify (or name) only those groupings that are monophyletic; that is, such a named group includes all the descendants of the group&apos;s common ancestor.
                <br />
                <br />
                The cladogram below shows one possible classification sequence of the living primates: groups that use common (traditional) names are shown on the right.<OnboardingCitation citeNoteNumber={1} content={
                    (
                        <>
                            A cladogram is needed to be added below this paragraph. For now, it is being creating.
                        </>
                    )
                } />
                <br />
                <br />
                All groups with scientific names are clades, or monophyletic groups, and the sequence of scientific classification reflects the evolutionary history of the related lineages. Groups that are traditionally named are shown on the right; they form an &quot;ascending series&quot; (per Clark, see above), and several groups are paraphyletic:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        Prosimians contain two monophyletic groups (the suborder Strepsirrhini, or lemurs, lorises and allies, as well as the tarsiers of the suborder Haplorhini); it is a paraphyletic grouping because it excludes the Simiiformes, which also are descendants of the common ancestor Primates.
                    </li>
                    <br />
                    <li>
                        Monkeys comprise two monophyletic groups, New World monkeys and Old World monkeys, but is paraphyletic because it excludes hominoids, superfamily Hominoidea, also descendants of the common ancestor Simiiformes.
                    </li>
                    <br />
                    <li>
                        Apes as a whole, and the great apes, are paraphyletic if the terms are used such that they exclude humans.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                Thus, the members of the two sets of groups, and hence names, do not match, which causes problems in relating scientific names to common (usually traditional) names. Consider the superfamily Hominoidea: In terms of the common names on the right, this group consists of apes and humans and there is no single common name for all the members of the group. One remedy is to create a new common name, in this case <i>hominoids</i>. Another possibility is to expand the use of one of the traditional names. For example, in his 2005 book, the vertebrate palaeontologist Benton wrote, &quot;The apes, Hominoidea, today include the gibbons and orangutan ... the gorilla and chimpanzee ... and humans&quot;; thereby Benton was using apes to mean hominoids. In that case, the group heretofore called <i>apes</i> must now be identified as the non-human apes.
                <br />
                <br />
                As of 2021, there is no consensus as to whether to accept traditional (that is, common), but paraphyletic, names or to use monophyletic names only; or to use &apos;new&apos; common names or adaptations of old ones. Both competing approaches can be found in biological sources, often in the same work, and sometimes by the same author. Thus, Benton defines apes to include humans, then he repeatedly uses <i>ape-like</i> to mean &apos;like an ape rather than a human&apos;; and when discussing the reaction of others to a new fossil he writes of &quot;claims that <i>Orrorin</i> ... was an ape rather than a human&quot;.
            </p>
            <ParagraphSecondaryHeader id="Expansion_needed">[Expansion needed]</ParagraphSecondaryHeader>
            <ParagraphSecondaryHeader id="Scientific_classification">Scientific classification</ParagraphSecondaryHeader>
            <span id="Scientific_classification"></span>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        Domain: <Link slug="Eukaryote" title="Eukaryota" />
                    </li>
                    <br />
                    <li>
                        Kingdom: Animalia
                    </li>
                    <br />
                    <li>
                        Phylum: Chordata
                    </li>
                    <br />
                    <li>
                        Class: <Link slug="Mammal" title="Mammalia" />
                    </li>
                    <br />
                    <li>
                        Mirorder: Primatomorpha
                    </li>
                    <br />
                    <li>
                        Order <div className="inline-flex flex-col">
                            <div>
                                <Bold>Primates</Bold>
                            </div>
                            <div className="text-xs">
                                Linnaeus, 1758
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <br />
            <SubTitle>Suborders</SubTitle>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        Strepsirrhini
                    </li>
                    <br />
                    <li>
                        Haplorhini
                    </li>
                    <br />
                    <li>
                        †<i>Altiatlasius</i>
                    </li>
                    <br />
                </ul>
                <Bold>sister</Bold>: Dermoptera
            </div>.
            <br />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Primate_SpeciesDensity.png/330px-Primate_SpeciesDensity.png" w={450} h={350} caption={
                (
                    <>
                        Range and density of non-human primates.
                    </>
                )
            } />
            <br />
            <SubTitle>Synonyms</SubTitle>
            <p>
                Plesiadapiformes (cladistically including crown primates)
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Primate" thumbnail="/assets/primate.png" content={content} />
        </>
    );
};