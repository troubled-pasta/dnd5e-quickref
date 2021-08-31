data_condition = [
    {
        title: "Stun damage",
        icon: "knockout",
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
        icon: "sharp-smile",
        subtitle: "You are nauseous",
        description: "Nausea is a catch-all term; it includes pain, panic, vomiting, and double vision.",
        reference: "SR5, pg. 409",
        bullets: [
            " If the Power of an attack after the Toxin Resistance Test exceeds the target’s Willpower, he is incapacitated (unable to take any actions) with vomiting and dizziness for 3 Combat Turns.",
            "Whether or not a character is incapacitated, Nausea doubles all of a character’s wound modifiers for ten minutes.",
            "A nauseated character with 3 boxes of damage (a –1 wound modifier), for example, suffers –2 dice on all tests instead."
        ]
    },
    /*{
        title: "Blinded",
        icon: "sight-disabled",
        subtitle: "You can't see",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Deafened",
        icon: "hearing-disabled",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
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
