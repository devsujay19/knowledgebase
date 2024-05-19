import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import { Metadata } from "next";
import OnboardingCitation from "@/components/OnboardingCitation";
import ReferencingVideoVisual from "@/components/ReferencingVisual(Video)";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import SubTitle from "@/components/SubTitle";
import Link from "@/components/Link";
import BlockQuote from "@/components/BlockQuote";

export const metadata: Metadata = {
    title: "Pulsar - Knowledge Base | Developer Sujay",
};

export default function Pulsar() {
    const content = (
        <>
            <p>
                A <Bold>pulsar</Bold> (from <Bold><i>pulsa</i></Bold>ting <Bold><i>r</i></Bold>adio source) is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth (similar to the way a lighthouse can be seen only when the light is pointed in the direction of an observer), and is responsible for the pulsed appearance of emission. Neutron stars are very dense and have short, regular rotational periods. This produces a very precise interval between pulses that ranges from milliseconds to seconds for an individual pulsar. Pulsars are one of the candidates for the source of <Bold>ultra-high-energy cosmic rays</Bold> (<Bold>UHECR</Bold>).
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg/223px-PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg" w={200} h={200} caption={
                (
                    <>
                        PSR B1509−58<OnboardingCitation citeNoteNumber={1} content={
                            (
                                <>
                                    <Bold>PSR B1509−58</Bold> is a pulsar approximately 17,000 light-years away in the constellation of Circinus discovered by the <Bold>Einstein X-Ray Observatory</Bold> in 1982. It appears approximately 1,700 years old, and it sits in a nebula that spans about 150 light years. <Bold>NASA</Bold> described the star as &quot;a rapidly spinning neutron star which is spewing energy out into the space around it to create complex and intriguing structures, including one that resembles a large cosmic hand&quot;. It is also known by the name &quot;Hand of God&quot;. The spin rate is &quot;almost 7 times per second&quot;.
                                </>
                            )
                        } /> – X-rays from Chandra are gold; Infrared from WISE in red, green and blue/max.
                    </>
                )
            } />
            <br />
            <ReferencingVideoVisual src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b7/Pulsar_anim.ogv/Pulsar_anim.ogv.480p.vp9.webm" w={380} h={230} caption={
                (
                    <>
                        Animation of a rotating pulsar. The sphere in the middle represents the neutron star, the curves indicate the magnetic field lines and the protruding cones represent the emission zones.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lightsmall-optimised.gif/220px-Lightsmall-optimised.gif" w={380} h={230} caption={
                (
                    <>
                        Illustration of the &quot;lighthouse&quot; effect produced by a pulsar.
                    </>
                )
            } />
            <br />
            <p>
                The periods of pulsars make them very useful tools for astronomers. Observations of a pulsar in a binary neutron star system were used to indirectly confirm the existence of gravitational radiation. The first extrasolar planets were discovered in 1992 around a pulsar, specifically PSR B1257+12. In 1983, certain types of pulsars were detected that, at that time, exceeded the accuracy of atomic clocks in keeping time.
            </p>
            <ParagraphSecondaryHeader id="History_of_observation">History of observation</ParagraphSecondaryHeader>
            <span id="History_of_observation"></span>
            <SubTitle>Discovery</SubTitle>
            <p>
                Signals from the first discovered pulsar<OnboardingCitation citeNoteNumber={2} content={
                    (
                        <>
                            <Bold>PSR B1919+21</Bold> is a pulsar with a period of 1.3373 seconds and a pulse width of 0.04 seconds. Discovered by Jocelyn Bell Burnell on 28 November 1967, it is the first discovered radio pulsar.
                        </>
                    )
                } /> were initially observed by Jocelyn Bell while analyzing data recorded on August 6, 1967, from a newly commissioned radio telescope that she helped build. Initially dismissed as radio interference by her supervisor and developer of the telescope, Antony Hewish, the fact that the signals always appeared at the same declination and right ascension soon ruled out a terrestrial source. On November 28, 1967, Bell and Hewish using a fast strip chart recorder resolved the signals as a series of pulses, evenly spaced every 1.337 seconds. No astronomical object of this nature had ever been observed before. On December 21, Bell discovered a second pulsar, quashing speculation that these might be signals beamed at earth from an extraterrestrial intelligence.
                <br />
                <br />
                When observations with another telescope confirmed the emission, it eliminated any sort of instrumental effects. At this point, Bell said of herself and Hewish that &quot;we did not really believe that we had picked up signals from another <Link slug="Civilization" title="civilization" />, but obviously the idea had crossed our minds and we had no proof that it was an entirely natural radio emission. It is an interesting problem—if one thinks one may have detected life elsewhere in the universe, how does one announce the results responsibly?&quot; Even so, they nicknamed the signal <i><Bold>LGM-1</Bold></i>, for &quot;little green men&quot; (a playful name for intelligent beings of extraterrestrial origin).
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg/220px-Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg" w={200} h={450} caption={
                (
                    <>
                        Chart on which Jocelyn Bell first recognised evidence of a pulsar, exhibited at Cambridge University Library
                    </>
                )
            } />
            <br />
            <p>
                It was not until a second pulsating source was discovered in a different part of the sky that the &quot;LGM hypothesis&quot; was entirely abandoned. Their pulsar was later dubbed CP 1919, and is now known by a number of designators including PSR B1919+21 and PSR J1921+2153. Although CP 1919 emits in radio wavelengths, pulsars have subsequently been found to emit in visible light, X-ray, and gamma ray wavelengths.
                <br />
                <br />
                The word &quot;pulsar&quot; first appeared in print in 1968:
            </p>
            <BlockQuote>An entirely novel kind of star came to light on Aug. 6 last year and was referred to, by astronomers, as LGM (Little Green Men). Now it is thought to be a novel type between a white dwarf and a neutron [star]. The name Pulsar is likely to be given to it. Dr. A. Hewish told me yesterday: &apos;... I am sure that today every radio telescope is looking at the Pulsars.&apos;</BlockQuote>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chandra-crab.jpg/220px-Chandra-crab.jpg" w={350} h={400} caption={
                (
                    <>
                        Composite optical/X-ray image of the Crab Nebula, showing synchrotron emission in the surrounding pulsar wind nebula, powered by injection of magnetic fields and particles from the central pulsar.
                    </>
                )
            } />
            <br />
            <p>
                The existence of neutron stars was first proposed by Walter Baade and Fritz Zwicky in 1934, when they argued that a small, dense star consisting primarily of neutrons would result from a supernova. Based on the idea of magnetic flux conservation from magnetic main sequence stars, Lodewijk Woltjer proposed in 1964 that such neutron stars might contain magnetic fields as large as 10<sup>14</sup> to 10<sup>16</sup> gauss (=10<sup>10</sup> to 10<sup>12</sup> tesla). In 1967, shortly before the discovery of pulsars, Franco Pacini suggested that a rotating neutron star with a magnetic field would emit radiation, and even noted that such energy could be pumped into a supernova remnant around a neutron star, such as the Crab Nebula. After the discovery of the first pulsar, Thomas Gold independently suggested a rotating neutron star model similar to that of Pacini, and explicitly argued that this model could explain the pulsed radiation observed by Bell Burnell and Hewish. In 1968, Richard V. E. Lovelace with collaborators discovered period <span className="text-lg font-bold italic">𝑃 ≈ 33</span> ms of the Crab Nebula pulsar using Arecibo Observatory. The discovery of the Crab pulsar provided confirmation of the rotating neutron star model of pulsars. The Crab pulsar 33-millisecond pulse period was too short to be consistent with other proposed models for pulsar emission. Moreover, the Crab pulsar is so named because it is located at the center of the Crab Nebula, consistent with the 1933 prediction of Baade and Zwicky. In 1974, Antony Hewish and Martin Ryle, who had developed revolutionary radio telescopes, became the first astronomers to be awarded the Nobel Prize in Physics, with the Royal Swedish Academy of Sciences noting that Hewish played a &quot;decisive role in the discovery of pulsars&quot;. Considerable controversy is associated with the fact that Hewish was awarded the prize while Bell, who made the initial discovery while she was his PhD student, was not. Bell claims no bitterness upon this point, supporting the decision of the Nobel prize committee.
            </p>
            <br />
            <SubTitle>Milestones</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Vela_Pulsar_jet.jpg/220px-Vela_Pulsar_jet.jpg" w={200} h={350} caption={
                (
                    <>
                        The Vela Pulsar and its surrounding pulsar wind nebula.
                    </>
                )
            } />
            <br />
            <p>
                In 1974, Joseph Hooton Taylor, Jr. and Russell Hulse discovered for the first time a pulsar in a binary system, PSR B1913+16. This pulsar orbits another neutron star with an orbital period of just eight hours. Einstein&apos;s theory of general relativity predicts that this system should emit strong gravitational radiation, causing the orbit to continually contract as it loses orbital energy. Observations of the pulsar soon confirmed this prediction, providing the first ever evidence of the existence of gravitational waves. As of 2010, observations of this pulsar continues to agree with general relativity. In 1993, the Nobel Prize in Physics was awarded to Taylor and Hulse for the discovery of this pulsar.
                <br />
                <br />
                In 1982, Don Backer led a group that discovered PSR B1937+21, a pulsar with a rotation period of just 1.6 milliseconds (38,500 rpm). Observations soon revealed that its magnetic field was much weaker than ordinary pulsars, while further discoveries cemented the idea that a new class of object, the &quot;millisecond pulsars&quot; (MSPs) had been found. MSPs are believed to be the end product of X-ray binaries. Owing to their extraordinarily rapid and stable rotation, MSPs can be used by astronomers as clocks rivaling the stability of the best atomic clocks on Earth. Factors affecting the arrival time of pulses at Earth by more than a few hundred nanoseconds can be easily detected and used to make precise measurements. Physical parameters accessible through pulsar timing include the 3D position of the pulsar, its proper motion, the electron content of the interstellar medium along the propagation path, the orbital parameters of any binary companion, the pulsar rotation period and its evolution with time. (These are computed from the raw timing data by Tempo, a computer program specialized for this task.) After these factors have been taken into account, deviations between the observed arrival times and predictions made using these parameters can be found and attributed to one of three possibilities: intrinsic variations in the spin period of the pulsar, errors in the realization of Terrestrial Time against which arrival times were measured, or the presence of background gravitational waves. Scientists are currently attempting to resolve these possibilities by comparing the deviations seen between several different pulsars, forming what is known as a pulsar timing array. The goal of these efforts is to develop a pulsar-based time standard precise enough to make the first ever direct detection of gravitational waves. In 2006, a team of astronomers at LANL proposed a model to predict the likely date of pulsar glitches with observational data from the Rossi X-ray Timing Explorer. They used observations of the pulsar PSR J0537−6910, that is known to be a quasi-periodic glitching pulsar. However, no general scheme for glitch forecast is known to date.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Artist%27s_concept_of_PSR_B1257%2B12_system.jpg/220px-Artist%27s_concept_of_PSR_B1257%2B12_system.jpg" w={350} h={350} caption={
                (
                    <>
                        Artist&apos;s impression of the planets orbiting PSR B1257+12. The one in the foreground is planet &quot;C&quot;.
                    </>
                )
            } />
            <br />
            <p>
                In 1992, Aleksander Wolszczan discovered the first extrasolar planets around PSR B1257+12. This discovery presented important evidence concerning the widespread existence of planets outside the Solar System, although it is very unlikely that any life form could survive in the environment of intense radiation near a pulsar.
                <br />
                <br />
                <br />
                In 2016, AR Scorpii was identified as the first pulsar in which the compact object is a white dwarf instead of a neutron star. Because its moment of inertia is much higher than that of a neutron star, the white dwarf in this system rotates once every 1.97 minutes, far slower than neutron-star pulsars. The system displays strong pulsations from ultraviolet to radio wavelengths, powered by the spin-down of the strongly magnetized white dwarf.
            </p>
            <ParagraphSecondaryHeader id="Nomenclature">Nomenclature</ParagraphSecondaryHeader>
            <p id="Nomenclature">
                Initially pulsars were named with letters of the discovering observatory followed by their right ascension (e.g. CP 1919). As more pulsars were discovered, the letter code became unwieldy, and so the convention then arose of using the letters PSR (Pulsating Source of Radio) followed by the pulsar&apos;s right ascension and degrees of declination (e.g. PSR 0531+21) and sometimes declination to a tenth of a degree (e.g. PSR 1913+16.7). Pulsars appearing very close together sometimes have letters appended (e.g. PSR 0021−72C and PSR 0021−72D).
                <br />
                <br />
                The modern convention prefixes the older numbers with a B (e.g. PSR B1919+21), with the B meaning the coordinates are for the 1950.0 epoch. All new pulsars have a J indicating 2000.0 coordinates and also have declination including minutes (e.g. PSR J1921+2153). Pulsars that were discovered before 1993 tend to retain their B names rather than use their J names (e.g. PSR J1921+2153 is more commonly known as PSR B1919+21). Recently discovered pulsars only have a J name (e.g. PSR J0437−4715). All pulsars have a J name that provides more precise coordinates of its location in the sky.
            </p>
            <ParagraphSecondaryHeader id="Formation_mechanism_turn_off">Formation, mechanism, turn off</ParagraphSecondaryHeader>
            <span id="Formation_mechanism_turn_off"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pulsar_schematic.svg/220px-Pulsar_schematic.svg.png" w={350} h={300} caption={
                (
                    <>
                        Schematic view of a pulsar. The sphere in the middle represents the neutron star, the curves indicate the magnetic field lines, the protruding cones represent the emission beams and the green line represents the axis on which the star rotates.
                    </>
                )
            } />
            <br />
            <p>
                The events leading to the formation of a pulsar begin when the core of a massive star is compressed during a supernova, which collapses into a neutron star. The neutron star retains most of its angular momentum, and since it has only a tiny fraction of its progenitor&apos;s radius (and therefore its moment of inertia is sharply reduced), it is formed with very high rotation speed. A beam of radiation is emitted along the magnetic axis of the pulsar, which spins along with the rotation of the neutron star. The magnetic axis of the pulsar determines the direction of the electromagnetic beam, with the magnetic axis not necessarily being the same as its rotational axis. This misalignment causes the beam to be seen once for every rotation of the neutron star, which leads to the &quot;pulsed&quot; nature of its appearance.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pulsar_formation_spinup_animation.gif/219px-Pulsar_formation_spinup_animation.gif" w={300} h={250} caption={
                (
                    <>
                        Animation of the increased spin of a pulsar as it collapses. It begins with (1) The rotating progenitor (2) The collapse and speedup and (3) The final fast spinning pulsar remnant. The animation demonstrates the conservation of momentum as the star spins faster as it collapses. The angular speed (<span className="text-lg font-bold italic">Ω/Ω<sub>init</sub></span>) and radius (
                        <span className="text-lg font-bold italic">𝑅/𝑅<sub>init</sub></span>) relative to the progenitor are shown throughout the process. This does not capture the entire collapse scale as the final star would be too small to see compared to its progenitor.
                    </>
                )
            } />
            <br />
            <p>
                In rotation-powered pulsars, the beam is the result of the rotational energy of the neutron star, which generates an electrical field from the movement of the very strong magnetic field, resulting in the acceleration of protons and electrons on the star surface and the creation of an electromagnetic beam emanating from the poles of the magnetic field. Observations by NICER of PSR J0030+0451 indicate that both beams originate from hotspots located on the south pole and that there may be more than two such hotspots on that star. This rotation slows down over time as electromagnetic power is emitted. When a pulsar&apos;s spin period slows down sufficiently, the radio pulsar mechanism is believed to turn off (the so-called &quot;death line&quot;). This turn-off seems to take place after about 10–100 million years, which means of all the neutron stars born in the 13.6-billion-year age of the universe, around 99% no longer pulsate.
                <br />
                <br />
                Though the general picture of pulsars as rapidly rotating neutron stars is widely accepted, Werner Becker of the Max Planck Institute for Extraterrestrial Physics said in 2006, &quot;The theory of how pulsars emit their radiation is still in its infancy, even after nearly forty years of work.&quot;
            </p>
            <ParagraphSecondaryHeader id="Category">Category</ParagraphSecondaryHeader>
            <p id="Category">
                Three distinct classes of pulsars are currently known to astronomers, according to the source of the power of the electromagnetic radiation:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        rotation-powered pulsars, where the loss of rotational energy of the star provides the power,
                    </li>
                    <br />
                    <li>
                        accretion-powered pulsars (accounting for most but not all X-ray pulsars), where the gravitational potential energy of accreted matter is the power source (producing X-rays that are observable from the Earth),
                    </li>
                    <br />
                    <li>
                        magnetars, where the decay of an extremely strong magnetic field provides the electromagnetic power.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                Although all three classes of objects are neutron stars, their observable behavior and the underlying physics are quite different. There are, however, some connections. For example, X-ray pulsars are probably old rotationally-powered pulsars that have already lost most of their power, and have only become visible again after their binary companions had expanded and begun transferring matter on to the neutron star.
                <br />
                <br />
                The process of accretion can, in turn, transfer enough angular momentum to the neutron star to &quot;recycle&quot; it as a rotation-powered millisecond pulsar. As this matter lands on the neutron star, it is thought to &quot;bury&quot; the magnetic field of the neutron star (although the details are unclear), leaving millisecond pulsars with magnetic fields 1000–10,000 times weaker than average pulsars. This low magnetic field is less effective at slowing the pulsar&apos;s rotation, so millisecond pulsars live for billions of years, making them the oldest known pulsars. Millisecond pulsars are seen in globular clusters, which stopped forming neutron stars billions of years ago.
                <br />
                <br />
                Of interest to the study of the state of the matter in a neutron star are the glitches observed in the rotation velocity of the neutron star. This velocity decreases slowly but steadily, except for an occasional sudden variation – a &quot;glitch&quot;. One model put forward to explain these glitches is that they are the result of &quot;starquakes&quot; that adjust the crust of the neutron star. Models where the glitch is due to a decoupling of the possibly superconducting interior of the star have also been advanced. In both cases, the star&apos;s moment of inertia changes, but its angular momentum does not, resulting in a change in rotation rate.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PIA23863-NeutronStars-Types-20200624.jpg/600px-PIA23863-NeutronStars-Types-20200624.jpg" w={1000} h={1000} caption={
                (
                    <>
                        Neutron star types (24 June 2020)
                    </>
                )
            } />
            <br />
            <SubTitle>Disrupted recycled pulsar</SubTitle>
            <p>
                When two massive stars are born close together from the same cloud of gas, they can form a binary system and orbit each other from birth. If those two stars are at least a few times as massive as the Sun, their lives will both end in supernova explosions. The more massive star explodes first, leaving behind a neutron star. If the explosion does not kick the second star away, the binary system survives. The neutron star can now be visible as a radio pulsar, and it slowly loses energy and spins down. Later, the second star can swell up, allowing the neutron star to suck up its matter. The matter falling onto the neutron star spins it up and reduces its magnetic field.
                <br />
                <br />
                This is called &quot;recycling&quot; because it returns the neutron star to a quickly-spinning state. Finally, the second star also explodes in a supernova, producing another neutron star. If this second explosion also fails to disrupt the binary, a double neutron star binary is formed. Otherwise, the spun-up neutron star is left with no companion and becomes a &quot;disrupted recycled pulsar&quot;, spinning between a few and 50 times per second.
            </p>
            <ParagraphSecondaryHeader id="Applications">Applications</ParagraphSecondaryHeader>
            <p id="Applications">
                The discovery of pulsars allowed astronomers to study an object never observed before, the neutron star. This kind of object is the only place where the behavior of matter at nuclear density can be observed (though not directly). Also, millisecond pulsars have allowed a test of general relativity in conditions of an intense gravitational field.
            </p>
            <br />
            <SubTitle>Maps</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pioneer_plaque_sun.svg/220px-Pioneer_plaque_sun.svg.png" w={300} h={250} caption={
                (
                    <>
                        Relative position of the Sun to the center of the Galaxy and 14 pulsars with their periods denoted, shown on a <i>Pioneer</i> plaque
                    </>
                )
            } />
            <p>
                Pulsar maps have been included on the two <i>Pioneer</i> plaques as well as the <i>Voyager</i> Golden Record. They show the position of the Sun, relative to 14 pulsars, which are identified by the unique timing of their electromagnetic pulses, so that Earth&apos;s position both in space and time can be calculated by potential extraterrestrial intelligence. Because pulsars are emitting very regular pulses of radio waves, its radio transmissions do not require daily corrections. Moreover, pulsar positioning could create a spacecraft navigation system independently, or be used in conjunction with satellite navigation.
            </p>
            <br />
            <SubTitle>Pulsar navigation</SubTitle>
            <p>
                <i>X-ray pulsar-based navigation and timing</i> (<i>XNAV</i>) or simply <i>pulsar navigation</i> is a navigation technique whereby the periodic X-ray signals emitted from pulsars are used to determine the location of a vehicle, such as a spacecraft in deep space. A vehicle using XNAV would compare received X-ray signals with a database of known pulsar frequencies and locations. Similar to GPS, this comparison would allow the vehicle to calculate its position accurately (±5 km). The advantage of using X-ray signals over radio waves is that X-ray telescopes can be made smaller and lighter. Experimental demonstrations have been reported in 2018.
            </p>
            <br />
            <SubTitle>Precise clocks</SubTitle>
            <p>
                Generally, the regularity of pulsar emission does not rival the stability of atomic clocks. They can still be used as external reference. For example, J0437−4715 has a period of 0.005757451936712637 s with an error of 1.7×10<sup>−17</sup> s. This stability allows millisecond pulsars to be used in establishing ephemeris time or in building pulsar clocks.
                <br />
                <br />
                <i>Timing noise</i> is the name for rotational irregularities observed in all pulsars. This timing noise is observable as random wandering in the pulse frequency or phase. It is unknown whether timing noise is related to pulsar glitches. According to a study published in 2023, the timing noise observed in pulsars is believed to be caused by background gravitational waves. Alternatively, it may be caused by stochastic fluctuations in both the internal (related to the presence of superfluids or turbulence) and external (due to magnetospheric activity) torques in a pulsar.
            </p>
            <br />
            <SubTitle>Probes of the interstellar medium</SubTitle>
            <p>
                The radiation from pulsars passes through the interstellar medium (ISM) before reaching Earth. Free <Link slug="Electron" title="electrons" /> in the warm (8000 K), ionized component of the ISM and H II regions affect the radiation in two primary ways. The resulting changes to the pulsar&apos;s radiation provide an important probe of the ISM itself.
                <br />
                <br />
                Because of the dispersive nature of the interstellar plasma, lower-frequency radio waves travel through the medium slower than higher-frequency radio waves. The resulting delay in the arrival of pulses at a range of frequencies is directly measurable as the <i>dispersion measure</i> of the pulsar. The dispersion measure is the total column density of free electrons between the observer and the pulsar:
            </p>
            <br />
            <TransparentReferencingVisual className="ml-0 bg- invert" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f56390c7fab138d77e076d273c58b419d7ef7969" w={180} h={140} caption={
                (
                    <></>
                )
            } />
            <br />
            <p>
                where <span className="text-lg font-bold">𝐷</span> is the distance from the pulsar to the observer, and <span className="text-lg font-bold">𝑛<sub>𝑒</sub></span> is the electron density of the ISM. The dispersion measure is used to construct models of the free electron distribution in the Milky Way.
                <br />
                <br />
                Additionally, density inhomogeneities in the ISM cause scattering of the radio waves from the pulsar. The resulting scintillation of the radio waves—the same effect as the twinkling of a star in visible light due to density variations in the Earth&apos;s atmosphere—can be used to reconstruct information about the small scale variations in the ISM. Due to the high velocity (up to several hundred km/s) of many pulsars, a single pulsar scans the ISM rapidly, which results in changing scintillation patterns over timescales of a few minutes. The exact cause of these density inhomogeneities remains an open question, with possible explanations ranging from turbulence to current sheets.
            </p>
            <br />
            <SubTitle>Probes of space-time</SubTitle>
            <p>
                Pulsars orbiting within the curved space-time around Sgr A*, the supermassive black hole at the center of the Milky Way, could serve as probes of gravity in the strong-field regime. Arrival times of the pulses would be affected by special- and general-relativistic Doppler shifts and by the complicated paths that the radio waves would travel through the strongly curved space-time around the black hole. In order for the effects of general relativity to be measurable with current instruments, pulsars with orbital periods less than about 10 years would need to be discovered; such pulsars would orbit at distances inside 0.01 pc from Sgr A*. Searches are currently underway; at present, five pulsars are known to lie within 100 pc from Sgr A*.
            </p>
            <br />
            <SubTitle>Gravitational wave detectors</SubTitle>
            <p>
                There are four consortia around the world which use pulsars to search for gravitational waves: the European Pulsar Timing Array (EPTA) in Europe, the Parkes Pulsar Timing Array (PPTA) in Australia, the North American Nanohertz Observatory for Gravitational Waves (NANOGrav) in Canada and the US, and the Indian Pulsar Timing Array (InPTA) in India. Together, the consortia form the International Pulsar Timing Array (IPTA). The pulses from Millisecond Pulsars (MSPs) are used as a system of galactic clocks. Disturbances in the clocks will be measurable at Earth. A disturbance from a passing gravitational wave will have a particular signature across the ensemble of pulsars, and will be thus detected.
            </p>
            <ParagraphSecondaryHeader id="Significant_pulsars">Significant pulsars</ParagraphSecondaryHeader>
            <span id="Significant_pulsars"></span>
            <h1 className="font-bold text-lg">Pulsars within 300 pc (parsec)</h1>
            <br />
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">PSR</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Distance (pc)</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            Age (Myr)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0030+0541
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            244
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">7,580</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0108−1431
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            238
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">166</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0437−4715
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            156
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">1,590</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0633+1746
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            156
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.342</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0659+1414
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            290
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.111</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0835−4510
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            290
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.0113</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J0453+0755
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            260
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">17.5</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J1045−4509
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            300
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">6,710</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J1741−2054
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            250
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.387</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J1856−3754
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            161
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">3.76</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            J2144−3933
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            165
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">272</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Fermi%27s_Gamma-ray_Pulsars.jpg/330px-Fermi%27s_Gamma-ray_Pulsars.jpg" w={400} h={380} caption={
                (
                    <>
                        Gamma-ray pulsars detected by the Fermi Gamma-ray Space Telescope.
                    </>
                )
            } />
            <br />
            <p>
                The pulsars listed here were either the first discovered of its type, or represent an extreme of some type among the known pulsar population, such as having the shortest measured period.
            </p>
            <br />
            <div className="pl-4">
                <ul className="list-disc pl-4">
                    <li>
                        The first radio pulsar &quot;CP 1919&quot; (now known as PSR B1919+21), with a pulse period of 1.337 seconds and a pulse width of 0.04-second, was discovered in 1967.
                    </li>
                    <br />
                    <li>
                        The first binary pulsar, PSR 1913+16, whose orbit is decaying due to the emission of gravitational radiation at the exact rate predicted by general relativity.
                    </li>
                    <br />
                    <li>
                        The brightest radio pulsar, the Vela Pulsar.
                    </li>
                    <br />
                    <li>
                        The first millisecond pulsar, PSR B1937+21
                    </li>
                    <br />
                    <li>
                        The brightest millisecond pulsar, PSR J0437−4715
                    </li>
                    <br />
                    <li>
                        The first X-ray pulsar, Cen X-3
                    </li>
                    <br />
                    <li>
                        The first accreting millisecond X-ray pulsar, SAX J1808.4−3658
                    </li>
                    <br />
                    <li>
                        The first pulsar with planets, PSR B1257+12
                    </li>
                    <br />
                    <li>
                        The first pulsar observed to have been affected by asteroids: PSR J0738−4042
                    </li>
                    <br />
                    <li>
                        The first double pulsar binary system, PSR J0737−3039
                    </li>
                    <br />
                    <li>
                        The shortest period pulsar, PSR J1748−2446ad, with a period of ~0.0014 seconds or ~1.4 milliseconds (716 times a second).
                    </li>
                    <br />
                    <li>
                        The longest period neutron star pulsar, PSR J0901-4046, with a period of 75.9 seconds.
                    </li>
                    <br />
                    <li>
                        The longest period pulsar, at 118.2 seconds, as well as one of the only known two white dwarf pulsars, AR Scorpii.
                    </li>
                    <br />
                    <li>
                        The first white dwarf pulsar, AE Aquarii.
                    </li>
                    <br />
                    <li>
                        The pulsar with the most stable period, PSR J0437−4715
                    </li>
                    <br />
                    <li>
                        The first millisecond pulsar with 2 stellar mass companions, PSR J0337+1715
                    </li>
                    <br />
                    <li>
                        PSR J1841−0500, stopped pulsing for 580 days. One of only two pulsars known to have stopped pulsing for more than a few minutes.
                    </li>
                    <br />
                    <li>
                        PSR B1931+24, has a cycle. It pulses for about a week and stops pulsing for about a month. One of only two pulsars known to have stopped pulsing for more than a few minutes.
                    </li>
                    <br />
                    <li>
                        Swift J0243.6+6124 most magnetic pulsar with 1.6×10<sup>13</sup> G.
                    </li>
                    <br />
                    <li>
                        PSR J0952-0607 heaviest pulsar with 2.35
                        <span className="inline-flex flex-col items-center justify-center align-middle">
                            <span>+0.17</span>
                            <span>−0.17</span>
                        </span> <i>M<sub>☉</sub></i>.
                    </li>
                    <br />
                    <li>
                        PSR J1903+0327, a ~2.15 ms pulsar discovered to be in a highly eccentric binary star system with a Sun-like star.
                    </li>
                    <br />
                    <li>
                        PSR J2007+2722, a 40.8-hertz &apos;recycled&apos; isolated pulsar was the first pulsar found by volunteers on data taken in February 2007 and analyzed by distributed computing project Einstein@Home.
                    </li>
                    <br />
                    <li>
                        PSR J1311–3430, the first millisecond pulsar discovered via gamma-ray pulsations and part of a binary system with the shortest orbital period.
                    </li>
                </ul>
            </div>
            <ParagraphSecondaryHeader id="Gallery">Gallery</ParagraphSecondaryHeader>
            <span id="Gallery"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/3/30/Crab_Lucky_video2.gif" w={500} h={200} caption={
                (
                    <>
                        Video – Crab Pulsar – bright pulse and interpulse.
                    </>
                )
            } />
            <br />
            <ReferencingVideoVisual src="https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7d/Vela_Pulsar_jet_seen_by_Chandra_Observatory.ogv/Vela_Pulsar_jet_seen_by_Chandra_Observatory.ogv.360p.webm " w={500} h={200} caption={
                (
                    <>
                        Video – Crab Pulsar – bright pulse and interpulse.
                    </>
                )
            } />
            <br />
            <ReferencingVideoVisual src="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/04/Artist%E2%80%99s_impression_video_of_the_exotic_binary_star_system_AR_Scorpii_%28video%29.webm/Artist%E2%80%99s_impression_video_of_the_exotic_binary_star_system_AR_Scorpii_%28video%29.webm.720p.vp9.webm" w={500} h={200} caption={
                (
                    <>
                        Video – Crab Pulsar – bright pulse and interpulse.
                    </>
                )
            } />
        </>
    );
    return (
        <>
            <Layout topic="Astronomy" title="Pulsar" thumbnail="/assets/pulsar.png" content={content} />
        </>
    );
};