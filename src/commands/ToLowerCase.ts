import { getValidatedEditorAndSelection } from "../util";
import { Command } from "./Command";

export class ToLowerCase extends Command {
  name = "easy-convert.toLowerCase";

  async exec() {
    const { editor, selection } = getValidatedEditorAndSelection();

    await editor.edit((editBuilder) => {
      editBuilder.replace(selection, editor.document.getText(selection).toLowerCase());
    });
  }
}
