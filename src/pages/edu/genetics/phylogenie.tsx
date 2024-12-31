import React from "react";
import { DoubleFigure } from "../../../components/Figure";
import BibtexParser from "../../../components/Sources/makeSources";
import { SupScrollLink } from "../../../components/ScrollLink";


export function Phylo() {

    return (
      <>
      <div className="col">
        <p>The origin of isopods and how exactly they are related is not yet clear. There are scientists working on it with the help of gene research.</p>
        <h1 id="isopods-in-context-with-other-groups">Isopods in context with other groups</h1>
        <p>The paper the following two trees are from questions the origin of isopods based on new knowledge due to genetic research<SupScrollLink label="1"/>.</p>

        <div className="col">
        <DoubleFigure
        url1="https://www.researchgate.net/profile/Andrei-Giurginca/publication/350008321/figure/fig2/AS:1000493786595329@1615547715267/Cladogram-depicting-the-phylogenetic-relationships-of-the-major-groups-of-the-order_W640.jpg"
        caption2='"Cladogram depicting the phylogenetic relationships of the major taxonomic groups"'
        caption1='"Cladogram depicting the phylogenetic relationships of the major groups of the order Isopoda"'
        url2="https://www.researchgate.net/profile/Andrei-Giurginca/publication/350008321/figure/fig1/AS:1000493786611712@1615547715245/Cladogram-depicting-the-phylogenetic-relationships-of-the-major-taxonomic-groups-of-the_W640.jpg"
        />

        </div>
        <p>The reconstruction of the isopodal phylogeny is not straight forward and presents challenges. For example, anlysing morphological features leads
            different conclusions than using DNA analyses. But even the DNA analyses return different results depending on the type of
            DNA used. 
        </p>
        <p>The next trees stem form a paper analysing the effects of different types of data sets and reconstruction methods on the resulting 
            phylogeentic trees.
             When comparing 
            the two trees derived from using two different methods on the same data, slight differences are visible. 
             <i>Zhang, Dong & Zou, Hong & Hua, Congjie & Li, Wenxiang & Mahboob, Shahid & Al-Ghanim, Khalid & Al-Misned, Fahad & Jakovlić, Ivan & Wang, Gui-Tang. (2019). Mitochondrial architecture rearrangements produce asymmetrical nonadaptive mutational pressures that subvert the phylogenetic reconstruction in Isopoda. 10.1101/607960.</i></p>
        <DoubleFigure
        url1="https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/gbe/11/7/10.1093_gbe_evz121/4/m_evz121f1.jpeg?Expires=1730523948&Signature=EtLdTmk0r55cYSIDSNN5qiBdDBVAM3u3TsfaSIw149pImQ~dumjCl1Rvx4pGxPGF-UlegdbT8hHOQ3ba7CNTHv0v-Anpv0TGUz9UIH~FiSUSqJv1wlN5pAYNzrmKUiG3nzpA6pVnzdze7oQd6ZGkbgtXZUUmKfWQ5wktwgFAgrquHwjeEixgH4MvYm7mFB4pOUR0Qho7HfghTtLq3WEnkiWczYA5vlO52wylZD6ADNq3Q8d9JL5fSxEtCnD45NxEwGqCD2JKt~FsOshNCpPPfZsbtzohcFPXlqXtvUnJYYMwMygE6taafvLOigALyInPHClTJkS0~~jvx93xXNXTYw__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
        caption1="Phylogram using partitioned nucleotide sequences (concatenated 13 PCGs and 2 rRNA genes)"
        url2="https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/gbe/11/7/10.1093_gbe_evz121/4/m_evz121f2.jpeg?Expires=1730523948&Signature=UYmj8QQybgYRJ32m8rdTmoRynmrD-m-hw7eUL~fPYlttb4-DEfEv2rTiopHVf48g-DibyK2FFhoQPFk57-8LwZ9eBkDkYQdnlPn8p7wTOf7-4ZzdU-27kgUR~2~Jzdm0uNr0og7Oy~VvNzuLChTgwwbm6yte08OqVWhsBU8-Bevkfz6KmJ716kxpdg0FNG7n9q-CQ3TRofeeMoIwCf6C39wZVGo4DxokqbJiBMFgQdRrtIwlrPh65zrxKz4tiq3j51u28fdxozEQdQyAgkIhD1wOXcgPoMk2wRbmywPhjp-tRuQNertaTVDusLJlSxZJ7g-y-5N11Cla2Wifu626pQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
        caption2="Phylogram using nonpartitioned nucleotide sequences"
        />
        <figure className="size-full">
  <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Mitochondrial-architecture-rearrangements-produce-asymmetrical-nonadaptive-mutational-pressures-that-subvert-the-phylogenetic-reconstruction-in-Isopoda2.jpg" alt="" />
</figure>

<figure className="size-full">
  <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Mitochondrial-architecture-rearrangements-produce-asymmetrical-nonadaptive-mutational-pressures-that-subvert-the-phylogenetic-reconstruction-in-Isopoda.jpg" alt="" />
</figure>

        <h1>References</h1>
        <BibtexParser bibtexSources={bibtexSources} />
      </div>
      






<p>And from another article but the same author: <i>Zhang, Dong & Zou, Hong & Hua, Congjie & Li, Wenxiang & Mahboob, Shahid & Al-Ghanim, Khalid & Al-Misned, Fahad & Jakovlić, Ivan & Wang, Gui-Tang. (2019). Mitochondrial Architecture Rearrangements Produce Asymmetrical Nonadaptive Mutational Pressures That Subvert the Phylogenetic Reconstruction in Isopoda. Genome biology and evolution. 11. 10.1093/gbe/evz121.</i></p>

<div className="columns alignwide">
  <div className="column">
    <figure className="size-large">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-14-25-11-1024x639.png" alt="" />
    </figure>
  </div>
  <div className="column">
    <figure className="size-large">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-14-26-06-1024x639.png" alt="" />
    </figure>
  </div>
</div>

<figure className="size-large">
  <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-14-26-51-970x1024.png" alt="" />
</figure>

<h2 className="has-large-font-size" id="aioseo-isopoda">Isopoda</h2>

<p>In these two trees, you get a general overview about the relations of selected species. <i>Zou, Hong & Jakovlić, Ivan & Zhang, Dong & Chen, Rong & Mahboob, Shahid & Al-Ghanim, Khalid & Al-Misned, Fahad & Li, Wenxiang & Wang, Gui-Tang. (2018). The complete mitochondrial genome of Cymothoa indica has a highly rearranged gene order and clusters at the very base of the Isopoda clade. PLOS ONE. 13. e0203089. 10.1371/journal.pone.0203089.</i></p>

<div className="columns alignwide">
  <div className="column">
    <figure className="size-full">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/The-complete-mitochondrial-genome-of-Cymothoa-indica-has-a-highly-rearranged-gene-order-and-clusters-at-the-very-base-of-the-Isopoda-clade.jpg" alt="" />
    </figure>
  </div>
  <div className="column">
    <figure className="size-full">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/The-complete-mitochondrial-genome-of-Cymothoa-indica-has-a-highly-rearranged-gene-order-and-clusters-at-the-very-base-of-the-Isopoda-clade2.jpg" alt="" />
    </figure>
  </div>
  <div className="column" >
    <div className="columns">
      <div className="column">
        <figure className="size-full">
          <img src="https://lilisisopods.com/wp-content/uploads/2023/07/The-complete-mitochondrial-genome-of-Cymothoa-indica-has-a-highly-rearranged-gene-order-and-clusters-at-the-very-base-of-the-Isopoda-clade2-1.jpg" alt="" />
        </figure>
      </div>
      <div className="column">
        <figure className="size-full">
          <img src="https://lilisisopods.com/wp-content/uploads/2023/07/The-complete-mitochondrial-genome-of-Cymothoa-indica-has-a-highly-rearranged-gene-order-and-clusters-at-the-very-base-of-the-Isopoda-clade-2.jpg" alt="" />
        </figure>
      </div>
    </div>
  </div>
</div>

<p>From another paper, here comes more about isopods in general: <i>Dimitriou, Andreas & Taiti, Stefano & Sfenthourakis, Spyros. (2019). Genetic evidence against monophyly of Oniscidea implies a need to revise scenarios for the origin of terrestrial isopods. Scientific Reports. 9. 18508. 10.1038/s41598-019-55071-4.</i></p>

<figure className="size-large alignwide">
  <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-13-49-42-1024x624.png" alt="" />
</figure>

<h2 className="has-large-font-size" id="aioseo-oniscidea-terrestrial">Oniscidea (Terrestrial)</h2>

<p>The following trees show a hypothesis of relation between some groups of isopods.</p>

<p>It is based on the conserved regions of the ssu rDNA of these isopods and used three different methods. <i>Mattern, D. (2003). "New Aspects in the Phylogeny of the Oniscidea Inferred from Molecular Data". In <em>Oniscidea Rolling into the New Millennium: Proceedings of the 5th International Symposium on the Biology of Terrestrial Isopods</em>. Leiden, Niederlande: Brill. <a href="https://doi.org/10.1163/9789047412854_006" target="_blank" rel="noreferrer noopener">https://doi.org/10.1163/9789047412854_006</a></i></p>

<div className="columns alignwide">
  <div className="column">
    <figure className="size-full">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-00-571.png" alt="" width="371" height="454" />
      <figcaption>Maximum likelihood</figcaption>
    </figure>
  </div>
  <div className="column">
    <figure className="size-full">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-01-38.png" alt="" width="366" height="448" />
      <figcaption>Maximum Parsimony</figcaption>
    </figure>
  </div>
  <div className="column">
    <figure className="size-full">
      <img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-02-09.png" alt="" width="374" height="448" />
      <figcaption>Bayesian analysis</figcaption>
    </figure>
  </div>
</div>
<h2 className="has-large-font-size" id="aioseo-tylos">Tylos</h2>

<p>This genus may not be very popular but fortunately there still is some research about it. In the following tree you can not only see the relations of different species but also of specimens of the same species that were found in different places. <i>Hurtado, Luis & Lee, Eun & Mateos, Mariana & Taiti, Stefano. (2014). Global Diversification at the Harsh Sea-Land Interface: Mitochondrial Phylogeny of the Supralittoral Isopod Genus Tylos (Tylidae, Oniscidea). PloS one. 9. e94081. 10.1371/journal.pone.0094081.</i></p>

<figure className="wp-block-image size-full"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Global-Diversification-at-the-Harsh-Sea-Land-Interface-Mitochondrial-Phylogeny-of-the-Supralittoral-Isopod-Genus-Tylos-Tylidae-Oniscidea.jpg" alt="" className="wp-image-608"/></figure>

<h2 className="has-large-font-size" id="aioseo-cavernicolous-terrestrial-isopods">Cavernicolous terrestrial isopods</h2>

<p>The following tree stems from a paper that focuses on terrestrial isopods that live in caves: <i>Guan, Bob & Wang, Dan & He, Zhuqing. (2023). A Molecular Phylogeny of Cavernicolous Oniscidea (Isopoda) Reveals Multiple Origins of Troglodytic Behavior (Oniscidea, Isopoda). Highlights in Science, Engineering and Technology. 45. 144-150. 10.54097/hset.v45i.7335.</i></p>

<figure className="wp-block-image size-full"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-14-10-05.png" alt="" className="wp-image-615"/></figure>

<h2 className="has-large-font-size" id="aioseo-ligia-intertidal">Ligia (Intertidal)</h2>

<p>This next image is a phylogenetic tree of Ligia species with the focus on Hawaiian species. <i>Taiti, S., Arnedo, M. A., Lew, S. E., & Roderick, G. K. (2003). "Evolution of Terrestriality in Hawaiian Species of the Genus Ligia (Isopoda, Oniscidea)". In <em>Oniscidea Rolling into the New Millennium: Proceedings of the 5th International Symposium on the Biology of Terrestrial Isopods</em>. Leiden, Niederlande: Brill. <a rel="noreferrer noopener" href="https://doi.org/10.1163/9789047412854_010" target="_blank">https://doi.org/10.1163/9789047412854_010</a></i></p>

<figure className="wp-block-image size-large"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-07-51-939x1024.png" alt="" className="wp-image-562"/></figure>

<p>Further, here you can see a few different hypotheses on how Ligia in Hawaii became terrestrial: <i>Taiti, S., Arnedo, M. A., Lew, S. E., & Roderick, G. K. (2003). "Evolution of Terrestriality in Hawaiian Species of the Genus Ligia (Isopoda, Oniscidea)". In <em>Oniscidea Rolling into the New Millennium: Proceedings of the 5th International Symposium on the Biology of Terrestrial Isopods</em>. Leiden, Niederlande: Brill. <a rel="noreferrer noopener" href="https://doi.org/10.1163/9789047412854_010" target="_blank">https://doi.org/10.1163/9789047412854_010</a></i></p>

<figure className="wp-block-image size-large"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-07-02-1024x360.png" alt="" className="wp-image-571"/></figure>

<figure className="wp-block-image size-large"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Bildschirmfoto-vom-2023-07-28-12-08-10-1024x445.png" alt="" className="wp-image-574"/></figure>

<p>There is another paper that claims to have proven the Oniscidea to be a polyphyletic group. It is not yet reviewed, so I will not show it here yet. <i>Zhang, Rui & Chen, Ruru & Jianmei, An & Santamaria, Carlos. (2020). Phylogeny of Terrestrial Isopods Based on the Complete Mitochondrial Genomes, Subverting the Monophyly of Oniscidea and Ligiidae up to New Subfamily Ligiaidea of Isopoda. 10.21203/rs.3.rs-25479/v1.</i></p>

<h2 className="has-large-font-size" id="aioseo-sphaeroma-marine">Sphaeroma (Marine)</h2>

<p>Here you can see how the genus Sphaeroma and some of its species are related to other isopods. <i>Yang, Mingliu & Gao, Tingwei & Hui, Ding & Chen, Xiao & Liu, Wenai. (2019). Complete mitochondrial genome and the phylogenetic position of the Sphaeroma sp. (Crustacea, Isopod, Sphaeromatidae). Mitochondrial DNA Part B. 4. 3896-3897. 10.1080/23802359.2019.1687350.</i></p>

<figure className="wp-block-image size-full"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Complete-mitochondrial-genome-and-the-phylogenetic-position-of-the-Sphaeroma-sp.-Crustacea-Isopod-Sphaeromatidae.jpg" alt="" className="wp-image-577"/></figure>

<h2 className="has-large-font-size" id="aioseo-cymothoid-isopods-marine">Cymothoid isopods (Marine)</h2>

<p>Here you see the relations of some parasitic isopods. The author states this group is most derived from other isopod groups. <i>Thangaraj, Muthusamy & Saranya, S. & Divya, S. & Ramanadevi, V. & Subburaj, J.. (2014). Molecular phylogenetic status of some marine Cymothoid isopods on the southeast coast of India. Indian Journal of Marine Sciences. 43. 271-276.</i></p>

<figure className="wp-block-image size-full"><img src="https://lilisisopods.com/wp-content/uploads/2023/07/Molecular-phylogenetic-status-of-some-marine-Cymothoid-isopods-in-southeast-coast-of-India.jpg" alt="" className="wp-image-583"/></figure>

<h2 className="has-large-font-size" id="aioseo-giant-deep-sea-isopod">Giant deep sea isopod</h2>

<p>Here you can see around what time ago the species parted ways. Not only isopods here, as a comparison! <i>Yuan, Jianbo & Zhang, Xiaojun & Kou, Qi & Sun, Yamin & Liu, Chengzhang & Li, Shihao & Yu, Yang & Zhang, Chengsong & Jin, Songjun & Xiang, J. & Li, Xinzheng & Li, Fuhua. (2022). Genome of a giant isopod, Bathynomus jamesi, provides insights into body size evolution and adaptation to the deep-sea environment. BMC Biology. 20. 10.1186/s12915-022-01302-6.</i></p>


      </>
    );
  }
  

  const bibtexSources = [

    `
    @article{article,
  author = {Tabacaru, Ionel and Giurginca, Andrei},
  year = {2021},
  month = {03},
  pages = {},
  title = {The monophyly and the classification of the terrestrial isopods (Crustacea, Isopoda, Oniscidea)},
  volume = {LIX}
  }
    `,
    
    `
    @article{article,
author = {Zhang, Dong and Zou, Hong and Hua, Congjie and Li, Wenxiang and Mahboob, Shahid and Al-Ghanim, Khalid and Al-Misned, Fahad and Jakovlić, Ivan and Wang, Gui-Tang},
year = {2019},
month = {06},
pages = {},
title = {Mitochondrial Architecture Rearrangements Produce Asymmetrical Nonadaptive Mutational Pressures That Subvert the Phylogenetic Reconstruction in Isopoda},
volume = {11},
journal = {Genome biology and evolution},
doi = {10.1093/gbe/evz121}
}
    `
  
  ]