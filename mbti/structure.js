//Golden Pairs / relationsships TO DO Season 4 and 14
//Season 5 coginive syncronicities
//Add info about which types are the most religious
//Introberts actually J and P reversed because a P will have a high judgin funcitons and vicer versa
//The functions are all about talking you can see them in the sentences that people are talking (Also switching sides of mind is possible if they are mature)
//Depression: https://personalitygrowth.com/how-each-myers-briggs-type-deals-with-depression/

var types = {
    ESTJ: {
        cogFuncs: ["TE", "SI", "NE", "FI"],
        intStyle: "SIC", temp: "GUARD", quadra: "PHILO", name: ["ESTJ - Overseer"],
        prcnt: 8.7,

    },
    ESTP: {
        cogFuncs: ["SE", "TI", "FE", "NI"], intStyle: "SIC", temp: "ARTIS", quadra: "TEMPL", name: ["ESTP - Persuader"],
        prcnt: 4.3
    },
    ENTJ: {
        cogFuncs: ["TE", "NI", "SE", "FI"], intStyle: "SIC", temp: "INTEL", quadra: "WAYFA", name: ["ENTJ - Chief"],
        prcnt: 1.8
    },
    ENFJ: {
        cogFuncs: ["FE", "NI", "SE", "TI"], intStyle: "SIC", temp: "IDEAL", quadra: "TEMPL", name: ["ENFJ - Mentor"],
        goldenPair: "INFP",
        prcnt: 2.5
    },
    ESFJ: {
        cogFuncs: ["FE", "SI", "NE", "TI"], intStyle: "SGG", temp: "GUARD", quadra: "CRUSA", name: ["ESFJ - Supporter"],
        prcnt: 12
    },
    ESFP: {
        cogFuncs: ["SE", "FI", "TE", "NI"], intStyle: "SGG", temp: "ARTIS", quadra: "WAYFA", name: ["ESFP - Entertainer"],
        prcnt: 8.5
    },
    ENTP: {
        cogFuncs: ["NE", "TI", "FE", "SI"], intStyle: "SGG", temp: "INTEL", quadra: "CRUSA", name: ["ENTP - Visionary"],
        prcnt: 3.2
    },
    ENFP: {
        cogFuncs: ["NE", "FI", "TE", "SI"], intStyle: "SGG", temp: "IDEAL", quadra: "PHILO", name: ["ENFP - Advocate"],
        prcnt: 8.1
    },
    ISTJ: {
        cogFuncs: ["SI", "TE", "FI", "NE"], intStyle: "SIT", temp: "GUARD", quadra: "PHILO", name: ["ISTJ - Examiner"],
        prcnt: 11.6
    },
    ISTP: {
        cogFuncs: ["TI", "SE", "NI", "FE"], intStyle: "SIT", temp: "ARTIS", quadra: "TEMPL", name: ["ISTP - Craftsman"],
        prcnt: 5.4
    },
    INTJ: {
        cogFuncs: ["NI", "TE", "FI", "SE"], intStyle: "SIT", temp: "INTEL", quadra: "WAYFA", name: ["INTJ - Strategist"],
        prcnt: 2.1
    },
    INFJ: {
        cogFuncs: ["NI", "FE", "TI", "SE"], intStyle: "SIT", temp: "IDEAL", quadra: "TEMPL", name: ["INFJ - Sage"],
        prcnt: 1.5
    },
    ISFJ: {
        cogFuncs: ["SI", "FE", "TI", "NE"], intStyle: "BTS", temp: "GUARD", quadra: "CRUSA", name: ["ISFJ - Defender"],
        prcnt: 13.8
    },
    ISFP: {
        cogFuncs: ["FI", "SE", "NI", "TE"], intStyle: "BTS", temp: "ARTIS", quadra: "WAYFA", name: ["ISFP - Artist"],
        prcnt: 8.8
    },
    INTP: {
        cogFuncs: ["TI", "NE", "SI", "FE"], intStyle: "BTS", temp: "INTEL", quadra: "CRUSA", name: ["INTP - Engineer"],
        prcnt: 3.3
    },
    INFP: {
        cogFuncs: ["FI", "NE", "SI", "TE"], intStyle: "BTS", temp: "IDEAL", quadra: "PHILO", name: ["INFP - Dreamer"],
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
    SE: {
        name: "Extroverted   Sensing",
        type: "Percieving (Gathering Information)",
        invFunc: "SI",
        color: "#75edff"
    },
    SI: {
        name: "Introverted   Sensing",
        type: "Percieving (Gathering Information)",
        invFunc: "SE",
        color: "#8f4200"
    },
    NE: {
        name: "Extroverted Intuition",
        type: "Percieving (Gathering Information)",
        invFunc: "NI",
        color: "#0066ff"
    },
    NI: {
        name: "Introverted Intuition",
        type: "Percieving (Gathering Information)",
        invFunc: "NE",
        color: "#ff3300"
    },
    TE: {
        name: "Extroverted  Thinking",
        type: "Judging (Deciding)",
        invFunc: "TI"
    },
    TI: {
        name: "Introverted Thinking",
        type: "Judging (Deciding)",
        invFunc: "TE"
    },
    FE: {
        name: "Extroverted  Feeling",
        type: "Judging (Deciding)",
        invFunc: "FI",
    },
    FI: {
        name: "Introverted   Feeling",
        type: "Judging (Deciding)",
        invFunc: "FE"
    },
}
//Thinking is a true false decision
//Feeling is a good bad decision