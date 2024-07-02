package com.EM.EduMedia.Service;

import com.EM.EduMedia.Model.Student;
import com.EM.EduMedia.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void saveUser(Student student) {
        studentRepository.save(student);
    }

    public Student findByUsername(String username) {
        return studentRepository.findByUsername(username);
    }

    public boolean existsByUsername(String username) {
        return studentRepository.existsByUsername(username);
    }
}
