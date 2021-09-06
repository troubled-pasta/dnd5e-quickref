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
        subtitle: "Wind-based penalties",
        description: "A light breeze might not throw off a shot, but the stronger the wind, the more a shooter is going to have to compensate.",
        reference: "SR5, pg. 175.",
        bullets: [
            "<table><thead><tr><th>Wind</th><th>Modifier</th></tr></thead><tbody><tr><td>None or Light Breeze</td><td>None</td></tr><tr><td>Light Winds</td><td>-1</td></tr><tr><td>Moderate Winds</td><td>-3</td></tr><tr><td>Strong Winds</td><td>-6</td></tr></tbody></table>",
            "Compensating for wind is tough because you can’t see it without some kind of indicator, such as blowing leaves, a flag flapping in the wind, or a coat pressed hard against the target",
            "Wind categories are generalized and left up to the gamemaster’s discretion instead of giving hard numbers for wind speed.",
            "Wind speed can be a factor at the shooter’s position, the target’s position, and any position in between.",
            " Wind modifiers are mitigated by smartlink accessories that calculate adjustments before the shot. Reduce Wind modifiers by one category (shift up on the modifier table).",
            "Wind modifiers are alleviated by tracer rounds that let the shooter see how to adjust their aim for the next shot. Reduce Moderate or Heavy Wind modifiers by one category (shift up on the modifier table)."
       ]
    }
]

data_environment_situational = [
    {
        title: "Blind fire",
        icon: "sight-disabled",
        subtitle: "Target is in darkness/cover",
        description: "Whether due to darkness or cover, if the shooter doesn’t know where the target is, they apply the Blind Fire modifier.",
        reference: "SR5, pgs. 176, 178.",
        bullets: [
            "This -6 modifier is the same as the Total Darkness modifier and as such is not cumulative with it, but if strong winds or extreme range are also involved an additional -4 penalty can be applied.",
            "Some additional rules apply if the attacker is shooting through cover (see Shooting Through Target Barriers, SR5, pg. 197)."
        ]
    },
    {
        title: "Cover",
        icon: "guarded-tower",
        subtitle: "Firing from cover",
        description: "Blindly firing around a corner is no longer necessary with 2075 technology and imaging devices.",
        reference: "SR5, pgs. 177, 197.",
        bullets: [
            "A shooter can fire their camera or smartgun equipped weapon by simply sticking the gun around the corner and looking through the imaging system to see where it’s aimed. This isn’t easy to do, for numerous reasons, and incurs a -3 penalty, but at least it keeps most of you safely out of sight while putting lead downrange.",
            "A defender using a barrier as cover receives a defense bonus for cover. If the defender is completely hidden behind the barrier, the attacker suffers a –6 Blind Fire dice pool modifier for not being able to see his intended target, but the hidden defender is considered unaware of the attack.",
            " If the barrier between the attacker and defender is transparent, like bullet resistant glass, there is no cover or obstruction to sight, but the attack must penetrate the barrier to reach the defender (see Penetration Weapons, p. 198).",
            "If the barrier takes the hit first, the gamemaster rolls Structure + Armor to resist the damage, and the structure takes any unresisted damage. If the Structure rating is exceeded by the damage it suffers, any remaining damage is transferred to the target behind the barrier.",
            "If the weapon’s modified Damage Value does not exceed the barrier’s Armor rating (modified by the weapon’s AP), then the weapon is simply not strong enough to pierce the barrier, and the attack automatically fails."
            
        ]
    },
    {
        title: "Melee Combat",
        icon: "high-kick",
        subtitle: "Close-quarters combat penalty",
        description: "Trying to get a clean shot off while someone keeps swinging a bat at your head is no walk in the ballpark.",
        reference: "SR5, pgs. 177.",
        bullets: [
            "Because a certain amount of your attention is assumed to be focused on the melee it’s hard to make a good shot, even when the guy swinging the baseball bat is right in front of you.",
            "This -3 modifier applies to any characters trying to make a ranged attack while in melee combat.",
            "Remember if a character tries to break off the melee they are risking an Intercept action and a cheap swing by their opponent as well as risking not getting out of melee if they get tagged."
        ]
    },
    {
        title: "Moving",
        icon: "journey",
        subtitle: "Moving while attacking",
        description: "Moving quick does not mix well with trying to shoot a gun or throw a weapon.",
        reference: "SR5, pgs. 178.",
        bullets: [
            "Anytime the attacker makes a move that puts him in his running movement rate he suffer the -2 Running penalty on all ranged attacks.",
            "Trying to line up a shot on a bumpy road while the car is avoiding obstacles and other vehicles is not easy. This -2 modifier applies whenever a character fires an <i>unmounted</i> weapon from a vehicle.",
        ]
    },
    {
        title: "Off-Handed Weapon",
        icon: "bowie-knife",
        subtitle: "Attacking with non-dominant hand",
        description: "Trying to throw, shoot, or even pick your nose with your off-hand just feels plain awkward.",
        reference: "SR5, pg. 178",
        bullets: [
            "Any time a character tries to make an attack with their off hand, either due to injury, angle, or trying to re-enact the latest scene from the Ares blockbuster series, they lose some precision in the form of a -2 penalty.",
            "This modifier also applies to the attacker’s total dice pool if they are trying to fire two weapons at once."
        ]
    },
    {
        title: "Wounds",
        icon: "arm-bandage",
        subtitle: "Injury-based penalties",
        description: "Wounds are distracting, and Wound modifiers apply to any and all ranged attacks. If you don’t want this penalty you can get a Pain Editor. Or just not get shot.",
        reference: "SR5, pgs. 178, 460.",
        bullets: [
            "Wound modifiers are accumulated with every third box of damage and are cumulative between damage tracks and with other negative modifiers such as spells or adverse conditions.",
            "Wound modifiers are applied to all tests not about reducing the number of boxes you’re about to take on your Condition Monitor (such as damage resistance, resisting direct combat spells, toxin resistance, and so on).",
            "The Wound Modifier penalty is also applied to the character’s Initiative attribute and therefore their Initiative Score during combat.",
            "If active, pain editors allow you to ignore all injury modifiers, and you even stay conscious when your Stun Condition Monitor is completely full. You feel no pain—you’re blissfully, dangerously, recklessly unaware of the extent of damage you’ve taken without either performing a self-examination (Observe In Detail action) or being informed by a biomonitor (p. 450)."
        ]
    }
]
