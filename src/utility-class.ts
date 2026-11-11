// Utility classes

// Partial

interface User {
    name : string,
    age : number
}

const updateProfile = (id : string, date : Partial <User>) => {}

updateProfile("1", {name : "Mezba"});


interface Config {
    api? : string,
    port? : number
}

// Required

const initialize = (config : Required <Config>) => {}

initialize({api : "/api", port : 2})


// Pick 

interface Player {
    name : string,
    goals : number,
    id : string
    club : string[]
}

type pick = Pick<Player, "name" | "goals">

const player : pick = {
    name : "Neymar Jr",
    goals : 80,
}


// Omit

interface Developer {
    name : string,
    age : number,
    salary : number,
    nid : number
}

type omit = Omit<Developer, "salary" | "nid">

const developer : omit = {
    name : "Mezba",
    age : 24,
}

// Record


type Positions = "Developer" | "Manager" | "CEO"

const positions : Record<Positions, string> = {
    Developer : "yes",
    Manager : "yes",
    CEO : "yes",
}