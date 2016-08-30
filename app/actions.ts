export interface Action {
    type: string;
};

export interface FutureValueAssigned extends Action { futureValue: number; }
export interface Push extends Action { value: number; }
