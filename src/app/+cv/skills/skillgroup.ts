import { Skill } from './skill';

export class SkillGroup {

    public static fromJson(json: any): SkillGroup {
        return new SkillGroup(json.group, json.skills.map(Skill.fromJson));
    }

    constructor(public group: string, public skills: Skill[]) {
    }
}
