package com.EM.EduMedia.Repository;

import com.EM.EduMedia.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByUsername(String username);
    boolean existsByUsername(String username);
}
