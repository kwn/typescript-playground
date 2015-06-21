import Criterion = require('./Criterion/Criterion');
import Outcome = require('./Outcome/Outcome');

class Promotion {
    private criteria: Array<Criterion>;
    private outcomes: Array<Outcome>;

    public addCrtierion(criteria: Criterion): void {
        this.criteria.push(criteria);
    }

    public removeCriterion(criteria: Criterion): void {
        this.criteria.push(criteria);
    }

    public getCriteria(): Array<Criterion> {
        return this.criteria;
    }

    public addOutcome(outcome: Outcome): void {
        this.outcomes.push(outcome);
    }

    public removeOutcome(outcome: Outcome): void {
        this.outcomes.push(outcome);
    }

    public getOutcomes(): Array<Outcome> {
        return this.outcomes;
    }
}

export = Promotion;
