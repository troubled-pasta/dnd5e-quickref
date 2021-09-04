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
            "Ultrasound eliminates the penalty in any light conditions (but only within 50 meters)."
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
            "Ultrasound eliminates the penalty in any light conditions (but only within 50 meters)."
            
        ]
    },
    {
        title: "Range",
        icon: "binoculars",
        subtitle: "",
        description: "Distance to target is always a factor when firing or throwing a weapon.",
        reference: "SR5, pgs. 175, 185.",
        bullets: [
            "<table><thead><tr><th>Dice Pool Modifier</th><th>Short (None)</th><th>Medium (-1)</th><th>Long (-3)</th><th>Extreme (-6)</th></tr></thead><tbody><tr><th>Pistols</th><th colspan="4">Range in Meters</th></tr><tr><td>Taser</td><td>0-5</td><td>6-10</td><td>11-15</td><td>16-20</td></tr><tr><td>Hold-Out Pistol</td><td>0-5</td><td>6-15</td><td>16-30</td><td>31-50</td></tr><tr><td>Light Pistol</td><td>0-5</td><td>6-15</td><td>16-30</td><td>31-50</td></tr><tr><td>Heavy Pistol</td><td>0-5<br></td><td>6-20</td><td>21-40</td><td>41-60</td></tr><tr><th>Automatics</th><th colspan="4">Range In Meters</th></tr><tr><td>Machine Pistol</td><td>0-5</td><td>6-15</td><td>16-30</td><td>31-50</td></tr><tr><td>SMG</td><td>0-10</td><td>11-40</td><td>41-80</td><td>81-150</td></tr><tr><td>Assault Rifle</td><td>0-25</td><td>26-150</td><td>151-350</td><td>351-550</td></tr><tr><th>Longarms</th><th colspan="4">Range in Meters</th></tr><tr><td>Shotgun (Flechette)</td><td>0-15</td><td>16-30</td><td>31-45</td><td>46-60</td></tr><tr><td>Shotgun (Slug)</td><td>0-10</td><td>11-40</td><td>41-80</td><td>81-150</td></tr><tr><td>Sniper Rifle</td><td>0-50</td><td>51-350</td><td>351-800</td><td>801-1500</td></tr><tr><th>Heavy Weapons</th><th colspan="4">Range in Meters</th></tr><tr><td>Light Machine Gun</td><td>0-25</td><td>26-200</td><td>201-400</td><td>401-800</td></tr><tr><td>Medium/Heavy Machine Gun</td><td>0-40</td><td>41-250</td><td>251-750</td><td>751-1200</td></tr><tr><td>Assault Cannon</td><td>0-50</td><td>51-300</td><td>301-750</td><td>751-1500</td></tr><tr><td>Grenade Launcher</td><td>5-50</td><td>51-100</td><td>101-150</td><td>151-500</td></tr><tr><td>Missile Launcher</td><td>20-70</td><td>71-150</td><td>151-450</td><td>451-1500</td></tr><tr><th>Ballistic Projectiles</th><th colspan="4">Range in Meters</th></tr><tr><td>Bow</td><td>0-STR</td><td>To STR x 10</td><td>To STR x 30</td><td>To STR x 60</td></tr><tr><td>Light Crossbow</td><td>0-6</td><td>7-24</td><td>25-60</td><td>61-120</td></tr><tr><td>Medium Crossbow</td><td>0-9</td><td>10-36</td><td>37-90</td><td>91-150</td></tr><tr><td>Heavy Crossbow</td><td>0-15</td><td>16-45</td><td>46-120</td><td>121-180</td></tr><tr><th>Impact Projectiles</th><th colspan="4">Range in Meters</th></tr><tr><td>Throwing Knife</td><td>0-STR</td><td>To STR x 2</td><td>To STR x 3</td><td>To STR x 5</td></tr><tr><td>Shuriken</td><td>0-STR</td><td>To STR x 2</td><td>To STR x 5</td><td>To STR x 7</td></tr><tr><th>Thrown Grenades</th><th colspan="4">Range in Meters</th></tr><tr><td>Standard</td><td>0-STR x 2</td><td>To STR x 4</td><td>To STR x 6</td><td>To STR x10</td></tr><tr><td>Aerodynamic</td><td>0-STR x 2</td><td>To STR x 4</td><td>To STR x 8</td><td>To STR x 15</td></tr></tbody></table>",
        ]
    },
    {
        title: "Recoil",
        icon: "gunshot",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
        ]
    },
    {
        title: "Visibility",
        icon: "eye-target",
        subtitle: "",
        description: "",
        reference: "",
        bullets: [
            ""
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
