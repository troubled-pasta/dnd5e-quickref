data_environment_environmental = [
    {
        title: "Glare",
        icon: "eclipse-flare",
        subtitle: "Glare-based penalties",
        description: "Glare inflicts negative modifiers on some attack rolls. There are a variety of methods a runner can use to mitigate Glare modifiers.",
        reference: "SR5, pg. 175.",
        bullets: [
            "<table><thead><tr><th>Glare</th><th>Modifier</th></tr></thead><tbody><tr><td>No Glare</td><td>None</td></tr><tr><td>Weak Glare</td><td>-1</td></tr><tr><td>Moderate Glare</td><td>-3</td></tr><tr><td>Blinding Glare</td><td>-6</td></tr></tbody></table>",
            "Two or more conditions (wind, range, etc.) at the -6 level incur a maximum penalty of -10.",
            "Flare compensation reduces Glare modifiers by two categories (shift up on the modifier table), thermographic vision and sunglasses reduce Glare modifiers by one category.",
            "Ultrasound vision systems eliminate the penalty in any light conditions (but only within 50 meters)."
        ]
    },
    {
        title: "Light",
        icon: "double-street-lights",
        subtitle: "Light-based penalties",
        description: "Poor lighting inflicts negative modifiers on some attack rolls. There are a variety of methods a runner can use to mitigate Light modifiers.",
        reference: "SR5, pg. 175.",
        bullets: [
            "<table><thead><tr><th>Light</th><th>Modifier</th></tr></thead><tbody><tr><td>Full Light</td><td>None</td></tr><tr><td>Partial Light</td><td>-1</td></tr><tr><td>Dim Light</td><td>-3</td></tr><tr><td>Total Darkness</td><td>-6</td></tr></tbody></table>",
            "Two or more conditions (wind, range, etc.) at the -6 level incur a maximum penalty of -10.",
            "If a character has Low-Light Vision, treat Partial Light and Dim Light as Full Light.",
            "Thermographic Vision reduces Light modifiers by one category (shift up on the modifier table).",
            "Sunglasses <i>increase</i> Light modifiers by one category (shift down on the modifier table).",
            "Ultrasound vision systems eliminate the penalty in any light conditions (but only within 50 meters)."
            
        ]
    },
    {
        title: "Range",
        icon: "binoculars",
        subtitle: "Range-based penalties",
        description: "Distance to target is always a factor when firing or throwing a weapon.",
        reference: "SR5, pgs. 175, 185.",
        bullets: [
            "<table><thead><tr><th>Range</th><th>Modifier</th></tr></thead><tbody><tr><td>Short</td><td>None</td></tr><tr><td>Medium</td><td>-1</td></tr><tr><td>Long</td><td>-3</td></tr><tr><td>Extreme</td><td>-6</td></tr></tbody></table>",
             "Two or more conditions (wind, range, etc.) at the -6 level incur a maximum penalty of -10.",
            "Refer to SR5, pg. 185. for a full table of ranged weapons and their specific effective ranges.",
            "Certain weapons and weapon modifications may change the category that is used. Changes like these will be listed in the description of the accessory or weapon in the Street Gear chapter (p. 416).",
            "Range modifiers are mitigated by the Image Magnification modification and tracer rounds (shift up on the modifier table)."
        ]
    },
    {
        title: "Recoil",
        icon: "gunshot",
        subtitle: "Recoil-based penalties",
        description: "Recoil is the effect firing a gun has on the weapon and the wielder. Muzzle rise, wrist strain, body shifting, and other factors caused by repeated firing of a weapon are all factors in recoil",
        reference: "SR5, pgs. 175-176.",
        bullets: [
            "To figure out your recoil penalty, start with the amount of recoil compensation you have. You get 1 free point anytime you start firing, then you add your Strength/3 (rounded up) and the recoil compensation of any readied guns. Then subtract any bullets you’re about to fire. If the number is a negative number, that’s your recoil penalty; subtract the penalty from your dice pool before you roll for the attack.",
            "Recoil becomes more of a strain the more bullets you shoot. If you are firing two guns at the same time, shots from the one affect the other, so bullets from each gun add to your total recoil value.",
            "When making multiple firearm attacks in a single Action Phase, calculate the total recoil penalty based on the bullets to be fired that round and remove it from your dice pool before splitting the pool for the multiple attacks.",
            "Recoil accumulates with every bullet fired until the attacker stops firing to bring the gun (or guns) back under control.",
            "Recoil penalties are cumulative over every Action Phase and Combat Turn unless the character takes, or is forced into, an action other than shooting for an entire Action Phase.",
            "Recoil is cumulative to the character, not the weapon they're firing. Recoil accumulates from every shot the character takes, not just from the firing of the same weapon.",
            "Single Shot (SS) weapons have the disadvantage of not being able to fire multiple rounds in a single Action Phase, but they have the advantage of not suffering from cumulative recoil when fired in single shot mode.",
            "Mounted weapons have Recoil Compensation equal to the Body of the vehicle plus any built in Recoil Compensation of the weapon."
        ]
    },
    {
        title: "Visibility",
        icon: "eye-target",
        subtitle: "Obscurance-based penalties",
        description: "You never know what lurks in the mist. Whether it’s natural rain, fog, smoke from natural sources, or a smoke screen of some type thrown up for cover, they all block line of sight.",
        reference: "SR5, pg. 174.",
        bullets: [
            "<table><thead><tr><th>Visibility</th><th>Modifier</th></tr></thead><tbody><tr><td>Clear</td><td>None</td></tr><tr><td>Light Rain/Fog/Smoke</td><td>-1</td></tr><tr><td>Moderate Rain/Fog/Smoke</td><td>-3</td></tr><tr><td>Heavy Rain/Fog/Smoke</td><td>-6</td></tr></tbody></table>",
             "Two or more conditions (wind, range, etc.) at the -6 level incur a maximum penalty of -10.",
            "Ultrasound vision systems reduce Visibility modifiers by one category (shift up on the modifier table) (within 50m).",
            "Thermographic vision reduces Visibility modifiers by one category (shift up on the modifier table).",
            "Thermographic vision compensates in all cases except for thermal smoke."
        ]
    },
    {
        title: "Wind",
        icon: "flying-flag",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    }
]

data_environment_situational = [
    {
        title: "Blind fire",
        icon: "sight-disabled",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Cover",
        icon: "guarded-tower",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Moving",
        icon: "journey",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Off-Handed Weapon",
        icon: "bowie-knife",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Wounds",
        icon: "arm-bandage",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    }
]
