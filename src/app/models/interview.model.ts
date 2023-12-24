
export class Interview {
  
    constructor(
      private _id: number | null,
      private _title: string,
      private _location: string,
      private _date: Date,
      private _jobApplication : any []

      ) { }
      
   

    public get date(): Date{
        return this._date;
    }
    public set date(value : Date){
        this._date;
    }
    public get location(): string {
      return this._location;
    }
    public set location(value: string) {
      this._location = value;
    }
    public get title(): string {
      return this._title;
    }
    public set title(value: string) {
      this._title = value;
    }
    public get id(): number | null {
      return this._id;
    }
    public set id(value: number | null) {
      this._id = value;
    }
    
    public get jobApplication(): any[] {
        return this._jobApplication;
      }
      public set tasks(value: any[]) {
        this._jobApplication = value;
      }
  
    public toJSON(): object {
      return {
          id: this._id,
          title: this._title,
          description: this._location,
          date: this._date,
          jobApplication: this._jobApplication

      };
    }
  
  }