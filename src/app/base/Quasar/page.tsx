import Link from "@/components/Link";
import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import { Metadata } from "next";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import BlockQuote from "@/components/BlockQuote";
import SubTitle from "@/components/SubTitle";
import ReferencingVideoVisual from "@/components/ReferencingVisual(Video)";

export const metadata: Metadata = {
    title: "Quasar - Knowledge Base | Developer Sujay",
};

export default function Quasar() {
    const content = (
        <>
            <p>
                A <Bold>quasar</Bold> (/ˈkweɪzɑːr/ <i>KWAY</i>-zar) is an extremely luminous active galactic nucleus (AGN). It is sometimes known as a <Bold>quasi-stellar object</Bold>, abbreviated <Bold>QSO</Bold>. The emission from an AGN is powered by a supermassive black hole with a mass ranging from millions to tens of billions of solar masses, surrounded by a gaseous accretion disc. Gas in the disc falling towards the black hole heats up and releases energy in the form of electromagnetic radiation. The radiant energy of quasars is enormous; the most powerful quasars have luminosities thousands of times greater than that of a galaxy such as the Milky Way. Quasars are usually categorized as a subclass of the more general category of AGN. The redshifts of quasars are of cosmological origin.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Artist%27s_rendering_ULAS_J1120%2B0641.jpg/450px-Artist%27s_rendering_ULAS_J1120%2B0641.jpg" w={450} h={300} caption={
                (
                    <>
                        Artist&apos;s rendering of the accretion disc in ULAS J1120+0641, a very distant quasar powered by a supermassive black hole with a mass two billion times that of the Sun
                    </>
                )
            } />
            <br />
            <p>
                The term <i>quasar</i> originated as a contraction of &quot;quasi-stellar <i>[star-like]</i> radio source&quot;—because they were first identified during the 1950s as sources of radio-wave emission of unknown physical origin—and when identified in photographic images at visible wavelengths, they resembled faint, star-like points of light. High-resolution images of quasars, particularly from the Hubble Space Telescope, have shown that quasars occur in the centers of galaxies, and that some host galaxies are strongly interacting or merging galaxies. As with other categories of AGN, the observed properties of a quasar depend on many factors, including the mass of the black hole, the rate of gas accretion, the orientation of the accretion disc relative to the observer, the presence or absence of a jet, and the degree of obscuration by gas and dust within the host galaxy.
                <br />
                <br />
                About a million quasars have been identified with reliable spectroscopic redshifts, and between 2-3 million identified in photometric catalogs. The nearest known quasar is about 600 million light-years from Earth. The record for the most distant known quasar continues to change. In 2017, quasar ULAS J1342+0928 was detected at redshift z = 7.54. Light observed from this 800-million-solar-mass quasar was emitted when the universe was only 690 million years old. In 2020, quasar Pōniuāʻena was detected from a time only 700 million years after the Big Bang, and with an estimated mass of 1.5 billion times the mass of the Sun. In early 2021, the quasar QSO J0313–1806, with a 1.6-billion-solar-mass black hole, was reported at z = 7.64, 670 million years after the Big Bang.
                <br />
                <br />
                Quasar discovery surveys have shown that quasar activity was more common in the distant past; the peak epoch was approximately 10 billion years ago. Concentrations of multiple quasars are known as large quasar groups and may constitute some of the largest known structures in the universe if the observed groups are good tracers of mass distribution.
            </p>
            <ParagraphSecondaryHeader id="Naming">Naming</ParagraphSecondaryHeader>
            <p id="Naming">
                The term quasar was first used in an article by astrophysicist Hong-Yee Chiu in May 1964, in <i>Physics Today</i>, to describe certain astronomically puzzling objects:
            </p>
            <BlockQuote>So far, the clumsily long name &quot;quasi-stellar radio sources&quot; is used to describe these objects. Because the nature of these objects is entirely unknown, it is hard to prepare a short, appropriate nomenclature for them so that their essential properties are obvious from their name. For convenience, the abbreviated form &quot;quasar&quot; will be used throughout this paper.</BlockQuote>
            <ParagraphSecondaryHeader id="History_of_observation_and_interpretation">History of observation and interpretation</ParagraphSecondaryHeader>
            <span id="History_of_observation_and_interpretation"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/1/11/SDSS_image_of_quasar_3C273.jpg" w={400} h={440} caption={
                (
                    <>
                        Sloan Digital Sky Survey image of quasar 3C 273, illustrating the object&apos;s star-like appearance. The quasar&apos;s jet can be seen extending downward and to the right from the quasar.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Quasar_viewed_from_Hubble.jpg/300px-Quasar_viewed_from_Hubble.jpg" w={400} h={440} caption={
                (
                    <>
                        Hubble images of quasar 3C 273. At right, a coronagraph is used to block the quasar&apos;s light, making it easier to detect the surrounding host galaxy.
                    </>
                )
            } />
            <br />
            <SubTitle>Background</SubTitle>
            <p>
                Between 1917 and 1922, it became clear from work by Heber Doust Curtis, Ernst Öpik and others that some objects (&quot;nebulae&quot;) seen by astronomers were in fact distant galaxies like the Milky Way. But when radio astronomy began in the 1950s, astronomers detected, among the galaxies, a small number of anomalous objects with properties that defied explanation.
                <br />
                <br />
                The objects emitted large amounts of radiation of many frequencies, but no source could be located optically, or in some cases only a faint and point-like object somewhat like a distant star. The spectral lines of these objects, which identify the chemical elements of which the object is composed, were also extremely strange and defied explanation. Some of them changed their luminosity very rapidly in the optical range and even more rapidly in the X-ray range, suggesting an upper limit on their size, perhaps no larger than the Solar System. This implies an extremely high power density. Considerable discussion took place over what these objects might be. They were described as &quot;<i>quasi-stellar</i> [meaning: star-like] <i>radio sources</i>&quot;, or &quot;<i>quasi-stellar objects</i>&quot; (QSOs), a name which reflected their unknown nature, and this became shortened to &quot;quasar&quot;.
            </p>
            <br />
            <SubTitle>Early observations (1960s and earlier)</SubTitle>
            <p>
                The first quasars (3C 48 and 3C 273) were discovered in the late 1950s, as radio sources in all-sky radio surveys. They were first noted as radio sources with no corresponding visible object. Using small telescopes and the Lovell Telescope as an interferometer, they were shown to have a very small angular size. By 1960, hundreds of these objects had been recorded and published in the Third Cambridge Catalogue while astronomers scanned the skies for their optical counterparts. In 1963, a definite identification of the radio source 3C 48 with an optical object was published by Allan Sandage and Thomas A. Matthews. Astronomers had detected what appeared to be a faint blue star at the location of the radio source and obtained its spectrum, which contained many unknown broad emission lines. The anomalous spectrum defied interpretation.
                <br />
                <br />
                British-Australian astronomer John Bolton made many early observations of quasars, including a breakthrough in 1962. Another radio source, 3C 273, was predicted to undergo five occultations by the Moon. Measurements taken by Cyril Hazard and John Bolton during one of the occultations using the Parkes Radio Telescope allowed Maarten Schmidt to find a visible counterpart to the radio source and obtain an optical spectrum using the 200-inch (5.1 m) Hale Telescope on Mount Palomar. This spectrum revealed the same strange emission lines. Schmidt was able to demonstrate that these were likely to be the ordinary spectral lines of hydrogen redshifted by 15.8%, at the time, a high redshift (with only a handful of much fainter galaxies known with higher redshift). If this was due to the physical motion of the &quot;star&quot;, then 3C 273 was receding at an enormous velocity, around 47000 km/s, far beyond the speed of any known star and defying any obvious explanation. Nor would an extreme velocity help to explain 3C 273&apos;s huge radio emissions. If the redshift was cosmological (now known to be correct), the large distance implied that 3C 273 was far more luminous than any galaxy, but much more compact. Also, 3C 273 was bright enough to detect on archival photographs dating back to the 1900s; it was found to be variable on yearly timescales, implying that a substantial fraction of the light was emitted from a region less than 1 light-year in size, tiny compared to a galaxy.
                <br />
                <br />
                Although it raised many questions, Schmidt&apos;s discovery quickly revolutionized quasar observation. The strange spectrum of 3C 48 was quickly identified by Schmidt, Greenstein and Oke as hydrogen and magnesium redshifted by 37%. Shortly afterwards, two more quasar spectra in 1964 and five more in 1965 were also confirmed as ordinary light that had been redshifted to an extreme degree. While the observations and redshifts themselves were not doubted, their correct interpretation was heavily debated, and Bolton&apos;s suggestion that the radiation detected from quasars were ordinary spectral lines from distant highly redshifted sources with extreme velocity was not widely accepted at the time.
            </p>
            <br />
            <SubTitle>Development of physical understanding (1960s)</SubTitle>
            <p>
                An extreme redshift could imply great distance and velocity but could also be due to extreme mass or perhaps some other unknown laws of nature. Extreme velocity and distance would also imply immense power output, which lacked explanation. The small sizes were confirmed by interferometry and by observing the speed with which the quasar as a whole varied in output, and by their inability to be seen in even the most powerful visible-light telescopes as anything more than faint starlike points of light. But if they were small and far away in space, their power output would have to be immense and difficult to explain. Equally, if they were very small and much closer to this galaxy, it would be easy to explain their apparent power output, but less easy to explain their redshifts and lack of detectable movement against the background of the universe.
                <br />
                <br />
                Schmidt noted that redshift is also associated with the expansion of the universe, as codified in Hubble&apos;s law. If the measured redshift was due to expansion, then this would support an interpretation of very distant objects with extraordinarily high luminosity and power output, far beyond any object seen to date. This extreme luminosity would also explain the large radio signal. Schmidt concluded that 3C 273 could either be an individual star around 10 km wide within (or near to) this galaxy, or a distant active galactic nucleus. He stated that a distant and extremely powerful object seemed more likely to be correct.
                <br />
                <br />
                Schmidt&apos;s explanation for the high redshift was not widely accepted at the time. A major concern was the enormous amount of energy these objects would have to be radiating, if they were distant. In the 1960s no commonly accepted mechanism could account for this. The currently accepted explanation, that it is due to matter in an accretion disc falling into a supermassive black hole, was only suggested in 1964 by Edwin E. Salpeter and Yakov Zeldovich, and even then it was rejected by many astronomers, as at this time the existence of black holes at all was widely seen as theoretical.
                <br />
                <br />
                Various explanations were proposed during the 1960s and 1970s, each with their own problems. It was suggested that quasars were nearby objects, and that their redshift was not due to the expansion of space but rather to light escaping a deep gravitational well. This would require a massive object, which would also explain the high luminosities. However, a star of sufficient mass to produce the measured redshift would be unstable and in excess of the Hayashi limit. Quasars also show forbidden spectral emission lines, previously only seen in hot gaseous nebulae of low density, which would be too diffuse to both generate the observed power and fit within a deep gravitational well. There were also serious concerns regarding the idea of cosmologically distant quasars. One strong argument against them was that they implied energies that were far in excess of known energy conversion processes, including nuclear fusion. There were suggestions that quasars were made of some hitherto unknown stable form of antimatter in similarly unknown types of region of space, and that this might account for their brightness. Others speculated that quasars were a white hole end of a wormhole, or a chain reaction of numerous supernovae.
                <br />
                <br />
                Eventually, starting from about the 1970s, many lines of evidence (including the first X-ray space observatories, knowledge of black holes and modern models of cosmology) gradually demonstrated that the quasar redshifts are genuine and due to the expansion of space, that quasars are in fact as powerful and as distant as Schmidt and some other astronomers had suggested, and that their energy source is matter from an accretion disc falling onto a supermassive black hole. This included crucial evidence from optical and X-ray viewing of quasar host galaxies, finding of &quot;intervening&quot; absorption lines, which explained various spectral anomalies, observations from gravitational lensing, Gunn&apos;s 1971 finding that galaxies containing quasars showed the same redshift as the quasars, and Kristian&apos;s 1973 finding that the &quot;fuzzy&quot; surrounding of many quasars was consistent with a less luminous host galaxy.
                <br />
                <br />
                This model also fits well with other observations suggesting that many or even most galaxies have a massive central black hole. It would also explain why quasars are more common in the early universe: as a quasar draws matter from its accretion disc, there comes a point when there is less matter nearby, and energy production falls off or ceases, as the quasar becomes a more ordinary type of galaxy.
                <br />
                <br />
                The accretion-disc energy-production mechanism was finally modeled in the 1970s, and black holes were also directly detected (including evidence showing that supermassive black holes could be found at the centers of this and many other galaxies), which resolved the concern that quasars were too luminous to be a result of very distant objects or that a suitable mechanism could not be confirmed to exist in nature. By 1987 it was &quot;well accepted&quot; that this was the correct explanation for quasars, and the cosmological distance and energy output of quasars was accepted by almost all researchers.
            </p>
            <br />
            <SubTitle>Modern observations (1970s and onward)</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/MUSE_spies_accreting_giant_structure_around_a_quasar.tif/lossy-page1-330px-MUSE_spies_accreting_giant_structure_around_a_quasar.tif.jpg" w={350} h={370} caption={
                (
                    <>
                        Cloud of gas around the distant quasar SDSS J102009.99+104002.7, taken by MUSE (Multi-Unit Spectroscopic Explorer)
                    </>
                )
            } />
            <br />
            <p>
                Later it was found that not all quasars have strong radio emission; in fact only about 10% are &quot;radio-loud&quot;. Hence the name &quot;QSO&quot; (quasi-stellar object) is used (in addition to &quot;quasar&quot;) to refer to these objects, further categorized into the &quot;radio-loud&quot; and the &quot;radio-quiet&quot; classes. The discovery of the quasar had large implications for the field of astronomy in the 1960s, including drawing physics and astronomy closer together.
                <br />
                <br />
                In 1979, the gravitational lens effect predicted by Albert Einstein&apos;s general theory of relativity was confirmed observationally for the first time with images of the double quasar 0957+561.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/UZC_J224030.2%2B032131.jpg/330px-UZC_J224030.2%2B032131.jpg" w={350} h={350} caption={
                (
                    <>
                        A cosmic mirage known as the Einstein Cross. Four apparent images are actually from the same quasar.
                    </>
                )
            } />
            <br />
            <p>
                A study published in February 2021 showed that there are more quasars in one direction (towards Hydra) than in the opposite direction, seemingly indicating that the Earth is moving in that direction. But the direction of this dipole is about 28° away from the direction of the Earth&apos;s motion relative to the cosmic microwave background radiation.
                <br />
                <br />
                In March 2021, a collaboration of scientists, related to the Event Horizon Telescope, presented, for the first time, a polarized-based image of a black hole, specifically the black hole at the center of Messier 87, an elliptical galaxy approximately 55 million light-years away in the constellation Virgo, revealing the forces giving rise to quasars.
            </p>
            <ParagraphSecondaryHeader id="Current_understanding">Current understanding</ParagraphSecondaryHeader>
            <p id="Current_understanding">
                It is now known that quasars are distant but extremely luminous objects, so any light that reaches the Earth is redshifted due to the expansion of the universe.
                <br />
                <br />
                Quasars inhabit the centers of active galaxies and are among the most luminous, powerful, and energetic objects known in the universe, emitting up to a thousand times the energy output of the Milky Way, which contains 200–400 billion stars. This radiation is emitted across the electromagnetic spectrum almost uniformly, from X-rays to the far infrared with a peak in the ultraviolet optical bands, with some quasars also being strong sources of radio emission and of gamma-rays. With high-resolution imaging from ground-based telescopes and the Hubble Space Telescope, the &quot;host galaxies&quot; surrounding the quasars have been detected in some cases. These galaxies are normally too dim to be seen against the glare of the quasar, except with special techniques. Most quasars, with the exception of 3C 273, whose average apparent magnitude is 12.9, cannot be seen with small telescopes.
                <br />
                <br />
                Quasars are believed—and in many cases confirmed—to be powered by accretion of material into supermassive black holes in the nuclei of distant galaxies, as suggested in 1964 by Edwin Salpeter and Yakov Zeldovich. Light and other radiation cannot escape from within the event horizon of a black hole. The energy produced by a quasar is generated outside the black hole, by gravitational stresses and immense friction within the material nearest to the black hole, as it orbits and falls inward. The huge luminosity of quasars results from the accretion discs of central supermassive black holes, which can convert between 5.7% and 32% of the mass of an object into energy, compared to just 0.7% for the p–p chain nuclear fusion process that dominates the energy production in Sun-like stars. Central masses of 10<sup>5</sup> to 10<sup>9</sup> solar masses have been measured in quasars by using reverberation mapping. Several dozen nearby large galaxies, including the Milky Way galaxy, that do not have an active center and do not show any activity similar to a quasar, are confirmed to contain a similar supermassive black hole in their nuclei (galactic center). Thus it is now thought that all large galaxies have a black hole of this kind, but only a small fraction have sufficient matter in the right kind of orbit at their center to become active and power radiation in such a way as to be seen as quasars.
                <br />
                <br />
                This also explains why quasars were more common in the early universe, as this energy production ends when the supermassive black hole consumes all of the gas and dust near it. This means that it is possible that most galaxies, including the Milky Way, have gone through an active stage, appearing as a quasar or some other class of active galaxy that depended on the black-hole mass and the accretion rate, and are now quiescent because they lack a supply of matter to feed into their central black holes to generate radiation.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Quasars_in_interacting_galaxies.jpg/330px-Quasars_in_interacting_galaxies.jpg" w={450} h={500} caption={
                (
                    <>
                        Quasars in interacting galaxies.
                    </>
                )
            } />
            <br />
            <p>
                The matter accreting onto the black hole is unlikely to fall directly in, but will have some angular momentum around the black hole, which will cause the matter to collect into an accretion disc. Quasars may also be ignited or re-ignited when normal galaxies merge and the black hole is infused with a fresh source of matter. In fact, it has been suggested that a quasar could form when the Andromeda Galaxy collides with the Milky Way galaxy in approximately 3–5 billion years.
                <br />
                <br />
                In the 1980s, unified models were developed in which quasars were classified as a particular kind of active galaxy, and a consensus emerged that in many cases it is simply the viewing angle that distinguishes them from other active galaxies, such as blazars and radio galaxies.
                <br />
                <br />
                The highest-redshift quasar known (as of December 2017) was ULAS J1342+0928, with a redshift of 7.54, which corresponds to a comoving distance of approximately 29.36 billion light-years from Earth (these distances are much larger than the distance light could travel in the universe&apos;s 13.8-billion-year history because the universe is expanding).
                <br />
                <br />
                It is now understood that many quasars are triggered by the collisions of galaxies, which drives the mass of the galaxies into the supermassive black holes at their centers.
            </p>
            <ParagraphSecondaryHeader id="Properties">Properties</ParagraphSecondaryHeader>
            <span id="Properties"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bright_halos_around_distant_quasars.jpg/330px-Bright_halos_around_distant_quasars.jpg" w={300} h={200} caption={
                (
                    <>
                        Bright halos around 18 distant quasars.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PKS_1127-145_X-rays.jpg/330px-PKS_1127-145_X-rays.jpg" w={450} h={450} caption={
                (
                    <>
                        The Chandra X-ray image is of the quasar PKS 1127-145, a highly luminous source of X-rays and visible light about 10 billion light-years from Earth. An enormous X-ray jet extends at least a million light-years from the quasar. Image is 60 arcseconds on a side. RA 11h 30m 7.10s Dec −14° 49&apos; 27&quot; in Crater. Observation date: May 28, 2000. Instrument: ACIS
                    </>
                )
            } />
            <br />
            <p>
                More than 900,000 quasars have been found (as of July 2023), most from the Sloan Digital Sky Survey. All observed quasar spectra have redshifts between 0.056 and 7.64 (as of 2021), which means they range between 600 million and 30 billion light-years away from Earth. Because of the great distances to the farthest quasars and the finite velocity of light, they and their surrounding space appear as they existed in the very early universe.
                <br />
                <br />
                The power of quasars originates from supermassive black holes that are believed to exist at the core of most galaxies. The Doppler shifts of stars near the cores of galaxies indicate that they are revolving around tremendous masses with very steep gravity gradients, suggesting black holes.
                <br />
                <br />
                Although quasars appear faint when viewed from Earth, they are visible from extreme distances, being the most luminous objects in the known universe. The brightest quasar in the sky is 3C 273 in the constellation of Virgo. It has an average apparent magnitude of 12.8 (bright enough to be seen through a medium-size amateur telescope), but it has an absolute magnitude of −26.7. From a distance of about 33 light-years, this object would shine in the sky about as brightly as the Sun. This quasar&apos;s luminosity is, therefore, about 4 trillion (4×10<sup>12</sup>) times that of the Sun, or about 100 times that of the total light of giant galaxies like the Milky Way. This assumes that the quasar is radiating energy in all directions, but the active galactic nucleus is believed to be radiating preferentially in the direction of its jet. In a universe containing hundreds of billions of galaxies, most of which had active nuclei billions of years ago but only seen today, it is statistically certain that thousands of energy jets should be pointed toward the Earth, some more directly than others. In many cases it is likely that the brighter the quasar, the more directly its jet is aimed at the Earth. Such quasars are called blazars.
                <br />
                <br />
                The hyperluminous quasar APM 08279+5255 was, when discovered in 1998, given an absolute magnitude of −32.2. High-resolution imaging with the Hubble Space Telescope and the 10 m Keck Telescope revealed that this system is gravitationally lensed. A study of the gravitational lensing of this system suggests that the light emitted has been magnified by a factor of ~10. It is still substantially more luminous than nearby quasars such as 3C 273.
                <br />
                <br />
                Quasars were much more common in the early universe than they are today. This discovery by Maarten Schmidt in 1967 was early strong evidence against steady-state cosmology and in favor of the Big Bang cosmology. Quasars show the locations where supermassive black holes are growing rapidly (by accretion). Detailed simulations reported in 2021 showed that galaxy structures, such as spiral arms, use gravitational forces to &apos;put the brakes on&apos; gas that would otherwise orbit galaxy centers forever; instead the braking mechanism enabled the gas to fall into the supermassive black holes, releasing enormous radiant energies. These black holes co-evolve with the mass of stars in their host galaxy in a way not fully understood at present. One idea is that jets, radiation and winds created by the quasars shut down the formation of new stars in the host galaxy, a process called &quot;feedback&quot;. The jets that produce strong radio emission in some quasars at the centers of clusters of galaxies are known to have enough power to prevent the hot gas in those clusters from cooling and falling on to the central galaxy.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Quasar_HE_1104-1805.jpg/330px-Quasar_HE_1104-1805.jpg" w={400} h={400} caption={
                (
                    <>
                        Gravitationally lensed quasar HE 1104-1805
                    </>
                )
            } />
            <br />
            <p>
                Quasars&apos; luminosities are variable, with time scales that range from months to hours. This means that quasars generate and emit their energy from a very small region, since each part of the quasar would have to be in contact with other parts on such a time scale as to allow the coordination of the luminosity variations. This would mean that a quasar varying on a time scale of a few weeks cannot be larger than a few light-weeks across. The emission of large amounts of power from a small region requires a power source far more efficient than the nuclear fusion that powers stars. The conversion of gravitational potential energy to radiation by infalling to a black hole converts between 6% and 32% of the mass to energy, compared to 0.7% for the conversion of mass to energy in a star like the Sun. It is the only process known that can produce such high power over a very long term. (Stellar explosions such as supernovas and gamma-ray bursts, and direct matter–antimatter annihilation, can also produce very high power output, but supernovae only last for days, and the universe does not appear to have had large amounts of antimatter at the relevant times).
                <br />
                <br />
                Since quasars exhibit all the properties common to other active galaxies such as Seyfert galaxies, the emission from quasars can be readily compared to those of smaller active galaxies powered by smaller supermassive black holes. To create a luminosity of 1040 watts (the typical brightness of a quasar), a supermassive black hole would have to consume the material equivalent of 10 solar masses per year. The brightest known quasars devour 1000 solar masses of material every year. The largest known is estimated to consume matter equivalent to 10 Earths per second. Quasar luminosities can vary considerably over time, depending on their surroundings. Since it is difficult to fuel quasars for many billions of years, after a quasar finishes accreting the surrounding gas and dust, it becomes an ordinary galaxy.
            </p>
            <br />
            <ReferencingVideoVisual src="https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4c/Artist%27s_impression_of_mysterious_alignment_of_quasar_rotation_axes.ogv/Artist%27s_impression_of_mysterious_alignment_of_quasar_rotation_axes.ogv.720p.vp9.webm" w={450} h={380} caption={
                (
                    <>
                        Animation shows the alignments between the spin axes of quasars and the large-scale structures that they inhabit.
                    </>
                )
            } />
            <br />
            <p>
                Radiation from quasars is partially &quot;nonthermal&quot; (i.e., not due to black-body radiation), and approximately 10% are observed to also have jets and lobes like those of radio galaxies that also carry significant (but poorly understood) amounts of energy in the form of particles moving at relativistic speeds. Extremely high energies might be explained by several mechanisms (see Fermi acceleration and Centrifugal mechanism of acceleration). Quasars can be detected over the entire observable electromagnetic spectrum, including radio, infrared, visible light, ultraviolet, X-ray and even gamma rays. Most quasars are brightest in their rest-frame ultraviolet wavelength of 121.6 nm Lyman-alpha emission line of hydrogen, but due to the tremendous redshifts of these sources, that peak luminosity has been observed as far to the red as 900.0 nm, in the near infrared. A minority of quasars show strong radio emission, which is generated by jets of matter moving close to the speed of light. When viewed downward, these appear as blazars and often have regions that seem to move away from the center faster than the speed of light (superluminal expansion). This is an optical illusion due to the properties of special relativity.
                <br />
                <br />
                Quasar redshifts are measured from the strong spectral lines that dominate their visible and ultraviolet emission spectra. These lines are brighter than the continuous spectrum. They exhibit Doppler broadening corresponding to mean speed of several percent of the speed of light. Fast motions strongly indicate a large mass. Emission lines of hydrogen (mainly of the Lyman series and Balmer series), helium, carbon, magnesium, iron and oxygen are the brightest lines. The atoms emitting these lines range from neutral to highly ionized, leaving it highly charged. This wide range of ionization shows that the gas is highly irradiated by the quasar, not merely hot, and not by stars, which cannot produce such a wide range of ionization.
                <br />
                <br />
                Like all (unobscured) active galaxies, quasars can be strong X-ray sources. Radio-loud quasars can also produce X-rays and gamma rays by inverse Compton scattering of lower-energy photons by the radio-emitting electrons in the jet.
                <br />
                <br />
                <i>Iron quasars</i> show strong emission lines resulting from low-ionization iron (Fe II), such as IRAS 18508-7815.
            </p>
            <br />
            <SubTitle>Spectral lines, reionization, and the early universe</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Fingerprint_of_the_early_Universe.jpg/330px-Fingerprint_of_the_early_Universe.jpg" w={450} h={450} caption={
                (
                    <>
                        Spectrum from quasar HE 0940-1050 after it has travelled through intergalactic medium
                    </>
                )
            } />
            <br />
            <p>
                Quasars also provide some clues as to the end of the Big Bang&apos;s reionization. The oldest known quasars (<i>z</i> = 6) display a Gunn–Peterson trough and have absorption regions in front of them indicating that the intergalactic medium at that time was neutral gas. More recent quasars show no absorption region, but rather their spectra contain a spiky area known as the Lyman-alpha forest; this indicates that the intergalactic medium has undergone reionization into plasma, and that neutral gas exists only in small clouds.
                <br />
                <br />
                The intense production of ionizing ultraviolet radiation is also significant, as it would provide a mechanism for reionization to occur as galaxies form. Despite this, current theories suggest that quasars were not the primary source of reionization; the primary causes of reionization were probably the earliest generations of stars, known as Population III stars (possibly 70%), and dwarf galaxies (very early small high-energy galaxies) (possibly 30%).
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/QuasarStarburst.jpg/330px-QuasarStarburst.jpg" w={500} h={500} caption={
                (
                    <>
                        This view, taken with infrared light, is a false-color image of a quasar-starburst tandem with the most luminous starburst ever seen in such a combination.
                    </>
                )
            } />
            <br />
            <p>
                Quasars show evidence of elements heavier than helium, indicating that galaxies underwent a massive phase of star formation, creating population III stars between the time of the Big Bang and the first observed quasars. Light from these stars may have been observed in 2005 using NASA&apos;s Spitzer Space Telescope, although this observation remains to be confirmed.
            </p>
            <ParagraphSecondaryHeader id="Quasar_subtypes">Quasar subtypes</ParagraphSecondaryHeader>
            <p id="Quasar_subtypes">
                The taxonomy of quasars includes various subtypes representing subsets of the quasar population having distinct properties.
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <Bold>Radio-loud quasars</Bold> are quasars with powerful jets that are strong sources of radio-wavelength emission. These make up about 10% of the overall quasar population.
                    </li>
                    <br />
                    <li>
                        <Bold>Radio-quiet quasars</Bold> are those quasars lacking powerful jets, with relatively weaker radio emission than the radio-loud population. The majority of quasars (about 90%) are radio-quiet.
                    </li>
                    <br />
                    <li>
                        <Bold>Broad absorption-line (BAL) quasars</Bold> are quasars whose spectra exhibit broad absorption lines that are blue-shifted relative to the quasar&apos;s rest frame, resulting from gas flowing outward from the active nucleus in the direction toward the observer. Broad absorption lines are found in about 10% of quasars, and BAL quasars are usually radio-quiet. In the rest-frame ultraviolet spectra of BAL quasars, broad absorption lines can be detected from ionized carbon, magnesium, silicon, nitrogen, and other elements.
                    </li>
                    <br />
                    <li>
                        <Bold>Type 2 (or Type II) quasars</Bold> are quasars in which the accretion disc and broad emission lines are highly obscured by dense gas and dust. They are higher-luminosity counterparts of Type 2 Seyfert galaxies.
                    </li>
                    <br />
                    <li>
                        <Bold>Red quasars</Bold> are quasars with optical colors that are redder than normal quasars, thought to be the result of moderate levels of dust extinction within the quasar host galaxy. Infrared surveys have demonstrated that red quasars make up a substantial fraction of the total quasar population.
                    </li>
                    <br />
                    <li>
                        <Bold>Optically violent variable (OVV) quasars</Bold> are radio-loud quasars in which the jet is directed toward the observer. Relativistic beaming of the jet emission results in strong and rapid variability of the quasar brightness. OVV quasars are also considered to be a type of blazar.
                    </li>
                    <br />
                    <li>
                        <Bold>Weak emission line (WEL) quasars</Bold> are quasars having unusually faint emission lines in the ultraviolet/visible spectrum.
                    </li>
                </ul>
            </div>
            <ParagraphSecondaryHeader id="Role_in_celestial_reference_systems">Role in celestial reference systems</ParagraphSecondaryHeader>
            <span id="Role_in_celestial_reference_systems"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Quasar_HE_0109-3518.tiff/lossy-page1-330px-Quasar_HE_0109-3518.tiff.jpg" w={300} h={350} caption={
                (
                    <>
                        The energetic radiation of the quasar makes dark galaxies glow, helping astronomers to understand the obscure early stages of galaxy formation.
                    </>
                )
            } />
            <br />
            <p>
                Because quasars are extremely distant, bright, and small in apparent size, they are useful reference points in establishing a measurement grid on the sky. The International Celestial Reference System (ICRS) is based on hundreds of extra-galactic radio sources, mostly quasars, distributed around the entire sky. Because they are so distant, they are apparently stationary to current technology, yet their positions can be measured with the utmost accuracy by very-long-baseline interferometry (VLBI). The positions of most are known to 0.001 arcsecond or better, which is orders of magnitude more precise than the best optical measurements.
            </p>
            <ParagraphSecondaryHeader id="Multiple_quasars">Multiple quasars</ParagraphSecondaryHeader>
            <p id="Multiple_quasars">
                A grouping of two or more quasars on the sky can result from a chance alignment, where the quasars are not physically associated, from actual physical proximity, or from the effects of gravity bending the light of a single quasar into two or more images by gravitational lensing.
                <br />
                <br />
                When two quasars appear to be very close to each other as seen from Earth (separated by a few arcseconds or less), they are commonly referred to as a &quot;double quasar&quot;. When the two are also close together in space (i.e. observed to have similar redshifts), they are termed a &quot;quasar pair&quot;, or as a &quot;binary quasar&quot; if they are close enough that their host galaxies are likely to be physically interacting.
                <br />
                <br />
                As quasars are overall rare objects in the universe, the probability of three or more separate quasars being found near the same physical location is very low, and determining whether the system is closely separated physically requires significant observational effort. The first true triple quasar was found in 2007 by observations at the W. M. Keck Observatory in Mauna Kea, Hawaii. LBQS 1429-008 (or QQQ J1432-0106) was first observed in 1989 and at the time was found to be a double quasar. When astronomers discovered the third member, they confirmed that the sources were separate and not the result of gravitational lensing. This triple quasar has a redshift of <i>z</i> = 2.076. The components are separated by an estimated 30–50 kiloparsecs (roughly 97,000–160,000 light-years), which is typical for interacting galaxies. In 2013, the second true triplet of quasars, QQQ J1519+0627, was found with a redshift <i>z</i> = 1.51, the whole system fitting within a physical separation of 25 kpc (about 80,000 light-years).
                <br />
                <br />
                The first true quadruple quasar system was discovered in 2015 at a redshift <i>z</i> = 2.0412 and has an overall physical scale of about 200 kpc (roughly 650,000 light-years).
                <br />
                <br />
                A multiple-image quasar is a quasar whose light undergoes gravitational lensing, resulting in double, triple or quadruple images of the same quasar. The first such gravitational lens to be discovered was the double-imaged quasar Q0957+561 (or Twin Quasar) in 1979. An example of a triply lensed quasar is PG1115+08. Several quadruple-image quasars are known, including the Einstein Cross and the Cloverleaf Quasar, with the first such discoveries happening in the mid-1980s.
            </p>
            <ParagraphSecondaryHeader id="Gallery">Gallery</ParagraphSecondaryHeader>
            <span id="Gallery"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hubble_Resolves_Two_Pairs_of_Quasars.jpg/546px-Hubble_Resolves_Two_Pairs_of_Quasars.jpg" w={450} h={200} caption={
                (
                    <>
                        These two NASA/ESA Hubble Space Telescope images reveal two pairs of quasars that existed 10 billion years ago and reside at the hearts of merging galaxies.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Webb_identifies_the_earliest_strands_of_the_cosmic_web_%28annotated%29_%28aspire1%29.jpg/301px-Webb_identifies_the_earliest_strands_of_the_cosmic_web_%28annotated%29_%28aspire1%29.jpg" w={250} h={250} caption={
                (
                    <>
                        This image from the NASA/ESA/CSA James Webb Space Telescope shows an arrangement of ten galaxies. The 3 million light-year-long filament is anchored by a quasar.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Webb%27s_View_Around_the_Extremely_Red_Quasar_SDSS_J165202_64%2B172852_3_%28weic2217a%29.jpeg/534px-Webb%27s_View_Around_the_Extremely_Red_Quasar_SDSS_J165202_64%2B172852_3_%28weic2217a%29.jpeg" w={450} h={350} caption={
                (
                    <>
                        The quasar SDSS J165202.64+172852.3 images in the center and on the right present new observations from the JWST in multiple wavelengths to demonstrate the distribution of gas around the object.
                    </>
                )
            } />
            <br />
        </>
    );
    return (
        <>
            <Layout topic="Astronomy" title="Quasar" thumbnail="/assets/quasar.png" content={content} />
        </>
    );
};