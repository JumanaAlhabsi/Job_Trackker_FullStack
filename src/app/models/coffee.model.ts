export class Coffee {
    constructor(
      private _name: string,
      private _tagline: string,
      private _description: string,
      private _first_roasted: string,
      private _roaster_tips: string,
      private _strength_level: number,
      private _contributed_by: string
    ) {}
    public get contributed_by(): string {
      return this._contributed_by;
    }
    public set contributed_by(value: string) {
      this._contributed_by = value;
    }
    public get strength_level(): number {
      return this._strength_level;
    }
    public set strength_level(value: number) {
      this._strength_level = value;
    }
    public get roaster_tips(): string {
      return this._roaster_tips;
    }
    public set roaster_tips(value: string) {
      this._roaster_tips = value;
    }
    public get first_roasted(): string {
      return this._first_roasted;
    }
    public set first_roasted(value: string) {
      this._first_roasted = value;
    }
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    }
    public get tagline(): string {
      return this._tagline;
    }
    public set tagline(value: string) {
      this._tagline = value;
    }
    public get name(): string {
      return this._name;
    }
    public set name(value: string) {
      this._name = value;
    }
  }
  