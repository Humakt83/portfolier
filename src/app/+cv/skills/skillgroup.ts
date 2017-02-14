import { Skill } from './skill';

export class SkillGroup {

    public static fromJson(json: any): SkillGroup {
        return new SkillGroup(json.name, null);
    }

    constructor(public name: string, public skills: Skill[]) {
    }
}
