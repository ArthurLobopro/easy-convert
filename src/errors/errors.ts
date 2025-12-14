export class NoActiveTextEditorError extends Error {
  constructor() {
    super("No active text editor!");
  }
}


export class EmptySelectionError extends Error {
    constructor(){
        super("No text selected!")
    }
}