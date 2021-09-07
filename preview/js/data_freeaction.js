data_freeaction = [
    {
        title: "Adrenaline boost (Adept)",
        icon: "fire-silhouette",
        subtitle: "Do more in a Combat Turn",
        description: "This power lets you accomplish more in one Combat Turn.",
        reference: "SR5, pgs. 308-309.",
        bullets: [
            "Adrenaline Boost is activated as a Free Action.",
            "You get +2 to your Initiative Score for the current Combat Turn for every level of this power you have.",
            "At the beginning of the next turn after the Adrenaline Boost, you take Drain equal to the number of levels you have in this power."
        ]
    },
    {
        title: "Call a shot",
        icon: "bullseye",
        subtitle: "Aim for a vulnerable target",
        description: "A character may call a shot (aim for a vulnerable portion of a target) with this Free Action. This action must be combined with a Fire Weapon, Throw Weapon, or Melee Attack Action",
        reference: "SR5, pg. 195.",
        bullets: [
            "<i>All called shots incur a –4 dice pool penalty and cost a Free Action in addition to their basic attack action.</i>",
            "<b>Blast out of Hands:</b> You knock an item out of your target’s hand, but the target takes no damage. The item can be sent flying, coming to a rest (Net Hits - 1) meters from the defender.",
            "<b>Dirty Trick:</b> If the attack succeeds with even a single net hit, your opponent takes a –4 dice pool modifier on his next action.",
            "<b>Harder Knock:</b> This Called Shot changes the damage code on Stun-based weapons to Physical with no other change to the DV.",
            "<b>Knock Down:</b> <i>(Melee Only)</i> This attack deals no damage but if successful and the attacker’s STR + Net Hits exceeds the defender's Physical limit, the attacker knocks the defender to the ground. The attacker may choose to follow (Drop Prone) for free. On a critical glitch, the attacker falls down while the defender stays standing.",
            "<b>Shake Up:</b> This shot makes the target lose 5 from their Initiative Score along with their normal damage. If their Initiative Score is dropped below 0, he loses his last Action Phase for this Initiative Pass.",
            "<b>Splitting the Damage:</b> If the defender is wearing sufficient armor, you can choose to call a shot to split damage between the damage tracks.",
            "<b>Trick Shot:</b> The attacker gains a bonus on Intimidation rolls after this shot.",
            "<b>Vitals:</b> Targeting a vital spot with a called shot gives you an extra +2 DV on the attack."
           ]
    },
    {
        title: "Change linked device mode",
        icon: "toggles",
        subtitle: "For any linked devices",
        description: "A character may use a Free Action to activate, deactivate, or switch the mode on any device that they are linked to by a direct neural interface through either a wired or wireless link.",
        reference: "SR5, pg. 163.",
        bullets: [
            "This includes activating cyberware, changing a smartgun’s firing mode, changing a smartlinked shotgun’s choke, deactivating thermographic vision, switching a commlink to hidden mode, turning a device’s wireless functionality off, etc.",
            "It takes longer to interact with some devices; check individual gear descriptions."
        ]
    },
    {
        title: "Deactivate focus",
        icon: "crystal-bars",
        subtitle: "Deactivate a magical focus",
        description: "You can deactivate a focus at any time.",
        reference: "SR5, pg. 318.",
        bullets: [
            "Likewise, if you lose consciousness your foci deactivate. If you lose possession of a focus, it automatically deactivates and you lose all its benefits until you recover it and activate it again.",
            "If you deactivate a focus while you’re projecting, its astral form disappears and you’ll need to go back to your body to reactivate it."
        ]
    },
    {
        title: "Drop object",
        icon: "drop-weapon",
        subtitle: "Drop a held object",
        description: "A character may drop a held object as a Free Action.",
        reference: "SR5, pg. 163.",
        bullets: [
            "If they are holding an object in each hand, they may drop both objects as a single Free Action.",
            "Dropped items may suffer damage from being dropped if they are fragile or dropped in a hostile environment (GM's discretion)."
        ]
    },
    {
        title: "Eject smartgun clip",
        icon: "clip-eject",
        subtitle: "Eject a linked firearm's clip",
        description: "A character linked to a ready smartgun may use a mental command to eject the weapon’s clip.",
        reference: "SR5, pgs. 164, 433.",
        bullets: [
            "It still takes a separate Simple Action to insert a new, fresh clip (see Smartgun System, SR5 p. 433)."
        ]
    },
    {
        title: "Evasive Driving (Vehicle)",
        icon: "swerve",
        subtitle: "-10 Initiative Score",
        description: "Vehicles that are under attack can use a Free Action and undertake evasive driving—the vehicle equivalent of Full Defense (p. 191).",
        reference: "SR5, pg. 205.",
        bullets: [
            "This means the driver of the vehicle reduces their Initiative Score by 10 and can add a number of dice equal to their INT to the defense dice pool to dodge attacks.",
            "Evasive driving cannot be used against ramming attacks."
        ]
    },
    {
        title: "Gesture",
        icon: "mute",
        subtitle: "Use gestures to communicate",
        description: "A character may communicate with a few quick gestures as a Free Action.",
        reference: "SR5, pg. 164.",
        bullets: [
            "Characters unfamiliar with the gestures may make an INT (2) Test to determine what the gesture means."
        ]
    },
    {
        title: "Killing hands (Adept)",
        icon: "smoking-finger",
        subtitle: "Inflict lethal unarmed damage",
        description: "This power lets you inflict lethal damage with your unarmed attacks.",
        reference: "SR5, pgs. 310.",
        bullets: [
            "Killing Hands is activated as a Free Action.",
            "When inflicting damage on the target of an unarmed attack, you may choose whether to cause Stun or Physical damage.",
            "Killing Hands may be combined with other adept powers that increase unarmed damage.",
            "Your Killing Hands attacks are magical, so they can bypass a creature’s magical defenses against attack, such as the Immunity to Normal Weapons power, and may be used by adepts with Astral Perception during astral combat."
        ]
    },
    {
        title: "Matrix: Load/Unload program",
        icon: "save",
        subtitle: "Run programs on your deck",
        description: "Programs (technically cybeprograms if they’re for the Matrix) are files you can run on your deck. While a program is running, it makes your deck better or gives you more utility.",
        reference: "SR5, pg. 243.",
        bullets: [
            "You can’t run more than one program of the same type on your deck at once (and no, changing the name of one copy of a program to run two copies doesn’t work, chummer).",
            "You get the benefit of a program while it is running on your deck; as soon as you end it or swap it out for another program, it stops providing those benefits",
            "Your running programs appear as icons connected to your persona. As with all icons in the Matrix, the actual look of the program is customizable, but its look is generally tied to its purpose",
            "Programs come in two categories. Common programs are ones that are pretty harmless and available most everywhere for hobbyists and Matrix professionals. Hacking programs are more dangerous and illegal to buy, own, or use without a license. See pg. 245-246 for a list of programs."
            
        ]
    },
    {
        title: "Matrix: Reconfigure deck",
        icon: "tinker",
        subtitle: "Swap deck attributes/programs",
        description: "Either through using the Configuration cyberprograms or simply swapping cyberprograms or Matrix attributes, reconfiguring your persona can mean the difference between life and death on the ever-changing battlefields of the Matrix.",
        reference: "SR5, pgs. 164, 227. DT, pg. 180.",
        bullets: [
            "A cyberdeck has four attribute values assigned to its Matrix attributes (called the Attribute Array), which must be configured when booted.",
            "Using this action you can switch two Matrix attributes, or swap two programs.",
            "Altering the values assigned to each attribute simulates what software the decker is actively running on the cyberdeck. (For information on cyberdecks, see SR5, p. 227.)",
            "Using a Free Action at the end of your first Action Phase to boost your defenses against the incoming counterattack and then using another Free Action at the beginning of your next Action Phase to revert to the proverbial glass cannon is a tactic used by many deckers who are entirely confident that the second counterattack will never come. It was also popular with many deckers who miscalculated when it came to that second counterattack. Rest in peace, chummers."
        ]
    },
    {
        title: "Multiple attacks",
        icon: "two-shadows",
        subtitle: "Attack multiple targets",
        description: "A character may use a Free Action to attack multiple targets in a single action by splitting their dice pool.",
        reference: "SR5, pgs. 164, 196.",
        bullets: [
            "This action must be combined with a Fire Weapon Action, Throw Weapon Action, Melee Attack Action, Reckless Spellcasting, or Cast Spell Action."
        ]
    },
    {
        title: "Speak/Text/Transmit phrase",
        icon: "nothing-to-say",
        subtitle: "Communicate a short phrase",
        description: "One short phrase of verbal or neural communication is a Free Action.",
        reference: "SR5, pg. 164.",
        bullets: [
            "<i>Remember that this communication is limited by the span of one 3-second Combat Turn.</i>",
            "If the character wants to say more, each additional phrase or sentence requires a Free Action.",
            "Characters who are equipped to send text messages through a direct neural interface connection with their commlink may also send short messages as a Free Action."
        ]
    }
]
