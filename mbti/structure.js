//Golden Pairs / relationsships TO DO Season 4 and 14
//Season 5 coginive syncronicities
//Add info about which types are the most religious
//Introberts actually J and P reversed because a P will have a high judgin funcitons and vicer versa
//The functions are all about talking you can see them in the sentences that people are talking (Also switching sides of mind is possible if they are mature)
//Depression: https://personalitygrowth.com/how-each-myers-briggs-type-deals-with-depression/

var types = {
    ESTJ: {
        cogFuncs: ["Te", "Si", "Ne", "Fi"],
        intStyle: "SIC", temp: "GUARD", quadra: "PHILO", name: ["ESTJ - Overseer"],
        prcnt: 8.7,

    },
    ESTP: {
        cogFuncs: ["Se", "Ti", "Fe", "Ni"], intStyle: "SIC", temp: "ARTIS", quadra: "TEMPL", name: ["ESTP - Persuader"],
        prcnt: 4.3
    },
    ENTJ: {
        cogFuncs: ["Te", "Ni", "Se", "Fi"], intStyle: "SIC", temp: "INTEL", quadra: "WAYFA", name: ["ENTJ - Chief"],
        prcnt: 1.8
    },
    ENFJ: {
        cogFuncs: ["Fe", "Ni", "Se", "Ti"], intStyle: "SIC", temp: "IDEAL", quadra: "TEMPL", name: ["ENFJ - Mentor"],
        goldenPair: "INFP",
        prcnt: 2.5
    },
    ESFJ: {
        cogFuncs: ["Fe", "Si", "Ne", "Ti"], intStyle: "SGG", temp: "GUARD", quadra: "CRUSA", name: ["ESFJ - Supporter"],
        prcnt: 12
    },
    ESFP: {
        cogFuncs: ["Se", "Fi", "Te", "Ni"], intStyle: "SGG", temp: "ARTIS", quadra: "WAYFA", name: ["ESFP - Entertainer"],
        prcnt: 8.5
    },
    ENTP: {
        cogFuncs: ["Ne", "Ti", "Fe", "Si"], intStyle: "SGG", temp: "INTEL", quadra: "CRUSA", name: ["ENTP - Visionary"],
        prcnt: 3.2
    },
    ENFP: {
        cogFuncs: ["Ne", "Fi", "Te", "Si"], intStyle: "SGG", temp: "IDEAL", quadra: "PHILO", name: ["ENFP - Advocate"],
        prcnt: 8.1
    },
    ISTJ: {
        cogFuncs: ["Si", "Te", "Fi", "Ne"], intStyle: "SIT", temp: "GUARD", quadra: "PHILO", name: ["ISTJ - Examiner"],
        prcnt: 11.6
    },
    ISTP: {
        cogFuncs: ["Ti", "Se", "Ni", "Fe"], intStyle: "SIT", temp: "ARTIS", quadra: "TEMPL", name: ["ISTP - Craftsman"],
        prcnt: 5.4
    },
    INTJ: {
        cogFuncs: ["Ni", "Te", "Fi", "Se"], intStyle: "SIT", temp: "INTEL", quadra: "WAYFA", name: ["INTJ - Strategist"],
        prcnt: 2.1
    },
    INFJ: {
        cogFuncs: ["Ni", "Fe", "Ti", "Se"], intStyle: "SIT", temp: "IDEAL", quadra: "TEMPL", name: ["INFJ - Sage"],
        prcnt: 1.5
    },
    ISFJ: {
        cogFuncs: ["Si", "Fe", "Ti", "Ne"], intStyle: "BTS", temp: "GUARD", quadra: "CRUSA", name: ["ISFJ - Defender"],
        prcnt: 13.8
    },
    ISFP: {
        cogFuncs: ["Fi", "Se", "Ni", "Te"], intStyle: "BTS", temp: "ARTIS", quadra: "WAYFA", name: ["ISFP - Artist"],
        prcnt: 8.8
    },
    INTP: {
        cogFuncs: ["Ti", "Ne", "Si", "Fe"], intStyle: "BTS", temp: "INTEL", quadra: "CRUSA", name: ["INTP - Engineer"],
        prcnt: 3.3
    },
    INFP: {
        cogFuncs: ["Fi", "Ne", "Si", "Te"], intStyle: "BTS", temp: "IDEAL", quadra: "PHILO", name: ["INFP - Dreamer"],
        goldenPair: "ENFJ",
        prcnt: 4.4
    },
}

//Daoism
//use cognitive axis analysis to get the quadra
//quadras come from socionics
var quadra = {
    CRUSA: {
        name: "Alpha - Crusaders",
        prcnt: 32.3,
        color: "#ff6060"
    },
    TEMPL: {
        name: "Beta - Templars",
        prcnt: 16.7,
        color: "#7d7dff"
    },
    WAYFA: {
        name: "Gamma - Wayfarers",
        prcnt: 21.2,
        color: "#63cd63"
    },
    PHILO: {
        name: "Delta - Philisophers",
        prcnt: 32.8,
        color: "#c9c900"
    }
}

//Plato, about what a person percieves
var temperaments = {
    GUARD: {
        name: "Guardians / Sentinels (SJ)",
        parts: ["Concrete", "Affiliative"],
        prcnt: 46.7,
        color: "#389396"
    },
    ARTIS: {
        name: "Artisans / Explorers (SP)",
        parts: ["Concrete", "Pragmatic"],
        prcnt: 27.1,
        color: "#f4d260"
    },
    INTEL: {
        name: "Intellectuals / Analysts (NT)",
        parts: ["Abstract", "Pragmatic"],
        prcnt: 10.4,
        color: "#92667c"
    },
    IDEAL: {
        name: "Idealists / Diplomats (NF)",
        parts: ["Abstract", "Affiliative"],
        prcnt: 16.5,
        color: "#728e55"
    }
}

//perception
var temperamentParts = {
    Abstract: {
        inv: "Concrete"
    },
    Concrete: {
        inv: "Abstract"
    },
    Pragmatic: {
        inv: "Affiliative"
    },
    Affiliative: {
        inv: "Pragmatic"
    },
}

//To Do
//How does caring about a task influence this
//Things like Systematic vs Interest

//About how a person interacts with somone or something oder self
var interactionsStyles = {
    SIC: {
        name: "Structure",
        desc: [],
        parts: ["Direct", "Initiating", "Control"],
        prcnt: 20.3
    },
    SGG: {
        name: "Starter",
        desc: [],
        parts: ["Informing", "Initiating", "Movement"],
        prcnt: 31.8
    },
    SIT: {
        name: "See it through",
        desc: [],
        parts: ["Direct", "Responding", "Movement"],
        prcnt: 20.6
    },
    BTS: {
        name: "Background",
        desc: [],
        parts: ["Informing", "Responding", "Control"],
        prcnt: 30.3
    }
}

var introversion = {
    desc: [
        "Gaining mental energy by being alone"
    ]
}
var extraversion = {
    desc: [
        "Gaining mental energy by being with other people"
    ]
}

//Type grid shoud be deductively, so start by assuming every one has everthing and then subtract traits
//Informations and concepts
var cognitiveFunctions = {
    Se: {
        name: "Extroverted   Sensing",
        type: "Percieving (Gathering Information)",
        invFunc: "Si",
        color: "#75edff"
    },
    Si: {
        name: "Introverted   Sensing",
        type: "Percieving (Gathering Information)",
        invFunc: "Se",
        color: "#8f4200"
    },
    Ne: {
        name: "Extroverted Intuition",
        type: "Percieving (Gathering Information)",
        invFunc: "Ni",
        color: "#0066ff"
    },
    Ni: {
        name: "Introverted Intuition",
        type: "Percieving (Gathering Information)",
        invFunc: "Ne",
        color: "#ff3300"
    },
    Te: {
        name: "Extroverted Thinking",
        type: "Judging (Deciding)",
        invFunc: "Ti"
    },
    Ti: {
        name: "Introverted Thinking",
        type: "Judging (Deciding)",
        invFunc: "Te"
    },
    Fe: {
        name: "Extroverted Feeling",
        type: "Judging (Deciding)",
        invFunc: "Fi",
    },
    Fi: {
        name: "Introverted Feeling",
        type: "Judging (Deciding)",
        invFunc: "Fe"
    },
}
//Thinking is a true false decision
//Feeling is a good bad decision