package com.geminiai.gemini_chat;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/chat")
@AllArgsConstructor
public class AIController {

    private final ChatService chatService;
    private static final Logger logger = Logger.getLogger(AIController.class.getName());

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
        String question = payload.get("Question");
        logger.info("Received question: " + question);
        String answer = chatService.getAnswer(question);
        logger.info("Generated answer: " + answer);
        return ResponseEntity.ok(answer);
    }
}
