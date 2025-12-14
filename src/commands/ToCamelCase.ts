import { getValidatedEditorAndSelection, toCamelCase } from "../util";
import { Command } from "./Command";

export class ToCamelCase extends Command {
  name = "easy-convert.toCamelCase";

  async exec() {
    const { editor, selection } = getValidatedEditorAndSelection();

    await editor.edit((editBuilder) => {
      editBuilder.replace(selection, toCamelCase(editor.document.getText(selection)));
    });
  }
}
