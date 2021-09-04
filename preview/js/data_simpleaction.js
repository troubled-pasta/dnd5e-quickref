data_simpleaction = [
    {
        title: "Activate focus",
        icon: "crystal-bars",
        subtitle: "Activate a magical focus",
        description: "A character may activate a focus they are carrying with a Simple Action.",
        reference: "SR5 pg. 164.",
        bullets: [
        ]
    },
    {
        title: "Call/Dismiss/Command spirit",
        icon: "ifrit",
        subtitle: "Control a summoned spirit",
        description: "Call, command or dismiss a spirit you have summoned.",
        reference: "SR5 pg. 165.",
        bullets: [
            "Issuing a command to a single spirit or group of spirits under a summoner’s control is a Simple Action.",
            "The call action action is used to call a spirit that has already been summoned and placed on standby.",
            "Dismissing a spirit does not immediately send the spirit back to its home plane but instead frees it to do as it chooses."
        ]
    },
    {
        title: "Call/Dismiss/Command sprite",
        icon: "nano-bot",
        subtitle: "Control a compiled sprite",
        description: "Call, command or dismiss a sprite you have compiled.",
        reference: "SR5 pg. 164, 244.",
        bullets: [
            ""
        ]
    },
    {
        title: "Change device mode",
        icon: "toggles",
        subtitle: "For any standard devices",
        description: "A character may use a Simple Action to activate, deactivate, or change the mode on any device with a simple switch, a virtual button, or a command from a commlink  through either a wired or wireless link.",
        reference: "SR5, pg. 164.",
        bullets: [
            "This includes changing a gun’s firing mode, changing a shotgun’s choke, changing vision systems, switching a commlink to hidden mode, turning a device’s wireless functionality off, etc.",
            "It takes longer to interact with some devices; check individual gear descriptions."
        ]
    },
    {
        title: "Change gun mode",
        icon: "multiple-targets",
        subtitle: "Change a firearm's firing mode",
        description: "A character holding a ready firearm can change its firing mode via a Simple Action.",
        reference: "SR5, pg. 165.",
        bullets: [
            "If the weapon is a properly linked smartgun, it costs only a Free Action to change the mode (see Firearms, p. 424, and Smartgun Systems, p. 433).",
            "This includes changing a shotgun’s choke if the gun does not have a smartgun link (see Shotguns, p. 429)."
        ]
    },
    {
        title: "Fire bow",
        icon: "archer",
        subtitle: "Loose a single arrow",
        description: "Firing a single arrow from a loaded bow is a Simple Action.",
        reference: "PHB, pg. 165.",
        bullets: [
            "To nock a single arrow, the character must use the <b>Reload Weapon</b> Simple Action."
        ]
    },
    {
        title: "Fire weapon",
        icon: "gunshot",
        subtitle: "Fire a readied weapon",
        description: "Fire a weapon in Semi-Auto (SA), Single-Shot (SS), Burst Fire (BF) or Full-Auto (FA).",
        reference: "SR5 pgs. 165, 424.",
        bullets: [
            "A character may fire a readied firearm in Semi-Automatic, Single-Shot, Burst-Fire, or Fully-Auto mode via a Simple Action (see Firearms, p. 424) but may not take any other attack actions in the same Action Phase",
            "If a character has one weapon in each hand, they may fire once with each weapon by adding a Multiple Attacks Free Action (see Multiple Attacks, p. 96); the offhand modifier applies (see Attacking Using Off-Hand Weapon, p. 178)",
            "When taken as Simple Actions, Burst Fire fires 3 bullets, while Full-Auto fires 6 bullets."
        ]
    },
    {
        title: "Insert clip",
        icon: "machine-gun-magazine",
        subtitle: "Insert a fresh clip into a ready firearm",
        description: "A character may insert a fresh clip into a ready firearm if the previous one has been ejected.",
        reference: "SR5 pgs. 165, 166, 178.",
        bullets: [
            "A character may insert a fresh clip into a ready firearm by taking a Simple Action, but only if he has first removed the previous clip (see Remove Clip, p. 166, and Reloading Weapons, p. 163)."
        ]
    },
    {
        title: "Matrix: Change icon",
        icon: "molecule",
        subtitle: "Change a target's icon",
        description: "You change the target’s icon to one that you have a copy of or have designed yourself.",
        reference: "SR5, pg. 164.",
        bullets: [
            "<i>Marks reqired: N/A (Must be Owner)</i>.",
            "Changing an icon doesn’t change the results of a Matrix Perception action, but might fool personas who don’t take the time to inspect your new look.",
            "You can target your own icon, if you so choose."
        ]
    },
    {
        title: "Matrix: Check Overwatch",
        icon: "paranoia",
        subtitle: "Check your Overwatch Score",
        description: "Find out how close the grid is to converging on you.",
        reference: "SR5, pg. 238.",
        bullets: [
            "(Illegal) <i>Marks reqired: 0</i><br>Test: Electronic Warfare + LOG [Sleaze] v. 6 dice.",
            "Checking the Overwatch Score (OS) is a Sleaze action, so the defense against it will add to your OS.",
            "If you succeed, the gamemaster tells you what your OS was when you started the action, then increases it by the hits from the defending dice pool."
        ]
    },
    {
        title: "Matrix: Invite mark",
        icon: "crosshair-arrow",
        subtitle: "Allow marks to be placed on you",
        description: "If you’re the owner of a device, file, persona, host, or IC program, you can offer other icons the opportunity to put a mark on your device, file, etc.",
        reference: "SR5, pg. 240.",
        bullets: [
            "<i>Marks reqired: N/A (Must be Owner)</i>.",
            "When you make the offer, you choose the number of marks allowed, their duration, and how long the offer stands. The invitee can then mark your icon with a Free Action.",
            "You may revoke your offer at any time before the mark is placed, but once another icon has a mark, you need to either use the Erase Mark action or reboot your device to remove it before the duration you chose expires."
        ]
    },
    {
        title: "Matrix: Jack out",
        icon: "jack-plug",
        subtitle: "Jack out of the matrix",
        description: "This jacks you out of the Matrix and reboots the device you are using",
        reference: "SR5, pg. 240.",
        bullets: [
            "<i>Marks reqired: N/A (Must be Owner)</i><br>Test: Hardware + WIL [Firewall] v. LOG + Attack.",
            "You suffer dumpshock if you were in VR.",
            "The defense pool only applies if you’ve been link-locked (p. 229) by someone; the test is against the icon that locked your link. If more than one persona has you link-locked, you need to beat each of them individually: use a single roll and compare your hits to rolls from each opponent who had established a link-lock.",
            "You can only jack out yourself. You can’t dump other people except by beating them into submission through Matrix damage."
        ]
    },
    {
        title: "Matrix: Send Message",
        icon: "talk",
        subtitle: "Send information to a commcode",
        description: "You send a text or audio message the length of a short sentence, an image, or a file via the Matrix to a user whose commcode you have.",
        reference: "SR5, pg. 242.",
        bullets: [
            "<i>Marks reqired: N/A (With commcode) or 1</i>",
            "If you’re using the Matrix through a DNI, even if you’re in AR, you can send longer and more complicated messages, about a paragraph worth of text.",
            "You can also use this action to open a live feed to one or more recipients, using any digital recording devices you have."
        ]
    },
    {
        title: "Matrix: Switch interface mode",
        icon: "vr-headset",
        subtitle: "Switch between AR and VR",
        description: "You switch your perception from AR to VR or vice versa.",
        reference: "SR5, pg. 243.",
        bullets: [
            "Switching to VR causes your body to go limp, so don’t do it somewhere dangerous",
            "If you switch from VR to AR, you lose the bonus Initiative Dice from VR (Changing Initiative, p. 160).",
            "If you’re link-locked (p. 229), you cannot switch interface modes.",
            "You can only do this to yourself; you can’t switch other people’s interface mode."
        ]
    },
    {
        title: "Observe In Detail",
        icon: "magnifying-glass",
        subtitle: "Make a Perception test",
        description: "Devote your attention to observing something.",
        reference: "SR5, pg. 165.",
        bullets: [
            "A character may make a detailed observation by taking a Simple Action. This allows a Perception Test (see Using Perception, p. 135).",
            "Characters should always be able to observe what is immediately obvious without having to spend a Simple Action.",
            "A character might automatically be aware that someone is running toward them with something in hand; however, the gamemaster may decide that the character cannot tell if it is a friend or foe or what is in their hand without taking an Observe in Detail action." 
        ]
    },
    {
        title: "Pick up/Put down object",
        icon: "hand-truck",
        subtitle: "Interact with objects with care",
        description: "Carefully pick up or place an object down.",
        reference: "SR5, pg. 165.",
        bullets: [
            "This action means care is taken to put the object down or pick it up.",
            "Just dropping an object is a Free Action, but items that get dropped are more likely to be damaged than items that are set down."
        ]
    },
    {
        title: "Quick draw",
        icon: "bandit",
        subtitle: "Draw and fire a weapon immediately",
        description: "A character may attempt to quick-draw a pistol, pistol-sized weapon, or small throwing weapon and immediately fire it by using a <b>Quick Draw</b> Simple Action.",
        reference: "SR5 pgs. 165, 432.",
        bullets: [
            "For the character to successfully draw the weapon, the player must make a (Weapon Skill) + REA [Physical] (3) Test.",
            "If the weapon is held in a quick-draw holster (see p. 432), reduce the threshold to (2).",
            "If the test is successful, the character draws the weapon and fires as a single Simple Action. If the test fails, the character clears the gun but cannot fire with the same action.",
            "If the character glitches, the gun is stuck in the holster or dropped, and no more actions are allowed. On a critical glitch, a drawn blade may be fumbled out of the character’s reach or a pistol accidentally fired while still in the holster; The gamemaster decides the exact nature of the screw-up.",
            "Only properly holstered weapons can be quickdrawn. They do not have to be in a quick-draw holster, but they do need to be in a holster or sheath or on a proper sling to be quick-drawn.",
            "Two weapons may be quick-drawn and fired simultaneously, but the (Weapon Skill) + REA dice pool is split, and off-hand penalties apply."
        ]
    },
    {
        title: "Ready weapon",
        icon: "catch",
        subtitle: "Ready a weapon for combat",
        description: " Readying entails drawing a firearm from a holster, drawing a throwing or melee weapon from a sheath, picking up any kind of weapon, or generally preparing any kind of weapon for use. A weapon must be ready before it can be used.",
        reference: "See class page for more information.",
        bullets: [
            "The weapon may be a firearm, melee weapon, throwing weapon, ranged weapon, or mounted or vehicular weapon.",
            "Weapons not held in a traditional holster may require a Complex Action to ready at the gamemaster’s discretion",
            "A character can ready a number of small throwing weapons, such as throwing knives or shuriken, equal to one-half his AGI (round up) per Ready Weapon action."
        ]
    },
    {
        title: "Reckless Spellcasting",
        icon: "embarrassed-energy",
        subtitle: "Cast faster, hurt harder",
        description: "A spellcaster may use a Simple Action to cast a spell more quickly, but at the cost of higher Drain",
        reference: "SR5 pgs. 165, 281.",
        bullets: [

        ]
    },
    {
        title: "Remove clip (Manually)",
        icon: "machine-gun-magazine",
        subtitle: "Remove a clip from a ready firearm",
        description: "Remove an expended clip from a ready firearm.",
        reference: "SR5 pgs. 163, 166.",
        bullets: [
            "A character may remove a clip from a ready firearm by taking a Simple Action (see Insert Clip, p. 165, and also Reload Weapons, p. 163).",
            "It takes another Simple Action to grab a fresh clip and slam it into the weapon"
        ]
    },
    {
        title: "Shift Perception",
        icon: "gaze",
        subtitle: "Shift to and from Astral Space",
        description: "Shift your Perception to and from the Astral Plane",
        reference: "SR5, pg. 166.",
        bullets: [
        ]
    },
    {
        title: "Take Aim",
        icon: "targeting",
        subtitle: "Add a +1 modifier to the Attack test",
        description: "A character may take aim with a ready firearm, bow, or throwing weapon as a Simple Action.",
        reference: "SR5, pg. 166.",
        bullets: [
            "Take Aim actions are cumulative, but the benefits are lost if the character takes any other kind of action—including a Free Action—at any time before attacking.",
            "Take Aim actions may be extended over multiple Action Phases and Combat Turns. The maximum bonus a character may gain from sequential Take Aim actions, either to her limit or her dice pool, is equal to one-half the character’s WIL, rounded up.",
            "Each Take Aim action applies a +1 dice pool modifier or +1 Accuracy increase to the Attack Test.",
            "If the character is using image magnification or a targeting scope, Take Aim must be used to line up the shot in order to receive the bonus from the item. In this case the first action of Take Aim does not provide any additional bonus beyond enabling the function of the modification."
        ]
    },
    {
        title: "Take Cover",
        icon: "guarded-tower",
        subtitle: "Increase your defense",
        description: "A character may use this Simple Action to gain a cover bonus to their defense test.",
        reference: "SR5 pgs. 166, 192",
        bullets: [
            "A character who is surprised may not take cover (see Surprise, p. 192)."
        ]
    },
    {
        title: "Throw weapon",
        icon: "stun-grenade",
        subtitle: "Throw a readied weapon",
        description: "A character may throw a ready throwing weapon (see Ready Weapon, p. 165) by taking a Simple Action.",
        reference: "SR5 pg. 166, 196.",
        bullets: [
            "The character may not take any other attack actions in the same Action Phase.",
            "Multiple readied throwing weapons can be thrown at a target within Short or Medium range by adding a Multiple Attacks Free Action (see Multiple Attacks, p. 196)"
        ]
    },
    {
        title: "Use Sensors (Vehicle)",
        icon: "radar-sweep",
        subtitle: "Detect or lock on to targets",
        description: "A driver or passenger may use sensors to detect or lock onto targets.",
        reference: "SR5, pg. 202.",
        bullets: [
           
        ]
    },
    {
        title: "Use Simple Object",
        icon: "lever",
        subtitle: "Use a simple object/device",
        description: "A character can use any simple device with a Simple Action.",
        reference: "SR5, pg. 166.",
        bullets: [
            "Simple devices are those that are activated with a simple movement like a thumb trigger, pressing a single key, or tapping a single icon."
        ]
    },
    {
        title: "Convert to Free Action",
        icon: "cycle",
        subtitle: "Take a Free Action instead",
        description: "You can take a Free Action in the place of a Simple Action",
        reference: "SR5 pg. 164",
        bullets: [
            "A player may choose to convert their Simple Actions into Free Actions, up to a total of three Free Actions."
        ]
    }
]
