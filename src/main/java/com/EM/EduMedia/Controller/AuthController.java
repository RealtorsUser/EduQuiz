package com.EM.EduMedia.Controller;

import com.EM.EduMedia.Model.Student;
import com.EM.EduMedia.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Student student) {
        if (studentService.existsByUsername(student.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        studentService.saveUser(student);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Student student) {
        Student foundUser = studentService.findByUsername(student.getUsername());
        if (foundUser != null && passwordEncoder.matches(student.getPassword(), foundUser.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // Optional: Add GET endpoints for testing purposes
    @GetMapping("/register")
    public ResponseEntity<?> registerForm() {
        return ResponseEntity.ok("Register form");
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginForm() {
        return ResponseEntity.ok("Login form");
    }
}
