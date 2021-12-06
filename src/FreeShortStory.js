import React, { useState } from "react";
import styled from "styled-components";
import { FadeInKeyframes } from "./Styles";

const FreeShortStoryDiv = styled.div`
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
    font-size: 48px;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    animation: ${FadeInKeyframes} 1s 1 forwards 0.5s;
  }
  h2 {
    margin: 0px;
    font-variant: small-caps;
    margin-bottom: 20px;
    font-size: 18px;
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

  h3 {
    font-variant: small-caps;
    margin-bottom: 20px;
    margin-top: 0px;
    font-size: 14;
    font-weight: 300;
    text-align: center;
  }

  h4 {
    font-variant: small-caps;
    margin-bottom: 0px;
    margin-top: 80px;
    font-size: 10;
    font-weight: 300;
    text-align: center;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    text-indent: 20px;
    margin: 0px;
    line-height: 36px;
    text-align: justify;
    opacity: 0;
    font-family: "Ibarra", "Times New Roman", Times, serif;
    animation: ${FadeInKeyframes} 1s 1 forwards 1.8s;
  }
`;

export const FreeShortStory = () => (
  <FreeShortStoryDiv>
    <h1>Symbiotes</h1>
    <h2>A short story set in the Elixiverse by M. Pregasen</h2>
    <p>
      Apricot Minolta was not a criminal. A thief, yes. Swindler would also be fair. 
      Hell, someone could call him a purloiner, and he would take offense
      to the haughtiness over the accusation. But criminals were those that got
      caught, and Apricot was anything but.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Same couldn&rsquo;t be said about his partner, though. Jox Li was not just
      a criminal, but a proper one. She&rsquo;d been arrested by the numbing
      scarves more times than Apricot&rsquo;d eaten his namesake, &agrave; la
      aplenty. Daisha enforcers knew Jox&rsquo;s face like she was their god.
      Maybe she was.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Make no mistake, Apricot and Jox weren&rsquo;t that<em>&nbsp;</em>
      different. Both attended Chancellor Quail&rsquo;s conservatory as wee
      children. In fact, they first met in Preceptor Dako&rsquo;s introductory
      course. Terrible teacher. Marvelous peers. Oh, those were the good
      times&mdash;
    </p>
    <p>
      &ldquo;<em>Maisor Misha has the stupidest designs of the big three</em>
      ,&rdquo; sounded Jox&rsquo;s voice.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot suppressed a grin. &ldquo;<em>Absolutely</em>,&rdquo; he
      transmitted back.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Sorry, similarities. There were many beyond their schooling. Both hated
      high fashion with passion, but devilishly adored the associated riches.
      Today was the perfect example of that. If this operation proved
      successful, they&rsquo;d pilfer enough durling to buy apartments in
      Eliza&rsquo;s district whilst gifting Maisor Misha a scandal. An
      unbeatable win-win.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>I&rsquo;m outside the vault</em>,&rdquo; sounded Jox.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Alright. I&rsquo;m walking indoors</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Right, the biggest commonality. Apricot and Jox were sriin symbiotes. They
      micro-dosed on the elixir to foster an unbroken mental connection. Most
      academics believed that such a feat was impossible, Dako included. But not
      Apricot. He was as much a realist as Jox was a coward. Together,
      they&rsquo;d experimented with Sriin for moons and discovered symbiotism,
      word pending.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Hello. Can I help you?&rdquo; greeted the store clerk.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      She was a beauty, no question about it. Flaxen hair. Neat eyes. A mousey
      nose. Apricot could&rsquo;ve fallen for her if he stalled long enough.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Just browsing,&rdquo; said Apricot with a tip of his hat.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>I&rsquo;m inside the shop</em>,&rdquo; he transmitted soon
      after.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>The clerk looks dashing enough for you, today</em>?&rdquo;
    </p>
    <p>
      Apricot never lied to Jox, be it out of habit or necessity. Sriin only
      transmitted true statements, period. Even casual remarks had to be
      packaged formally. He&rsquo;d gotten used to ignoring the phrases that
      cluttered his correspondence. &ldquo;My answer would be&rdquo;, &ldquo;I
      want to ask you&rdquo;, etc. got annoying real quick. But, alas, they were
      a practice required by their trade. By their connection.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>I await your confirmation</em>,&rdquo; she sounded.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Shut up</em>,&rdquo; he replied. Of course, that was &ldquo;I
      want to tell Jox to &lsquo;Shut up&rsquo;.&rdquo;
    </p>
    <p>
      &ldquo;<em>How many employees outside of the girl?</em>&rdquo;
    </p>
    <p>
      Apricot examined the shop&rsquo;s interior. The flagship Maisor Misha
      location wasn&rsquo;t here, but in Helsea Market along with its
      competitors, Nayanthara and Han Pori Jai. Today, he was in a satellite
      branch perched up in Gants Brae. Smaller collection, but this was where
      the money was.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Two</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Good</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      A casual shopper would consider Gants Brae to be a single story building.
      It wasn&rsquo;t. Deep under was a vault of Maisor Misha&rsquo;s cash
      reserves. Given sales from their hit Spring-Summer collection, there was
      at least one thousand stacks
      <span class="Apple-converted-space">&nbsp;&nbsp;</span>of durling
      downstairs. Enough to buy twenty apartments in Eliza&rsquo;s district.
      Twenty.<span class="Apple-converted-space">&nbsp; &nbsp;</span>
    </p>
    <p>
      &ldquo;<em>The vault uses one manual lock and two argentate locks</em>
      ,&rdquo; sounded Jox.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      They had prepared for this. The manual lock was easy &mdash; Jox was the
      best lock-pick in Daisha. The woman had been arrested four times, but
      never sentenced. Because of good defense barristers? Nope. Rather,
      she&rsquo;d never faced a magistrate because no jail could hold her longer
      than a week. Now, her capture came with a ten thousand durling reward,
      plus ten percent of any thievery if she&rsquo;d been caught in the act.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      But the argentate locks? Their mechanism was complicated. Inside the door
      was a set of silver discs that had to perfectly oriented using the correct
      elixir, Argent. Without the elixir, the lock was impenetrable, even to
      Jox. With the elixir? Solvable, but tricky nevertheless.
    </p>
    <p>
      &ldquo;<em>First is a three disc. Second is an eighteen disc</em>,&rdquo;
      sounded Jox.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>On it. You&rsquo;re good for the first</em>?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Obviously</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Each disc had seven possible placements. With three hundred odd
      permutations, the first lock was tedious but crackable via the old
      guessing game. Jox would break it in five minutes, ten at the latest. But
      the eighteener? That was on Apricot to figure out. He had to determine the
      code whilst ensuring no employee went peeking downstairs.
    </p>
    <p>
      &ldquo;Excuse me,&rdquo; Apricot beckoned to the darling clerk. &ldquo;But
      what colorways does this come in?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      He was pointing to a blue monogrammed scarf &mdash; in his book, the only
      fashionable piece by the brand. The clerk produced a cute smile and ambled
      over.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Elderleaf, lemon, and mint,&rdquo; she piped. She gestured at the
      displayed sample. &ldquo;And, obviously, sky.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot suppressed an eye-roll. Maisor Misha would call a black belt a
      &ldquo;charcoal cincture&rdquo;. Lunacy.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Do you want to try it on?&rdquo; asked the clerk. &ldquo;It&rsquo;d
      suite you quite well if I&rsquo;m being honest.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      <em>Being honest? Really?</em> mused Apricot.{" "}
      <em>
        I wonder how many clients have been told the converse.
        <span class="Apple-converted-space">&nbsp;</span>
      </em>
    </p>
    <p>
      He jiggled his hand. &ldquo;No thank you, ma&rsquo;am. I&rsquo;m just
      shopping for a friend.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Oh?&rdquo; said the clerk. &ldquo;A special type of friend?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Valid assumption, honestly. Buying a Maisor Misha scarf for someone was
      the equivalent of professing &ldquo;I love you&rdquo; in silk.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Yes,&rdquo; he smiled. &ldquo;Hopeless romantic here.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>&ldquo;Aw&mdash;&rdquo;</p>
    <p>
      &ldquo;In fact, I was curious if you could write down this scarf&rsquo;s
      serial number.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Oh?&rdquo; said the clerk, blinking. &ldquo;May I ask what
      for?&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;I&rsquo;d like to take her to the main location in Helsea. Get her
      opinion on it in person, you know?&rdquo; he said with a wink.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The clerk gave him a tight nod and sauntered back. He understood her
      frustration.&nbsp;Gants Brae was a place of little wealth. A sale
      would&rsquo;ve contributed towards a fair percentage of her monthly
      commission. Perhaps all of it.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Any updates?</em>&rdquo; transmitted Apricot.
    </p>
    <p>
      &ldquo;
      <em>No, but I&rsquo;ve exhausted a third of possibilities so far</em>
      .&rdquo;
    </p>
    <p>
      &ldquo;<em>Copy</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot watched the woman like a son&rsquo;s mother. The clerk opened a
      locked drawer to peruse a stack of bound together notes. She extracted a
      blank sheet, but in the process, she briefly flashed a set of numbers.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Perfect. Maisor Misha wouldn&rsquo;t trust their own employees with their
      wealth. Not a single worker, at least. Rather, one knew the combination to
      the three disc by heart. Another held the physical key. But the eighteener
      was the most secure, and tangentially, the most forgettable. Apricot
      hypothesized that whoever safeguarded the combination had it written down.
      Hypothesized? Sorry, more like prophesied. Now, he just needed a closer
      peek.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Here you go,&rdquo; said the gorgeous clerk.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Yes, gorgeous. He predicted this would happen, hadn&rsquo;t he? The longer
      this heist lasted, the more infatuated he would become. Too bad, by
      tomorrow&rsquo;s daybreak, he would have lost the lady her job, and,
      worse, broken her heart.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;
      <em>Broke the three disc. I&rsquo;m working on the manual key, now</em>
      .&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot smiled. &ldquo;<em>Incredible. I&rsquo;ve a lead. More soon</em>
      .&rdquo;
    </p>
    <p>
      &ldquo;Sir?&rdquo; asked the clerk, still holding out the note.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Keep it,&rdquo; said Apricot, maintaining his grin. &ldquo;On
      second thought, she&rsquo;s already here. Let&rsquo;s purchase the scarf
      today.&rdquo;
    </p>
    <p>
      The woman blinked. There was that cute &ldquo;Oh?&rdquo; again.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Here&rsquo;s what we are going to do,&rdquo; said Apricot
      elegantly. &ldquo;I&rsquo;ll buy the scarf, but you keep it. Plus, the
      commission.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The clerk&rsquo;s jaw trembled. &ldquo;Sir, I&rsquo;m flattered, but
      &hellip;&rdquo;
    </p>
    <p>
      Apricot waved his hand dismissively.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;Don&rsquo;t think much of it. I&rsquo;m mesmerized by your sales
      tactics, and nothing more.&rdquo; He winked. &ldquo;Besides, a good
      saleswoman should wear the merchandise, don&rsquo;t you think?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;I don&rsquo;t know what to say.&rdquo; The clerk&rsquo;s eyes did a
      jig, the confused, adorable kind. &ldquo;I, uh&mdash;&rdquo;
    </p>
    <p>
      &ldquo;I&rsquo;ll tell you what to <em>do</em>. You take that serial
      number and return it to where it came from. Next, ring me up.&rdquo;
    </p>
    <p>
      The woman managed to smile and nod. She was under his trance, no doubt. To
      be fair, he&rsquo;d cheated. Jox stalked her in advance. Five days ago,
      her fianc&eacute;e had abandoned her. Something about pursuing a
      woodworking business &hellip; Apricot couldn&rsquo;t care about the
      details. What mattered was she was desperate, and desperate folks made for
      perfect exploits.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      This time, Apricot trailed her to the counter. She opened the drawer. His
      lightning fast eyes caught the number. Beautiful. Before the clerk could
      spin about and catch his peeping, he sashayed to the front of the corner.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Two Seven One Six Four</em>&hellip;&rdquo; Apricot transmitted
      the code.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Marvelous. Just broke the manual key. Eighteener is next</em>
      .&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The clerk was peering through her index of catalogued items. She found the
      entry with a gentle gasp.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;That will be eight hundred durling,&rdquo; said the clerk softly.
      &ldquo;You really don&rsquo;t have to do this.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot was a master of deception, yes. But that didn&rsquo;t mean he was
      immune to the cringe that came with the job. He felt the pain as anyone
      else would.
    </p>
    <p>
      &ldquo;On second thought, you are correct. I don&rsquo;t have to do this
      for a wretch like you.&rdquo; Apricot tipped his hat. &ldquo;Good
      day.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      He whipped around quick enough to avoid experiencing the clerk&rsquo;s
      reaction. She might quit before getting fired, honestly. Apricot
      couldn&rsquo;t imagine being around co-workers that&rsquo;d seen such
      humiliation.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Eighteener is cracked</em>,&rdquo; sounded Jox.<em>&nbsp;</em>
      &ldquo;
      <em>
        I&rsquo;m in the vault. Everything we hoped for is here and more.
        Awaiting your move
      </em>
      .&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>Apricot spun. &ldquo;On third thought,&rdquo; he said wickedly.</p>
    <p>
      The clerk was hiding tears. He knew what was coming. The perfect gift for
      Jox.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;OUT! Out and never return!&rdquo; shrieked the lady. The others ran
      to her side attempting to calm her down. &ldquo;That was so cruel.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot smirked, walked out, and heard Jox&rsquo;s confirmation
      immediately after.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Door closed. Great work falling in and out of love</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Easy for you to say</em>,&rdquo; transmitted Apricot.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p class="p3">
      <br />
    </p>
    <p style={{ textAlign: "center" }}>⁂</p>
    <p class="p5">
      <br />
    </p>
    <p>
      &ldquo;Excellent work, Apricot.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The captain was a hefty man with a salt and pepper beard.
      <span class="Apple-converted-space">&nbsp;&nbsp;</span>He stood by the
      shop&rsquo;s entrance looking gloomy like wet stone, but he hid a smile
      &mdash; Apricot knew it. Today, the enforcer&rsquo;d made the bust of his
      career. Arresting Jox Li.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Jox came out screaming. &ldquo;Get off me! Get off me!&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The numbing fabrics had her wrists bound behind her back. Two enforcers
      flanked her sides. Both hosted the elixir Pitti in their systems, and had
      scarves levitating by their sides on standby, just in case Jox managed to
      break free.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot smiled at her writhing figure. Jox glowered back.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>You&rsquo;re enjoying this, aren&rsquo;t you</em>,&rdquo;
      sounded her voice.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>Every moment of it</em>.&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot and the captain watched Jox be haphazardly thrown into the hansom.
      She wasn&rsquo;t given a moment of rest. The free, anesthetic scarves
      darted towards her and bound her ankles.
    </p>
    <p>
      &ldquo;I&rsquo;d like to see what I stopped today,&rdquo; said Apricot
      stately. &ldquo;May I go down with you, Captain?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The captain shrugged. &ldquo;It&rsquo;s not exactly policy, but
      sure.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Together, they ventured into the store&rsquo;s basement. Since it was
      Amulday, the place was supposed to be totally deserted. Instead, enforcers
      pruned nooks and crannies, contemplating how Jox might&rsquo;ve entered
      the vault. Good luck to them.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot had expected something sizable, but this vault was elephantine.
      Inside, enforcers were emptying bags of durling. Jox had stuffed every
      single coin. Impressive, even for her.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;We&rsquo;re still trying to figure out how she would&rsquo;ve
      gotten the money out,&rdquo; said the captain. &ldquo;No chance someone
      could lift all these coins, even with a team. But she bagged
      everything.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot shrugged. &ldquo;She&rsquo;s Jox Li. Trust me, Captain.
      She&rsquo;s a criminal like no other.&rdquo;
    </p>
    <p>
      &ldquo;Without a vigilante like you, we&rsquo;d never have caught
      her.&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Apricot scoffed. &ldquo;This time, how about you manage to keep her locked
      up, eh?&rdquo;<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      The captain grunted. &ldquo;You sure you don&rsquo;t want a job?&rdquo;
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      Ah, the routine job offer. The captain never gave up on it. After all, the
      ten percent this time was going to be a fortune. Might cost the captain
      his own job. Who knows? Who cares?
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;I&rsquo;m good where I am,&rdquo; said Apricot.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      He couldn&rsquo;t hide his goofy smile. She&rsquo;d be proud. Exploiting
      the ten percent reward over an impossible heist was her idea.
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>
      &ldquo;<em>They&rsquo;re not suspecting a thing</em>,&rdquo; Apricot
      transmitted.<span class="Apple-converted-space">&nbsp;</span>
    </p>
    <p>He knew what was coming. She was, after all, the frugal one.</p>
    <p>
      &ldquo;
      <em>
        Don&rsquo;t spend it too fast, darling. I&rsquo;ll be out of here in no
        time
      </em>
      ,&rdquo; sounded Jox, the true champion of his heart.{" "}
      <span class="Apple-converted-space">&nbsp;</span>
    </p>
    <h4>dedication</h4>
    <h3>For Leanne, a supporter of my words from the start</h3>
  </FreeShortStoryDiv>
);
