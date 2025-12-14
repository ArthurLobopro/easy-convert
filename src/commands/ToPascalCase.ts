import { getValidatedEditorAndSelection, toPascalCase } from "../util";
import { Command } from "./Command";

export class ToPascalCase extends Command {
  name = "easy-convert.toPascalCase";

  async exec() {
    const { editor, selection } = getValidatedEditorAndSelection();

    await editor.edit((editBuilder) => {
      editBuilder.replace(selection, toPascalCase(editor.document.getText(selection)));
    });
  }
}
