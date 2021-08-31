data_condition = [
    {
        title: "Stun damage",
        icon: "pummeled",
        subtitle: "You have taken stun damage",
        description: "Stun damage —bruising, muscle fatigue, and the like— is the kind done by fists, kicks, blunt weapons, stun or gel rounds, shock weapons, concussion grenades, cold-sim dumpshock and some magic spells. Stun Damage is tracked on the Stun Condition Monitor.",
        reference: "SR5, pgs. 169, 409",
        bullets: [
            "If something does Stun damage, the letter “S” follows the Damage Value. Stun damage takes a shorter time to heal.",
            "With every third box of damage a Wound Modifier (-1) is applied. Wound modifiers are are cumulative between damage tracks and with other negative modifiers such as spells or adverse conditions. Wound modifiers are applied to all tests not about reducing the number of boxes you’re about to take on your Condition Monitor",
            "When the total number of boxes in the Stun damage track are filled in and damage still remains, it carries over into the Physical damage track. For every two full boxes of excess Stun damage, carry over 1 box to the Physical damage track",
            "Stun and Physical damage both heal naturally, though at different rates. Medical attention can help hasten the process. In both cases, healing is handled as an Extended Test.",
            "To heal Stun Damage, make a BOD + WIL (1 hour) Extended Test. The character must rest for the entire hour for it to count (forced naps and unconsciousness also count). Each hit heals 1 box of Stun damage",
            "A glitch on a healing test (Stun or Physical) doubles the resting time (the damage is still healed—it just takes longer). A critical glitch increases the damage by 1D3 (1D6 ÷ 2) boxes in addition to doubling the resting time."
        ]
    },
    {
        title: "Physical damage",
        icon: "bleeding-wound",
        subtitle: "You have taken physical damage",
        description: "Physical damage, the most dangerous type, is the kind done by guns, explosions, most melee weapons, hot-sim dumpshock and many magic spells. Physical Damage is tracked on the Physical Condition Monitor.",
        reference: "SR5, pgs. 169, 409",
        bullets: [
            "If something does Physical damage, the letter “P” follows the Damage Value. Physical damage takes a longer time to heal.",
            "With every third box of damage a Wound Modifier (-1) is applied. Wound modifiers are are cumulative between damage tracks and with other negative modifiers such as spells or adverse conditions. Wound modifiers are applied to all tests not about reducing the number of boxes you’re about to take on your Condition Monitor",
            "When the total number of boxes in the Physical damage track are filled in and damage still remains, the damage enters Overflow. Overflowing the Physical damage track means they're near death. Instant death occurs only if damage overflows the Physical damage track by more than the character’s BOD attribute. One point over that limit and their memory will be toasted at their favorite shadowrunner bar.",
            "Characters whose Physical damage overflow has not been filled can survive if they receive prompt medical attention. If no medical attention is available, the character takes an additional box of damage from blood loss, shock, or other complications for every (BOD) minutes they manage to hang on. If the cumulative overflow damage exceeds the character’s BOD attribute before medical help arrives, they die.",
            "Stun and Physical damage both heal naturally, though at different rates. Medical attention can help hasten the process. In both cases, healing is handled as an Extended Test.",
            "To heal Stun Damage, make a BOD + WIL (1 hour) Extended Test. The character must rest for the entire hour for it to count (forced naps and unconsciousness also count). Each hit heals 1 box of Stun damage",
            "A glitch on a healing test (Stun or Physical) doubles the resting time (the damage is still healed—it just takes longer). A critical glitch increases the damage by 1D3 (1D6 ÷ 2) boxes in addition to doubling the resting time."
        ]
    },
    {
        title: "Poisoned",
        icon: "skull-crossed-bones",
        subtitle: "You are poisoned",
        description: "Knockout drugs. Truth serum. Nerve gas. All of these are examples of toxins, a catch-all term for a substance that’s mostly meant for use as a weapon.",
        reference: "SR5, pgs. 169, 409. HT, pgs 192, 193.",
        bullets: [
            "Poisons or toxins that do damage (Stun or Physical) have a Power rating. Power serves as the DV of the attack. A Toxin Resistance Test is used to reduce the damage (BOD + WILL + the rating of any protective gear/systems), each hit reduces the toxin’s Power by 1 point. If Power is reduced to 0 no damage occurs and no other effects happen.",
            "A toxin's Speed determines how quickly the victim suffers the toxin’s Effect. These effects are always applied at the end of a Combat Turn. Immediate means the Effect is applied at the end of the same Combat Turn in which the victim is exposed. A Speed of 1 Combat Turn means the Effect is applied at the end of the next Combat Turn, and so on",
            "Toxins are delivered via means of a Vector. The Vector can be Contact, Ingestion, Inhalation or Injection. A toxin's Penetration rating works like a weapon’s Armor Penetration and affects the rating of any protective system used to defend against it in the same way.",
            "Contact toxins applied to a melee weapon can be applied with a successful Melee Attack, whether the attack causes damage or not. Injection toxins applied to a bladed melee weapon must cause damage to take effect.",
            "Many toxins simply cause damage; in this case, the Effect supplies the damage type. Damage from toxins is treated just like any other injury. Some toxins cause other effects, which are listed in their description.",
            "If exposed to more than a single dose at a given time, increase the Power of the toxin by +1 per additional dose. Duration might also increase, at the gamemaster’s discretion",
            "If they’re to do any good, antidotes must be taken before a toxin’s effects kick in. An antidote taken afterwards will not diminish the damage caused by the toxin but may reduce the toxin’s other effects. Note that some toxins simply have no effective antidote, particularly neurotoxins.",
            "If a victim has suffered Physical damage overflow from a toxin, then application of the appropriate antidote automatically stabilizes them."
        ]
    },
    {
        title: "Disorientation",
        icon: "knockout",
        subtitle: "You are disoriented",
        description: "Disorientation causes the victim a –2 dice pool modifier to all actions for ten minutes, due to confusion and disorientation.",
        reference: "SR5, pg. 409",
        bullets: [
        
        ]
    },
    {
        title: "Paralysis",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "Paralysis renders the victim unable to move by blocking the body’s neuromuscular signals.",
        reference: "SR5, pg. 409",
        bullets: [
            "If the Power of an attack after the Toxin Resistance Test exceeds the target’s Reaction, the target is paralyzed and unable to take physical actions for 1 hour.",
            "Even if the target is not paralyzed, he suffers a –2 dice pool modifier for the next hour."
        
        ]
    },
    {
        title: "Nausea",
        icon: "drowning",
        subtitle: "You are nauseous",
        description: "Nausea is a catch-all term; it includes pain, panic, vomiting, and double vision.",
        reference: "SR5, pg. 409",
        bullets: [
            "If the Power of an attack after the Toxin Resistance Test exceeds the target’s Willpower, he is incapacitated (unable to take any actions) with vomiting and dizziness for 3 Combat Turns.",
            "Whether or not a character is incapacitated, Nausea doubles all of a character’s wound modifiers for ten minutes.",
            "A nauseated character with 3 boxes of damage (a –1 wound modifier), for example, suffers –2 dice on all tests instead."
        ]
    },
    {
        title: "Blinded",
        icon: "sight-disabled",
        subtitle: "You can't see",
        description: "The concept of sight has expanded on the mean streets of 2075. Vision enhancement systems, magic, and variations in natural sight have made the idea of “seeing” taking on different meanings.",
        reference: "SR5, pg. 174. RF, pg. 154.",
        bullets: [
            "<table><thead><tr><th>Condition</th><th>Dice Pool Modifier</th><th>Compensation + Effect</th></tr></thead><tbody><tr><td>Visibility</td><td>Clear (0)<br>Light (-1)<br>Moderate (-3)<br>Heavy Obstruction (-6)</td><td>Ultrasound (shift up 1 step)<br>Thermographic Vision (shift up 1 step)</td></tr><tr><td>Light</td><td>Full Light (0)<br>Partial (-1)<br>Dim (-3)<br>Total Darkness (-6)</td><td>Low-Light Vision (Partial and Dim light become Full Light)<br>Thermographic Vision (shift up 1 step)<br>Ultrasound (ignore Light conditions within 50m)<br>Sunglasses (shift down 1 step)</td></tr><tr><td>Glare</td><td>None (0)<br>Weak (-1)<br>Moderate (-3)<br>Blinding (-6)</td><td>Sunglasses (shift up 1 step)<br>Flare Compensation (shift up 2 steps)</td></tr><tr><td>Range</td><td>Short (0)<br>Medium (-1)<br>Long (-3)<br>Extreme (-6)</td><td>Image Magnification (shift up 1 step)</td></tr></tbody></table>",
            "Natural rain, fog, smoke from natural sources, or a smoke screen of some type thrown up for cover, all block line of sight.", 
            "Without line of sight, magicians cannot establish a mystical link between them and their target to cast spells. Sight is not required for spells that require physical contact with the target.",
            "Visibility modifiers are mitigated in all conditions by ultrasound vision systems; thermographic vision compensates in all cases except for thermal smoke.",
            "Permanently blind characters (Blind Quality, see RF, pg. 154) automatically fail all vision-based Perception Tests, face a –4 dice pool modifier for general Perception tests, a –3 dice pool modifier for Surprise Tests, Blind Fire when in Ranged Combat, Total Darkness in Melee Combat, and any other relevant modifiers at the gamemaster’s discretion."
        ]
    },
    {
        title: "Deafened",
        icon: "hearing-disabled",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "RF, pg. 154.",
        bullets: [
            
            "Permanently deaf characters automatically fail any audio-based Perception tests. They also face a –2 dice pool modifier for general Perception tests, a –3 dice pool modifier for Surprise Tests, and any other modifiers at the gamemaster’s discretion.",
            "Awakened characters who are blind can still use Astral Perception all the time and at least have some sense of objects in the world, but suffer a –2 dice pool modifier to all actions performed on the physical plane while perceiving the astral.",
        ]
    },/*
    {
        title: "Grappled/Subdued",
        icon: "crossed-chains",
        subtitle: "You are incapacitated",
        description: "Nausea is a catch-all term; it includes pain, panic, vomiting, and double vision.",
        reference: "SR5, pg. 409",
        bullets: [
            " If the Power of an attack after the Toxin Resistance Test exceeds the target’s Willpower, he is incapacitated (unable to take any actions) with vomiting and dizziness for 3 Combat Turns.",
            "Whether or not a character is incapacitated, Nausea doubles all of a character’s wound modifiers for ten minutes.",
            "A nauseated character with 3 boxes of damage (a –1 wound modifier), for example, suffers –2 dice on all tests instead."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Surprised",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            ""
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            ""
        ]
    },
    {
        title: "Unconscious",
        icon: "knockout",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    }*/
]
