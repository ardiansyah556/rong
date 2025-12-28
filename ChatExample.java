
import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import java.io.IOException;
import java.util.Scanner;

public class ChatExample {

  public static void main(String[] args) throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-google-cloud-project-id";
    String location = "us-central1";
    String modelName = "gemini-1.5-pro-preview-0409";

    startChat(projectId, location, modelName);
  }

  // Starts a chat session with the generative model.
  public static void startChat(String projectId, String location, String modelName)
      throws IOException {
    // Initialize Vertex AI
    try (VertexAI vertexAI = new VertexAI(projectId, location)) {
      GenerativeModel model = new GenerativeModel(modelName, vertexAI);
      // Create a chat session
      ChatSession chat = new ChatSession(model);

      Scanner scanner = new Scanner(System.in);
      while (true) {
        System.out.print("You: ");
        String userInput = scanner.nextLine();

        if ("exit".equalsIgnoreCase(userInput)) {
          break;
        }

        // Send message to the model
        GenerateContentResponse response = chat.sendMessage(userInput);

        // Print the model's response
        System.out.println("Model: " + ResponseHandler.getText(response));
      }
      scanner.close();
    }
  }
}
