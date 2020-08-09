import axios from "axios";
import { Constants } from "../constants/constants";
export class chatbot {
  async requestToDialogflow(parameters) {
    parameters.sessionId = "id" + new Date().getTime();
    parameters.query_input =
      "can you reserve for me a table at a cafe for two adults";

    try {
      const response = await axios
        .post(
          Constants.DF_URL.replace("project-id", Constants.PROJECT_ID).replace(
            "session-id",
            parameters[Constants.SESSION_ID]
          ),
          {
            query_input: {
              text: {
                text: parameters[Constants.QUERY_INPUT],
                language_code: parameters[Constants.LANGUAGE_CODE],
              },
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(response);
    } catch (exception) {
      process.stderr.write(
        `ERROR received from ${Constants.DF_URL}: ${exception}\n`
      );
    }
  }
}
