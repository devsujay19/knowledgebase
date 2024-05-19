import BlockQuote from "@/components/BlockQuote";
import Bold from "@/components/Bold";
import Link from "@/components/Link";
import OnboardingCitation from "@/components/OnboardingCitation";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Warp drive - Knowledge Base | Developer Sujay",
};

export default function Warp_drive() {
    const content = (
        <>
            <p>
                A <Bold>warp drive</Bold> or a drive enabling <Bold>space warp</Bold> is a fictional superluminal<OnboardingCitation citeNoteNumber={1} content={
                    (
                        <>
                            <Bold>Faster-than-light</Bold> travel and communication are the conjectural propagation of matter or information faster than the speed of light. The special theory of relativity implies that only particles with zero rest mass may travel at the speed of light, and that nothing may travel faster.
                        </>
                    )
                } /> (faster than the speed of light) spacecraft propulsion system<OnboardingCitation citeNoteNumber={2} content={
                    (
                        <>
                            <Bold>Spacecraft propulsion</Bold> is any method used to accelerate spacecraft and artificial satellites. <Bold>In-space propulsion</Bold> exclusively deals with propulsion systems used in the vacuum of space and should not be confused with space launch or atmospheric entry.
                        </>
                    )
                } /> in many science fiction works, most notably <i>Star Trek</i>, and a subject of ongoing physics research. The general concept of &quot;warp drive&quot; was introduced by John W. Campbell in his 1957 novel <i>Islands of Space</i> and was popularized by the <i>Star Trek</i> series. Its closest real-life equivalent is the <Link slug="Alcubierre_drive" title="Alcubierre drive" />, a theoretical solution of the field equations of general relativity.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Warp_drive_starship.png/495px-Warp_drive_starship.png" w={1000} h={1000} caption={
                (
                    <>
                        Artistic rendition of a ship with warp drive activated
                    </>
                )
            } />
            <ParagraphSecondaryHeader id="History_and_characteristics">History and characteristics</ParagraphSecondaryHeader>
            <p id="History_and_characteristics">
                Warp drive, or a drive enabling space warp, is one of several ways of travelling through space found in science fiction. It has been often discussed as being conceptually similar to <Link slug="Hyperspace" title="hyperspace" />. A warp drive is a device that distorts the shape of the space-time continuum. A spacecraft equipped with a warp drive may travel at speeds greater than that of light by many orders of magnitude. In contrast to some other fictitious faster-than-light technologies such as a <Link slug="Hyperspace" title="jump drive" />, the warp drive does not permit instantaneous travel and transfers between two points, but rather involves a measurable passage of time which is pertinent to the concept. In contrast to hyperspace, spacecraft at warp velocity would continue to interact with objects in &quot;normal space&quot;.
                <br />
                <br />
                The general concept of warp drive was introduced by John W. Campbell in his 1957 novel <i>Island of Space</i>. <i>Brave New Words</i> gave the earliest example of the term &quot;space-warp drive&quot; as Fredric Brown&apos;s <i>Gateway to Darkness</i> (1949), and also cited an unnamed story from <i>Cosmic Stories</i> (May 1941) as using the word &quot;warp&quot; in the context of space travel, although the usage of this term as a &quot;bend or curvature&quot; in space which facilitates travel can be traced to several works at as far back as the mid-1930s, for example Jack Williamson&apos;s <i>The Cometeers</i> (1936).
            </p>
            <ParagraphSecondaryHeader id="Einsteins_space_warp_and_real_world_physics">Einstein&apos;s space warp and real-world physics</ParagraphSecondaryHeader>
            <span id="Einsteins_space_warp_and_real_world_physics"></span>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lorentz_factor.svg/330px-Lorentz_factor.svg.png" w={300} h={400} caption={
                (
                    <>
                        Lorentz factor γ as a function of velocity. Its initial value is 1 (when <i>v</i> = 0); and as velocity approaches the speed of light (<i>v</i> → <i>c</i>) γ increases without bound (γ → ∞).
                    </>
                )
            } />
            <br />
            <p>
                Einstein&apos;s theory of special relativity states that speed of light travel is impossible for material objects that, unlike photons, have a non-zero rest mass. The problem of a material object exceeding light speed is that an infinite amount of kinetic energy would be required to travel at exactly the speed of light. Warp drives are one of the science-fiction tropes that serve to circumvent this limitation in fiction to facilitate stories set at galactic scales. However, the concept of space warp has been criticized as &quot;illogical&quot;, and has been connected to several other rubber science ideas that do not fit into our current understanding of physics, such as antigravity or negative mass.
                <br />
                <br />
                Some argue that these effects mean that although it&apos;s not possible to travel faster than the speed of light, both space and time &quot;warp&quot; to allow travelling the distance of one light year, in less than a year. Although it is not possible to travel faster than the speed of light, the effective speed is faster than light. This warping of space and time is precisely mathematically specified by the Lorentz factor, which depends on velocity. Although only theoretical when published over 100 years ago, the effect has since been measured and confirmed many times. In the limit, at light speed time stops completely and it is possible to travel infinite distances across space with no passage of time.
                <br />
                <br />
                Although the concept of warp drive has originated in fiction, it has received some scientific consideration, most notably related to the 1990s concept of the Alcubierre drive. Alcubierre stated in an email to William Shatner that his theory was directly inspired by the term used in the TV series <i>Star Trek</i> and cites the &quot;&apos;warp drive&apos; of science fiction&quot; in his 1994 article.
                <br />
                <br />
                In 2021, DARPA-funded researcher Harold White, of the Limitless Space Institute, claimed that he had succeeded in creating a real warp bubble, saying &quot;our detailed numerical analysis of our custom Casimir cavities helped us identify a real and manufacturable nano/microstructure that is predicted to generate a negative vacuum energy density such that it would manifest a real nanoscale warp bubble, not an analog, but the real thing.&quot;.
            </p>
            <ParagraphSecondaryHeader id="Star_Trek"><i>Star Trek</i></ParagraphSecondaryHeader>
            <span id="Star_Trek"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Star_Trek_Warp_Field.svg/330px-Star_Trek_Warp_Field.svg.png" w={300} h={300} caption={
                (
                    <>
                        A representation of a <i>Star Trek</i> &quot;warp bubble&quot;
                    </>
                )
            } />
            <br />
            <p>
                Warp drive is one of the fundamental features of the <i>Star Trek</i> franchise and one of the best-known examples of space warp (warp drive) in fiction. In the first pilot episode of <i>Star Trek: The Original Series</i>, &quot;The Cage&quot;, it is referred to as a &quot;hyperdrive&quot;, with Captain Pike stating the speed to reach planet Talos IV as &quot;time warp, factor 7&quot;. The warp drive in <i>Star Trek</i> is one of the most detailed fictional technologies. Compared to the <Link slug="Hyperspace" title="hyperspace drives" /> of other fictional universes, it differs in that a spaceship does not leave the normal space-time continuum and instead the space-time itself is distorted, as is made possible in the general theory of relativity.
                <br />
                <br />
                The basic functional principle of the warp drive in <i>Star Trek</i> is the same for all spaceships. A strong energy source, usually a so-called <i>warp core</i> or sometimes called <i>intermix chamber</i>, generates a high-energy plasma. This plasma is transported to the so-called <i>warp field generators</i> via lines that are reminiscent of pipes. These generators are basically coils in <i>warp nacelles</i> protruding from the spaceship. These generate a subspace field, the so-called <i>warp field</i> or a <i>warp bubble</i>, which distort space-time and propels the bubble and spaceship in the bubble forward.
                <br />
                <br />
                The warp core can be designed in various forms. Humans and most of the other fictional races use a moderated reaction of antideuterium and deuterium. The energy produced passes through a matrix, which is made of a fictional chemical element, called dilithium. However, other species are shown to use different methods for faster-than-light propulsion. The Romulans, for example, use artificial micro-black holes called <i>quantum singularities</i>.
                <br />
                <br />
                The speeds are given in warp factors and follow a Geometric progression. The first scale developed by Franz Joseph was simply a cubic progression with no limit. This leads to the use of ever growing warp factors in the <i>Original Series</i> and the <i>Animated Series</i>. For example, warp 14.1 in the TOS-episode &quot;That Which Survives&quot; or warp 36 in the TAS-episode &quot;The Counter-Clock Incident&quot;. In order to focus more on the story and away from the technobabble, Gene Roddenberry commissioned Michael Okuda to invent a revised warp scale. Warp 10 should be the absolute limit and stand for infinite speed. In homage to Gene Roddenberry, this limit was also called &quot;Eugene&apos;s Limit&quot;. Okuda explains this in an author&apos;s comment in his technical manual for the USS <i>Enterprise-D</i>. Between Warp 1 (the speed of light) and Warp 9, the increase was still roughly geometric, but the exponent was adjusted so that the speeds were higher compared to the old scale. For instance, Warp 9 is more than 1500 times faster than Warp 1 in comparison to the 729 times (nine to the power of 3) calculated using the original cubic formula. In the same author&apos;s comment, Okuda explains that the motivation was to fulfill fan expectations that the new Enterprise is much faster than the original, but without changing the warp factor numbers. Between Warp 9 and Warp 10, the new scale grows exponentially. Only in a single episode of Star Trek Voyager there was a specific numerical speed value given for a warp factor. In the episode &quot;The 37&apos;s&quot;, Tom Paris tells Amelia Earhart that Warp 9.9 is about 4 billion miles per second (using customary units for the character&apos;s benefit). That is more than 14 times the value of Warp 9 and equal to around 21,400 times speed of light. However, this statement contradicts the technical manuals and encyclopedias written by Rick Sternbach and Michael Okuda. There a speed of 3053 times the speed of light was established for a warp factor of 9.9 and a speed of 7912 times the speed of light for a warp factor of 9.99. Both numerical values are well below the value given by Tom Paris.
                <br />
                <br />
                In the episode &quot;Vis à Vis&quot;, a <i>coaxial warp drive</i> is mentioned. The working principle is explained in more detail in the <i>Star Trek Encyclopedia</i>. This variant of a warp drive uses spatial folding instead of a warp field and allows an instant movement with nearly infinite velocity.
                <br />
                <br />
                <i>Star Trek</i> has also introduced a so-called Transwarp concept, but without a fixed definition. It is effectively a catch-all phrase for any and all technologies and natural phenomena that enable speeds above Warp 9.99.
                <br />
                <br />
                Rick Sternbach described the basic idea in the Technical Manual:
            </p>
            <BlockQuote>&quot;Finally, we had to provide some loophole for various powerful aliens like Q, who have a knack for tossing the ship million of light years in the time of a commercial break. [...] This lets Q and his friends have fun in the 9.9999+ range, but also lets our ship travel slowly enough to keep the galaxy a big place, and meets the other criteria.&quot;</BlockQuote>
        </>
    );
    return (
        <Layout topic="Science Fiction" title="Warp drive" thumbnail="/assets/warp_drive.png" content={content} />
    );
};