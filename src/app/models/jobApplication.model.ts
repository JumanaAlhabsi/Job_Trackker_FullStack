export class JobApplication {
    
    constructor(
      private _id: number | null,
      private _position: string,
      private _companyName: string,
      private _status: string,
      
    ) { }
   
    
    public get position(): string {
      return this._position;
    }
    public set position(value: string) {
      this._position = value;
    }
    //===================================
    public get companyName(): string {
      return this._companyName;
    }
    public set companyName(value: string) {
      this._companyName = value;
    }
    //===================================
    public get status(): string {
        return this._status;
      }
      public set status(value: string) {
        this._status = value;
      }
    //===================================

    public get id(): number | null {
      return this._id;
    }
    public set id(value: number | null) {
      this._id = value;
    }
    //======================================================================

  
    public toJSON(): object {
        return {
            id: this._id,
            position: this._position,
            companyName: this._companyName,
            status: this._status,
            
        };

        
    }
  
  }