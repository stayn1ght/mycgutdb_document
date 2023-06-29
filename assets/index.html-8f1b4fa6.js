import{_ as l,W as d,X as c,Y as t,Z as e,$ as a,a0 as o,a1 as u,a2 as s,C as n}from"./framework-a4c81d3d.js";const h={},m=s('<h1 id="home-默认第一个标题不会显示-具体应该看教程" tabindex="-1"><a class="header-anchor" href="#home-默认第一个标题不会显示-具体应该看教程" aria-hidden="true">#</a> Home 默认第一个标题不会显示，具体应该看教程</h1><h1 id="welcome-to-mycobiomedb" tabindex="-1"><a class="header-anchor" href="#welcome-to-mycobiomedb" aria-hidden="true">#</a> Welcome to <b><span style="color:darkblue;">Mycobiome</span><span style="color:forestgreen;">DB</span></b></h1>',2),p=s('<h2 id="aims-and-features-of-mycobiomedb" tabindex="-1"><a class="header-anchor" href="#aims-and-features-of-mycobiomedb" aria-hidden="true">#</a> Aims and features of <b><span style="color:darkblue;">Mycobiome</span><span style="color:forestgreen;">DB</span></b></h2><h3 id="emphasize-on-data-quality-and-re-usability" tabindex="-1"><a class="header-anchor" href="#emphasize-on-data-quality-and-re-usability" aria-hidden="true">#</a> Emphasize on data quality and re-usability</h3><p>With <b><span style="color:darkblue;">Mycobiome</span><span style="color:forestgreen;">DB</span></b>, we emphasize on <strong>data quality</strong> and <strong>re-usability</strong> (i.e., availability of the host meta-data). We thus:</p>',3),b=e("li",null,"manually extracted and curated relevant meta-data (most of the time with difficulties) from public databases and related publications;",-1),f=e("li",null,"applied stringent quality control (QC) procedure to the data, in order to include only high quality data.",-1),y=e("h3",{id:"gain-a-comprehensive-understanding-of-the-human-gut-mycobiome",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gain-a-comprehensive-understanding-of-the-human-gut-mycobiome","aria-hidden":"true"},"#"),a(" Gain a comprehensive understanding of the human gut mycobiome")],-1),g=e("p",null,[a("With "),e("b",null,[e("span",{style:{color:"darkblue"}},"Mycobiome"),e("span",{style:{color:"forestgreen"}},"DB")]),a(", we aim to gain a comprehensive understanding of the mycobiome community in the human gut, including their")],-1),_=e("li",null,"abundances and prevalence,",-1),x=e("li",null,"co-occurrences between each other, and",-1),w={href:"http://mycobiome.humangut.info/phenotypes",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"all of which can be further stratified by using manually curated meta-data:",-1),v=e("ul",null,[e("li",null,"population (country),"),e("li",null,"gender,"),e("li",null,"age, and"),e("li",null,"many other available meta data.")],-1);function q(M,D){const i=n("RouterLink"),r=n("ExternalLinkIcon");return d(),c("div",null,[m,t(` <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>
 is a curated database of human gut mycobiome. `),t(` ## Citation

Please cite our latest publication if you find this resource useful:

[Dai, D. *et al.* "GMrepo v2: a curated human gut microbiome database with special focus on disease markers and cross-dataset comparison". *Nucleic Acids Res* (2022). Volume 50, Issue D1, Pages D777–D784.](https://doi.org/10.1093/nar/gkab1019).
 `),p,e("ul",null,[b,e("li",null,[a("consistently re-annotated all data using state-of-the-art methods (see the "),o(i,{to:"/methods/dataprocessing.html"},{default:u(()=>[a("Materials and methods")]),_:1}),a(" page for details);")]),f]),y,g,e("ul",null,[_,x,e("li",null,[a("associations with "),e("a",w,[a("human diseases"),o(r)]),a(",")])]),k,v,t(` ### Make relevant information easier to find

In order to further facilitate users to find data of interests, we equipped <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b> with
[a graphical query builder (data selector)](https://mycobiome.humangut.info/#/home) to help users to create complex and flexible queries with a few clicks. So far the data selector allows users to filter samples and runs by related technical meta data such as <code>experiment type (16S or Metagenomics)</code>, <code>number of sequenced reads</code>, and host- related meta data, including related phenotype (<code>disease or health</code>), <code>age</code>, <code>sex</code>, and <code>BMI (body mass index)</code>. More filters will be added in the future.
For example, the screenshot below allows users to search for samples (runs) that:

* were taken from healthy individuals with BMI (body mass index) over 25, <code>AND</code>
* were sequenced by either 16S <code>OR</code> metagenomics.

![](/assets/images/index/query_builder_example.png)

See [Use the graphic data selector](usage/graphicquirybuilder.md) for details and more examples. `)])}const N=l(h,[["render",q],["__file","index.html.vue"]]);export{N as default};