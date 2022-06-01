import React, { useState } from "react";
import styled from "styled-components";
import { FadeInKeyframes } from "./Styles";

const FirstChapterDiv = styled.div`
  text-align: left;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 0px 4px solid;
  box-sizing: border-box;
  padding: 60px;
  padding-top: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 600px;
  margin-left: calc(50% - 300px);
  height: calc(100vh - 160px);
  overflow-y: scroll;
  opacity: 0;
  box-shadow: 0px 0px 8px #ddd;
  animation: ${FadeInKeyframes} 1s 1 forwards;

  h1 {
    margin: 0px;
    font-variant: small-caps;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    animation: ${FadeInKeyframes} 1s 1 forwards 0.5s;
  }
  h2 {
    margin: 0px;
    font-variant: small-caps;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    animation: ${FadeInKeyframes} 1s 1 forwards 0.8s;
  }

  @media screen and (max-width: 700px) {
    & {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      padding: 20px;
    }

    h2 {
      font-size: 14px;
    }
  }

  p {
    font-weight: 300;
    font-size: 15px;
    text-indent: 20px;
    margin: 0px;
    line-height: 26px;
    text-align: justify;
    opacity: 0;
    font-family: "Ibarra", "Times New Roman", Times, serif;
    animation: ${FadeInKeyframes} 1s 1 forwards 1.8s;
  }

  p.noIndent {
    text-indent: 0px;
  }

  .center {
    text-align: center;
  }

  p.p5 {
    margin: 0px 0px 0px 0px;
    text-align: justify;
    font: 14px "Ibarra Real Nova";
    color: #000000;
    line-height: 25px;
  }

  p.p6 {
    margin: 0px 0px 0px 0px;
    text-align: justify;
    text-indent: 10.8px;
    font: 14px "Ibarra Real Nova";
    color: #000000;
    line-height: 25px;
  }

  p.p7 {
    margin: 0px 0px 0px 0px;
    text-align: center;
    text-indent: 10.8px;
    font: 11px "Ibarra Real Nova";
    color: #000000;
    min-height: 13px;
    line-height: 25px;
  }
`;

export const FirstChapter = () => (
  <FirstChapterDiv>
    <h1>CHAPTER ONE</h1>
    <h2>The Teapot</h2>

    <p class="p5">
      The baby-blue carriage meant trouble, no question about it. The thing was,
      if the intruder was a Consortium sortix, he hardly appeared the part.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira used the telescope in the chateau&rsquo;s attic to study the
      stranger. He looked awful. Not just scary-awful, but awful-awful. He
      sported a scruffy beard, a pronounced mustache, and shoddily combed hair.
      His elbows were a mess, ashy caps on the verge of flaking off. He wore a
      frayed coat that poorly matched his mustard pants.
    </p>
    <p class="p6">
      The stranger said something brief, his lips barely moving. He was speaking
      to Friar Sorin, the chateau&rsquo;s religious elder. The friar responded
      with a nod, his rawboned legs trembling. Neither men raised fists, nor
      eyebrows.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Then the stranger extracted two items out of his coat&mdash;thin tubes,
      slender like pencils, filled with a lilac liquid.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Elixirs,&rdquo; mouthed Mira.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She&rsquo;d never seen an elixir before, but she&rsquo;d heard that the
      potions came in various sorts of shades and sizes with all kinds of
      mysterious powers. Friar Sorin forbade their use, mentioning something
      about them being dangerous. But today, the friar accepted the offering
      like he&rsquo;d been presented biscuits, picking one of the vials. The
      stranger furled his fingers around the other. After a shared nod, the two
      men, the young visitor and the old friar, uncorked the little things and
      gulped the contents down their throats.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The stranger&rsquo;s eyes discolored, yellowing like pus-ballooning boils.
      The color cleared in a wingbeat, but he didn&rsquo;t blink, his pupils
      eerily corpselike. Five seconds passed. Then ten, fifteen,
      twenty&mdash;Mira struggled to watch&mdash;finally, his eyelids moved,
      fluttering. The man wiped his lashes and cracked a thin smile.
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      Then Friar Sorin broke his own trance. He patted the stranger&rsquo;s
      shoulders eagerly &hellip; lovingly, even? Mira couldn&rsquo;t make sense
      of the blatant change. A minute ago, the two resembled unacquainted men.
      Possibly enemies. Suddenly, they were buddies?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The friar started rambling. Proper rambling with body sways and finger
      pointing. He gestured towards the forest, the courtyard, and, alas,
      directly at the attic&rsquo;s window. The stranger glanced up.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Shoot,&rdquo; hissed Mira as she ducked her head from view.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Her heartbeat raced. When the carriage had been spotted on the horizon,
      the friar&rsquo;d commanded Mira to hide. Was the stranger here to draft
      her? Would he take her with him and make her serve the horrid Consort?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      No. Mira shook off those fears. The friar would never allow that. The old
      man cared for her. If the stranger was here to draft young girls like
      herself into the Consortium military, to force her to train as a sortix,
      then the friar would deny that Mira existed.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She was sure of that. <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira faintly heard the front door creak two stories below. Peeking out the
      window, she realized that they&rsquo;d abandoned their posts and come
      indoors. She considered going downstairs, but she couldn&rsquo;t shake the
      image of the man&rsquo;s bewitched eyes. What type of elixir had they
      drunk? Why had it made the friar so friendly? This must be a trap.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">Hiding remained Mira&rsquo;s best move.</p>
    <p class="p6">
      She rushed to the cabinet and opened the doors. Its interior smelled
      rancid. Mrs. Podima, the home&rsquo;s caretaker and chief, never washed
      the sheets after Dova passed away. Mira squeezed herself in, pulling her
      sister&rsquo;s old linens over her; she shuddered, her stomach squeezing,
      herself realizing the irony of hiding here. This cabinet was Dova&rsquo;s
      favorite hiding spot years ago. Now, Mira was tucked into the same fabrics
      that her sister&rsquo;d died under.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira waited. There was nothing for minutes. Then she heard footsteps, and
      they only crescendoed<em>.&nbsp;</em>She corkscrewed her body tighter; the
      sounds grew crisper. Someone was yards from the cabinet. Was she about to
      be drafted by the Consortium? To serve in one of those baby-blue uniforms,
      forced to do nasty things?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      <em>Stay still</em>, she told herself.
      <em>&nbsp;Stay still &hellip; stay still &hellip; stay&mdash;</em>
    </p>
    <p class="p6">
      &ldquo;Mira?&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The cabinet door was pulled open, and Mira tumbled out. She glanced
      upwards and felt a pang of relief. Crinkled hair, sagging cheeks, a wispy
      smile&mdash;it was just Friar Sorin.<em>&nbsp;</em>Alone.
    </p>
    <p class="p6">
      He chuckled, each laugh quieter than the last. &ldquo;Clever, Mira, but
      I&rsquo;ve played hide-and-seek with Dova, too.&rdquo;
    </p>
    <p class="p6">
      Mira dusted off her dress with her little hands. A hundred questions poked
      her mind, but she only managed to ask one.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">&ldquo;What does that man want, Friar?&rdquo;</p>
    <p class="p6">
      Friar Sorin half-smiled, blinking his green eyes. He was about to share a
      life lesson&mdash;Mira knew the friar&rsquo;s antics better than anyone
      else.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Do not rush to conclusions about strangers,&rdquo; said the friar,
      his voice soothing as always. &ldquo;Strangers can be foes, but they are
      more often friends.&rdquo;
    </p>
    <p class="p6">
      &ldquo;And which is he?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;There are actually <em>two</em> of them, dear. They are no one to
      fear, I assure you. Come down. They&rsquo;ll like to meet you.&rdquo; he
      said, bonking her nose playfully.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Two?&rdquo; repeated Mira feebly, twice as afraid. &ldquo;Who are
      they, friar? Why have they come <em>here</em>?&rdquo;
    </p>
    <p class="p6">
      &ldquo;Oh, come now will you?&rdquo; The friar moseyed to the stairs.
      &ldquo;Down we go!&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Like a kite, Mira trailed the friar&rsquo;s descent. She did so
      begrudgingly; she rattled off a dozen frantic questions, and all were
      ignored.
    </p>

    <p class="p6">
      To her surprise, her fellow residents, all of them, surrounded the
      strangers in the dining quarters. Mira lived in the Golden Chateau, an
      off-house of sorts, and its dining quarters were never packed like this.
      The residents ogled the two strangers like a parliament of owls, muttering
      to each other disapprovingly.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The stranger-man that Mira had spied earlier wore an unreadable
      expression, tight as his shoelaces. Beside him was a woman. She was young,
      likely in her mid-twenties. She was dressed officially. She wore rugged
      gloves, the type for handling reins<em>.&nbsp;</em>A bucket hat capped her
      flowing auburn hair and matched her Consortium blue jacket.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The stranger-man grunted at the friar, and everyone quietened down.
    </p>
    <p class="p6">
      &ldquo;Why&rsquo;s everyone here?&rdquo; Friar Sorin whispered, surveying
      the room with his wobbly eyes, faintly grimacing.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;What do you mean, &lsquo;why&rsquo;s everyone here&rsquo;?&rdquo;
      said the chateau&rsquo;s full-time chef and part-time fool, Pozi
      Puddlestem. He leaned against the wall, cross-armed, cross-legged, his
      lame foot resting crookedly. &ldquo;We hardly get a visitor, much less
      two. Who are they, Sorin?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The stranger-man scratched his nape and stammered, &ldquo;Right, um
      &hellip; we &hellip; we, um &hellip; we are&mdash;&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Monks,&rdquo; said Friar Sorin steadfastly. &ldquo;These two kind
      souls are monks hailing from Belathia.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Suddenly, the stranger-man produced a grin. &ldquo;Oh, yes&mdash;yes,
      indeed. That&rsquo;s <em>exactly&nbsp;</em>it. We&rsquo;re monks &hellip;
      monks from &hellip; Belathia! My name is, Froult &hellip; you can call me
      Brother Froult.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira doubted Brother Froult&rsquo;s words. Not only had he claimed the
      identity so suspiciously, but the alibi was also ridiculously convenient.
      Friar Sorin was obsessed with Belathia&mdash;<em>obsessed</em>. It was a
      small city in the defunct Celestine Kingdom; the friar would ramble about
      the town&rsquo;s gutter system if given the chance.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Were these two actually monks? Or was the friar attempting to cover for
      them with some ridiculous lie?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Why have you come here?&rdquo; asked the chef.
      <span class="Apple-converted-space">&nbsp;&nbsp;</span>&ldquo;Most of us
      are already converted Celestines.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Brother Froult blinked, then muttered, &ldquo;We&rsquo;re, um, here to
      talk to the girl.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef glowered. &ldquo;The girl? As in, Mira? She&rsquo;s the only girl
      that lives in this place.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      This was true. After Dova died, Mira became the chateau&rsquo;s only
      child.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Brother Froult nodded timidly. &ldquo;Yes, that&rsquo;s right. We need to
      speak with her.&rdquo;
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Mira&rsquo;s a young girl,&rdquo; said the chef coldly, curling his
      spindly fingers into bony fists. &ldquo;Why&rsquo;re you tryna&rsquo; talk
      with her?&rdquo;
    </p>
    <p class="p6">
      &ldquo;It&rsquo;s, uh &hellip; private.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Did I hear you correctly?&rdquo; asked the chef, glowering.
      &ldquo;Did you say, <em>private</em>?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, correct.&rdquo; Brother Froult&rsquo;s forehead was glistening
      with sweat. &ldquo;It&rsquo;s important &hellip; extraordinarily
      important.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef glared at the stranger-man. &ldquo;Brother Froult, I&rsquo;m not
      sure where you&rsquo;re from, but in these parts, we don&rsquo;t approve
      of private chats between grown men and little girls, no matter the
      extra-ordinance. It&rsquo;s best you leave, thank you very much.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef&rsquo;s apprehension didn&rsquo;t surprise Mira. Years ago, his
      sons were kidnapped by Consortium sortixes during a raid. The boys
      hadn&rsquo;t been much older than Mira was today. Eventually, Pozi
      Puddlestem happened upon the chateau, abandoned his tragic search, and
      settled down. Since then, he has served the chateau as their grumpy cook.{" "}
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Pozi, please,&rdquo; pled Friar Sorin, his pupils wavering like
      startled fish. &ldquo;These people mean no harm. They&rsquo;re good
      people, I assure you.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Good people that need to speak with Mira?&rdquo; begged the chef,
      eyebrows up.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, yes exactly! That&rsquo;s all there is to it,&rdquo; swore the
      stranger-woman, breaking her silence. She simpered at Mira and offered a
      handshake. &ldquo;You&rsquo;re <em>Mira</em>, correct? It&rsquo;s truly
      lovely to meet you. You can call me Ms. Astrid.&rdquo;
    </p>
    <p class="p6">
      &ldquo;You mean <em>Sister</em> Astrid,&rdquo; corrected Brother Froult.
    </p>
    <p class="p6">
      Ms. Astrid shrugged. &ldquo;Ms. Astrid is perfectly fine. Monks can be
      misses, too.&rdquo;
    </p>
    <p class="p6">
      Mira ignored the proffered palm, instead choosing to gawk at the duo,
      wondering how they could be such dreadful liars. It didn&rsquo;t make
      sense to her. If they were actually Consortium sortixes, accomplished
      bogeymen capable of horrors, would they be this bad at deception?{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;If you&rsquo;re a monk, why are you dressed like a sortix?&rdquo;
      muttered Mira.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;A sortix?&rdquo; repeated Ms. Astrid hotly. &ldquo;That&rsquo;s
      very funny.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;<em>Funny</em>, ma&rsquo;am? You&rsquo;re wearing a Consortium
      uniform, correct?&rdquo;{" "}
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes I am, but if I was a <em>real</em> sortix, you&rsquo;d be dead
      by now. This is just a disguise, dearest Mira. It helps the two of us get
      around without drawing attention. Don&rsquo;t be afraid. I&rsquo;m not a
      Consortium henchman.&rdquo;
    </p>
    <p class="p6">
      &ldquo;That&rsquo;s cause you&rsquo;re a <em>henchwoman</em>,&rdquo;
      murmured the chef.
    </p>
    <p class="p6">
      &ldquo;Clever,&rdquo; replied Ms. Astrid coolly. &ldquo;But I am not that,
      either!&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef glanced off. &ldquo;I&rsquo;ll bet anyone eight durling that
      she&rsquo;s lying.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      As much as Mira agreed with chef&rsquo;s distrust and appreciated him
      staking half his net-worth, she admitted to herself that Ms.
      Astrid&rsquo;s personality was marginally reassuring. The woman
      didn&rsquo;t exactly fit the stereotypes associated with sortixes. The
      Consort&rsquo;s troops were known to be the brawny, gruff type or shifty,
      shady sort&mdash;not feverish women.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      But if Ms. Astrid wasn&rsquo;t a sortix, nor a monk, who was she? Who was
      her lousy-looking partner? Mira couldn&rsquo;t pinpoint what, but
      something was surely off.<span class="Apple-converted-space">&nbsp;</span>
    </p>

    <p class="p6">
      &ldquo;Please, Ms.&mdash;sorry, Ms. Astrid and Brother Froult,&rdquo; said
      Friar Sorin, cupping his hands together merrily. &ldquo;Tell Mira what
      you&rsquo;ve brought her. Tell her about the <em>teapot</em>!&rdquo;{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, yes the teapot!&rdquo; said Ms. Astrid energetically.
      &ldquo;We come here, Ms. Mira, bearing a teapot. Not any teapot, mind you,
      but a teapot blessed by Saint Celestine&mdash;&rdquo;
    </p>
    <p class="p6">
      &ldquo;The Celestine Lord, she means,&rdquo; said Brother Froult loudly,
      blinking rapidly. &ldquo;Saints don&rsquo;t bless things, which Ms. Astrid
      of course knows. But the Celestine Lord does, including, um, the teapot we
      possess.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The room&rsquo;s atmosphere instantly shifted. The residents started
      muttering to one another approvingly. This was typical Golden Chateau
      behavior. These folks lost their minds at the mention of the Celestine
      Lord, no matter the connection. Mira hated it. She considered the entire
      Celestine faith to be quite ridiculous.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;The Celestine Lord blessed a teapot?&rdquo; repeated Mira coldly.
      &ldquo;A <em>teapot</em>?&rdquo;
    </p>
    <p class="p6">
      &ldquo;Not just any teapot,&rdquo; said Ms. Astrid, smiling. &ldquo;But a
      teapot that blesses children with good luck!&rdquo;
    </p>
    <p class="p6">
      &ldquo;Is that right?&rdquo; begged Mrs. Podima from the shadows, stepping
      forward, her salt-and-pepper hair shimmering in the window light.
      &ldquo;You possess a Celestine totem? A real Celestine totem?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, that&rsquo;s what it is&mdash;a <em>totem</em>! It&rsquo;s,
      uh, quite an artifact,&rdquo; said Brother Froult, lips wavering between a
      smile and a frown. &ldquo;And, um, we&rsquo;d like to bless Mira.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Oh, how lucky!&rdquo; cried Mrs. Podima fervently, clapping her
      hands together. &ldquo;I&rsquo;ll tell you what&mdash;I was terrified when
      I saw that carriage in the frontyard, but I&rsquo;m proper excited now.
      How wonderful of you to journey here, Brother and Sister. It&rsquo;s truly
      an honor. How&rsquo;d you learn about us? How&rsquo;d you learn about
      Mira? Oh, forget my questions, actually! Bring it out, will you&mdash;the
      totem? I&rsquo;ve always wanted to see a totem. It&rsquo;s been a dream
      since I was a little girl.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira rolled her eyes. Mrs. Podima, the devoutest of Celestines, was the
      worst of the worst. The woman nagged for a living, paid double in the
      mornings. She habitually criticized Mira&rsquo;s fishing, her sweeping,
      and even her posture. Mrs. Podima just wanted to see the teapot; she
      didn&rsquo;t give two licks about Mira&rsquo;s safety.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;My apologies,&rdquo; said Ms. Astrid, &ldquo;but we&rsquo;ll need
      to bless Mira in private. It&rsquo;s a Celestine custom&mdash;no observers
      allowed.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mrs. Podima gasped. &ldquo;In private? I&rsquo;m sorry, Sister, but
      absolutely not! You can&rsquo;t come all this way and perform a Celestine
      custom without me present. I paid tithes to the church as a little girl. I
      only stopped after I moved out here&mdash;we rarely get to meet
      Celestinian Officials. Point is, it&rsquo;s improper to exclude me. Truly
      improper! You must bless her right here, please and thank you.&rdquo;
    </p>
    <p class="p6">
      Ms. Astrid brandished her palm. &ldquo;Ma&rsquo;am, we&rsquo;ve a strict
      custom&mdash;&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;No, what rubbish! There&rsquo;s no Celestine custom about privacy,
      I&rsquo;ll tell you that, Sister. I know the Gospla better than
      you.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Here, Mira believed Mrs. Podima; even if the strangers were real monks,
      Mrs. Podima, a pious crone, was comfortably the better authority on the
      Gospla, the Celestine holy book. If Mrs. Podima asserted that blessings
      mustn&rsquo;t be private, then they mustn&rsquo;t be private.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Brother Froult stammered, &ldquo;Well &hellip; uh, the thing &hellip; the
      thing is&mdash;&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;The thing is, I don&rsquo;t want to be blessed,&rdquo; stated Mira
      staunchly, advancing forward, finished with their lies. &ldquo;I&rsquo;m
      not interested in your teapot, sir.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Good choice,&rdquo; muttered the chef, but Mrs. Podima scowled.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Mira!&rdquo; hissed the old woman, scowling. &ldquo;Don&rsquo;t you
      dare think about refusing this totem. This is a once-in-a-lifetime chance,
      and we should all be here to experience it.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira vigorously shook her head. &ldquo;I&rsquo;m simply not the blessed
      type, ma&rsquo;am.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;The blessed type? Don&rsquo;t be a brat, girl,&rdquo; said Mrs.
      Podima gruffly, her neck bones pressed against her aged skin. &ldquo;For
      goodness sake, it&rsquo;s a Celestine Totem! You&rsquo;re a lucky girl.
      Sister Astrid, please be a dear and do it here, do it with myself
      available to supervise.&rdquo;
    </p>
    <p class="p6">
      Mira scowled. &ldquo;Mrs. Podima, I don&rsquo;t want to be&mdash;&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Oh, what nonsense!&rdquo; bellowed the friar passionately.
      &ldquo;Let&rsquo;s get on with it, Ms. Astrid. Please appease Mrs. Nancy
      Podima&rsquo;s wishes and do <em>it</em> here. It&rsquo;ll be fine, I
      promise you. She&mdash;and nobody else here&mdash;is a threat.&rdquo;
    </p>
    <p class="p6">
      Mira frowned. The friar&rsquo;s eagerness bothered her more than anyone
      else&rsquo;s. While he was an ordained man, Friar Sorin had <em>never</em>{" "}
      forced his beliefs on her. That was why she loved him so much. He listened
      to her. He wasn&rsquo;t cruel. He cared about what she thought. Was that
      purple liquid messing with his brain? Making him think all funny? Making
      him forget himself? She feared so.
    </p>
    <p class="p6">
      &ldquo;Very well, Friar,&rdquo; said Ms. Astrid, gracefully bowing.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      After digging through her coat, she produced the promised thing. The
      teapot was real, a shallow vessel, shaped like two plates sandwiched
      together. The spout crooked upwards at an uncanny angle. There was no
      handle; the vessel rested plainly on the woman&rsquo;s flattened palms.
    </p>

    <p class="p6">
      &ldquo;T-the Celestine Lord blessed that?&rdquo; stuttered Mrs. Podima,
      her eyelids fluttering. &ldquo;Oh my heavens. M-may I touch it,
      Sister?&rdquo;
    </p>
    <p class="p6">
      &ldquo;No!&rdquo; hissed Ms. Astrid, jerking the artifact aside.
      &ldquo;I&rsquo;m sorry, miss. I don&rsquo;t mean to be rude, but this is
      for children. Children only.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira, hesitant as ever, remained still. &ldquo;What do you even want me to
      do?&rdquo;
    </p>
    <p class="p6">
      Ms. Astrid, keeping silent, stepped forward. Then she halted, gasping.
      From the teapot&rsquo;s spout, a mystifying liquid emerged&mdash;flowing
      outwards, upwards, forwards&mdash;bending through the air like a hunting
      serpent. The stream was red, shinier than blood, glimmering like a melted
      ruby.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The gushing liquid approached Mira, and she couldn&rsquo;t take her eyes
      off it.
    </p>
    <p class="p6">
      &ldquo;The dear Celestine Lord Almighty,&rdquo; murmured Mrs. Podima,
      shaking.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Don&rsquo;t let it make content!&rdquo; hissed Brother Froult.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>

    <p class="p6">
      Ms. Astrid bounced backwards. <em>Slwerp.&nbsp;</em>The liquid vanished,
      recoiling into the spout like a spooked cobra.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Oh, wow,&rdquo; Ms. Astrid muttered, her palms trembling. She
      glared at Brother Froult apprehensively. &ldquo;Do you think,
      y&rsquo;know, if we should&mdash;&rdquo;
    </p>
    <p class="p6">
      &ldquo;No, not now,&rdquo; said Brother Froult, holding his forehead,
      gaping. &ldquo;We &hellip; we should go.&rdquo;
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Go?&rdquo; repeated Ms. Astrid, glowering. &ldquo;What possibly
      for? Shouldn&rsquo;t we&mdash;&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;No, we ought to leave right this moment!&rdquo; affirmed Brother
      Froult steadfastly, seizing the woman&rsquo;s arm. &ldquo;Thank you for
      entertaining us, folks. Earnestly, thank you. You have a good day,
      now.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Now, Friar Sorin frowned. &ldquo;But what about&mdash;&rdquo;
    </p>
    <p class="p6">
      &ldquo;No! Not now,&rdquo; said Brother Froult, guiding Ms. Astrid
      forcibly from the premises. &ldquo;Another time, Friar. We mustn&rsquo;t
      rush!&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      With Brother Froult leading the charge, the duo hurried out of the house.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Minutes ago, Mira wouldn&rsquo;t have chased after them. But she did,
      utterly mesmerized by the marvel she&rsquo;d just witnessed. The
      teapot&rsquo;s liquid had been reaching for her as if it was a living
      thing! It&rsquo;d behaved like nothing she&rsquo;d ever seen. Was it an
      elixir? Why had it approached her? She was flooded with questions,
      questions she <em>needed</em> answers to.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;How&rsquo;d it do that?&rdquo; Mira yelled, struggling to keep up.
      &ldquo;How&rsquo;d the teapot do that?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Without acknowledging if he&rsquo;d heard her, Brother Froult hastened to
      the carriage with Ms. Astrid in tow. He eased Ms. Astrid into the
      driver&rsquo;s box and hopped into the car&rsquo;s plush compartment. Ms.
      Astrid, grimacing, whipped the four horses.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      As the vehicle rolled off, Mira locked eyes with Ms. Astrid. The woman
      whispered something to Friar Sorin&rsquo;s panting figure, speaking too
      softly for Mira to comprehend, but loud enough for Mira to catch loose
      words.
    </p>
    <p class="p6">
      &ldquo;We&rsquo;ll &hellip; come &hellip; <em>Spectra</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira wasn&rsquo;t familiar with the word <em>Spectra</em>, and she
      couldn&rsquo;t ask what it meant. The carriage was whooshing away, cutting
      through the towering harka grass. It raced into the Fifty-Year Forest, the
      woods feared for its blood-curdling beasties.
    </p>
    <p class="p7">
      <br />
    </p>
    <p class="p8" style={{ textAlign: "center" }}>
      ⁂
    </p>
    <p class="p9">
      <br />
    </p>
    <p class="p5">
      The entire incident left the chateau&rsquo;s folks arguing.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mrs. Podima was certain that they&rsquo;d witnessed a miracle from her
      messiah.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef considered that lunacy. After mumbling some unpleasant things, he
      grumbled his way to the kitchen to cook the fish that Mira had caught
      earlier in the day.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mr. Zouch, the chateau&rsquo;s very own conspiracy theorist, had
      shockingly remained silent throughout the strange encounter. But after the
      so-called monks left, his outspoken attitude returned. He called the
      teapot &ldquo;utter illusionist blubbery&rdquo;, believing that the
      strange duo was flaunting some magic scam of theirs.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Friar Sorin, meanwhile, remained elusive as ever. Each time Mira crossed
      him, he paced off like she was carrying some disease. It frustrated her.
      Mira had never seen the old man behave like this. This must&rsquo;ve been
      the first time he&rsquo;d hid something from her.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Those two were some real idiots,&rdquo; said Mr. Zouch, sitting
      stupidly with his feet on the table. &ldquo;Total loonies. Traveling the
      forest like that.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Was weird they&rsquo;d even found us,&rdquo; muttered Mira.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      That part especially bugged her. The Golden Chateau, an odd house
      comprised of randomly acquainted folks, rarely got guests and never
      friendly ones. Occasionally, someone&rsquo;s estranged family would visit
      to collect a debt&mdash;that sort of thing. Mira understood why. Not only
      were the people that lived here rather miserable, but the chateau was
      primarily reachable via the dangerously thin southern pass. Traveling
      through the forest was a death sentence. The woods were crawling with
      terrible beasties.
    </p>
    <p class="p6">
      &ldquo;What if they&rsquo;re hiding in the forest?&rdquo; guessed Mira.
      &ldquo;Maybe they stole that Consortium carriage, and they&rsquo;re hiding
      from the authorities.&rdquo;{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Pfft,&rdquo; scowled Mr. Zouch. &ldquo;What do you know,
      child?&rdquo;
    </p>
    <p class="p6">
      Mira&rsquo;s little fingers curled inwards. She disliked him more than she
      disliked Mrs. Podima. She <em>hated</em> him. Mr. Zouch was always like
      this, always cruel to her, usually for no reason. He had no blood family
      here. He&rsquo;d stumbled upon this odd house after fleeing Rothersby,
      evading some debacle with his former business partner in his metallurgy
      company. He, like most people in this place, was hiding from
      something&mdash;a family member, the Consortium, or some nauseating truth.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;The carriage was made out of metal,&rdquo; said Mira. &ldquo;Do you
      think that&rsquo;s to protect them from the forest&rsquo;s
      beasties?&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mr. Zouch scoffed. Ogling the cobwebbed ceiling, he said, &ldquo;Stop
      thinking you&rsquo;re smart, girl. Just cause your daddy stepped on a
      blueneck doesn&rsquo;t make you a beasties expert. Shush, now. I&rsquo;m
      busy.&rdquo; <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Sighing, Mira strolled off. Mr. Zouch had no manners. Yes, her father had
      died after getting stung by a blueneck scorpion, a critter that possessed
      unrivaled venom. Her father barely had ventured into the forest when his
      foot was impaled. Mira was just three-years old. She couldn&rsquo;t
      remember him at all. But everyone, especially Mr. Zouch, talked about the
      incident like it was her father&rsquo;s own fault. It annoyed her.
      Bluenecks were rare. Ultra rare. Her father had just been unlucky, nothing
      more.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Because Mira&rsquo;d fished earlier, she smelled of salt. Wishing for a
      change of clothes, she climbed the chateau&rsquo;s creaky staircase.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She entered the cloakroom and opened the cabinet to retrieve her better
      coat.
    </p>
    <p class="p6">
      <em>Pitter pitter pitter pitter pitter.</em>
    </p>
    <p class="p6">
      That was the sound of kisras, little roach-like bugs with two wingsets.
      Through the window, Mira watched the critters multiply through the air,
      springing from their burrows in the harka grass. A whole swarm&rsquo;s
      worth was darting towards the same target&mdash;the forest.
    </p>
    <p class="p6">
      The throng encircled a spot near the forest&rsquo;s edge,
      uncharacteristically avoiding the woods. It was as if the slender
      eldertrees that stretched into the air were caging the bugs like cell
      doors. Mira found that mildly peculiar, but looked away, not thinking too
      much of it.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      But then, when Mira glanced inwards to close the cupboard, she gasped.
      Through the cabinet&rsquo;s interior mirror, she could see the front yard.
      She could see the forest. She could see the kisras swarming, but now, they
      were congregating around &hellip; around &hellip; around the Consortium
      carriage! It was still there, right there, squarely in the open, parked at
      the forest&rsquo;s edge.
    </p>
    <p class="p6">
      &ldquo;No way,&rdquo; Mira whispered to herself.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      But something else was off. Through the bare window, via her plain eyes,
      she saw the myriad buzzing around empty air. Yet, through the mirror, she
      realized the horde was encircling the carriage. Somehow, the strangers
      were concealing themselves from naked sight. Mira couldn&rsquo;t make
      sense of it. She wondered if they were using some fancy elixir.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Friar,&rdquo; called out Mira, spying his bedroom&rsquo;s shut door
      feet away. &ldquo;Friar, are you there? I can see&mdash;&rdquo;
    </p>
    <p class="p6">
      &ldquo;What&rsquo;re you screaming about, girl?&rdquo; yelled Mrs. Podima
      from the bottom of the stairs. &ldquo;The chef&rsquo;s napping, for
      goodness sake! You&rsquo;ll wake him.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira quickly shut the cabinet. &ldquo;Nothing, Mrs. Podima.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Behave, girl. Your attitude in front of those dear monks was
      deplorable today,&rdquo; said Mrs. Podima, hissing some profanities before
      sauntering off. <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Once the old lady was out of sight, Mira pried open the cabinet. To her
      satisfaction, the marvel remained. Through the mirror, she could spot the
      parked baby-blue vehicle. Through the window, nothing. What was that
      strange duo up to? Plotting their return?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira descended the stairs to discover a very-awake chef, Mr. Puddlestem.
      He&rsquo;d taken a seat on the last step and was cleaning one of his rusty
      knives with a toothbrush.
    </p>
    <p class="p6">
      &ldquo;And you&rsquo;re off to where, Ms. Mira?&rdquo; asked the chef
      playfully. &ldquo;<em>Please</em> tell me you&rsquo;re fishing. After
      today&rsquo;s hijinks, I&rsquo;d die to prepare a bellocut stew, fresh and
      warm.&rdquo;
    </p>
    <p class="p6">
      &ldquo;I already caught a siafish this morning,&rdquo; said Mira
      truthfully to the chef&rsquo;s immediate frown. She side-stepped past him.
      &ldquo;It&rsquo;s already in the bucket.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      The chef puckered his lips and nodded. &ldquo;Is that so?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;I need to do something,&rdquo; said Mira hastily. &ldquo;I&rsquo;ll
      be back soon.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She yanked open the front door, slipped on her shoes, and scurried down
      the chateau&rsquo;s doorsteps.
    </p>
    <p class="p6">
      &ldquo;Be careful out there,&rdquo; yelled the chef. &ldquo;It&rsquo;s the
      season for bluenecks!&rdquo;
    </p>
    <p class="p6">
      She ignored him and rushed off. She needed to figure out what Astrid and
      Froult were planning; the one-out-of-a-million chance of stepping on a
      blueneck wasn&rsquo;t going to stop her.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She thankfully had cover. The harka grass was terribly tall today. It
      towered to Mira&rsquo;s neckline, the blades yellowish, given the autumn
      season. It was her responsibility to scythe the lawn&mdash;alongside every
      other survival task that the chateau demanded. She&rsquo;d procrastinated
      mowing the harka for over a moon. For most adults, the grass was worse
      than poison ivy, prompting itchy rashes that erupted in seconds after
      contact. Luckily, the harka barely affected children, and, over the years,
      she&rsquo;d built up a special immunity.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Now, without the mirror, she couldn&rsquo;t see the vanished carriage, but
      she remembered its approximate position. The chateau&rsquo;s lawn was
      surrounded by the Fifty-Year Forest; the woods swooped around the grounds
      like a horseshoe. The vehicle had been parked near the center.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira started to hear whispers. She couldn&rsquo;t make out the sentences,
      but someone was out there. She slowed her approach, crouching, careful to
      not crack the thicket under her little shoes. The harka kept her
      concealed, surrounding her like water.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Finally, she was close enough to make out the voices.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Seriously? Monks?&rdquo; It was Ms. Astrid. &ldquo;Do I look like a{" "}
      <em>Sister</em> to you? Do I look <em>bald&nbsp;</em>to you?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira&rsquo;s lips tipped up. Finally, she had proof that they
      weren&rsquo;t monks. She&rsquo;d been right all along.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Calm down, Astrid,&rdquo; said Froult firmly. &ldquo;He was just
      trying to help.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Help?&rdquo; retorted Ms. Astrid. &ldquo;He set us up for failure.
      A <em>blessed</em> teapot is obvious hogwash, especially with your lousy
      lying, Froult!&rdquo;
    </p>
    <p class="p6">
      &ldquo;That old lady believed me.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Doesn&rsquo;t matter. Mira clearly<em>&nbsp;</em>
      didn&rsquo;t.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;She was clearly intrigued. She ran after us, didn&rsquo;t you
      see?&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;So what?&rdquo; hissed Ms. Astrid diffidently. &ldquo;She&rsquo;ll
      soon learn that we lied. <em>Monks</em>. What rubbish.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;I know, I know, Astrid, but let&rsquo;s not vilify our friend
      here,&rdquo; said Mr. Froult gently. &ldquo;He was just trying to help
      us.&rdquo;
    </p>
    <p class="p6">
      &ldquo;No, her criticism is entirely fair,&rdquo; came a feeble voice,
      making Mira seize up. &ldquo;I gave you a terrible alibi, I
      apologize.&rdquo; <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Friar Sorin was with them! No wonder Mira hadn&rsquo;t been able to find
      him earlier. The old man had ventured off to meet the duo. She wanted to
      squeal. How could he do such a thing after ignoring her all afternoon? He,
      of all people!
    </p>
    <p class="p6">
      She crept closer so that she could peek out of the harka. To her
      astonishment, there was no one there &hellip; no physical beings, just{" "}
      <em>four&nbsp;</em>shadows! Mira could make out their respective shapes
      out of their distorted forms&mdash;Friar Sorin, Froult, Astrid, and the
      metallic carriage.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Somehow, by some measure of absurd elixiry, the group had transformed into
      silhouettes of themselves!
    </p>
    <p class="p6">
      &ldquo;In hindsight, perhaps we should&rsquo;ve planned a better cover
      story in case the others intervened,&rdquo; said Froult meekly.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Or, <em>perhaps</em>,&rdquo; retorted Ms. Astrid loudly, &ldquo;you
      shouldn&rsquo;t have ruined it. This was my mission, Froult. I can&rsquo;t
      believe I trusted you to handle our introductions.&rdquo;
    </p>
    <p class="p6">
      &ldquo;I&rsquo;m sorry. I know, I wasn&rsquo;t the best liar.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;You&rsquo;re an utterly miserable liar. But that&rsquo;s not what
      bothers me the most. We should&rsquo;ve taken the girl when we had a
      chance. What was that all about? You&rsquo;re &lsquo;we ought to leave
      right now&rsquo; nonsense&mdash;what on earth were you thinking, Froult,
      squandering our chance?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;With all respect, Astrid, your instructions were for her to come
      willingly. It was better for us to leave and regroup.&rdquo;
    </p>
    <p class="p6">&ldquo;Regroup? What possibly for?&rdquo;</p>
    <p class="p6">
      &ldquo;To figure out how<em>&nbsp;</em>to tell her. How to talk to
      her.&rdquo;
    </p>
    <p class="p6">
      Mira prayed that they couldn&rsquo;t hear her heavy breaths. What was
      Froult talking about? She had a few guesses, and none were pleasant. Was
      she sick? Or was the Consortium after her, somehow?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;She&rsquo;ll come to realize we&rsquo;re not her enemy.&rdquo; Ms.
      Astrid&rsquo;s shadowy arms crossed. &ldquo;Why don&rsquo;t we go back
      right now and swoop her up?&rdquo;
    </p>
    <p class="p6">
      Froult scoffed. &ldquo;Have you gone mad? We arrived in a{" "}
      <em>Consortium</em> carriage, Astrid. She&rsquo;s afraid.&rdquo;
      He&rsquo;d said <em>Consortium&nbsp;</em>with a snarl, evident disgust.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;We told her the truth,&rdquo; protested Ms. Astrid. &ldquo;The
      carriage and my costume are disguises. That <em>is</em> the truth!&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, but she doesn&rsquo;t know that. She wouldn&rsquo;t trust us.
      After that mess, which, yes, was my fault&mdash;she{" "}
      <em>shouldn&rsquo;t&nbsp;</em>trust us.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Mira furled her lip. They were admitting to their wrongs. Perhaps they
      were good people after all. Unless, of course, they were bad people,
      terrible people that she shouldn&rsquo;t trust irrespective of their
      laughable attempt at deception.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;What do you suggest, then?&rdquo; asked Ms. Astrid sternly.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Now, Froult&rsquo;s voice softened. &ldquo;Astrid, we were given a hint
      about why she&rsquo;d come&mdash;come <em>willingly</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;I&rsquo;m well aware. Those instructions never made any
      sense.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;To us, Astrid, but perhaps the Friar will understand them.&rdquo;
    </p>
    <p class="p6">
      There was a short quietness filled with Mira&rsquo;s thumping heartbeats.
      So someone else had sent the strangers here, and from the sound of things,
      it wasn&rsquo;t the Consort.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;What do you make of this note, Friar?&rdquo; asked Froult warmly.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Magically, a paper covered with scribbled handwriting materialized in
      plain sight, traveling a few inches through the open airs before
      vanishing, now in custody of the friar&rsquo;s specter.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      Another silence followed, this time a few seconds&rsquo; worth.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Oh dear,&rdquo; the friar whispered. &ldquo;Oh my &hellip; this is
      &hellip; this refers to Dova&rsquo;s death.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      <em>Dova</em> &hellip; the friar said <em>Dova&rsquo;s death</em>? That
      day, that awful memory, had plagued Mira&rsquo;s mind for the last few
      years. What could this duo have to do with Dova&rsquo;s illness? Dova had
      died so mysteriously, so suddenly.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Yes, definitely Dova,&rdquo; the friar reaffirmed. &ldquo;How
      &hellip; how did&mdash;&rdquo;
    </p>
    <p class="p6">
      Distracted by delirious thoughts, Mira stumbled backwards, tripping on a
      snag, tumbling blindly into the harka.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      &ldquo;Did you hear that?&rdquo; hissed Ms. Astrid. &ldquo;I swear I heard
      something!&rdquo;
    </p>
    <p class="p6">
      &ldquo;S-s-someone&rsquo;s in the harka,&rdquo; whispered Froult meekly.
      <span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p class="p6">
      Mira wanted to reveal herself and interrogate them. She wanted to ask how
      they knew about Dova. How they&rsquo;d forced in the friar into
      complacence.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">But Mira couldn&rsquo;t do any of that.</p>
    <p class="p6">
      A blueneck scorpion, a swollen one with hideously hairy legs, had crawled
      onto her chest. The creature glared at her with its countless black eyes.
      Mira froze, thinking what to do. Swat it off? Jump up? Scream?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p6">
      She waited too long. Its barb-tipped tail whipped outwards and impaled her
      neck.<span class="Apple-converted-space">&nbsp;</span>
    </p>
  </FirstChapterDiv>
);
