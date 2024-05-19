import Link from "@/components/Link";
import ReferencingVisual from "@/components/ReferencingVisual";
import Bold from "@/components/Bold";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import SubTitle from "@/components/SubTitle";
import OnboardingCitation from "@/components/OnboardingCitation";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import SecondarySubTitle from "@/components/SecondarySubTitle";
import HighLightText from "@/components/HighLightText";

export const metadata: Metadata = {
    title: "Virus - Knowledge Base | Developer Sujay",
};

export default function Virus() {
    const content = (
        <>
            <p>
                A <Bold>virus</Bold> is a submicroscopic infectious agent that replicates only inside the living <Link slug="Cell_(biology)" title="cells" /> of an <Link slug="Organism" title="organism" />. Viruses infect all life forms, from <Link slug="Animal" title="animals" /> and <Link slug="Plant" title="plants" /> to <Link slug="Microorganism" title="microorganisms" />, including <Link slug="Bacteria" title="bacteria" /> and <Link slug="Archaea" title="archaea" />. Viruses are found in almost every ecosystem on Earth and are the most numerous type of <Link slug="Biology" title="biological" /> entity. Since Dmitri Ivanovsky&apos;s 1892 article describing a non-bacterial pathogen infecting tobacco plants and the discovery of the tobacco mosaic virus by Martinus Beijerinck in 1898, more than 11,000 of the millions of virus species have been described in detail. The study of viruses is known as virology, a subspeciality of microbiology.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/330px-Coronavirus._SARS-CoV-2.png" w={250} h={250} caption={
                (
                    <>
                        SARS-CoV-2, a member of the subfamily <i>Coronavirinae</i>
                    </>
                )
            } />
            <br />
            <p>
                When infected, a host cell is often forced to rapidly produce thousands of copies of the original virus. When not inside an infected cell or in the process of infecting a cell, viruses exist in the form of independent viral particles, or <i><Bold>virions</Bold></i>, consisting of (i) genetic material, i.e., long molecules of <Link slug="DNA" title="DNA" /> or RNA that encode the structure of the proteins by which the virus acts; (ii) a protein coat, the <i>capsid</i>, which surrounds and protects the genetic material; and in some cases (iii) an outside envelope of lipids. The shapes of these virus particles range from simple helical and icosahedral forms to more complex structures. Most virus species have virions too small to be seen with an optical microscope and are one-hundredth the size of most bacteria.
                <br />
                <br />
                The origins of viruses in the evolutionary history of life are still unclear. Some viruses may have evolved from plasmids, which are pieces of DNA that can move between cells. Other viruses may have evolved from bacteria. In evolution, viruses are an important means of horizontal gene transfer, which increases genetic diversity in a way analogous to sexual reproduction. Viruses are considered by some biologists to be a life form, because they carry genetic material, reproduce, and evolve through natural selection, although they lack the key characteristics, such as cell structure, that are generally considered necessary criteria for defining life. Because they possess some but not all such qualities, viruses have been described as &quot;organisms at the edge of life&quot; and as replicators.
                <br />
                <br />
                Viruses spread in many ways. One transmission pathway is through disease-bearing organisms known as vectors: for example, viruses are often transmitted from plant to plant by insects that feed on plant sap, such as aphids; and viruses in animals can be carried by blood-sucking insects. Many viruses spread in the air by coughing and sneezing, including influenza viruses, SARS-CoV-2, chickenpox, smallpox, and measles. Norovirus and rotavirus<OnboardingCitation citeNoteNumber={1} content={
                    (
                        <>
                            <Bold>Rotaviruses</Bold> are the most common cause of diarrhoeal disease among infants and young children. Nearly every child in the world is infected with a rotavirus at least once by the age of five.
                        </>
                    )
                } />, common causes of viral gastroenteritis, are transmitted by the faecal–oral route, passed by hand-to-mouth contact or in food or water. The infectious dose of norovirus required to produce infection in humans is fewer than 100 particles. HIV is one of several viruses transmitted through sexual contact<OnboardingCitation citeNoteNumber={2} content={
                    (
                        <>
                            A <Bold>sexually transmitted infection</Bold> (<Bold>STI</Bold>), also referred to as a <Bold>sexually transmitted disease</Bold> (<Bold>STD</Bold>) and the older term <Bold>venereal disease</Bold> (<Bold>VD</Bold>), is an infection that is spread by sexual activity, especially vaginal intercourse, anal sex, oral sex, or sometimes manual sex.
                        </>
                    )
                } /> and by exposure to infected blood. The variety of host cells that a virus can infect is called its <i>host range</i>: this is narrow for viruses specialized to infect only a few <Link slug="Species" title="species" />, or <i>broad</i> for viruses capable of infecting many.
                <br />
                <br />
                Viral infections in animals provoke an immune response that usually eliminates the infecting virus. Immune responses can also be produced by vaccines, which confer an artificially acquired immunity to the specific viral infection. Some viruses, including those that cause HIV/AIDS, HPV infection, and viral hepatitis, evade these immune responses and result in chronic infections. Several classes of antiviral drugs have been developed.
            </p>
            <ParagraphSecondaryHeader id="Etymology">Etymology</ParagraphSecondaryHeader>
            <p id="Etymology">
                The English word &quot;virus&quot; comes from the Latin <i>virus</i>, which refers to poison and other noxious liquids. <i>Virus</i> comes from the same Indo-European root as Sanskrit <i>viṣa</i>, Avestan <i>vīša</i>, and Ancient Greek ἰός (<i>iós</i>), which all mean &quot;poison&quot;. The first attested use of &quot;virus&quot; in English appeared in 1398 in John Trevisa&apos;s translation of Bartholomeus Anglicus&apos;s <i>De Proprietatibus Rerum</i>. <i>Virulent</i>, from Latin <i>virulentus</i> (&apos;poisonous&apos;), dates to c. 1400. A meaning of &apos;agent that causes infectious disease&apos; is first recorded in 1728, long before the discovery of viruses by Dmitri Ivanovsky in 1892. The English plural is <i>viruses</i> (sometimes also <i>vira</i>), whereas the Latin word is a mass noun, which has no classically attested plural (<i>vira</i> is used in Neo-Latin). The adjective viral dates to 1948. The term <i>virion</i> (plural <i>virions</i>), which dates from 1959, is also used to refer to a single viral particle that is released from the cell and is capable of infecting other cells of the same type.
            </p>
            <ParagraphSecondaryHeader id="Origins">Origins</ParagraphSecondaryHeader>
            <p id="Origins">
                Viruses are found wherever there is life and have probably existed since living cells first evolved. The origin of viruses is unclear because they do not form fossils, so molecular techniques are used to infer how they arose. In addition, viral genetic material occasionally integrates into the germline of the host organisms, by which they can be passed on vertically to the offspring of the host for many generations. This provides an invaluable source of information for paleovirologists to trace back ancient viruses that existed as far back as millions of years ago.
                <br />
                <br />
                There are three main hypotheses that aim to explain the origins of viruses:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-none">
                    <li>
                        <SubTitle>Regressive hypothesis</SubTitle>
                        Viruses may have once been small cells that parasitised larger cells. Over time, <Link slug="Gene" title="genes" /> not required by their parasitism were lost. The bacteria rickettsia and chlamydia are living cells that, like viruses, can reproduce only inside host cells. They lend support to this hypothesis, as their dependence on parasitism is likely to have caused the loss of genes that enabled them to survive outside a cell. This is also called the &quot;degeneracy hypothesis&quot;, or &quot;reduction hypothesis&quot;.
                    </li>
                    <br />
                    <li>
                        <SubTitle>Cellular origin hypothesis</SubTitle>
                        Some viruses may have evolved from bits of DNA or RNA that &quot;escaped&quot; from the genes of a larger organism. The escaped DNA could have come from plasmids (pieces of naked DNA that can move between cells) or transposons (molecules of DNA that replicate and move around to different positions within the genes of the cell). Once called &quot;jumping genes&quot;, transposons are examples of mobile genetic elements and could be the origin of some viruses. They were discovered in maize by Barbara McClintock in 1950. This is sometimes called the &quot;vagrancy hypothesis&quot;, or the &quot;escape hypothesis&quot;.
                    </li>
                    <br />
                    <li>
                        <SubTitle>Co-evolution hypothesis</SubTitle>
                        This is also called the &quot;virus-first hypothesis&quot; and proposes that viruses may have evolved from complex molecules of protein and nucleic acid at the same time that cells first appeared on Earth and would have been dependent on cellular life for billions of years. Viroids are molecules of RNA that are not classified as viruses because they lack a protein coat. They have characteristics that are common to several viruses and are often called subviral agents. Viroids are important pathogens of plants. They do not code for proteins but interact with the host cell and use the host machinery for their replication. The hepatitis delta virus of humans has an RNA <Link slug="Genome" title="genome" /> similar to viroids but has a protein coat derived from hepatitis B virus and cannot produce one of its own. It is, therefore, a defective virus. Although hepatitis delta virus genome may replicate independently once inside a host cell, it requires the help of hepatitis B virus to provide a protein coat so that it can be transmitted to new cells. In similar manner, the sputnik virophage is dependent on mimivirus, which infects the protozoan <i>Acanthamoeba castellanii</i>. These viruses, which are dependent on the presence of other virus species in the host cell, are called &quot;satellites&quot; and may represent evolutionary intermediates of viroids and viruses.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                In the past, there were problems with all of these hypotheses: the regressive hypothesis did not explain why even the smallest of cellular parasites do not resemble viruses in any way. The escape hypothesis did not explain the complex capsids and other structures on virus particles. The virus-first hypothesis contravened the definition of viruses in that they require host cells. Viruses are now recognised as ancient and as having origins that pre-date the divergence of life into the <Link slug="Three_domain_system" title="three domains" />. This discovery has led modern virologists to reconsider and re-evaluate these three classical hypotheses.
                <br />
                <br />
                The evidence for an ancestral world of RNA cells and computer analysis of viral and host DNA sequences give a better understanding of the evolutionary relationships between different viruses and may help identify the ancestors of modern viruses. To date, such analyses have not proved which of these hypotheses is correct. It seems unlikely that all currently known viruses have a common ancestor, and viruses have probably arisen numerous times in the past by one or more mechanisms.
            </p>
            <ParagraphSecondaryHeader id="Microbiology">Microbiology</ParagraphSecondaryHeader>
            <span id="Microbiology"></span>
            <SubTitle>Life properties</SubTitle>
            <p>
                Scientific opinions differ on whether viruses are a form of life or organic structures that interact with living organisms. They have been described as &quot;organisms at the edge of life&quot;, since they resemble organisms in that they possess genes, evolve by natural selection, and reproduce by creating multiple copies of themselves through self-assembly. Although they have genes, they do not have a cellular structure, which is often seen as the basic unit of life. Viruses do not have their own metabolism and require a host cell to make new products. They therefore cannot naturally reproduce outside a host cell—although some bacteria such as rickettsia and chlamydia are considered living organisms despite the same limitation. Accepted forms of life use cell division to reproduce, whereas viruses spontaneously assemble within cells. They differ from autonomous growth of crystals as they inherit genetic mutations while being subject to natural selection. Virus self-assembly within host cells has implications for the study of the origin of life, as it lends further credence to the hypothesis that life could have started as self-assembling organic molecules.
            </p>
            <br />
            <SubTitle>Structure</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Virus_size.png/300px-Virus_size.png" w={250} h={200} caption={
                (
                    <>
                        Virions of some of the most common human viruses with their relative size. The nucleic acids are not to scale.
                    </>
                )
            } />
            <br />
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hexon.svg/300px-Hexon.svg.png" w={250} h={200} caption={
                (
                    <>
                        Diagram of how a virus capsid can be constructed using multiple copies of just two protein molecules
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/TMV_structure_simple.png/300px-TMV_structure_simple.png" w={250} h={200} caption={
                (
                    <>
                        Structure of tobacco mosaic virus: RNA coiled in a helix of repeating protein sub-units
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Icosahedral_Adenoviruses.jpg/300px-Icosahedral_Adenoviruses.jpg" w={250} h={100} caption={
                (
                    <>
                        Structure of icosahedral adenovirus. Electron micrograph with an illustration to show shape
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Varicella_%28Chickenpox%29_Virus_PHIL_1878_lores.jpg/300px-Varicella_%28Chickenpox%29_Virus_PHIL_1878_lores.jpg" w={250} h={250} caption={
                (
                    <>
                        Structure of chickenpox virus. They have a lipid envelope.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/CowpeaMosaicVirus3D.png/300px-CowpeaMosaicVirus3D.png" w={250} h={250} caption={
                (
                    <>
                        Structure of an icosahedral cowpea mosaic virus
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ms2capsid_surface.png/300px-Ms2capsid_surface.png" w={250} h={250} caption={
                (
                    <>
                        Bacteriophage Escherichia virus MS2 capsid. This spherical virus also has icosahedral symmetry.
                    </>
                )
            } />
            <br />
            <p>
                Viruses display a wide diversity of sizes and shapes, called &apos;morphologies&apos;. In general, viruses are much smaller than bacteria and more than a thousand bacteriophage viruses would fit inside an <i>Escherichia coli</i> bacterium&apos;s cell. Many viruses that have been studied are spherical and have a diameter between 20 and 300 nanometres. Some filoviruses, which are filaments, have a total length of up to 1400 nm; their diameters are only about 80 nm. Most viruses cannot be seen with an optical microscope, so scanning and transmission electron microscopes are used to visualise them. To increase the contrast between viruses and the background, electron-dense &quot;stains&quot; are used. These are solutions of salts of heavy metals, such as tungsten, that scatter the electrons from regions covered with the stain. When virions are coated with stain (positive staining), fine detail is obscured. Negative staining overcomes this problem by staining the background only.
                <br />
                <br />
                A complete virus particle, known as a virion, consists of nucleic acid surrounded by a protective coat of protein called a capsid. These are formed from protein subunits called capsomeres. Viruses can have a lipid &quot;envelope&quot; derived from the host cell membrane. The capsid is made from proteins encoded by the viral genome and its shape serves as the basis for morphological distinction. Virally-coded protein subunits will self-assemble to form a capsid, in general requiring the presence of the virus genome. Complex viruses code for proteins that assist in the construction of their capsid. Proteins associated with nucleic acid are known as nucleoproteins, and the association of viral capsid proteins with viral nucleic acid is called a nucleocapsid. The capsid and entire virus structure can be mechanically (physically) probed through atomic force microscopy. In general, there are five main morphological virus types:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-none">
                    <li>
                        <SubTitle>Helical</SubTitle>
                        These viruses are composed of a single type of capsomere stacked around a central axis to form a helical structure, which may have a central cavity, or tube. This arrangement results in virions which can be short and highly rigid rods, or long and very flexible filaments. The genetic material (typically single-stranded RNA, but single-stranded DNA in some cases) is bound into the protein helix by interactions between the negatively charged nucleic acid and positive charges on the protein. Overall, the length of a helical capsid is related to the length of the nucleic acid contained within it, and the diameter is dependent on the size and arrangement of capsomeres. The well-studied tobacco mosaic virus and inovirus are examples of helical viruses.
                    </li>
                    <br />
                    <li>
                        <SubTitle>Prolate</SubTitle>
                        This is an icosahedron elongated along the fivefold axis and is a common arrangement of the heads of bacteriophages. This structure is composed of a cylinder with a cap at either end.
                    </li>
                    <br />
                    <li>
                        <SubTitle>Enveloped</SubTitle>
                        Some species of virus envelop themselves in a modified form of one of the cell membranes, either the outer membrane surrounding an infected host cell or internal membranes such as a nuclear membrane or endoplasmic reticulum, thus gaining an outer lipid bilayer known as a viral envelope. This membrane is studded with proteins coded for by the viral genome and host genome; the lipid membrane itself and any carbohydrates present originate entirely from the host. Influenza virus, HIV (which causes AIDS), and severe acute respiratory syndrome coronavirus 2 or SARS-CoV-2 (which causes COVID-19) use this strategy. Most enveloped viruses are dependent on the envelope for their infectivity.
                    </li>
                    <br />
                    <li>
                        <SubTitle>Complex</SubTitle>
                        These viruses possess a capsid that is neither purely helical nor purely icosahedral, and that may possess extra structures such as protein tails or a complex outer wall. Some bacteriophages, such as Enterobacteria phage T4, have a complex structure consisting of an icosahedral head bound to a helical tail, which may have a hexagonal base plate with protruding protein tail fibres. This tail structure acts like a molecular syringe, attaching to the bacterial host and then injecting the viral genome into the cell.
                    </li>
                </ul>
            </div>
            <br />
            <p>
                The poxviruses are large, complex viruses that have an unusual morphology. The viral genome is associated with proteins within a central disc structure known as a nucleoid. The nucleoid is surrounded by a membrane and two lateral bodies of unknown function. The virus has an outer envelope with a thick layer of protein studded over its surface. The whole virion is slightly pleomorphic, ranging from ovoid to brick-shaped.
            </p>
            <br />
            <SubTitle>Giant viruses</SubTitle>
            <p>
                Mimivirus is one of the largest characterised viruses, with a capsid diameter of 400 nm. Protein filaments measuring 100 nm project from the surface. The capsid appears hexagonal under an electron microscope, therefore the capsid is probably icosahedral. In 2011, researchers discovered the largest then known virus in samples of water collected from the ocean floor off the coast of Las Cruces, Chile. Provisionally named <i>Megavirus chilensis</i>, it can be seen with a basic optical <Link slug="Microscope" title="microscope" />. In 2013, the <i>Pandoravirus</i> <Link slug="Genus" title="genus" /> was discovered in Chile and Australia, and has genomes about twice as large as <i>Megavirus</i> and <i>Mimivirus</i>. All giant viruses have dsDNA genomes and they are classified into several families: <i>Mimiviridae</i>, <i>Pithoviridae</i>, <i>Pandoraviridae</i>, <i>Phycodnaviridae</i>, and the <i>Mollivirus</i> genus.
                <br />
                <br />
                Some viruses that infect Archaea have complex structures unrelated to any other form of virus, with a wide variety of unusual shapes, ranging from spindle-shaped structures to viruses that resemble hooked rods, teardrops or even bottles. Other archaeal viruses resemble the tailed bacteriophages, and can have multiple tail structures.
            </p>
            <br />
            <SubTitle>Genome</SubTitle>
            <SecondarySubTitle>Genomic diversity among viruses</SecondarySubTitle>
            <br />
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Property</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            Parameters
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Nucleic acid
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <ul className="list-disc">
                                                <li>
                                                    DNA
                                                </li>
                                                <br />
                                                <li>
                                                    RNA
                                                </li>
                                                <br />
                                                <li>
                                                    Both DNA and RNA (at different stages in the life cycle)
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Shape
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <ul className="list-disc">
                                                <li>
                                                    Linear
                                                </li>
                                                <br />
                                                <li>
                                                    Circular
                                                </li>
                                                <br />
                                                <li>
                                                    Segmented
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Strandedness
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <ul className="list-disc">
                                                <li>
                                                    Single-stranded (ss)
                                                </li>
                                                <br />
                                                <li>
                                                    Double-stranded (ds)
                                                </li>
                                                <br />
                                                <li>
                                                    Double-stranded with regions of single-strandedness
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Sense
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <ul className="list-disc">
                                                <li>
                                                    Positive sense (+)
                                                </li>
                                                <br />
                                                <li>
                                                    Negative sense (−)
                                                </li>
                                                <br />
                                                <li>
                                                    Ambisense (+/−)
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <p>
                An enormous variety of genomic structures can be seen among viral species; as a group, they contain more structural genomic diversity than plants, animals, archaea, or bacteria. There are millions of different types of viruses, although fewer than 7,000 types have been described in detail. As of January 2021, the NCBI Virus genome database has more than 193,000 complete genome sequences, but there are doubtlessly many more to be discovered.
                <br />
                <br />
                A virus has either a DNA or an RNA genome and is called a DNA virus or an RNA virus, respectively. The vast majority of viruses have RNA genomes. Plant viruses tend to have single-stranded RNA genomes and bacteriophages tend to have double-stranded DNA genomes.
                <br />
                <br />
                Viral genomes are circular, as in the polyomaviruses, or linear, as in the adenoviruses. The type of nucleic acid is irrelevant to the shape of the genome. Among RNA viruses and certain DNA viruses, the genome is often divided into separate parts, in which case it is called segmented. For RNA viruses, each segment often codes for only one protein and they are usually found together in one capsid. All segments are not required to be in the same virion for the virus to be infectious, as demonstrated by brome mosaic virus and several other plant viruses.
                <br />
                <br />
                A viral genome, irrespective of nucleic acid type, is almost always either single-stranded (ss) or double-stranded (ds). Single-stranded genomes consist of an unpaired nucleic acid, analogous to one-half of a ladder split down the middle. Double-stranded genomes consist of two complementary paired nucleic acids, analogous to a ladder. The virus particles of some virus families, such as those belonging to the Hepadnaviridae, contain a genome that is partially double-stranded and partially single-stranded.
                <br />
                <br />
                For most viruses with RNA genomes and some with single-stranded DNA (ssDNA) genomes, the single strands are said to be either positive-sense (called the &apos;plus-strand&apos;) or negative-sense (called the &apos;minus-strand&apos;), depending on if they are complementary to the viral messenger RNA (mRNA). Positive-sense viral RNA is in the same sense as viral mRNA and thus at least a part of it can be immediately translated by the host cell. Negative-sense viral RNA is complementary to mRNA and thus must be converted to positive-sense RNA by an RNA-dependent RNA polymerase before translation. DNA nomenclature for viruses with genomic ssDNA is similar to RNA nomenclature, in that positive-strand viral ssDNA is identical in sequence to the viral mRNA and is thus a coding strand, while negative-sense viral ssDNA is complementary to the viral mRNA and is thus a template strand. Several types of ssDNA and ssRNA viruses have genomes that are ambisense in that transcription can occur off both strands in a double-stranded replicative intermediate. Examples include geminiviruses, which are ssDNA plant viruses and arenaviruses, which are ssRNA viruses of animals.
            </p>
            <br />
            <SubTitle>Genome size</SubTitle>
            <p>
                Genome size varies greatly between species. The smallest—the ssDNA circoviruses, family <i>Circoviridae</i>—code for only two proteins and have a genome size of only two kilobases; the largest—the pandoraviruses—have genome sizes of around two megabases which code for about 2500 proteins. Virus genes rarely have introns and often are arranged in the genome so that they overlap.
                <br />
                <br />
                In general, RNA viruses have smaller genome sizes than DNA viruses because of a higher error-rate when replicating, and have a maximum upper size limit. Beyond this, errors when replicating render the virus useless or uncompetitive. To compensate, RNA viruses often have segmented genomes—the genome is split into smaller molecules—thus reducing the chance that an error in a single-component genome will incapacitate the entire genome. In contrast, DNA viruses generally have larger genomes because of the high fidelity of their replication enzymes. Single-strand DNA viruses are an exception to this rule, as mutation rates for these genomes can approach the extreme of the ssRNA virus case.
            </p>
            <br />
            <SubTitle>Genetic mutation and recombination</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Influenza_geneticshift.svg/330px-Influenza_geneticshift.svg.png" w={300} h={450} caption={
                (
                    <>
                        Antigenic shift, or reassortment, can result in novel and highly pathogenic strains of human flu<OnboardingCitation citeNoteNumber={3} content={
                            (
                                <>
                                    <Bold>Influenza</Bold>, commonly known as &quot;<Bold>the flu</Bold>&quot; or just &quot;<Bold>flu</Bold>&quot;, is an infectious disease caused by influenza viruses. Symptoms range from mild to severe and often include fever, runny nose, sore throat, muscle pain, headache, coughing, and fatigue.
                                </>
                            )
                        } />
                    </>
                )
            } />
            <br />
            <p>
                Viruses undergo genetic change by several mechanisms. These include a process called antigenic drift where individual bases in the DNA or RNA mutate to other bases. Most of these point mutations are &quot;silent&quot;—they do not change the protein that the gene encodes—but others can confer evolutionary advantages such as resistance to antiviral drugs. Antigenic shift occurs when there is a major change in the genome of the virus. This can be a result of recombination or reassortment. When this happens with influenza viruses, pandemics might result. RNA viruses often exist as quasispecies or swarms of viruses of the same species but with slightly different genome nucleoside sequences. Such quasispecies are a prime target for natural selection.
                <br />
                <br />
                Segmented genomes confer evolutionary advantages; different strains of a virus with a segmented genome can shuffle and combine genes and produce progeny viruses (or offspring) that have unique characteristics. This is called reassortment or &apos;viral sex&apos;.
                <br />
                <br />
                Genetic recombination is a process by which a strand of DNA (or RNA) is broken and then joined to the end of a different DNA (or RNA) molecule. This can occur when viruses infect cells simultaneously and studies of viral evolution have shown that recombination has been rampant in the species studied. Recombination is common to both RNA and DNA viruses.
                <br />
                <br />
                Coronaviruses have a single-strand positive-sense RNA genome. Replication of the genome is catalyzed by an RNA-dependent RNA polymerase (RdRp). The mechanism of recombination used by coronaviruses likely involves template switching by the polymerase during genome replication. This process appears to be an adaptation for coping with genome damage.
            </p>
            <br />
            <SubTitle>Replication cycle</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/HepC_replication.png/330px-HepC_replication.png" w={450} h={400} caption={
                (
                    <>
                        A typical virus replication cycle
                    </>
                )
            } />
            <br />
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Phage_injecting_its_genome_into_bacteria.svg/330px-Phage_injecting_its_genome_into_bacteria.svg.png" w={450} h={400} caption={
                (
                    <>
                        Some bacteriophages inject their genomes into bacterial cells (not to scale)
                    </>
                )
            } />
            <br />
            <p>
                Viral populations do not grow through cell division, because they are acellular. Instead, they use the machinery and metabolism of a host cell to produce multiple copies of themselves, and they assemble in the cell. When infected, the host cell is forced to rapidly produce thousands of copies of the original virus.
                <br />
                <br />
                Their life cycle differs greatly between species, but there are six basic stages in their life cycle:
                <br />
                <br />
                <i>Attachment</i> is a specific binding between viral capsid proteins and specific receptors on the host cellular surface. This specificity determines the host range and type of host cell of a virus. For example, HIV infects a limited range of human leucocytes. This is because its surface protein, gp120, specifically interacts with the CD4 molecule—a chemokine receptor—which is most commonly found on the surface of CD4+ T-Cells. This mechanism has evolved to favour those viruses that infect only cells in which they are capable of replication. Attachment to the receptor can induce the viral envelope protein to undergo changes that result in the fusion of viral and cellular membranes, or changes of non-enveloped virus surface proteins that allow the virus to enter.
                <br />
                <br />
                <i>Penetration</i> or <i>viral entry</i> follows attachment: Virions enter the host cell through receptor-mediated endocytosis or membrane fusion. The infection of plant and fungal cells is different from that of animal cells. Plants have a rigid cell wall made of cellulose, and fungi one of chitin, so most viruses can get inside these cells only after trauma to the cell wall. Nearly all plant viruses (such as tobacco mosaic virus) can also move directly from cell to cell, in the form of single-stranded nucleoprotein complexes, through pores called plasmodesmata. Bacteria, like plants, have strong cell walls that a virus must breach to infect the cell. Given that bacterial cell walls are much thinner than plant cell walls due to their much smaller size, some viruses have evolved mechanisms that inject their genome into the bacterial cell across the cell wall, while the viral capsid remains outside.
                <br />
                <br />
                <i>Uncoating</i> is a process in which the viral capsid is removed: This may be by degradation by viral enzymes or host enzymes or by simple dissociation; the end-result is the releasing of the viral genomic nucleic acid.
                <br />
                <br />
                <i>Replication</i> of viruses involves primarily multiplication of the genome. Replication involves the synthesis of viral messenger RNA (mRNA) from &quot;early&quot; genes (with exceptions for positive-sense RNA viruses), viral protein synthesis, possible assembly of viral proteins, then viral genome replication mediated by early or regulatory protein expression. This may be followed, for complex viruses with larger genomes, by one or more further rounds of mRNA synthesis: &quot;late&quot; gene expression is, in general, of structural or virion proteins.
                <br />
                <i>Assembly</i> – Following the structure-mediated self-assembly of the virus particles, some modification of the proteins often occurs. In viruses such as HIV, this modification (sometimes called maturation) occurs after the virus has been released from the host cell.
                <br />
                <br />
                <i>Release</i> – Viruses can be released from the host cell by lysis, a process that kills the cell by bursting its membrane and cell wall if present: this is a feature of many bacterial and some animal viruses. Some viruses undergo a lysogenic cycle where the viral genome is incorporated by genetic recombination into a specific place in the host&apos;s chromosome. The viral genome is then known as a &quot;provirus&quot; or, in the case of bacteriophages a &quot;prophage&quot;. Whenever the host divides, the viral genome is also replicated. The viral genome is mostly silent within the host. At some point, the provirus or prophage may give rise to the active virus, which may lyse the host cells. Enveloped viruses (e.g., HIV) typically are released from the host cell by budding. During this process, the virus acquires its envelope, which is a modified piece of the host&apos;s plasma or other, internal membrane.
            </p>
            <br />
            <SubTitle>Genome replication</SubTitle>
            <p>
                The genetic material within virus particles, and the method by which the material is replicated, varies considerably between different types of viruses.
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-none">
                    <li>
                        <SecondarySubTitle>DNA viruses</SecondarySubTitle>
                        The genome replication of most DNA viruses takes place in the cell&apos;s nucleus. If the cell has the appropriate receptor on its surface, these viruses enter the cell either by direct fusion with the cell membrane (e.g., herpesviruses) or—more usually—by receptor-mediated endocytosis. Most DNA viruses are entirely dependent on the host cell&apos;s DNA and RNA synthesising machinery and RNA processing machinery. Viruses with larger genomes may encode much of this machinery themselves. In eukaryotes, the viral genome must cross the cell&apos;s nuclear membrane to access this machinery, while in bacteria it need only enter the cell.
                    </li>
                    <br />
                    <li>
                        <SecondarySubTitle>RNA viruses</SecondarySubTitle>
                        Replication of RNA viruses usually takes place in the cytoplasm. RNA viruses can be placed into four different groups depending on their modes of replication. The polarity (whether or not it can be used directly by ribosomes to make proteins) of single-stranded RNA viruses largely determines the replicative mechanism; the other major criterion is whether the genetic material is single-stranded or double-stranded. All RNA viruses use their own RNA replicase enzymes to create copies of their genomes.
                    </li>
                    <br />
                    <li>
                        <SecondarySubTitle>Reverse transcribing viruses</SecondarySubTitle>
                        Reverse transcribing viruses have ssRNA (<i>Retroviridae</i>, <i>Metaviridae</i>, <i>Pseudoviridae</i>) or dsDNA (<i>Caulimoviridae</i>, and <i>Hepadnaviridae</i>) in their particles. Reverse transcribing viruses with RNA genomes (retroviruses) use a DNA intermediate to replicate, whereas those with DNA genomes (pararetroviruses) use an RNA intermediate during genome replication. Both types use a reverse transcriptase, or RNA-dependent DNA polymerase enzyme, to carry out the nucleic acid conversion. Retroviruses integrate the DNA produced by reverse transcription into the host genome as a provirus as a part of the replication process; pararetroviruses do not, although integrated genome copies of especially plant pararetroviruses can give rise to infectious virus. They are susceptible to antiviral drugs that inhibit the reverse transcriptase enzyme, e.g. zidovudine and lamivudine. An example of the first type is HIV, which is a retrovirus. Examples of the second type are the <i>Hepadnaviridae</i>, which includes Hepatitis B virus.
                    </li>
                </ul>
            </div>
            <br />
            <SubTitle>Cytopathic effects on the host cell</SubTitle>
            <p>
                The range of structural and biochemical effects that viruses have on the host cell is extensive. These are called &apos;cytopathic effects&apos;. Most virus infections eventually result in the death of the host cell. The causes of death include cell lysis, alterations to the cell&apos;s surface membrane and apoptosis. Often cell death is caused by cessation of its normal activities because of suppression by virus-specific proteins, not all of which are components of the virus particle. The distinction between cytopathic and harmless is gradual. Some viruses, such as Epstein–Barr virus, can cause cells to proliferate without causing malignancy, while others, such as papillomaviruses, are established causes of cancer.
            </p>
            <br />
            <SubTitle>Dormant and latent infections</SubTitle>
            <p>
                Some viruses cause no apparent changes to the infected cell. Cells in which the virus is latent and inactive show few signs of infection and often function normally. This causes persistent infections and the virus is often dormant for many months or years. This is often the case with herpes viruses.
            </p>
            <br />
            <SubTitle>Host range</SubTitle>
            <p>
                Viruses are by far the most abundant biological entities on Earth and they outnumber all the others put together. They infect all types of cellular life including animals, plants, bacteria and fungi. Different types of viruses can infect only a limited range of hosts and many are species-specific. Some, such as smallpox virus for example, can infect only one species—in this case humans, and are said to have a narrow host range. Other viruses, such as rabies virus, can infect different species of mammals and are said to have a broad range. The viruses that infect plants are harmless to animals, and most viruses that infect other animals are harmless to humans. The host range of some bacteriophages is limited to a single strain of bacteria and they can be used to trace the source of outbreaks of infections by a method called phage typing. The complete set of viruses in an organism or habitat is called the virome; for example, all human viruses constitute the human virome.
            </p>
            <br />
            <SubTitle>Novel viruses</SubTitle>
            <p>
                A <Bold>novel virus</Bold> is one that has not previously been recorded. It can be a virus that is isolated from its natural reservoir or isolated as the result of spread to an animal or human host where the virus had not been identified before. It can be an emergent virus, one that represents a new virus, but it can also be an extant virus that has not been previously identified. The SARS-CoV-2 coronavirus that caused the COVID-19 pandemic is an example of a novel virus.
            </p>
            <ParagraphSecondaryHeader id="Classification">Classification</ParagraphSecondaryHeader>
            <p id="Classification">
                Classification seeks to describe the diversity of viruses by naming and grouping them on the basis of similarities. In 1962, André Lwoff, Robert Horne, and Paul Tournier were the first to develop a means of virus classification, based on the Linnaean hierarchical system. This system based classification on phylum, class, order, family, genus, and species. Viruses were grouped according to their shared properties (not those of their hosts) and the type of nucleic acid forming their genomes. In 1966, the International Committee on Taxonomy of Viruses (ICTV) was formed. The system proposed by Lwoff, Horne and Tournier was initially not accepted by the ICTV because the small genome size of viruses and their high rate of mutation made it difficult to determine their ancestry beyond order. As such, the Baltimore classification system has come to be used to supplement the more traditional hierarchy. Starting in 2018, the ICTV began to acknowledge deeper evolutionary relationships between viruses that have been discovered over time and adopted a 15-rank classification system ranging from realm to species. Additionally, some species within the same genus are grouped into a <Bold>genogroup</Bold>.
            </p>
            <br />
            <SubTitle>ICTV classification</SubTitle>
            <p>
                The ICTV developed the current classification system and wrote guidelines that put a greater weight on certain virus properties to maintain family uniformity. A unified taxonomy (a universal system for classifying viruses) has been established. Only a small part of the total diversity of viruses has been studied. As of 2022, 6 realms, 10 kingdoms, 17 phyla, 2 subphyla, 40 classes, 72 orders, 8 suborders, 264 families, 182 subfamilies, 2,818 genera, 84 subgenera, and 11,273 species of viruses have been defined by the ICTV.
                <br />
                <br />
                The general taxonomic structure of taxon ranges and the suffixes used in taxonomic names are shown hereafter. As of 2022, the ranks of subrealm, subkingdom, and subclass are unused, whereas all other ranks are in use.
            </p>
            <br />
            <ReferencingVisual src="/in-page-assets/virus_evolution_graph.png" w={1000} h={1000} caption={<></>} />
            <br />
            <SubTitle>Baltimore classification</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/VirusBaltimoreClassification.svg/495px-VirusBaltimoreClassification.svg.png" w={500} h={400} caption={
                (
                    <>
                        The Baltimore Classification of viruses is based on the method of viral mRNA synthesis
                    </>
                )
            } />
            <br />
            <p>
                The Nobel Prize-winning biologist David Baltimore devised the Baltimore classification system. The ICTV classification system is used in conjunction with the Baltimore classification system in modern virus classification.
                <br />
                <br />
                The Baltimore classification of viruses is based on the mechanism of mRNA production. Viruses must generate mRNAs from their genomes to produce proteins and replicate themselves, but different mechanisms are used to achieve this in each virus family. Viral genomes may be single-stranded (ss) or double-stranded (ds), RNA or DNA, and may or may not use reverse transcriptase (RT). In addition, ssRNA viruses may be either sense (+) or antisense (−). This classification places viruses into seven groups:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        I: dsDNA viruses (e.g. Adenoviruses, Herpesviruses, Poxviruses)
                    </li>
                    <br />
                    <li>
                        II: ssDNA viruses (+ strand or &quot;sense&quot;) DNA (e.g. Parvoviruses)
                    </li>
                    <br />
                    <li>
                        III: dsRNA viruses (e.g. Reoviruses)
                    </li>
                    <br />
                    <li>
                        IV:(+)ssRNA viruses (+ strand or sense) RNA (e.g. Coronaviruses, Picornaviruses, Togaviruses)
                    </li>
                    <br />
                    <li>
                        V: (−)ssRNA viruses (− strand or antisense) RNA (e.g. Orthomyxoviruses, Rhabdoviruses)
                    </li>
                    <br />
                    <li>
                        VI: ssRNA-RT viruses (+ strand or sense) RNA with DNA intermediate in life-cycle (e.g. Retroviruses)
                    </li>
                    <br />
                    <li>
                        VII: dsDNA-RT viruses DNA with RNA intermediate in life-cycle (e.g. Hepadnaviruses)
                    </li>
                </ul>
            </div>
            <ParagraphSecondaryHeader id="Role_in_human_disease">Role in human disease</ParagraphSecondaryHeader>
            <span id="Role_in_human_disease"></span>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Viral_infections_and_involved_species.svg/330px-Viral_infections_and_involved_species.svg.png" w={350} h={500} caption={
                (
                    <>
                        Overview of the main types of viral infection and the most notable species involved
                    </>
                )
            } />
            <br />
            <p>
                Examples of common <Link slug="Human" title="human" /> <HighLightText text="diseases caused by viruses include the common cold, influenza, chickenpox, and cold sores" />. Many serious diseases such as rabies, Ebola virus disease, AIDS (HIV), avian influenza, and SARS are caused by viruses. The relative ability of viruses to cause disease is described in terms of virulence. Other diseases are under investigation to discover if they have a virus as the causative agent, such as the possible connection between human herpesvirus 6 (HHV6) and neurological diseases such as multiple sclerosis and chronic fatigue syndrome. There is controversy over whether the bornavirus, previously thought to cause neurological diseases in horses, could be responsible for psychiatric illnesses in humans.
                <br />
                <br />
                Viruses have different mechanisms by which they produce disease in an organism, which depends largely on the viral species. Mechanisms at the cellular level primarily include cell lysis, the breaking open and subsequent death of the cell. In multicellular organisms, if enough cells die, the whole organism will start to suffer the effects. Although viruses cause disruption of healthy homeostasis, resulting in disease, they may exist relatively harmlessly within an organism. An example would include the ability of the herpes simplex virus, which causes cold sores, to remain in a dormant state within the human body. This is called latency and is a characteristic of the herpes viruses, including Epstein–Barr virus, which causes glandular fever, and varicella zoster virus, which causes chickenpox and shingles. Most people have been infected with at least one of these types of herpes virus. These latent viruses might sometimes be beneficial, as the presence of the virus can increase immunity against bacterial pathogens, such as Yersinia pestis.
                <br />
                <br />
                Some viruses can cause lifelong or chronic infections, where the viruses continue to replicate in the body despite the host&apos;s defence mechanisms. This is common in hepatitis B virus and hepatitis C virus infections. People chronically infected are known as carriers, as they serve as reservoirs of infectious virus. In populations with a high proportion of carriers, the disease is said to be endemic.
            </p>
            <br />
            <SubTitle>Epidemiology</SubTitle>
            <p>
                Viral epidemiology is the branch of medical science that deals with the transmission and control of virus infections in humans. Transmission of viruses can be vertical, which means from mother to child, or horizontal, which means from person to person. Examples of vertical transmission include hepatitis B virus and HIV, where the baby is born already infected with the virus. Another, more rare, example is the varicella zoster virus (VZV), which, although causing relatively mild infections in children and adults, can be fatal to the foetus and newborn baby.
                <br />
                <br />
                Horizontal transmission is the most common mechanism of spread of viruses in populations. Horizontal transmission can occur when body fluids are exchanged during sexual activity, by exchange of saliva or when contaminated food or water is ingested. It can also occur when aerosols containing viruses are inhaled or by insect vectors such as when infected mosquitoes penetrate the skin of a host. Most types of viruses are restricted to just one or two of these mechanisms and they are referred to as &quot;respiratory viruses&quot; or &quot;enteric viruses&quot; and so forth. The rate or speed of transmission of viral infections depends on factors that include population density, the number of susceptible individuals, (i.e., those not immune), the quality of healthcare and the weather.
                <br />
                <br />
                Epidemiology is used to break the chain of infection in populations during outbreaks of viral diseases. Control measures are used that are based on knowledge of how the virus is transmitted. It is important to find the source, or sources, of the outbreak and to identify the virus. Once the virus has been identified, the chain of transmission can sometimes be broken by vaccines. When vaccines are not available, sanitation and disinfection can be effective. Often, infected people are isolated from the rest of the community, and those that have been exposed to the virus are placed in quarantine. To control the outbreak of foot-and-mouth disease in cattle in Britain in 2001, thousands of cattle were slaughtered. Most viral infections of humans and other animals have incubation periods during which the infection causes no signs or symptoms. Incubation periods for viral diseases range from a few days to weeks, but are known for most infections. Somewhat overlapping, but mainly following the incubation period, there is a period of communicability—a time when an infected individual or animal is contagious and can infect another person or animal. This, too, is known for many viral infections, and knowledge of the length of both periods is important in the control of outbreaks. When outbreaks cause an unusually high proportion of cases in a population, community, or region, they are called epidemics. If outbreaks spread worldwide, they are called pandemics.
            </p>
            <br />
            <SubTitle>Epidemics and pandemics</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Reconstructed_Spanish_Flu_Virus.jpg/330px-Reconstructed_Spanish_Flu_Virus.jpg" w={300} h={200} caption={
                (
                    <>
                        Transmission electron microscope image of a recreated 1918 influenza virus
                    </>
                )
            } />
            <br />
            <p>
                A pandemic is a worldwide epidemic. The 1918 flu pandemic, which lasted until 1919, was a category 5<OnboardingCitation citeNoteNumber={4} content={
                    (
                        <>
                            The <Bold>pandemic severity index</Bold> (<Bold>PSI</Bold>) was a proposed classification scale for reporting the severity of influenza pandemics in the United States. The PSI was accompanied by a set of guidelines intended to help communicate appropriate actions for communities to follow in potential pandemic situations.
                        </>
                    )
                } /> influenza pandemic caused by an unusually severe and deadly influenza A virus. The victims were often healthy young adults, in contrast to most influenza outbreaks, which predominantly affect juvenile, elderly, or otherwise-weakened patients. Older estimates say it killed 40–50 million people, while more recent research suggests that it may have killed as many as 100 million people, or 5% of the world&apos;s population in 1918.
                <br />
                <br />
                Although viral pandemics are rare events, HIV—which evolved from viruses found in monkeys and chimpanzees—has been pandemic since at least the 1980s. During the 20th century there were four pandemics caused by influenza virus and those that occurred in 1918, 1957 and 1968 were severe. Most researchers believe that HIV originated in sub-Saharan Africa during the 20th century; it is now a pandemic, with an estimated 37.9 million people now living with the disease worldwide. There were about 770,000 deaths from AIDS in 2018. The Joint United Nations Programme on HIV/AIDS (UNAIDS) and the World Health Organization (WHO) estimate that AIDS has killed more than 25 million people since it was first recognised on 5 June 1981, making it one of the most destructive epidemics in recorded history. In 2007 there were 2.7 million new HIV infections and 2 million HIV-related deaths.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ebola_virus_em.png/225px-Ebola_virus_em.png" w={200} h={500} caption={
                (
                    <>
                        Ebola virus
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Marburg_virus.jpg/225px-Marburg_virus.jpg" w={200} h={100} caption={
                (
                    <>
                        Marburg viruses
                    </>
                )
            } />
            <br />
            <p>
                Several highly lethal viral pathogens are members of the <i>Filoviridae</i>. Filoviruses are filament-like viruses that cause viral hemorrhagic fever, and include ebolaviruses and marburgviruses. Marburg virus, first discovered in 1967, attracted widespread press attention in April 2005 for an outbreak in Angola. Ebola virus disease has also caused intermittent outbreaks with high mortality rates since 1976 when it was first identified. The worst and most recent one is the 2013–2016 West Africa epidemic.
                <br />
                <br />
                Except for smallpox, most pandemics are caused by newly evolved viruses. These &quot;emergent&quot; viruses are usually mutants of less harmful viruses that have circulated previously either in humans or other animals.
                <br />
                <br />
                Severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS) are caused by new types of coronaviruses. Other coronaviruses are known to cause mild infections in humans, so the virulence and rapid spread of SARS infections—that by July 2003 had caused around 8,000 cases and 800 deaths—was unexpected and most countries were not prepared.
                <br />
                <br />
                A related coronavirus, severe acute respiratory syndrome coronavirus 2 (SARS-Cov-2), thought to have originated in bats, emerged in Wuhan, China in November 2019 and spread rapidly around the world. Infections with the virus caused the COVID-19 pandemic that started in 2020. Unprecedented restrictions in peacetime were placed on international travel, and curfews were imposed in several major cities worldwide in response to the pandemic.
            </p>
            <br />
            <SubTitle>Cancer</SubTitle>
            <p>
                Viruses are an established cause of cancer in humans and other species. Viral cancers occur only in a minority of infected persons (or animals). Cancer viruses come from a range of virus families, including both RNA and DNA viruses, and so there is no single type of &quot;oncovirus&quot; (an obsolete term originally used for acutely transforming retroviruses). The development of cancer is determined by a variety of factors such as host immunity and mutations in the host. Viruses accepted to cause human cancers include some genotypes of human papillomavirus, hepatitis B virus, hepatitis C virus, Epstein–Barr virus, Kaposi&apos;s sarcoma-associated herpesvirus and human T-lymphotropic virus. The most recently discovered human cancer virus is a polyomavirus (Merkel cell polyomavirus) that causes most cases of a rare form of skin cancer called Merkel cell carcinoma. Hepatitis viruses can develop into a chronic viral infection that leads to liver cancer. Infection by human T-lymphotropic virus can lead to tropical spastic paraparesis and adult T-cell leukaemia. Human papillomaviruses are an established cause of cancers of cervix, skin, anus, and penis. Within the <i>Herpesviridae</i>, Kaposi&apos;s sarcoma-associated herpesvirus causes Kaposi&apos;s sarcoma and body-cavity lymphoma, and Epstein–Barr virus causes Burkitt&apos;s lymphoma, Hodgkin&apos;s lymphoma, B lymphoproliferative disorder, and nasopharyngeal carcinoma. Merkel cell polyomavirus closely related to SV40 and mouse polyomaviruses that have been used as animal models for cancer viruses for over 50 years.
            </p>
            <br />
            <SubTitle>Host defence mechanisms</SubTitle>
            <p>
                The body&apos;s first line of defence against viruses is the innate immune system. This comprises cells and other mechanisms that defend the host from infection in a non-specific manner. This means that the cells of the innate system recognise, and respond to, pathogens in a generic way, but, unlike the adaptive immune system, it does not confer long-lasting or protective immunity to the host.
                <br />
                <br />
                RNA interference is an important innate defence against viruses. Many viruses have a replication strategy that involves double-stranded RNA (dsRNA). When such a virus infects a cell, it releases its RNA molecule or molecules, which immediately bind to a protein complex called a dicer that cuts the RNA into smaller pieces. A biochemical pathway—the RISC complex—is activated, which ensures cell survival by degrading the viral mRNA. Rotaviruses have evolved to avoid this defence mechanism by not uncoating fully inside the cell, and releasing newly produced mRNA through pores in the particle&apos;s inner capsid. Their genomic dsRNA remains protected inside the core of the virion.
                <br />
                <br />
                When the adaptive immune system of a vertebrate encounters a virus, it produces specific antibodies that bind to the virus and often render it non-infectious. This is called humoral immunity. Two types of antibodies are important. The first, called IgM, is highly effective at neutralising viruses but is produced by the cells of the immune system only for a few weeks. The second, called IgG, is produced indefinitely. The presence of IgM in the blood of the host is used to test for acute infection, whereas IgG indicates an infection sometime in the past. IgG antibody is measured when tests for immunity are carried out.
                <br />
                <br />
                Antibodies can continue to be an effective defence mechanism even after viruses have managed to gain entry to the host cell. A protein that is in cells, called TRIM21, can attach to the antibodies on the surface of the virus particle. This primes the subsequent destruction of the virus by the enzymes of the cell&apos;s proteosome system.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rotavirus_with_antibody.jpg/330px-Rotavirus_with_antibody.jpg" w={300} h={200} caption={
                (
                    <>
                        Two rotaviruses: the one on the right is coated with antibodies that prevent its attachment to cells and infecting them.
                    </>
                )
            } />
            <br />
            <p>
                A second defence of vertebrates against viruses is called cell-mediated immunity and involves immune cells known as T cells. The body&apos;s cells constantly display short fragments of their proteins on the cell&apos;s surface, and, if a T cell recognises a suspicious viral fragment there, the host cell is destroyed by &apos;killer T&apos; cells and the virus-specific T-cells proliferate. Cells such as the macrophage are specialists at this antigen presentation. The production of interferon is an important host defence mechanism. This is a hormone produced by the body when viruses are present. Its role in immunity is complex; it eventually stops the viruses from reproducing by killing the infected cell and its close neighbours.
                <br />
                <br />
                Not all virus infections produce a protective immune response in this way. HIV evades the immune system by constantly changing the amino acid sequence of the proteins on the surface of the virion. This is known as &quot;escape mutation&quot; as the viral epitopes escape recognition by the host immune response. These persistent viruses evade immune control by sequestration, blockade of antigen presentation, cytokine resistance, evasion of natural killer cell activities, escape from apoptosis, and antigenic shift. Other viruses, called &apos;neurotropic viruses&apos;, are disseminated by neural spread where the immune system may be unable to reach them due to immune privilege.
            </p>
            <br />
            <SubTitle>Prevention and treatment</SubTitle>
            <p>
                Because viruses use vital metabolic pathways within host cells to replicate, they are difficult to eliminate without using drugs that cause toxic effects to host cells in general. The most effective medical approaches to viral diseases are vaccinations to provide immunity to infection, and antiviral drugs that selectively interfere with viral replication.
            </p>
            <br />
            <SecondarySubTitle>Vaccines</SecondarySubTitle>
            <br />
            <p>
                Vaccination is a cheap and effective way of preventing infections by viruses. Vaccines were used to prevent viral infections long before the discovery of the actual viruses. Their use has resulted in a dramatic decline in morbidity (illness) and mortality (death) associated with viral infections such as polio, measles, mumps and rubella. Smallpox infections have been eradicated. Vaccines are available to prevent over thirteen viral infections of humans, and more are used to prevent viral infections of animals. Vaccines can consist of live-attenuated or killed viruses, viral proteins (antigens), or RNA. Live vaccines contain weakened forms of the virus, which do not cause the disease but, nonetheless, confer immunity. Such viruses are called attenuated. Live vaccines can be dangerous when given to people with a weak immunity (who are described as immunocompromised), because in these people, the weakened virus can cause the original disease. Biotechnology and genetic engineering techniques are used to produce subunit vaccines. These vaccines use only the capsid proteins of the virus. Hepatitis B vaccine is an example of this type of vaccine. Subunit vaccines are safe for immunocompromised patients because they cannot cause the disease. The yellow fever virus vaccine, a live-attenuated strain called 17D, is probably the safest and most effective vaccine ever generated.
            </p>
            <br />
            <SecondarySubTitle>Antiviral drugs</SecondarySubTitle>
            <br />
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Guanosine_aciclovir_comparison.svg/255px-Guanosine_aciclovir_comparison.svg.png" w={350} h={500} caption={
                (
                    <>
                        The structure of the DNA base guanosine and the antiviral drug acyclovir
                    </>
                )
            } />
            <br />
            <p>
                Antiviral drugs are often nucleoside analogues (fake DNA building-blocks), which viruses mistakenly incorporate into their genomes during replication. The life-cycle of the virus is then halted because the newly synthesised DNA is inactive. This is because these analogues lack the hydroxyl groups, which, along with phosphorus atoms, link together to form the strong &quot;backbone&quot; of the DNA molecule. This is called DNA chain termination. Examples of nucleoside analogues are aciclovir for Herpes simplex virus infections and lamivudine for HIV and hepatitis B virus infections. Aciclovir is one of the oldest and most frequently prescribed antiviral drugs. Other antiviral drugs in use target different stages of the viral life cycle. HIV is dependent on a proteolytic enzyme called the HIV-1 protease for it to become fully infectious. There is a large class of drugs called protease inhibitors that inactivate this enzyme. There are around thirteen classes of antiviral drugs each targeting different viruses or stages of viral replication.
                <br />
                <br />
                Hepatitis C is caused by an RNA virus. In 80% of people infected, the disease is chronic, and without treatment, they are infected for the remainder of their lives. There are effective treatments that use direct-acting antivirals. The treatment of chronic carriers of the hepatitis B virus has also been developed by using similar strategies that include lamivudine and other anti-viral drugs.
            </p>
            <ParagraphSecondaryHeader id="Infection_in_other_species">Infection in other species</ParagraphSecondaryHeader>
            <p id="Infection_in_other_species">
                Viruses infect all cellular life and, although viruses occur universally, each cellular species has its own specific range that often infects only that species. Some viruses, called satellites, can replicate only within cells that have already been infected by another virus.
            </p>
            <br />
            <SubTitle>Animal viruses</SubTitle>
            <p>
                Viruses are important pathogens of livestock. Diseases such as foot-and-mouth disease and bluetongue are caused by viruses. Companion animals such as cats, dogs, and horses, if not vaccinated, are susceptible to serious viral infections. Canine parvovirus is caused by a small DNA virus and infections are often fatal in pups. Like all <Link slug="Invertebrate" title="invertebrates" />, the honey bee is susceptible to many viral infections. Most viruses co-exist harmlessly in their host and cause no signs or symptoms of disease.
            </p>
            <br />
            <SubTitle>Plant viruses</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pepper_mild_mottle_virus.png/330px-Pepper_mild_mottle_virus.png" w={400} h={400} caption={
                (
                    <>
                        Peppers infected by mild mottle virus
                    </>
                )
            } />
            <br />
            <p>
                There are many types of plant viruses, but often they cause only a loss of yield, and it is not economically viable to try to control them. Plant viruses are often spread from plant to plant by organisms, known as vectors. These are usually insects, but some fungi, nematode worms, <Link slug="Protozoa" title="single-celled organisms" />, and parasitic plants are vectors. When control of plant virus infections is considered economical, for perennial fruits, for example, efforts are concentrated on killing the vectors and removing alternate hosts such as weeds. Plant viruses cannot infect humans and other animals because they can reproduce only in living plant cells.
                <br />
                <br />
                Originally from Peru, the potato has become a staple crop worldwide. The potato virus Y causes disease in potatoes and related species including tomatoes and peppers. In the 1980s, this virus acquired economical importance when it proved difficult to control in seed potato crops. Transmitted by aphids, this virus can reduce crop yields by up to 80 per cent, causing significant losses to potato yields.
                <br />
                <br />
                Plants have elaborate and effective defence mechanisms against viruses. One of the most effective is the presence of so-called resistance (R) genes. Each R gene confers resistance to a particular virus by triggering localised areas of cell death around the infected cell, which can often be seen with the unaided eye as large spots. This stops the infection from spreading. RNA interference is also an effective defence in plants. When they are infected, plants often produce natural disinfectants that kill viruses, such as salicylic acid, nitric oxide, and reactive oxygen molecules.
                <br />
                <br />
                Plant virus particles or virus-like particles (VLPs) have applications in both biotechnology and nanotechnology. The capsids of most plant viruses are simple and robust structures and can be produced in large quantities either by the infection of plants or by expression in a variety of heterologous systems. Plant virus particles can be modified genetically and chemically to encapsulate foreign material and can be incorporated into supramolecular structures for use in biotechnology.
            </p>
            <br />
            <SubTitle>Bacterial viruses</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Phage.jpg/255px-Phage.jpg" w={400} h={400} caption={
                (
                    <>
                        Transmission electron micrograph of multiple bacteriophages attached to a bacterial cell wall
                    </>
                )
            } />
            <br />
            <p>
                Bacteriophages are a common and diverse group of viruses and are the most abundant biological entity in aquatic environments—there are up to ten times more of these viruses in the oceans than there are bacteria, reaching levels of 250,000,000 bacteriophages per millilitre of seawater. These viruses infect specific bacteria by binding to surface receptor molecules and then entering the cell. Within a short amount of time, in some cases, just minutes, bacterial polymerase starts translating viral mRNA into protein. These proteins go on to become either new virions within the cell, helper proteins, which help assembly of new virions, or proteins involved in cell lysis. Viral enzymes aid in the breakdown of the cell membrane, and, in the case of the T4 phage, in just over twenty minutes after injection over three hundred phages could be released.
                <br />
                <br />
                The major way bacteria defend themselves from bacteriophages is by producing enzymes that destroy foreign DNA. These enzymes, called restriction endonucleases, cut up the viral DNA that bacteriophages inject into bacterial cells. Bacteria also contain a system that uses CRISPR sequences to retain fragments of the genomes of viruses that the bacteria have come into contact with in the past, which allows them to block the virus&apos;s replication through a form of RNA interference. This genetic system provides bacteria with acquired immunity to infection.
                <br />
                <br />
                Some bacteriophages are called &quot;temperate&quot; because they cause latent infections and do not immediately destroy their host cells. Instead, their DNA is incorporated with the host cell&apos;s as a prophage. These latent infections become productive when the prophage DNA is activated by stimuli such as changes in the environment. The intestines of animals, including humans, contain temperate bacteriophages, which are activated by various stimuli including changes in diet and antibiotics. Although first observed in bacteriophages, many other viruses are known to form proviruses including HIV.
            </p>
            <br />
            <SubTitle>Archaeal viruses</SubTitle>
            <p>
                Some viruses replicate within archaea: these are DNA viruses with unusual and sometimes unique shapes. These viruses have been studied in most detail in the thermophilic archaea, particularly the orders Sulfolobales and Thermoproteales. Defences against these viruses involve RNA interference from repetitive DNA sequences within archaean genomes that are related to the genes of the viruses. Most archaea have CRISPR–Cas systems as an adaptive defence against viruses. These enable archaea to retain sections of viral DNA, which are then used to target and eliminate subsequent infections by the virus using a process similar to RNA interference.
            </p>
            <ParagraphSecondaryHeader id="Role_in_aquatic_ecosystem">Role in aquatic ecosystem</ParagraphSecondaryHeader>
            <p id="Role_in_aquatic_ecosystem">
                Viruses are the most abundant biological entity in aquatic environments. There are about ten million of them in a teaspoon of seawater. Most of these viruses are bacteriophages infecting heterotrophic bacteria and cyanophages infecting cyanobacteria and they are essential to the regulation of saltwater and freshwater ecosystems. Bacteriophages are harmless to plants and animals, and are essential to the regulation of marine and freshwater ecosystems are important mortality agents of phytoplankton, the base of the foodchain in aquatic environments. They infect and destroy bacteria in aquatic microbial communities, and are one of the most important mechanisms of recycling carbon and nutrient cycling in marine environments. The organic molecules released from the dead bacterial cells stimulate fresh bacterial and algal growth, in a process known as the viral shunt. In particular, lysis of bacteria by viruses has been shown to enhance nitrogen cycling and stimulate phytoplankton growth. Viral activity may also affect the biological pump, the process whereby carbon is sequestered in the deep ocean.
                <br />
                <br />
                Microorganisms constitute more than 90% of the biomass in the sea. It is estimated that viruses kill approximately 20% of this biomass each day and that there are 10 to 15 times as many viruses in the oceans as there are bacteria and archaea. Viruses are also major agents responsible for the destruction of phytoplankton including harmful algal blooms, The number of viruses in the oceans decreases further offshore and deeper into the water, where there are fewer host organisms.
                <br />
                <br />
                In January 2018, scientists reported that 800 million viruses, mainly of marine origin, are deposited daily from the Earth&apos;s atmosphere onto every square meter of the planet&apos;s surface, as the result of a global atmospheric stream of viruses, circulating above the weather system but below the altitude of usual airline travel, distributing viruses around the planet.
                <br />
                <br />
                Like any organism, marine mammals are susceptible to viral infections. In 1988 and 2002, thousands of harbour seals were killed in Europe by phocine distemper virus. Many other viruses, including caliciviruses, herpesviruses, adenoviruses and parvoviruses, circulate in marine mammal populations.
                <br />
                <br />
                In December 2022, scientists reported the first observation of virovory via an experiment on pond water containing chlorovirus, which commonly infects green algae in freshwater environments. When all other microbial food sources were removed from the water, the ciliate Halteria was observed to have increased in number due to the active consumption of chlorovirus as a food source instead of its typical bacterivore diet.
            </p>
            <ParagraphSecondaryHeader id="Role_in_evolution">Role in evolution</ParagraphSecondaryHeader>
            <p id="Role_in_evolution">
                Viruses are an important natural means of transferring genes between different species, which increases genetic diversity and drives evolution. It is thought that viruses played a central role in early evolution, before the diversification of the last universal common ancestor (LUCA) into bacteria, archaea and eukaryotes. Viruses are still one of the largest reservoirs of unexplored genetic diversity on Earth
            </p>
            <ParagraphSecondaryHeader id="Applications">Applications</ParagraphSecondaryHeader>
            <span id="Applications"></span>
            <SubTitle>Life sciences and medicines</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Influenza_virus_research.jpg/255px-Influenza_virus_research.jpg" w={400} h={500} caption={
                (
                    <>
                        Scientist studying the H5N1 influenza virus
                    </>
                )
            } />
            <br />
            <p>
                Viruses are important to the study of molecular and cell biology as they provide simple systems that can be used to manipulate and investigate the functions of cells. The study and use of viruses have provided valuable information about aspects of cell biology. For example, viruses have been useful in the study of genetics and helped our understanding of the basic mechanisms of molecular genetics, such as DNA replication, transcription, RNA processing, translation, protein transport, and immunology.
                <br />
                <br />
                Geneticists often use viruses as vectors to introduce genes into cells that they are studying. This is useful for making the cell produce a foreign substance, or to study the effect of introducing a new gene into the genome. Similarly, virotherapy uses viruses as vectors to treat various diseases, as they can specifically target cells and DNA. It shows promising use in the treatment of cancer and in gene therapy. Eastern European scientists have used phage therapy as an alternative to antibiotics for some time, and interest in this approach is increasing, because of the high level of antibiotic resistance now found in some pathogenic bacteria. The expression of heterologous proteins by viruses is the basis of several manufacturing processes that are currently being used for the production of various proteins such as vaccine antigens and antibodies. Industrial processes have been recently developed using viral vectors and several pharmaceutical proteins are currently in pre-clinical and clinical trials.
            </p>
            <br />
            <SecondarySubTitle>Virotherapy</SecondarySubTitle>
            <br />
            <p>
                Virotherapy involves the use of genetically modified viruses to treat diseases. Viruses have been modified by scientists to reproduce in cancer cells and destroy them but not infect healthy cells. Talimogene laherparepvec (T-VEC), for example, is a modified herpes simplex virus that has had a gene, which is required for viruses to replicate in healthy cells, deleted and replaced with a human gene (GM-CSF) that stimulates immunity. When this virus infects cancer cells, it destroys them and in doing so the presence the GM-CSF gene attracts dendritic cells from the surrounding tissues of the body. The dendritic cells process the dead cancer cells and present components of them to other cells of the immune system. Having completed successful clinical trials, the virus gained approval for the treatment of melanoma in late 2015. Viruses that have been reprogrammed to kill cancer cells are called oncolytic viruses.
            </p>
            <br />
            <SubTitle>Materials science and nanotechnology</SubTitle>
            <p>
                From the viewpoint of a materials scientist, viruses can be regarded as organic nanoparticles. Their surface carries specific tools that enable them to cross the barriers of their host cells. The size and shape of viruses and the number and nature of the functional groups on their surface are precisely defined. As such, viruses are commonly used in materials science as scaffolds for covalently linked surface modifications. A particular quality of viruses is that they can be tailored by directed evolution. The powerful techniques developed by life sciences are becoming the basis of engineering approaches towards nanomaterials, opening a wide range of applications far beyond biology and medicine. Because of their size, shape, and well-defined chemical structures, viruses have been used as templates for organising materials on the nanoscale. Examples include the work at the Naval Research Laboratory in Washington, D.C., using Cowpea mosaic virus (CPMV) particles to amplify signals in DNA microarray based sensors. In this application, the virus particles separate the fluorescent dyes used for signalling to prevent the formation of non-fluorescent dimers that act as quenchers. Another example is the use of CPMV as a nanoscale breadboard for molecular electronics.
            </p>
            <br />
            <SubTitle>Synthetic viruses</SubTitle>
            <p>
                Many viruses can be synthesised de novo (&quot;from scratch&quot;). The first synthetic virus was created in 2002. Although somewhat of a misconception, it is not the actual virus that is synthesised, but rather its DNA genome (in case of a DNA virus), or a cDNA copy of its genome (in case of RNA viruses). For many virus families the naked synthetic DNA or RNA (once enzymatically converted back from the synthetic cDNA) is infectious when introduced into a cell. That is, they contain all the necessary information to produce new viruses. This technology is now being used to investigate novel vaccine strategies. The ability to synthesise viruses has far-reaching consequences, since viruses can no longer be regarded as extinct, as long as the information of their genome sequence is known and permissive cells are available. As of June 2021, the full-length genome sequences of 11,464 different viruses, including smallpox, are publicly available in an online database maintained by the National Institutes of Health.
            </p>
            <br />
            <SubTitle>Weapons</SubTitle>
            <p>
                The ability of viruses to cause devastating epidemics in human societies has led to the concern that viruses could be weaponised for biological warfare. Further concern was raised by the successful recreation of the infamous 1918 influenza virus in a laboratory. The smallpox virus devastated numerous societies throughout history before its eradication. There are only two centres in the world authorised by the WHO to keep stocks of smallpox virus: the State Research Center of Virology and Biotechnology VECTOR in Russia and the Centers for Disease Control and Prevention (CDC) in the United States. It may be used as a weapon, as the vaccine for smallpox sometimes had severe side-effects, it is no longer used routinely in any country. Thus, much of the modern human population has almost no established resistance to smallpox and would be vulnerable to the virus.
            </p>
            <ParagraphSecondaryHeader id="Scientific_classification">Scientific classification</ParagraphSecondaryHeader>
            <span id="Scientific_classification"></span>
            <SubTitle>Virus classification</SubTitle>
            <p>
                (unranked): Virus
            </p>
            <br />
            <SubTitle>Realms</SubTitle>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <i>
                            Adnaviria
                        </i>
                    </li>
                    <br />
                    <li>
                        <i>
                            Duplodnaviria
                        </i>
                    </li>
                    <br />
                    <li>
                        <i>
                            Monodnaviria
                        </i>
                    </li>
                    <br />
                    <li>
                        <i>
                            Riboviria
                        </i>
                    </li>
                    <br />
                    <li>
                        <i>
                            Ribozyviria
                        </i>
                    </li>
                    <br />
                    <li>
                        <i>
                            Varidnaviria
                        </i>
                    </li>
                </ul>
            </div>
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Virus" thumbnail="/assets/virus.png" content={content} />
        </>
    );
};