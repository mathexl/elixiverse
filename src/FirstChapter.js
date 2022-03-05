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

  p.noIndent{
    text-indent: 0px;
  }

  .center {
    text-align:center;
  }
`;

export const FirstChapter = () => (
  <FirstChapterDiv>
    <h1>CHAPTER ONE</h1>
    <h2>The Teapot</h2>
    <p className="noIndent">
      The baby-blue carriage meant trouble, no question about it. The thing was,
      if the intruder was a Consortium sortix, he hardly looked the part.&nbsp;
    </p>
    <p>
      The man wore an ordinary trench that poorly matched his mustard pants. He
      sported a shabby beard, a pronounced mustache, and shoddily combed hair.
      Even his knees were a mess, capped with ashy shells that could&rsquo;ve
      flaked off like snakeskin.&nbsp;
    </p>
    <p>
      She secretly watched from the chateau&rsquo;s third story attic where she
      was supposed to be <em>hiding</em>.&nbsp;
    </p>
    <p>
      The man said something brief. The friar, the religious elder of her home,
      responded with a nod, his legs subtly shaking. No fists raised, nor
      eyebrows. Then, the poorly-dressed man pulled two items out of his coat:
      glass bottles, tall and thin like tubes. Each imprisoned a lilac liquid.
    </p>
    <p>&ldquo;Elixirs,&rdquo; mouthed Mira. &nbsp;</p>
    <p>
      She&rsquo;d never seen an elixir before, but she&rsquo;d heard that the
      cocktails came in various sorts of shades and sizes with all kinds of powers.
      Friar Sorin forbade their use, something about them being dangerous. But
      today, the friar obliged the offering, plucking a vial seemingly at
      random. The stranger furled his fingers around the other. After a shared
      nod, the two men, young and old, uncorked the little things and swished
      the contents down their throats.&nbsp;
    </p>
    <p>
      <em>Dear Celestine.&nbsp;</em>
    </p>
    <p>
      The whites of the man&rsquo;s eyes turned yellowish like pus. In a
      wingbeat, the color cleared, but the eyelids kept apart like those of a
      corpse, motionless for seconds. Five seconds. Ten. Twenty. Then, a blink.
      The man wiped his lashes. He cracked a thin smile and shook hands with the
      friar.&nbsp;
    </p>
    <p>
      And the friar &hellip; he patted the intruder&rsquo;s shoulders &hellip;
      lovingly? Mira couldn&rsquo;t make sense of it. A minute ago, the two
      resembled strangers. Enemies, even. Suddenly, they were friends?&nbsp;
    </p>
    <p>
      Now, the friar rambled. Proper rambling with body sways and finger
      pointing. He gestured towards the forest, the courtyard, and, alas,
      directly at the attic&rsquo;s window. The visitor glanced up.&nbsp;
    </p>
    <p>
      &ldquo;Shoot,&rdquo; hissed Mira as she tucked her head from view.&nbsp;
    </p>
    <p>
      Her heartbeat raced. Had the man seen her? Was he here to draft her?
      &nbsp;
    </p>
    <p>
      No, the friar would never allow that. The old man always cared for her. If
      the stranger was here to draft young girls like herself into the
      Consortium military, to make her a sortix to serve the awful Consort
      &hellip; then the friar would lie and deny that Mira even existed. She was
      sure of that. &nbsp;
    </p>
    <p>
      Mira faintly heard the front door creak two stories below. Peaking out the
      window, she confirmed her fear&mdash;the field was now bare. She
      considered going downstairs, but she couldn&rsquo;t shake the image of the
      bewitched eyes. What type of elixir had they drunk? Why had it made the
      friar so amicable to that man? This could be a trap. A kidnapping, even.
      Hiding remained the best move.
    </p>
    <p>
      Mira rushed to the cabinet. Opening the doors, she smelled a rancid
      stench. Ms. Podima must&rsquo;ve never washed the sheets after
      Dova&rsquo;s passing. Mira rolled herself to the back and pulled her
      sister&rsquo;s old linens over her. Something about this felt
      uncomfortable. This was Dova&rsquo;s favorite hiding spot back then, and
      now Mira was wrapped in the same fabrics that her sister died atop.&nbsp;
    </p>
    <p>
      Mira waited. There was nothing for minutes. Then, muffled noises
      crescendoed<em>.&nbsp;</em>She corkscrewed her body tighter as the sounds
      only became clearer. Someone was meters from the cabinet. Was she about to
      be drafted by the Consortium? To serve in one of those baby-blue, hideous
      uniforms?&nbsp;
    </p>
    <p>
      <em>Stay still</em>, she told herself.
      <em>&nbsp;Stay still &hellip; stay still &hellip; stay&mdash;</em>
    </p>
    <p>&ldquo;Mira?&rdquo;&nbsp;</p>
    <p>
      The cabinet door opened, and Mira tumbled out.{" "}
      <em>Thank goodness.&nbsp;</em>It was just Friar Sorin and nobody
      else.&nbsp;<em>&nbsp;</em>&nbsp;
    </p>
    <p>
      He chuckled. &ldquo;Clever, but I&rsquo;ve played hide-and-seek with Dova
      too.&rdquo;
    </p>
    <p>
      Mira dusted off her dress. A hundred questions poked her mind, but she
      only managed to ask one.&nbsp;
    </p>
    <p>&ldquo;What does that man want?&rdquo;</p>
    <p>
      The friar half-smiled and blinked his green eyes. He was about to share a
      life lesson&mdash;Mira knew the friar&rsquo;s antics better than
      anyone.&nbsp;
    </p>
    <p>
      &ldquo;Do not rush to conclusions about strangers,&rdquo; said the friar.
      His voice was soothing, as always. &ldquo;They aren&rsquo;t anyone to
      fear. They just want to meet you.&rdquo;
    </p>
    <p>
      &ldquo;They?&rdquo; Mira had only seen one person&mdash;that
      poorly-dressed man.
    </p>
    <p>&ldquo;Come,&rdquo; instructed the friar, moseying to the stairs.</p>
    <p>&ldquo;Wait, who are they?&rdquo;&nbsp;</p>
    <p>
      The friar smiled. &ldquo;You&rsquo;ll learn soon enough.&rdquo; &nbsp;
    </p>
    <p>
      Like a flame on a wick, Mira trailed the friar&rsquo;s ambling downwards.
      He ignored the dozen-odd questions whispered to him. &nbsp;
    </p>
    <p>
      <em>Woah.&nbsp;</em>
    </p>
    <p>
      The entire Golden Coterie&mdash;a ridiculous name the Golden
      Chateau&rsquo;s residents called themselves by&mdash;was crammed into the
      dining room, chattering loudly. In the center, the two strangers
      stood.&nbsp;
    </p>
    <p>
      The man Mira&rsquo;d spied from the attic wore an expression as tight as
      his shoelaces. Beside him was a woman wearing rugged gloves, the type used
      for handling reins<em>.</em> She was young, maybe in her mid-twenties, and
      possessed auburn hair and a freckled face. She wore a hat and a jacket,
      both in Consortium blue. She must&rsquo;ve been the carriage&rsquo;s
      driver.&nbsp;
    </p>
    <p>
      The friar grunted softly, hushing the residents. His wobbly eyes surveyed
      the room. &ldquo;Hmm. Why&rsquo;s everyone here?&rdquo;
    </p>
    <p>
      &ldquo;What do you mean?&rdquo; asked Pozipoo, a flautist who lived three
      doors from Mira. He scratched his dry cheeks as he talked, his bushy
      eyebrows bouncing like rabbit feet. &ldquo;We hardly get a visitor, much
      less two. Who are they?&rdquo;&nbsp;
    </p>
    <p>&ldquo;Uh, we are &hellip;&rdquo; the strange man tailed off.&nbsp;</p>
    <p>
      &ldquo;Monks,&rdquo; said the friar firmly. &ldquo;Monks from
      Belathia.&rdquo;&nbsp;
    </p>
    <p>
      The man&rsquo;s face brightened. &ldquo;Yes. Yes, indeed! We&rsquo;re
      monks. My name is &hellip; uh, Brother Froult.&rdquo;&nbsp;
    </p>
    <p>
      Mira wasn&rsquo;t sure about that. She knew nothing about monks, but that
      alibi was &hellip; convenient. The friar was obsessed with Belathia, a
      small city tucked deep in the old Celestine Kingdom. The old man rambled
      about that place without end. Did these so-called monks actually travel
      across the Innermost to reach the lonely western cliffs, or was the friar
      covering something up? &nbsp;
    </p>
    <p>
      &ldquo;Why are you here?&rdquo; casually asked Mr. Flen, the full-time
      chef and part-time fool of the house. He was standing cross-armed,
      cross-legged, leaning against the wall. His lame foot rested crooked
      against the ground. &ldquo;Most of us are already Celestines.&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;We&rsquo;re here to talk to the girl,&rdquo; said Brother Froult
      softly. He glanced side-to-side and added, &ldquo;Alone.&rdquo;&nbsp;
    </p>
    <p>
      Hearing that stunned Mira. She was the only surviving girl in the house.
      He was undoubtably talking about her.
    </p>
    <p>
      &ldquo;To Mira? No way.&rdquo; Mr. Flen stepped forward, his little
      fingers made into tiny fists. &ldquo;Mira&rsquo;s a young girl. Whatever
      you have to say to her, you can say it here and be on your way.&rdquo;
    </p>
    <p>&ldquo;I insist&mdash;&rdquo; started Brother Froult.&nbsp;</p>
    <p>
      &ldquo;I insist you get to why you&rsquo;re here or leave this
      instant.&rdquo;
    </p>
    <p>
      Mira understood Mr. Flen&rsquo;s apprehension. If anyone was to be afraid
      of strangers, it was him. His sons had been kidnapped by Consortium
      sortixes during a raid of his old home in some town. He&rsquo;d escaped,
      and after giving up on searching for them, he happened upon the chateau
      and settled down.&nbsp; &nbsp;
    </p>
    <p>
      &ldquo;Flen, please,&rdquo; said the friar softly. &ldquo;They mean no
      harm.&rdquo;&nbsp;
    </p>
    <p>
      That hardly assuaged the man&mdash;he tightened his grimace, his pupils
      darting left and right like frightened fish.&nbsp; &nbsp; &nbsp;
    </p>
    <p>The female monk returned Mira&rsquo;s gawking with a smile.&nbsp;</p>
    <p>
      &ldquo;You look precious, dear. You can call me Ms. Astrid.&rdquo; The
      woman tapped her cheek suggestively. &ldquo;Or Sister Astrid, I
      suppose.&rdquo;
    </p>
    <p>
      Mira narrowed her eyes threateningly, hoping the trembles running up her
      legs weren&rsquo;t obvious. Why were they lying so &hellip; poorly?
      Consortium sortixes couldn&rsquo;t be <em>this</em> bad at disguises.
      &nbsp;
    </p>
    <p>
      &ldquo;If you&rsquo;re a monk, why&rsquo;re you dressed like a
      sortix?&rdquo; muttered Mira.&nbsp;
    </p>
    <p>
      Sister Astrid laughed. &ldquo;A sortix? Oh, now that&rsquo;s a good
      one.&rdquo;&nbsp;
    </p>
    <p>&ldquo;What is?&rdquo;&nbsp; &nbsp;</p>
    <p>
      &ldquo;If I was a sortix, you&rsquo;d be dead by now. This is just a{" "}
      <em>disguise</em>.&rdquo;&nbsp;
    </p>
    <p>
      Her companion grunted. &ldquo;You&rsquo;re wearing a Consortium garb,
      Sister Astrid. The girl asked a fair question.&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;Pfft. She has no reason to be concerned. I am not some evil
      henchman.&rdquo;&nbsp;
    </p>
    <p>
      <em>Because you&rsquo;re a henchwoman instead</em>,<em>&nbsp;</em>thought
      Mira. Granted, to the Sister Astrid&rsquo;s consolation, she hardly fit
      the stereotypes associated with sortixes. The brawny, gruff sort or
      shifty, shady type were common ones. Not feverish madwoman. But if they
      weren&rsquo;t sortixes, and they clearly weren&rsquo;t monks, who were
      they?&nbsp;
    </p>
    <p>
      Pozipoo stood with hands on his hips, fingers tapping like he was playing
      one of his flutes. &ldquo;How&rsquo;d you even get that shiny carriage?
      Ya&rsquo;ll seem like some real snappers to me!&rdquo;
    </p>
    <p>
      Mira wasn&rsquo;t sure what a <em>snapper&nbsp;</em>was, most likely a
      word that the musician invented, but she agreed with Pozipoo&rsquo;s
      sentiment.&nbsp;
    </p>
    <p>&ldquo;A good question,&rdquo; said Sister Astrid. &nbsp;</p>
    <p>&ldquo;And I expect a good answer!&rdquo; said Pozipoo.</p>
    <p>&ldquo;We stole it.&rdquo;&nbsp;</p>
    <p>
      Pozipoo furrowed his thick brows. &ldquo;You, two <em>monks</em>, stole a
      carriage?&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;Yes.&rdquo; Sister Astrid subtly smiled. &ldquo;The world&rsquo;s
      full of surprises.&rdquo;&nbsp;
    </p>
    <p>
      Pozipoo grunted. Mira wasn&rsquo;t sure if he was satisfied, but she
      surely wasn&rsquo;t. She glanced up at the Friar&rsquo;s dangling beard
      that curled like hanging moss.&nbsp;
    </p>
    <p>
      &ldquo;Please tell me, friar,&rdquo; she requested gently. &ldquo;Why are
      they actually here?&rdquo;
    </p>
    <p>
      The friar bit his lip, blinking vacantly. He was uncomfortable, no
      doubt.&nbsp;
    </p>
    <p>
      &ldquo;Please, uh, Ms.&mdash;sorry, Sister Astrid and Brother Froult. Tell
      Mira what you&rsquo;ve brought her. Tell her about &hellip; the{" "}
      <em>teapot</em>.&rdquo; &nbsp;
    </p>
    <p>
      &ldquo;Yes, yes the teapot!&rdquo; said Sister Astrid, clapping all
      giddily. &ldquo;We come here bearing a teapot blessed by &hellip; uh
      &hellip;&rdquo;
    </p>
    <p>
      &ldquo;The Celestine Lord himself,&rdquo; finished off Brother
      Froult.&nbsp;
    </p>
    <p>
      Now the residents whispered approvingly. <em>Great</em>. This was just
      typical. Apprehensive about literally anything else, but everyone was
      suddenly so trusting the moment the Celestine Lord was mentioned. The
      messiah lived centuries ago. Claims of anything he&rsquo;d touched or
      blessed were worthy of pilgrimages, especially to devout Celestines like
      Ms. Podima.&nbsp;
    </p>
    <p>
      Mira, on the other hand, was hardly a devout Celestine. &ldquo;The
      Celestine Lord blessed a teapot?&rdquo; she asked mockingly. &ldquo;A{" "}
      <em>teapot</em>?&rdquo;
    </p>
    <p>
      &ldquo;How fortuitous of you to be skeptical,&rdquo; said Sister Astrid.
    </p>
    <p>&ldquo;Why&rsquo;s that?&rdquo;&nbsp;</p>
    <p>
      &ldquo;Because the teapot blesses children like yourself with good
      luck.&rdquo; Sister Astrid glanced at her companion. &ldquo;We&rsquo;d
      love to bless you in a room.&rdquo;
    </p>
    <p>&ldquo;A private room,&rdquo; clarified Brother Froult.</p>
    <p>
      Mira took two steps back. So these two were strictly interested in talking
      to her. She&rsquo;d lived in this isolated house all her life. What could
      she have to do with monks, the Consortium, or whoever else these two were?
      &nbsp;
    </p>
    <p>
      &ldquo;Absolutely not,&rdquo; said Ms. Podima staunchly. &ldquo;You can
      bless her in front of us right here, so we can all see this teapot.&rdquo;
    </p>
    <p>
      Ms. Podima hadn&rsquo;t been the nicest soul to Mira all these years. She
      would criticize her fishing, her sweeping, and even her walking at any
      opportunity. Mira was certain that the old woman just wanted to see this
      teapot&mdash;she couldn&rsquo;t have given two licks about Mira&rsquo;s
      safety. &nbsp;
    </p>
    <p>&ldquo;I don&rsquo;t want to be blessed,&rdquo; said Mira resolutely.</p>
    <p>&ldquo;No, no, you must be blessed,&rdquo; insisted Ms. Podima.&nbsp;</p>
    <p>
      &ldquo;Aunty, I <em>kindly</em> don&rsquo;t want to.&rdquo;
    </p>
    <p>
      &ldquo;What nonsense!&rdquo; bellowed the friar. &ldquo;Show her the
      teapot, Sister Astrid.&rdquo;
    </p>
    <p>
      He patted Mira&rsquo;s shoulders forcefully. Now <em>this</em> was
      surprising. Albeit being an ordained friar, the man never forced his
      beliefs on Mira. That was why she loved him so much. He listened. He
      wasn&rsquo;t cruel. He cared about what she thought. Was that purple
      elixir he drank messing with his brain? &nbsp;
    </p>
    <p>
      Sister Astrid dramatically bowed at the request, a painful sight to watch.
      Then, out of her cloak, she unraveled the promised thing.&nbsp;
    </p>
    <p>
      The teapot was clearly heavy. Decorative bumps encircled its shallow body.
      The spout crooked upwards at an uncanny angle. There was no handle, the
      vessel simply resting on Sister Astrid&rsquo;s flattened palm. Peculiarly,
      the pot&rsquo;s material was black&mdash;the blackest of blacks&mdash;as
      if it sucked in light itself.&nbsp;
    </p>
    <p>
      &ldquo;Now t-t-that&rsquo;s&mdash;&rdquo; stuttered Ms. Podima, her
      eyebrows quivering. &ldquo;The Celestine Lord blessed that himself? Oh my.
      May I touch it?&rdquo;
    </p>
    <p>
      &ldquo;No!&rdquo; hissed Sister Astrid. Then, she blinked away her frown.
      &ldquo;Sorry. It&rsquo;s for children only. For Mira.&rdquo; She pivoted
      on a single foot to face Mira. &ldquo;It&rsquo;s all yours, girl.
      Approach.&rdquo;&nbsp;
    </p>
    <p>
      Mira, hesitant, remained still. &ldquo;Why&rsquo;re you so insistent,
      ma&rsquo;am?&rdquo;
    </p>
    <p>&ldquo;Why, because&mdash;&rdquo;&nbsp;</p>
    <p>
      The woman had taken two steps closer, but suddenly halted and gasped. From
      the teapot&rsquo;s spout, a mystifying liquid flowed outwards, forwards,
      bending through the air like a preying serpent. The liquid was red,
      shinier than blood, glimmering like a melted ruby. Mira couldn&rsquo;t
      take her eyes off the phenomenon, realizing that the magical stream was
      inching towards her.&nbsp;
    </p>
    <p>
      Sister Astrid jumped backwards. The liquid quickly coiled back into the
      pot like a spooked snake.&nbsp;
    </p>
    <p>
      &ldquo;Oh my,&rdquo; she muttered whilst glaring at her companion.
      &ldquo;We &hellip; we should &hellip;&rdquo;
    </p>
    <p>
      &ldquo;Go,&rdquo; completed Brother Froult. He bowed a few times to
      various people around the room. &ldquo;Thank you for having us. Thank you.
      You have a good day.&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;But&mdash;&rdquo; said the friar, his jaw quivering. &ldquo;What
      about&mdash;&rdquo;
    </p>
    <p>
      &ldquo;Later,&rdquo; said Brother Froult. &ldquo;I promise, please. Not
      now.&rdquo;&nbsp;
    </p>
    <p>
      The two monks pushed their way out of the house, swiftly departing. Mira
      gently chased after them, mesmerized by the marvel she&rsquo;d just
      witnessed. That liquid had been reaching for her! She couldn&rsquo;t shake
      the impossible thing from her head, and judging from the crowd following
      behind her, neither could they.&nbsp; &nbsp;
    </p>
    <p>
      &ldquo;How&rsquo;d it do that?&rdquo; Mira called out. &ldquo;How&rsquo;d
      the teapot do that?&rdquo;&nbsp;
    </p>
    <p>
      Without acknowledging they&rsquo;d heard her, Brother Froult and Sister
      Astrid scrambled out of the door, hurrying back to their carriage. Brother
      Froult jumped into the car&rsquo;s plush compartment while Sister Astrid
      hopped into the driver&rsquo;s box, quick to whip the horses.&nbsp;
    </p>
    <p>
      As the carriage rolled off, Mira locked eyes with Sister Astrid. The woman
      whispered something to Mira, words too soft for Mira to surely comprehend
      them, but loud enough for her to determine the gist.&nbsp;
    </p>
    <p>&ldquo;We&rsquo;ll &hellip; come &hellip; you.&rdquo;&nbsp;</p>
    <p>
      As curiously as they had arrived, the carriage whooshed away, cutting
      through the towering harka grass that was taller than cornstalks and
      racing towards the Fifty-Year Forest, the woods that people venture into
      to die.&nbsp;
    </p>
    <p>
      <br />
    </p>
    <p className="noIndent center">⁂</p>
    <p>
      <br />
    </p>
    <p className="noIndent">
      The entire incident had left the chateau&rsquo;s gossip in shambles. Ms.
      Podima was certain they&rsquo;d witnessed a miracle from her messiah.
      Pozipoo called it illusionist blubbery, believing that the
      &ldquo;monks&rdquo; were getting candid reactions to some magic trick of
      theirs. Mr. Flen, after mumbling some unpleasant things, returned to his
      kitchen to cook the fish Mira&rsquo;d caught earlier in the day.&nbsp;
    </p>
    <p>
      Each time Mira had run into Friar Sorin during the last three hours,
      he&rsquo;d paced off whilst muttering something unintelligible.
      Mira&rsquo;d never seen the old man behave like this. This was the first
      time he&rsquo;d hid something from her.&nbsp;
    </p>
    <p>
      &ldquo;Those two were some real idiots,&rdquo; said Mr. Coogley, sitting
      with legs on the table. &ldquo;Total loonies, traveling into the forest
      like that.&rdquo;&nbsp;
    </p>
    <p>&ldquo;Was weird they even found us,&rdquo; muttered Mira.&nbsp;</p>
    <p>
      The Golden Chateau, an odd-house comprised of randomly acquainted folks,
      rarely got guests, mostly someone&rsquo;s estranged family visiting to
      collect some debt. The only safe way to reach the chateau was via the
      narrow southern pass. Traveling through the forest was a near death
      sentence&mdash;the place was crawling with dangerous creatures.
    </p>
    <p>
      &ldquo;You think they&rsquo;re hiding in the forest?&rdquo; suggested
      Mira. &ldquo;If they stole that carriage, maybe they&rsquo;re hiding from
      the Consortium?&rdquo; &nbsp;
    </p>
    <p>&ldquo;What do you know, child?&rdquo;&nbsp;</p>
    <p>
      Mr. Coogley was cruel to her like this, usually for no reason. He had no
      blood family here, having found the place after running off from
      Rothersby, fleeing some lawsuit. He&rsquo;d decided to the join the
      residents&rsquo; incompetent ranks on a whim.
    </p>
    <p>
      &ldquo;The carriage was made out of metal,&rdquo; said Mira. &ldquo;Maybe
      that&rsquo;s enough protection from the forest&rsquo;s
      beasties.&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;Your daddy stepped on a blueneck, and now you&rsquo;re a beasties
      expert?&rdquo; &nbsp;
    </p>
    <p>
      Mira rolled her eyes and strolled off. Mr. Coogley had no manners. Yes,
      her father died after getting stung by a blueneck scorpion, a critter
      whose venom rivaled the poison of fifty-thousand kisra bites. He&rsquo;d
      ventured just a few meters into the forest when his foot was impaled. Mira
      was just three-years old; she couldn&rsquo;t remember him at all. But
      everyone, especially Mr. Coogley, talked about the incident like it was
      her father&rsquo;s own fault. In actuality, bluenecks were rare. Ultra
      rare. Her father was unlucky, nothing more.&nbsp;
    </p>
    <p>
      Mira climbed the creaky staircase that piped notes louder than Pozipoo
      could ever muster. She wanted to go outside to sit on the brick piles, her
      trusted spot to watch flying kisras reveal their glowing
      underbellies.&nbsp;
    </p>
    <p>
      She entered the coatroom and opened the cabinet to retrieve her better
      coat.
    </p>
    <p>
      <em>Pitter pitter pitter pitter pitter.</em>
    </p>
    <p>
      That was the sound of kisras, particularly the sound of their double
      wings. A whole swarm&rsquo;s worth. She glanced through the window into
      the front yard. The bugs were multiplying into the air, darting towards
      the same target&mdash;the forest.
    </p>
    <p>
      The throng encircled a spot near the forest&rsquo;s edge,
      uncharacteristically&nbsp;&nbsp;avoiding the woods. <em>Weird</em>. It was
      as if the slender eldertrees that stretched into the air were caging the
      bugs like cell doors.&nbsp;
    </p>
    <p>
      When Mira glanced back at the cupboard to close it, she gasped. Through
      the cabinet&rsquo;s inner mirror, she could see the front-yard. She could
      see the forest. She could see the kisras swarming, but now, they were
      congregating around the Consortium carriage! It was there, parked at the
      forest&rsquo;s edge.
    </p>
    <p>&ldquo;Celestine almighty,&rdquo; Mira whispered to herself.&nbsp;</p>
    <p>
      Through the bare window, she could only see the myriad buzzing around
      empty air. Yet, through the mirror, she could see the horde surrounding
      the carriage. The strangers were somehow concealing themselves from naked
      sight. Mira struggled to make sense of it. Were they using an
      elixir?&nbsp;
    </p>
    <p>
      &ldquo;Friar?&rdquo; called Mira, his door meters from the coatroom.
      &ldquo;Friar, are you&mdash;&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;What&rsquo;re you doing,&rdquo; asked Mr. Coogley loudly as he
      climbed the stairs.&nbsp;
    </p>
    <p>Mira quickly shut the cabinet. &ldquo;Nothing.&rdquo;&nbsp;</p>
    <p>
      &ldquo;Incompetent.&rdquo; Mr. Coogley strode past her, strutting down the
      hallway. &nbsp;
    </p>
    <p>
      Mira opened the cabinet slowly. She wasn&rsquo;t crazy&mdash;the baby-blue
      vehicle was parked on the wood&rsquo;s edge. What were they up to?
    </p>
    <p>
      Mira crept down the stairs to discover Ms. Podima making her way into the
      atrium on her afternoon sweep.&nbsp;
    </p>
    <p>
      &ldquo;Where&rsquo;re you going child?&rdquo; said the woman dryly.
      &ldquo;Going to fish?&rdquo;
    </p>
    <p>&ldquo;Already did. I&rsquo;ll be back soon.&rdquo;&nbsp;</p>
    <p>
      Mira yanked open the front door and scurried down the steps. She
      wasn&rsquo;t going to let those two strangers get away.&nbsp;
    </p>
    <p>
      &ldquo;Don&rsquo;t go near the forest,&rdquo; yelled Ms. Podima from
      inside. &ldquo;It&rsquo;s the season for bluenecks.&rdquo;
    </p>
    <p>
      Mira wasn&rsquo;t phased by the warning. Between her father&rsquo;s death
      and today, she&rsquo;d encountered a single blueneck, and it was just a
      baby.&nbsp;
    </p>
    <p>
      The harka grass was terribly tall today. It towered over Mira&rsquo;s body
      by half a meter, the blades yellowish given the autumn season. It was her
      responsibility to scythe the lawn&mdash;alongside every other survival
      task that the chateau demanded&mdash;and she&rsquo;d procrastinated mowing
      the harka for over a moon. For most adults, the grass was worse than
      poison ivy, rendering instantaneously itchy rashes, but Mira&rsquo;d
      played in the fields so much when Dova was alive that she&rsquo;d built up
      an immunity.&nbsp;
    </p>
    <p>
      Without the mirror, she couldn&rsquo;t see the mysteriously vanishing
      carriage, but she remembered its rough position. The chateau was
      surrounded by the Fifty-Year Forest, the woods swooping around the
      residence like a horseshoe. The vehicle had been parked just on the
      wood&rsquo;s edge.&nbsp;
    </p>
    <p>
      As she got closer, she started to hear faint whispers. She slowed her
      approach, careful not to crack any thicket under her little feet. The
      harka was so plentiful that it surrounded her like water, even clogging
      her nose a little.&nbsp;
    </p>
    <p>Finally, she was within earshot to make out the voices.&nbsp;</p>
    <p>
      &ldquo;Seriously, monks?&rdquo; That sounded like Sister Astrid. &ldquo;Do
      I look like a <em>Sister</em> to you? Do I look <em>bald&nbsp;</em>to
      you?&rdquo;&nbsp;
    </p>
    <p>
      Finally, hard proof they weren&rsquo;t monks&mdash;Mira felt satisfied
      having figured that out from the onset.
    </p>
    <p>
      &ldquo;Calm down, Astrid,&rdquo; said Brother&mdash;or better said,
      Mr.&mdash;Froult.&nbsp;
    </p>
    <p>&ldquo;A blessed teapot is unbelievable hogwash!&rdquo;</p>
    <p>&ldquo;That old lady believed it.&rdquo;&nbsp;</p>
    <p>
      &ldquo;Mira <em>clearly&nbsp;</em>didn&rsquo;t.&rdquo;&nbsp;
    </p>
    <p>
      &ldquo;Let&rsquo;s not vilify our friend here,&rdquo; said Mr. Froult.
      &ldquo;He was just trying to help cover for us.&rdquo;
    </p>
    <p>
      &ldquo;No, it&rsquo;s fair,&rdquo; replied a feeble voice. &ldquo;I gave
      you a terrible alibi, I apologize.&rdquo; &nbsp;
    </p>
    <p>
      Friar Sorin was with them! No wonder Mira couldn&rsquo;t find him in the
      house. The old man had ventured off to meet the strange visitors out here.
      How could he after ignoring her all this time? What was he hiding? He, of
      all people! &nbsp;
    </p>
    <p>
      &ldquo;In hindsight, perhaps we should&rsquo;ve planned a better cover
      story in case the others intervened,&rdquo; said Mr. Froult.&nbsp;
    </p>
    <p>
      &ldquo;Or, <em>perhaps</em>,<em>&nbsp;</em>we should&rsquo;ve taken the
      girl when we had a chance.&rdquo;
    </p>
    <p>
      &ldquo;No. Our instructions were for her to come willingly, no exceptions.
      It was better for us to leave to regroup.&rdquo;
    </p>
    <p>&ldquo;What possibly for?&rdquo;</p>
    <p>
      &ldquo;To figure out <em>how&nbsp;</em>to tell her. How to talk to
      her.&rdquo;
    </p>
    <p>
      Mira prayed they couldn&rsquo;t hear her breathing. What was Mr. Froult
      talking about? To tell her what, exactly? Had something happened?&nbsp;
    </p>
    <p>&ldquo;Why don&rsquo;t we go there right now and swoop her up?&rdquo;</p>
    <p>
      Mr. Froult scoffed. &ldquo;You mad, Astrid? We arrived in a Consortium
      carriage.&rdquo;&nbsp;
    </p>
    <p>&ldquo;We told her the truth. It&rsquo;s a disguise!&rdquo;&nbsp;</p>
    <p>
      &ldquo;She doesn&rsquo;t know that! She wouldn&rsquo;t trust us. She{" "}
      <em>shouldn&rsquo;t&nbsp;</em>trust us.&rdquo;&nbsp;
    </p>
    <p>&ldquo;What do you suggest, then?&rdquo;&nbsp;</p>
    <p>
      Mr. Froult&rsquo;s voice softened. &ldquo;We were giving an explanation to
      why she&rsquo;d come. Here, friar, could you make sense of this&mdash;hold
      on, I need to reveal it.&rdquo;
    </p>
    <p>
      There was a short pause filled with Mira&rsquo;s thumping heartbeats. She
      couldn&rsquo;t make sense of any of this. Who were they if they
      weren&rsquo;t monks nor the Consortium? Why did friar trust them? What was
      Mr. Froult showing him?&nbsp;
    </p>
    <p>
      &ldquo;Here you go,&rdquo; continued Mr. Froult. &ldquo;What do you make
      of this?&rdquo;&nbsp;
    </p>
    <p>
      There was a short pause. Then, the Friar feebly whispered, &ldquo;Oh dear.
      This is referring to Dova&rsquo;s death.&rdquo;&nbsp;
    </p>
    <p>
      Hearing Dova&rsquo;s name sent Mira backtracking so quickly that she
      tripped over something, falling backwards into the harka, and yelped. But
      she couldn&rsquo;t care about her blunder. Dova&rsquo;s death? That day,
      that awful memory, had plagued Mira&rsquo;s mind. What had these two to do
      with Dova&rsquo;s sudden illness?&nbsp;
    </p>
    <p>
      &ldquo;What was that?&rdquo; asked Ms. Astrid. &ldquo;I swear,
      someone&rsquo;s out there.&rdquo; &nbsp;
    </p>
    <p>
      Mira wanted to reveal herself and interrogate them. She couldn&rsquo;t.
      She was paralyzed by fear, not of the strangers or the overhead matters,
      but by something much worse.&nbsp;
    </p>
    <p>
      A blueneck scorpion, a massive one with awfully swollen limbs, had crawled
      onto her chest. The creature&rsquo;s countless black eyes stared at her
      quivering face.
    </p>
    <p>
      Suddenly, its barb-tipped, curled tail whipped outwards, impaling
      Mira&rsquo;s neck. The pain was indescribable. &nbsp;
    </p>
  </FirstChapterDiv>
);
