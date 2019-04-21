

    export interface Metadata {
        operation: string;
        provider: string;
        schema: string;
    }

    export interface Subsens {
        definitions: string[];
        id: string;
    }

    export interface Sens {
        definitions: string[];
        id: string;
        subsenses: Subsens[];
    }

    export interface Entry {
        homographNumber: string;
        senses: Sens[];
    }

    export interface LexicalCategory {
        id: string;
        text: string;
    }

    export interface LexicalEntry {
        entries: Entry[];
        language: string;
        lexicalCategory: LexicalCategory;
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


