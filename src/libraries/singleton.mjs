export class Singleton {
     instance = null;
     ClassRef = null;
  
    constructor(ClassRef) {
      if (this.instance) {
        throw new Error("Use Singleton.getInstance() to get the instance.");
      }
      this.ClassRef = ClassRef;
    }
  
    getInstance() {
      if (!this.instance) {
        if (!this.ClassRef) {
          throw new Error("Class reference is not set. Use new Singleton(ClassRef) to set it.");
        }
        this.instance = new this.ClassRef();
      }
      return this.instance;
    }
  }
  
