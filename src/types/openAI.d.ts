export type ChatBodyRequest = {
    model: string;
    prompt?: string | Array<string>;
    suffix?: string | null;
    max_tokens?: number | null; // Defaults to 16
    temperature?: number; // Defaults to 1
    top_p?: number; // Defaults to 1
    n?: number; // Defaults to 1
    stream?: boolean; // Defaults to 1
    logprobs?: number | null; // Defaults to null
    echo?: boolean; //Defaults to false
    stop?: Array<string>; // Defaults to null
    presence_penalty?: number; // Defaults to 0
    frequency_penalty?: number; // Defaults to 0
    best_of?: number; // Defaults to null
    logit_bias?: any; // Defaults to null
    user?: string;
};

export type Model = {
    id: string;
    object: string;
    created: number;
    owned_by: string;
    permission: Array<{
        id: string;
        object: string;
        created: number;
        allow_create_engine: boolean;
        allow_sampling: boolean;
        allow_logprobs: boolean;
        allow_search_indices: boolean;
        allow_view: boolean;
        allow_fine_tuning: boolean;
        organization: string;
        group: boolean;
        is_blocking: boolean;
    }>;
    root: string;
    parent: any | null;
};

export type Models = { [key: number]: Model };
