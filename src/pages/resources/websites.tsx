import React from "react";
import { Section, Subesction } from "../../components/Sections";
import { WebsiteCard } from "../../components/Cards";



export function Websites() {

    /* 
    <div className="row">
        <WebsiteCard url="url" heading="Lesson" 
            slogan="The.">
           ...
        </WebsiteCard>
         <WebsiteCard url="url" heading="Lesson" 
            slogan="The.">
           ...
        </WebsiteCard>
    </div> 
    */
return ( 
 <>
 <p>Please contact me to have a website added.</p>
<Section title="English">
    <div className="row">
        <WebsiteCard url="https://lessonhive.org/resource-tag/isopods/" heading="Lesson Hive" 
            slogan="The Lesson Hive is a collaborative spot for collecting and evaluating arthropod lesson plans.">
            According to their website they want to provideregistration and travel support to help bring entomologists to NSTA and 
                regional science teacher meetings, since they want to make it as easy as possible for teachers to find and use these resources. 
                They also want to disseminate entomology lessons in places teachers already frequent, and that are already set 
                up for Continuing Education Credits.
        </WebsiteCard>
        <WebsiteCard url="https://www.thecrustaceansociety.org/" heading="The Crustecean Society" 
            slogan="Advancing the study of all aspects of crustacean biology.">
            According to their website, the Crustacean Society (TCS)&nbsp;achieves&nbsp;its mission by promoting the exchange and dissemination of information throughout the world&nbsp;by:&nbsp;
            <br/> 
            <ol>
            <li>The<a href="http://tcs.4s-tw.com/JCB.php"> Journal of Crustacean Biology (JCB)</a> an SCI journal, with&nbsp;Editor-in-Chief Dr. Pedro Castro, published by the Oxford University Press;</li>
            <li>Biannual, <a href="http://tcs.4s-tw.com/meeting.php?past=0">international meetings</a>&nbsp;to gather the world's carcinologists for constructive interaction and collaboration, and by supporting other societies, meetings, and conferences that share our mission;</li>
            <li>Annual competitions for <a href="http://tcs.4s-tw.com/scholarship.php">fellowship, scholarship, and travel awards</a> for postdocs and&nbsp; both graduate and undergraduate students</li>
            </ol>
        </WebsiteCard>
    </div>
    <Subesction title="Taxonomic data" id="English1">
    <div className="row">
        <WebsiteCard url="https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&amp;search_value=92120#null" heading="ITIS" 
            slogan="Integrated Taxonomic Information System - Report">
        </WebsiteCard>
         <WebsiteCard url="https://www.marinespecies.org/isopoda/" heading="WORMS" 
           >
           This list began as an initiative of the US National Museum of Natural History, Smithsonian Institution, maintained by the late Brian Kensley and Marilyn Schotte (now retired). It grew into a valuable resource for providing nomenclature on the Isopoda and was hosted for many years at <a href="http://wayback.archive-it.org/org-660/20170524231642/http://invertebrates.si.edu/isopod/" target="_blank" rel="noreferrer noopener">http://invertebrates.si.edu/isopod/</a>. This list has now been migrated to <a href="https://www.marinespecies.org" target="_blank" rel="noreferrer noopener">www.marinespecies.org</a>, and updated with more detailed information on synonymies and distributions as well as a capability to host more information, such as images, original literature, and specimen data.
        </WebsiteCard>
    </div> 
    </Subesction>
    <Subesction title="Specifically UK" id="English2">
    <div className="row">
        <WebsiteCard url="https://bmig.org.uk/" heading="British Myriapod and Isopod Group" 
            slogan="Discovering Millipedes, Centipedes, Woodlice &amp; other Isopods in Britain &amp; Ireland.">
           According to their website they aim to improve awareness and knowledge of centipedes, millipedes, pauropods &amp; symphylans (the Myriapoda) and woodlice, waterlice &amp; intertidal isopods (the Isopoda) in Britain and Ireland.
        </WebsiteCard>
    </div> 
    </Subesction>
    <Subesction title="Specifically US" id="English3">
    <div className="row">
        <WebsiteCard url="https://www.americanisopodsmyriapods.com/home" heading="American Isopod and Myriapod Group" 
            slogan="The American Isopod and Myriapod Group (AIMG) is a working group dedicated to advancing the study of Isopoda and Myriapoda in North and Central America.">
           They provide taxonomic guides and information and offer to help with projects and identification.
        </WebsiteCard>
    </div> 
    </Subesction>
    <Subesction title="Out of date websites" id="English4">
    <div className="row">
        <WebsiteCard url="https://michiganentsoc.org/wp-content/uploads/2023/11/1973no3.pdf" heading="Rearing and experimenting with isopods" >
        An older recommendation on how to collect isopods and do experiments with them.
        <br/>
           <pre className="block-preformatted">From 1973</pre>
        </WebsiteCard>
         <WebsiteCard url="https://isopods.nhm.org/" heading="Sphaeromatidae" 
            slogan="Our goal is to understand the relationships of sphaeromatid genera, identify generic and subfamilial groupings and develop phylogenetic hypotheses that can provide a sound basis for future biogeographic, mating-system evolution, ecological, behavioral, and other studies. Our investigation will be guided by morphological and molecular analyses of evolutionary relationships within this family (Crustacea: Isopoda: Sphaeromatidae)">
           <pre className="block-preformatted">Last updated 2008
           </pre>
        </WebsiteCard>
    </div> 
    <div className="row">
        <WebsiteCard url="https://isopodnewsletter.wordpress.com/" heading="Isopod Newsletter" 
            >
           It contains a lot of interesting articles but the latest is quite a few years old.
           <pre className="block-preformatted">Last updated 2014</pre>
        </WebsiteCard>
    </div>
    </Subesction>
</Section>
<Section title="German">
<div className="row">
        <WebsiteCard url="https://bodentierhochvier.de/" heading="Bodentier hoch 4" 
             slogan="Bodentier-Portal zum Erleben, Erkennen, Erfassen und Erforschen.">
           They provide an interactive key to woodlice and collect data through citizen science.
        </WebsiteCard>
         <WebsiteCard url="https://www.biologie-seite.de/Biologie/Asseln" heading="Asseln - Biologie-Seite" 
             slogan="Ein Blick auf die Vielfalt des Lebens.">
           This is more or less a Wikipedia style page about isopods.
        </WebsiteCard>
    </div>
    <Subesction title="Out of date websites" id="German1">
    <div className="row">
        <WebsiteCard url="http://assel.net/sonett3.shtml" heading="assel.net" >
        I honestly have no idea what this is exactly but the person seems to be interested in isopods.
        <pre className="block-preformatted">Last updated on 2006-06-11 09:19:54</pre>
        </WebsiteCard>
    </div> 
    </Subesction>
</Section>
<Section title="Spanish">
    <Subesction title="Out of date websites" id="Spanish1">
    <div className="row">
        <WebsiteCard url="https://peracarida.wordpress.com/" heading="CRUSTÁCEOS PERACÁRIDOS CHILENOS" >
           <pre className="block-preformatted">Last updated 2014</pre>
        </WebsiteCard>
    </div> 
    </Subesction>
</Section>
<Section title="Photography">
<div className="row">
        <WebsiteCard url="https://isopod.site/" heading="Isopod Site" >
        Photography by Nicky Bay.
        </WebsiteCard>
    </div> 
</Section>

</>
);
}
