

    export interface Metadata {
        operation: string;
        provider: string;
        schema: string;
    }

    export interface Domain {
        id: string;
        text: string;
    }

    export interface Register {
        id: string;
        text: string;
    }

    export interface Note {
        text: string;
        type: string;
    }

    export interface Example {
        text: string;
        registers: Register[];
        notes: Note[];
    }

    export interface Register2 {
        id: string;
        text: string;
    }

    export interface Domain2 {
        id: string;
        text: string;
    }

    export interface Example2 {
        text: string;
    }

    export interface Register3 {
        id: string;
        text: string;
    }

    export interface Note2 {
        text: string;
        type: string;
    }

    export interface Subsens {
        definitions: string[];
        domains: Domain2[];
        examples: Example2[];
        id: string;
        shortDefinitions: string[];
        registers: Register3[];
        notes: Note2[];
    }

    export interface ThesaurusLink {
        entry_id: string;
        sense_id: string;
    }

    export interface Region {
        id: string;
        text: string;
    }

    export interface Sens {
        definitions: string[];
        domains: Domain[];
        examples: Example[];
        id: string;
        shortDefinitions: string[];
        registers: Register2[];
        subsenses: Subsens[];
        thesaurusLinks: ThesaurusLink[];
        regions: Region[];
    }

    export interface GrammaticalFeature {
        id: string;
        text: string;
        type: string;
    }

    export interface Entry {
        etymologies: string[];
        homographNumber: string;
        senses: Sens[];
        grammaticalFeatures: GrammaticalFeature[];
    }

    export interface LexicalCategory {
        id: string;
        text: string;
    }

    export interface Pronunciation {
        audioFile: string;
        dialects: string[];
        phoneticNotation: string;
        phoneticSpelling: string;
    }

    export interface LexicalEntry {
        entries: Entry[];
        language: string;
        lexicalCategory: LexicalCategory;
        pronunciations: Pronunciation[];
        text: string;
    }

    export interface Result {
        id: string;
        language: string;
        lexicalEntries: LexicalEntry[];
        type: string;
        word: string;
    }

    export interface RootObject {
        id: string;
        metadata: Metadata;
        results: Result[];
        word: string;
    }



