package com.EM.EduMedia.Controller;

import com.EM.EduMedia.Model.Question;
import com.EM.EduMedia.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<Question>> getQuiz() {
        List<Question> questions = questionService.getRandomQuestions(25);
        return ResponseEntity.ok(questions);
    }

    @PostMapping("/results")
    public ResponseEntity<?> submitResults(@RequestBody List<Question> answers) {
        // Process results
        return ResponseEntity.ok("Results submitted");
    }
}
