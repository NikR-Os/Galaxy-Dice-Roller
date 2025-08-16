const attributeNames = { brawn: 'brawn', agility: 'agility', intellect: 'intellect', cunning: 'cunning', willpower: 'willpower', presence: 'presence' };

export interface SkillSheet {
    // General Skills.
    astrogation: number;
    athletics: number;
    charm: number;
    coercion: number;
    computers: number;
    cool: number;
    coordination: number;
    deception: number;
    discipline: number;
    leadership: number;
    mechanics: number;
    medicine: number;
    negotiation: number;
    perception: number;
    piloting_planetary: number;
    piloting_space: number;
    resilience: number;
    skulduggery: number;
    stealth: number;
    streetwise: number;
    survival: number;
    vigilance: number;
    // Combat Skills.
    brawl: number;
    gunnery: number;
    melee: number;
    ranged_light: number;
    ranged_heavy: number;
    // Knowledge Skills.
    core_worlds: number;
    education: number;
    lore: number;
    outer_rim: number;
    underworld: number;
    xeneology: number;
}

export class SkillSheet implements SkillSheet {
    private _skills: Object;

    constructor(options: SkillSheet) {
        this._skills = {
            // General Skills.
            astrogation: { skillValue: (options.astrogation), attribute: attributeNames.intellect },
            athletics: { skillValue: (options.athletics), attribute: attributeNames.brawn },
            charm: { skillValue: (options.charm), attribute: attributeNames.presence },
            coercion: { skillValue: options.coercion, attribute: attributeNames.willpower },
            computers: { skillValue: options.computers, attribute: attributeNames.intellect },
            cool: { skillValue: options.cool, attribute: attributeNames.presence },
            coordination: { skillValue: options.coordination, attribute: attributeNames.agility },
            deception: { skillValue: options.deception, attribute: attributeNames.cunning },
            discipline: { skillValue: options.discipline, attribute: attributeNames.willpower },
            leadership: { skillValue: options.leadership, attribute: attributeNames.presence },
            mechanics: { skillValue: options.mechanics, attribute: attributeNames.intellect },
            medicine: { skillValue: options.medicine, attribute: attributeNames.intellect },
            negotiation: {skillValue: options.negotiation, attribute: attributeNames.presence},
            perception: {skillValue: options.perception, attribute: attributeNames.cunning},
            piloting_planetary: {skillValue: options.piloting_planetary, attribute: attributeNames.agility},
            piloting_space: {skillValue: options.piloting_space, attribute: attributeNames.agility},
            resilience: {skillValue: options.resilience, attribute: attributeNames.brawn},
            skulduggery: {skillValue: options.skulduggery, attribute: attributeNames.cunning},
            stealth: {skillValue: options.stealth, attribute: attributeNames.agility},
            streetwise: {skillValue: options.streetwise, attribute: attributeNames.cunning},
            survival: {skillValue: options.survival, attribute: attributeNames.cunning},
            vigilance: {skillValue: options.vigilance, attribute: attributeNames.willpower},
            // Combat Skills.
            brawl:{skillValue: options.brawl, attribute: attributeNames.brawn},
            gunnery:{skillValue: options.gunnery, attribute: attributeNames.agility},
            melee: {skillValue: options.melee, attribute: attributeNames.brawn},
            ranged_light: {skillValue: options.ranged_light, attribute: attributeNames.agility},
            ranged_heavy: {skillValue: options.ranged_heavy, attribute: attributeNames.agility},
            // Knowledge Skills.
            core_worlds: {skillValue: options.core_worlds, attribute: attributeNames.intellect},
            education: {skillValue: options.education, attribute: attributeNames.intellect},
            lore: {skillValue: options.lore, attribute: attributeNames.intellect},
            outer_rim: {skillValue: options.outer_rim, attribute: attributeNames.intellect},
            underworld: {skillValue: options.underworld, attribute: attributeNames.intellect},
            xeneology: {skillValue: options.xeneology, attribute: attributeNames.intellect},
        };
    }
}

