data_condition = [
    {
        title: "Blinded",
        icon: "sight-disabled",
        subtitle: "You can't see",
        description: "The concept of sight has expanded on the mean streets of 2075. Vision enhancement systems, magic, and variations in natural sight have made the idea of “seeing” taking on different meanings.",
        reference: "SR5, pg. 174. RF, pg. 154.",
        bullets: [
            "Refer to Environmental conditions for information on dice pool modifiers applied by different light/vision conditions.",
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
            ]
    },
    {
        title: "Disoriented",
        icon: "knockout",
        subtitle: "You are disoriented",
        description: "Disorientation causes the victim a –2 dice pool modifier to all actions for ten minutes, due to confusion and disorientation.",
        reference: "SR5, pg. 409",
        bullets: [
        
        ]
    },
    {
        title: "Fatigued",
        icon: "despair",
        subtitle: "You are fatigued",
        description: "Caused by harsh environments, hard exertion, and drek like that.",
        reference: "SR5, pg. 172",
        bullets: [
            "Fatigue damage is Stun damage you incur through doing something strenuous or for being in the middle of something stressful",
            "Fatigue damage is resisted with BOD + WIL, not with any armor. Fatigue damage cannot be healed while the condition causing it still exists.",
            "Sprinting over multiple consecutive Combat Turns or during multiple Action Phases in one Combat Turn risks incurring Fatigue damage.",
            "For every consecutive Action Phase or Combat Turn in which you use the Sprint action, you take a cumulative 1S DV of fatigue damage, which means that the second time you take it without dialing it back you take 2S, then 3S, etc.",
            "If you’re only running (using your running movement rate) instead of sprinting, this damage is taken every 3 minutes.",
            "Hot, cold, humid, dry, polluted, or irradiated environments can cause fatigue damage. As with running fatigue, the DV from a harsh environment starts at 1S and increases over time. Unlike running fatigue, if you keel over in a hostile environment the damage continues to mount.",
            "After 24 hours, if you haven’t eaten, slept, or had a (non-alcoholic) drink, you risk fatigue damage. Damage starts at 1S and increases over each interval it is taken. The interval for hunger is 6 days, for thirst is 2 days, and for sleep is 3 hours. This damage stops when you eat, drink, or sleep, respectively."
        ]
    },
    {
        title: "Injured (Stun)",
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
        title: "Injured (Physical)",
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
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "Invisibility is a spell effect.",
        reference: "SR5, pg. 291.",
        bullets: [
            "The subject is more difficult to detect by normal visual senses (including low-light, thermographic, and other senses that rely on the visual spectrum).",
            "The subject is completely tangible and detectable by the other senses (hearing, smell, touch, and even taste, if it somehow comes to that) and their aura is still visible to astral perception.",
            "Attacks against invisible targets suffer the Blind Fire modifier if the attacker is unable to see or otherwise sense the subject of the spell.",
            "<i>Invisibility</i> affects the minds of viewers. <i>Improved Invisibility</i> mimics the subject’s surroundings from all angles and affects technological sensors as well."
        ]
    },
    {
        title: "Nauseous",
        icon: "drowning",
        subtitle: "You are nauseous",
        description: "Nausea is a catch-all term; it includes pain, panic, vomiting, and double vision.",
        reference: "SR5, pg. 409",
        bullets: [
            "If the Power of an attack after the Toxin Resistance Test exceeds the target’s Willpower, they are incapacitated (unable to take any actions) with vomiting and dizziness for 3 Combat Turns.",
            "Whether or not a character is incapacitated, Nausea doubles all of a character’s wound modifiers for ten minutes.",
            "A nauseated character with 3 boxes of damage (a –1 wound modifier), for example, suffers –2 dice on all tests instead."
        ]
    },
    {
        title: "Paralysed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "Paralysis renders the victim unable to move by blocking the body’s neuromuscular signals.",
        reference: "SR5, pg. 409",
        bullets: [
            "If the Power of an attack after the Toxin Resistance Test exceeds the target’s Reaction, the target is paralyzed and unable to take physical actions for 1 hour.",
            "Even if the target is not paralyzed, they suffer a –2 dice pool modifier for the next hour."
        
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
        title: "Restrained",
        icon: "handcuffed",
        subtitle: "You are restrained",
        description: "In Shadowrun, you might just find yourself caught instead of killed. Escape Artist provides a chance to escape from most forms of confinement, including ropes, handcuffs, and other bindings.",
        reference: "SR5, pg. 135.",
        bullets: [
            "To get out of restraints, make an Escape Artist + AGI [Physical] Test against a threshold based on what you’re trying to get out of.",
            "If you succeed, you’re free after working on it for 1 minute (20 Combat Turns) divided by the number of net hits you get on the test.",
            "The dice pool is modified by a variety of factors, such as whether or not you’re being watched (and trying to be subtle) or if you’re carrying a set of lockpicks.",
            "<table><thead><tr><th>Restraints</th><th>Threshold</th></tr></thead><tbody><tr><td>Rope, plastic cuffs</td><td>2</td></tr><tr><td>Metal handcuffs</td><td>3</td></tr><tr><td>Straitjacket</td><td>4</td></tr><tr><td>Containment manacles</td><td>5</td></tr><tr><td>Material is reinforced</td><td>Increase by 1</td></tr><tr><th>Situation</th><th>Modifier</th></tr><tr><td>Character is being watched</td><td>-2</td></tr><tr><td>Character is physically restrained</td><td>-(Restrainer's STR)</td></tr><tr><td>Character has picks or cutting implement</td><td>+2</td></tr></tbody></table>",
            "The gamemaster may decide that some restraints are too difficult to escape from without outside help."
        ]
    },
    {
        title: "Subdued",
        icon: "andromeda-chain",
        subtitle: "You are grappled",
        description: "Sometimes, characters need to subdue an opponent without beating them into unconsciousness.",
        reference: "SR5, pg. 195",
        bullets: [
            "To break out of the lock, the defender must take a Complex Action and succeed in an Unarmed Combat + STR [Physical] Test with a threshold equal to the net hits scored on the attacker’s original grappling test. Otherwise the defender remains subdued and cannot take any actions requiring physical movement.",
            "Otherwise the defender remains subdued and cannot take any actions requiring physical movement. Consider the subdued character to be prone for any attacks made against them.",
            ]
    },
    {
        title: "Surprised",
        icon: "hazard-sign",
        subtitle: "-10 Initiative Score",
        description: "A surprised character is caught off guard and can do little except watch events unfold.",
        reference: "SR5, pg. 192.",
        bullets: [
            "Surprise normally occurs at the beginning of combat, but it is possible for it to happen within a Combat Turn if an unexpected force enters the fray.",
            "To resolve surprise situations, all participants must make a Surprise Test, rolling REA + INT (3). Characters who have been alerted in some way receive a +3 dice pool modifier on this test. Surprise Tests do not have a Limit.",
            "Success on a Suprise Test means characters get to act as normal. Failure means characters take a -10 to their Initiative Score (either when Initiative is rolled or immediately if it occurs in the middle of the Combat Turn) and they are considered surprised until their next Action Phase.",
            "Surprised characters get no Defense Test when attacked. This can be avoided by spending a point of Edge to avoid surprise. They still lose the Initiative Score points, however.",
            "Characters who glitch on their Surprise tests may still react appropriately, but startle in some way, such as jumping, knocking into something, or dropping something they were holding (GM Discretion).",
            "A critical glitch on a Surprise Test means the character does not act for the first Action Phase. If they are able to enter combat after that, they receive a –10 penalty for failing the Surprise Test, as well as the –10 penalty for entering combat in the middle of a fight."
        ]
    }
   /*
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
