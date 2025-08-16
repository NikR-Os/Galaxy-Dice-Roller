import { AttributeSheet } from "./attributes";
import { SkillSheet } from "./skills";

export class Character {
    #name: string;
    #attributes: AttributeSheet;
    #skills: SkillSheet;

    get name() {
        return this.#name;
    }

    get attributes() {
        return this.#attributes;
    }

    get skills() {
        return this.#skills;
    }

    set name(name: string){
        this.#name = name;
    }

    set attributes(value) {
    
    }

}