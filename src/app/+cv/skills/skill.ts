export class Skill {

    public static fromJson(json: any): Skill {
        return new Skill(json.name, SkillLevel[<string> json.proficiency]);
    }

    constructor(public name: string, public level: SkillLevel) {}

}

export enum SkillLevel {

    PROFESSIONAL, GOOD, INTERMEDIATE, BASICS

}
