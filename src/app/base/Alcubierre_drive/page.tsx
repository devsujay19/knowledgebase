import BlockQuote from "@/components/BlockQuote";
import Bold from "@/components/Bold";
import Link from "@/components/Link";
import OnboardingCitation from "@/components/OnboardingCitation";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import ReferencingVisual from "@/components/ReferencingVisual";
import SubTitle from "@/components/SubTitle";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alcubierre drive - Knowledge Base | Developer Sujay",
};

export default function Alcubierre_drive() {
    const content = (
        <>
            <p>
                The <Bold>Alcubierre drive</Bold> ([alkuˈβjere]) is a speculative <Link slug="Warp_drive" title="warp drive" /> idea according to which a spacecraft could achieve apparent faster-than-light travel by contracting space in front of it and expanding space behind it, under the assumption that a configurable energy-density field lower than that of vacuum (that is, negative mass) could be created. Proposed by theoretical physicist Miguel Alcubierre in 1994, the Alcubierre drive is based on a solution of Einstein&apos;s field equations. Since those solutions are metric tensors, the Alcubierre drive is also referred to as <Bold>Alcubierre metric</Bold>.
            </p>
            <br />
            <ReferencingVisual src="/assets/alcubierre_drive.png" w={1000} h={900} caption={
                (
                    <>
                        Two-dimensional visualization of an Alcubierre drive, showing the opposing regions of expanding and contracting spacetime that displace the central region
                    </>
                )
            } />
            <br />
            <p>
                Objects cannot accelerate to the speed of light within normal spacetime; instead, the Alcubierre drive shifts space around an object so that the object would arrive at its destination more quickly than light would in normal space without breaking any physical laws.
                <br />
                <br />
                Although the metric proposed by Alcubierre is consistent with the Einstein field equations, construction of such a drive is not necessarily possible. The proposed mechanism of the Alcubierre drive implies a negative energy density and therefore requires exotic matter or manipulation of dark energy. If exotic matter with the correct properties cannot exist, then the drive cannot be constructed. At the close of his original article, however, Alcubierre argued (following an argument developed by physicists analyzing traversable wormholes) that the Casimir vacuum between parallel plates could fulfill the negative-energy requirement for the Alcubierre drive.
                <br />
                <br />
                Another possible issue is that, although the Alcubierre metric is consistent with Einstein&aos;s equations, general relativity does not incorporate quantum mechanics. Some physicists have presented arguments to suggest that a theory of quantum gravity (which would incorporate both theories) would eliminate those solutions in general relativity that allow for backward time travel and thus make the Alcubierre drive invalid.
            </p>
            <ParagraphSecondaryHeader id="History">History</ParagraphSecondaryHeader>
            <p id="History">
                In 1994, Miguel Alcubierre proposed a method for changing the geometry of space by creating a wave that would cause the fabric of space ahead of a spacecraft to contract and the space behind it to expand. The ship would then ride this wave inside a region of flat space, known as a <i>warp bubble</i>, and would not move within this bubble but instead be carried along as the region itself moves due to the actions of the drive. The local velocity relative to the deformed space-time would be subluminal, but the speed at which a spacecraft could move would be superluminal, thereby rendering possible interstellar flight, such as a visit to <i>Proxima Centauri</i> within a few days.
            </p>
            <ParagraphSecondaryHeader id="Alcubierre_metric">Alcubierre metric</ParagraphSecondaryHeader>
            <p id="Alcubierre_metric">
                The Alcubierre metric defines the warp-drive spacetime. It is a Lorentzian manifold that, if interpreted in the context of general relativity, allows a warp bubble to appear in previously flat spacetime and move away at effectively faster-than-light speed. The interior of the bubble is an inertial reference frame and inhabitants experience no proper acceleration. This method of transport does not involve objects in motion at faster-than-light speeds with respect to the contents of the warp bubble; that is, a light beam within the warp bubble would still always move more quickly than the ship. Because objects within the bubble are not moving (locally) more quickly than light, the mathematical formulation of the Alcubierre metric is consistent with the conventional claims of the laws of relativity (namely, that an object with mass cannot attain or exceed the speed of light) and conventional relativistic effects such as time dilation would not apply as they would with conventional motion at near-light speeds.
                <br />
                <br />
                An extension of the Alcubierre metric that eliminates the expansion of the volume elements and instead relies on the change in distances along the direction of travel is that of mathematician José Natário. In his metric, spacetime contracts towards the prow of the ship and expands in the direction perpendicular to the motion, meaning that the bubble actually &quot;slides&quot; through space, roughly speaking by &quot;pushing space asid&quot;.
                <br />
                <br />
                The Alcubierre drive remains a hypothetical concept with seemingly difficult problems, although the amount of energy required is no longer thought to be unobtainably large. Furthermore, Alexey Bobrick and Gianni Martire claim that, in principle, a class of subluminal, spherically symmetric warp drive spacetimes can be constructed based on physical principles presently known to humanity, such as positive energy.
            </p>
            <ParagraphSecondaryHeader id="Mathematics">Mathematics</ParagraphSecondaryHeader>
            <p id="Mathematics">
                Using the ADM<OnboardingCitation citeNoteNumber={1} content={
                    (
                        <>
                            The <Bold>Arnowitt–Deser–Misner</Bold> (<Bold>ADM</Bold>) <Bold>formalism</Bold> is a Hamiltonian formulation of general relativity that plays an important role in canonical quantum gravity and numerical relativity. It was first published in 1959.
                        </>
                    )
                } /> formalism of general relativity, the spacetime is described by a foliation of space-like hypersurfaces of constant coordinate time <i>t</i>, with the metric taking the following general form:
            </p>
            <br />
            <div className="pl-0 invert">
                <ReferencingVisual src="https://wikimedia.org/api/rest_v1/media/math/render/svg/25ae9c8a933fdc627c0ee497365c56ff1dabae12" w={1000} h={300} caption={<></>} />
            </div>
            <br />
            <p>
                where
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <i>α</i> is the lapse function that gives the interval of proper time between nearby hypersurfaces,
                    </li>
                    <br />
                    <li>
                        <i>β<sup>i</sup></i> is the shift vector that relates the spatial coordinate systems on different hypersurfaces,
                    </li>
                    <br />
                    <li>
                        <i>γ<sub>ij</sub></i> is a positive-definite metric on each of the hypersurfaces.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                The particular form that Alcubierre studied is defined by:
            </p>
            <br />
            <div className="px-0 invert">
                <ReferencingVisual src="https://wikimedia.org/api/rest_v1/media/math/render/svg/59ae8beb08bae255e40962f098bd9ac6f042a3d6" w={400} h={400} caption={<></>} />
            </div>
            <br />
            <p>
                where
            </p>
            <br />
            <div className="pl-0 invert">
                <ReferencingVisual src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a79c6cc361dd5feaff2c768d482263ce5f3c76c6" w={1000} h={600} caption={<></>} />
            </div>
            <br />
            <p>
                with arbitrary parameters <i>R</i> {">"} 0 and <i>σ</i> {">"} 0. Alcubierre&apos;s specific form of the metric can thus be written:
            </p>
            <br />
            <div className="pl-0 invert">
                <ReferencingVisual src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34fc4fd0c1af54c827eafabc29cb44fa7341c948" w={1000} h={400} caption={<></>} />
            </div>
            <br />
            <p>
                With this particular form of the metric, it can be shown that the energy density measured by observers whose 4-velocity is normal to the hypersurfaces is given by:
            </p>
            <br />
            <div className="pl-0 invert">
                <ReferencingVisual src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6ad77d62b25a48501370a595ad58b7d091efe989" w={400} h={250} caption={<></>} />
            </div>
            <br />
            <p>
                where <i>g</i> is the determinant of the metric tensor.
                <br />
                <br />
                hus, because the energy density is negative, one needs exotic matter to travel more quickly than the speed of light. The existence of exotic matter is not theoretically ruled out; however, generating and sustaining enough exotic matter to perform feats such as faster-than-light travel (and to keep open the &quot;throat&quot; of a wormhole) is thought to be impractical. According to writer Robert Low, within the context of general relativity it is impossible to construct a warp drive in the absence of exotic matter.
            </p>
            <ParagraphSecondaryHeader id="Connection_to_dark_energy_and_dark_matter">Connection to dark energy and dark matter</ParagraphSecondaryHeader>
            <p id="Connection_to_dark_energy_and_dark_matter">
                Astrophysicist Jamie Farnes from the University of Oxford has proposed a theory, published in the peer-reviewed scientific journal <i>Astronomy & Astrophysics</i>, that unifies dark energy and dark matter into a single dark fluid, and which is expected to be testable by the Square Kilometre Array around 2030. Farnes found that Albert Einstein had explored the idea of gravitationally repulsive negative masses while developing the equations of general relativity, an idea which leads to a &quot;beautiful&quot; hypothesis where the cosmos has equal amounts of positive and negative qualities. Farnes&apos; theory relies on negative masses that behave identically to the physics of the Alcubierre drive, providing a natural solution for the current &quot;crisis in cosmology&quot; due to a time-variable Hubble parameter.
                <br />
                <br />
                As Farnes&apos; theory allows a positive mass (i.e. a ship) to reach a speed equal to the speed of light, it has been dubbed &quot;controversial&quot;. If the theory is correct, which has been highly debated in the scientific literature, it would explain dark energy, dark matter, allow closed timelike curves, and suggest that an Alcubierre drive is physically possible with exotic matter.
            </p>
            <ParagraphSecondaryHeader id="Physics">Physics</ParagraphSecondaryHeader>
            <p id="Physics">
                With regard to certain specific effects of special relativity, such as Lorentz contraction and time dilation, the Alcubierre metric has some apparently peculiar aspects. In particular, Alcubierre has shown that a ship using an Alcubierre drive travels on a free-fall geodesic even while the warp bubble is accelerating: its crew would be in free fall while accelerating without experiencing accelerational g-forces. Enormous tidal forces, however, would be present near the edges of the flat-space volume because of the large space curvature there, but a suitable specification of the metric would keep the tidal forces very small within the volume occupied by the ship.
                <br />
                <br />
                The original warp-drive metric and simple variants of it happen to have the ADM form, which is often used in discussing the initial-value formulation of general relativity. This might explain the widespread misconception that this spacetime is a <i>solution</i> of the field equation of general relativity. Metrics in ADM form are <i>adapted</i> to a certain family of inertial observers, but these observers are not really physically distinguished from other such families. Alcubierre interpreted his &quot;warp bubble&quot; in terms of a contraction of space ahead of the bubble and an expansion behind, but this interpretation could be misleading, since the contraction and expansion actually refer to the relative motion of nearby members of the family of ADM observers.
                <br />
                <br />
                In general relativity, one often first specifies a plausible distribution of matter and energy, and then finds the geometry of the spacetime associated with it; but it is also possible to run the Einstein field equations in the other direction, first specifying a metric and then finding the energy–momentum tensor associated with it, and this is what Alcubierre did in building his metric. This practice means that the solution can violate various energy conditions and require exotic matter. The need for exotic matter raises questions about whether one can distribute the matter in an initial spacetime that lacks a warp bubble in such a way that the bubble is created at a later time, although some physicists have proposed models of dynamical warp-drive spacetimes in which a warp bubble is formed in a previously flat space. Moreover, according to Serguei Krasnikov, generating a bubble in a previously flat space for a <i>one-way</i> faster-than-light trip requires forcing the exotic matter to move at local faster-than-light speeds, something that would require the existence of tachyons<OnboardingCitation citeNoteNumber={2} content={
                    (
                        <>
                            A <Bold>tachyon</Bold> or <Bold>tachyonic particle</Bold> is a hypothetical particle that always travels faster than light. Physicists believe that faster-than-light particles cannot exist because they are inconsistent with the known laws of physics. If such particles did exist they could be used to send signals faster than light
                        </>
                    )
                } />, although Krasnikov also notes that when the spacetime is not flat from the outset, a similar result could be achieved without tachyons by placing in advance some devices along the travel path and programming them to come into operation at preassigned moments and to operate in a preassigned manner. Some suggested methods avoid the problem of tachyonic motion, but would probably generate a naked singularity at the front of the bubble. Allen Everett and Thomas Roman comment on Krasnikov&apos;s finding (Krasnikov tube):
            </p>
            <BlockQuote>[The finding] does not mean that Alcubierre bubbles, if it were possible to create them, could not be used as a means of superluminal travel. It only means that the actions required to change the metric and create the bubble must be taken beforehand by some observer whose forward light cone contains the entire trajectory of the bubble.</BlockQuote>
            <p>
                For example, if one wanted to travel to Deneb (2,600 light-years away) and arrive less than 2,600 years in the future according to external clocks, it would be required that someone had already begun work on warping the space from Earth to Deneb at least 2,600 years ago:
            </p>
            <BlockQuote>A spaceship appropriately located with respect to the bubble trajectory could then choose to enter the bubble, rather like a passenger catching a passing trolley car, and thus make the superluminal journey ... as Krasnikov points out, causality considerations do not prevent the crew of a spaceship from arranging, by their own actions, to complete a <i>round trip</i> from Earth to a distant star and back in an arbitrarily short time, as measured by clocks on Earth, by altering the metric along the path of their outbound trip.</BlockQuote>
            <ParagraphSecondaryHeader id="Difficulties">Difficulties</ParagraphSecondaryHeader>
            <span id="Difficulties"></span>
            <SubTitle>Mass–energy requirement</SubTitle>
            <p>
                The metric of this form has significant difficulties because all known warp-drive spacetime theories violate various energy conditions. Nevertheless, an Alcubierre-type warp drive might be realized by exploiting certain experimentally verified quantum phenomena, such as the Casimir effect, that lead to stress–energy tensors that also violate the energy conditions, such as negative mass–energy, when described in the context of the quantum field theories.
                <br />
                <br />
                If certain quantum inequalities conjectured by Ford and Roman hold, the energy requirements for some warp drives may be unfeasibly large as well as negative. For example, the energy equivalent of −10<sup>64</sup> kg might be required to transport a small spaceship across the Milky Way—an amount orders of magnitude greater than the estimated mass of the observable universe. Counterarguments to these apparent problems have also been offered, although the energy requirements still generally require a Type III civilization on the Kardashev scale.
                <br />
                <br />
                Chris Van Den Broeck of the Katholieke Universiteit Leuven in Belgium, in 1999, tried to address the potential issues. By contracting the 3+1-dimensional surface area of the bubble being transported by the drive, while at the same time expanding the three-dimensional volume contained inside, Van Den Broeck was able to reduce the total energy needed to transport small atoms to less than three solar masses. Later in 2003, by slightly modifying the Van den Broeck metric, Serguei Krasnikov reduced the necessary total amount of negative mass to a few milligrams. Van Den Broeck detailed this by saying that the total energy can be reduced dramatically by keeping the surface area of the warp bubble itself microscopically small, while at the same time expanding the spatial volume inside the bubble. However, Van Den Broeck concludes that the energy densities required are still unachievable, as are the small size (a few orders of magnitude above the Planck scale) of the spacetime structures needed.
                <br />
                <br />
                In 2012, physicist Harold White and collaborators announced that modifying the geometry of exotic matter could reduce the mass–energy requirements for a macroscopic space ship from the equivalent of the planet Jupiter to that of the Voyager 1 spacecraft (c. 700 kg) or less, and stated their intent to perform small-scale experiments in constructing warp fields. White proposed to thicken the extremely thin wall of the warp bubble, so the energy is focused in a larger volume, but the overall peak energy density is actually smaller. In a flat 2D representation, the ring of positive and negative energy, initially very thin, becomes a larger, fuzzy torus (donut shape). However, as this less energetic warp bubble also thickens toward the interior region, it leaves less flat space to house the spacecraft, which has to be smaller. Furthermore, if the intensity of the space warp can be oscillated over time, the energy required is reduced even more. According to White, a modified Michelson–Morley interferometer could test the idea: one of the legs of the interferometer would appear to have a slightly different length when the test devices were energised. Alcubierre has expressed skepticism about the experiment, saying: &quot;from my understanding there is no way it can be done, probably not for centuries if at all&quot;
                <br />
                <br />
                In 2021, physicist Erik Lentz described a way warp drives sourced from known and familiar purely positive energy could exist—warp bubbles based on superluminal self-reinforcing &quot;soliton&quot; waves. The claim is controversial, with other physicists arguing that all physically reasonable warp drives violate the weak energy condition, as well as both the strong and dominant energy conditions.
            </p>
            <br />
            <SubTitle>Placement of matter</SubTitle>
            <p>
                Krasnikov proposed that if tachyonic matter cannot be found or used, then a solution might be to arrange for masses along the path of the vessel to be set in motion in such a way that the required field was produced. But in this case, the Alcubierre drive vessel can only travel routes that, like a railroad, have first been equipped with the necessary infrastructure. The pilot inside the bubble is causally disconnected from its walls and cannot carry out any action outside the bubble: the bubble cannot be used for the first trip to a distant star because the pilot cannot place infrastructure ahead of the bubble while &quot;in transit&quot;. For example, traveling to Vega (which is 25 light-years from Earth) requires arranging everything so that the bubble moving toward Vega with a superluminal velocity would appear; such arrangements will always take more than 25 years.
                <br />
                <br />
                Coule has argued that schemes, such as the one proposed by Alcubierre, are infeasible because matter placed <i>en route</i> of the intended path of a craft must be placed at superluminal speed—that constructing an Alcubierre drive requires an Alcubierre drive even if the metric that allows it is physically meaningful. Coule further argues that an analogous objection will apply to <i>any</i> proposed method of constructing an Alcubierre drive.
            </p>
            <br />
            <SubTitle>Survivability inside the bubble</SubTitle>
            <p>
                An article by José Natário (2002) argues that crew members could not control, steer or stop the ship in its warp bubble because the ship could not send signals to the front of the bubble.
                <br />
                <br />
                A 2009 article by Carlos Barceló, Stefano Finazzi, and Stefano Liberati uses quantum theory to argue that the Alcubierre drive at faster-than-light velocities is impossible mostly because extremely high temperatures caused by Hawking radiation would destroy anything inside the bubble at superluminal velocities and destabilize the bubble itself; the article also argues that these problems are absent if the bubble velocity is subluminal, although the drive still requires exotic matter.
            </p>
            <br />
            <SubTitle>Damaging effect on destination</SubTitle>
            <p>
                Brendan McMonigal, Geraint F. Lewis, and Philip O&apos;Byrne have argued that were an Alcubierre-driven ship to decelerate from superluminal speed, the particles that its bubble had gathered in transit would be released in energetic outbursts akin to the infinitely-blueshifted radiation hypothesized to occur at the inner event horizon of a Kerr black hole; forward-facing particles would thereby be energetic enough to destroy anything at the destination directly in front of the ship.
            </p>
            <br />
            <SubTitle>Wall thickness</SubTitle>
            <p>
                The amount of negative energy required for such a propulsion is not yet known. Pfenning and Allen Everett of Tufts hold that a warp bubble traveling at 10-times the speed of light must have a wall thickness of no more than 10<sup>−32</sup> meters—close to the limiting Planck length, 1.6 × 10<sup>−35</sup> meters. In Alcubierre&apos;s original calculations, a bubble macroscopically large enough to enclose a ship of 200 meters would require a total amount of exotic matter greater than the mass of the observable universe, and straining the exotic matter to an extremely thin band of 10<sup>−32</sup> meters is considered impractical. Similar constraints apply to Krasnikov&apos;s superluminal subway. Chris Van den Broeck constructed a modification of Alcubierre&apos;s model that requires much less exotic matter but places the ship in a curved space-time &quot;bottle&quot; whose neck is about 10<sup>−32</sup> meters.
            </p>
            <br />
            <SubTitle>Causality violation and semiclassical instability</SubTitle>
            <p>
                Calculations by physicist Allen Everett show that warp bubbles could be used to create closed timelike curves in general relativity, meaning that the theory predicts that they could be used for backwards time travel. While it is possible that the fundamental laws of physics might allow closed timelike curves, the chronology protection conjecture hypothesizes that in all cases where the classical theory of general relativity allows them, quantum effects would intervene to eliminate the possibility, making these spacetimes impossible to realize. A possible type of effect that would accomplish this is a buildup of vacuum fluctuations on the border of the region of spacetime where time travel would first become possible, causing the energy density to become high enough to destroy the system that would otherwise become a time machine. Some results in semiclassical gravity appear to support the conjecture, including a calculation dealing specifically with quantum effects in warp-drive spacetimes that suggested that warp bubbles would be semiclassically unstable, but ultimately the conjecture can only be decided by a full theory of quantum gravity.
                <br />
                <br />
                Alcubierre briefly discusses some of these issues in a series of lecture slides posted online, where he writes: &quot;beware: in relativity, any method to travel faster than light can in principle be used to travel back in time (a time machine)&quot;. In the next slide, he brings up the chronology protection conjecture and writes: &quot;The conjecture has not been proven (it wouldn&apos;t be a conjecture if it had), but there are good arguments in its favor based on quantum field theory. The conjecture does not prohibit faster-than-light travel. It just states that if a method to travel faster than light exists, and one tries to use it to build a time machine, something will go wrong: the energy accumulated will explode, or it will create a black hole.&quot;.
            </p>
            <ParagraphSecondaryHeader id="Relation_to_Star_Trek_warp_drive">Relation to <i>Star Trek</i> warp drive</ParagraphSecondaryHeader>
            <p id="Relation_to_Star_Trek_warp_drive">
                The <i>Star Trek</i> television series and films use the term &quot;warp drive&quot; to describe their method of faster-than-light travel. Neither the Alcubierre theory, nor anything similar, existed when the series was conceived—the term &quot;warp drive&quot; and general concept originated with John W. Campbell&apos;s 1931 science fiction novel <i>Islands of Space</i>. Alcubierre stated in an email to William Shatner that his theory was directly inspired by the term used in the show and cites the &quot;&apos;warp drive&apos; of science fiction&quot; in his 1994 article. A USS <i>Alcubierre</i> appears in the <i>Star Trek</i> tabletop RPG <i>Star Trek Adventures</i>. Since the release of <i>Star Trek: The Original Series</i>, more recent <i>Star Trek</i> spin-off series have made closer use of the theory behind the Alcubierre Drive incorporating warp bubbles/fields into the in-universe science.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Science Fiction" title="Alcubierre drive" thumbnail="/assets/alcubierre_drive.png" content={content} />
        </>
    );
};