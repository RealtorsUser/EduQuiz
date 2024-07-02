package com.EM.EduMedia.Service;

import com.EM.EduMedia.Model.Question;
import com.EM.EduMedia.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getRandomQuestions(int count) {
        List<Question> questions = questionRepository.findAll();
        Collections.shuffle(questions);
        if (questions.size() < count) {
            throw new IllegalArgumentException("Requested more questions than available");
        }
        return questions.subList(0, count);
    }
}
