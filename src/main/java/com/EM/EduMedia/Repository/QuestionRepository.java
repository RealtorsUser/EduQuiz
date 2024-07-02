package com.EM.EduMedia.Repository;

import com.EM.EduMedia.Model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
